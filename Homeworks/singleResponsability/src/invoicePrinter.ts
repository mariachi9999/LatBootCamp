import Invoice from "./invoice";
export default class InvoicePrinter {
  constructor(protected Invoice: Invoice) {}
  printInvoice() {
    console.log(Invoice);
  }
}
