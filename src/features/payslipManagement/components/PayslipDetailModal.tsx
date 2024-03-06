import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import { Payslip } from '../types'
import PayslipDetail from './PayslipDetail'

type Props = {
    payslip?: Payslip
}

const PayslipDetailModal: React.FC<Props> = ({ payslip }) => {

    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        if (payslip) {
            setIsOpen(true)
        }
    }, [payslip])

    return (
        <Modal title='Payslip Detail' isOpen={isOpen} onClose={onClose}>
            {payslip ? <PayslipDetail payslip={payslip} /> : null}
        </Modal>
    )
}

export default PayslipDetailModal