export type Payslip = {
    /** The Unique Id to represent payslip */
    id:string;
    /** The start date covered by the payslip. */
    fromDate:number;
    /** The the end date covered by the payslip. */
    toDate:number
    /** The payslip file url */
    file:string
}