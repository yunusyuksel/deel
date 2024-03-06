import React from 'react'
import { Payslip } from '../types'
import { IonButton, IonContent, IonGrid, IonIcon } from '@ionic/react'
import DataTable from 'react-data-table-component';
import { logOutOutline } from 'ionicons/icons';

type Props = {
    payslips: Payslip[]
    onSelectItem: (payslip: Payslip) => void
}


type DetailActionButtonProps = {
    payslip: Payslip
    onClick: (payslip: Payslip) => void
}

const DetailActionButton: React.FC<DetailActionButtonProps> = ({ onClick, payslip }) => {


    return (
        <IonButton onClick={() => onClick(payslip)} fill='outline' shape='round' >
            <IonIcon size='small' slot="start" icon={logOutOutline}></IonIcon>
            Detail
        </IonButton>
    )
}

const PayslipList: React.FC<Props> = ({ payslips, onSelectItem }) => {

    const columns = [
        {
            name: 'From Date',
            selector: (row: Payslip) => new Date(row.fromDate).toLocaleDateString(),
            width: "auto"


        },
        {
            name: 'To Date',
            selector: (row: Payslip) => new Date(row.toDate).toLocaleDateString(),
            width: "auto"

        },
        {
            name: 'Action',
            cell: (row: Payslip) => <DetailActionButton onClick={onSelectItem} payslip={row} />,
            width: "auto"

        },
    ];

    return (
        <IonContent >
            <IonGrid fixed>
                <DataTable columns={columns} data={payslips} />
            </IonGrid>
        </IonContent>
    )
}

export default PayslipList