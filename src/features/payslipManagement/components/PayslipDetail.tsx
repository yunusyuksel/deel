import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonText } from '@ionic/react'
import React from 'react'
import { Payslip } from '../types'
import { download } from 'ionicons/icons';
import { downloadFile } from '../../../utils/file';

type Props = {
  payslip: Payslip
}

type PayslipDownloadButtonProps = {
  payslip: Payslip
}


const PayslipDownloadButton: React.FC<PayslipDownloadButtonProps> = ({ payslip: { file, id, fromDate, toDate } }) => {
  const fileName = `${id}-${fromDate}-${toDate}.jpg`
  return (
    <IonButton onClick={() => downloadFile(file, fileName)}>
      <IonIcon slot="start" icon={download}></IonIcon>
      Download payslip
    </IonButton>
  )

}

const PayslipDetail = ({ payslip }: Props) => {

  return (
    <IonCard>
      <IonCardContent>
      <div>
          <IonText>
            Id:
          </IonText>
          <IonText>
            {payslip.id}
          </IonText>
        </div>
        <div>
          <IonText>
            From:
          </IonText>
          <IonText>
            {new Date(payslip.fromDate).toLocaleDateString()}
          </IonText>
        </div>
        <div>
          <IonText>
            To:
          </IonText>
          <IonText>
            {new Date(payslip.toDate).toLocaleDateString()}
          </IonText>
        </div>
        <PayslipDownloadButton payslip={payslip} />
      </IonCardContent>
    </IonCard>
  )
}


export default PayslipDetail