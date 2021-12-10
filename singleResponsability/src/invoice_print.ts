import Invoice from "./invoice";
export default class InvoicePrint {
    constructor(protected Invoice: Invoice ){

    }
    printInvoice() {
      console.log("Printing Invoice")
  }
}