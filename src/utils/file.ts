import axios from "axios";
import fileDownload from "js-file-download";
import { Capacitor, } from '@capacitor/core';
import { Directory,  Filesystem } from "@capacitor/filesystem";

export function downloadFile(url: string, filename: string) {

  if(Capacitor.getPlatform() === "web"){
    axios({
      url,
      method:"get",
      responseType:"blob"
  }).then((res) => {
    fileDownload(res.data, filename);
  })
  }else{
    base64FromPath(url).then((data) => {
      Filesystem.writeFile({
        path: filename,
        data: data,
        directory: Directory.Data,
        recursive:true
      }).then((savedFile) => {
        console.warn(savedFile)
      }).catch(console.error)
    }).catch(console.error)
  }

}



export async function base64FromPath(path: string): Promise<string> {
  const response = await fetch(path);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject('method did not return a string');
      }
    };
    reader.readAsDataURL(blob);
  });
}
   
 
   
