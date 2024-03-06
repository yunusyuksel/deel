import React from 'react'
import PayslipsManager from '../features/payslipManagement/components/PayslipsManager'
import { IonPage } from '@ionic/react'

type Props = {}

const Home = (props: Props) => {
  return (
    <IonPage>
      <PayslipsManager />
    </IonPage>

  )
}

export default Home