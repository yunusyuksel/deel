import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from '@ionic/react'
import React, { PropsWithChildren } from 'react'

type Props = {
    isOpen: boolean
    onClose: () => void
    title: string
}

const Modal: React.FC<PropsWithChildren<Props>> = ({ isOpen, children, onClose , title }) => {
    return (

        <IonModal showBackdrop={true} canDismiss={true} isOpen={isOpen} onDidDismiss={onClose}>
           <IonHeader>
            <IonToolbar>
              <IonTitle>{title}</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={onClose}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
            <IonContent>
                {children}
            </IonContent>
          
        </IonModal>
    )
}

export default Modal