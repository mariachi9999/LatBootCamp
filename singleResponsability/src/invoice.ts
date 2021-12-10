import Book from "./book";
import InvoiceI from './invoice.interface';

export default class Invoice implements InvoiceI {
  private total: number;
  constructor(
    private book: Book,
    private quantity: number,
    private discountRate: number,
    private taxRate: number
  ) {}

  calculateTotal() {
    console.log(`${this.book.getName()} Invoice quantity: ${this.quantity}`);
    console.log(`Discount Rate: ${this.discountRate}`);
    console.log(`Tax Rate: ${this.taxRate}`);
    console.log(`TOTAL: ${this.total}`);
  }

  printInvoice() {}

    saveToFile() { }
  
  // private invoice_save:InvoiceSave;
  // invoice_save.saveToFile()
  // InvoiceSave.saveToFile()
}