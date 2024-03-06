import PayslipList from './PayslipList'
import payslipSlice from '../__mock__/payslipSlice'
import PayslipDetailModal from './PayslipDetailModal'
import { useMemo, useState } from 'react'
import { Payslip } from '../types'


type Props = {}

const PayslipListManager = (props: Props) => {

  const [selectedPayslip, setSelectedPayslip] = useState<Payslip>()

  /** would do those calculations in reselect in real project */
  const payslips = useMemo(() => Object.values(payslipSlice), [payslipSlice])


  return (
    <>
      <PayslipList payslips={payslips} onSelectItem={setSelectedPayslip} />
      <PayslipDetailModal payslip={selectedPayslip} />
    </>

  )
}
export default PayslipListManager

