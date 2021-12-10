
import Book from "./book";
import Invoice from "./invoice";
class InvoiceTotal {
  /*constructor(private book: Book,
        private discountRate: number,
        private quantity: number,
        private taxRate: number,
    private total: number
  ) { }*/
  constructor(private invoice: Invoice){

  }
  calculateTotal() {
    console.log(`${this.book.getName()} Invoice quantity: ${this.quantity}`);
    console.log(`Discount Rate: ${this.discountRate}`);
    console.log(`Tax Rate: ${this.taxRate}`);
    console.log(`TOTAL: ${this.total}`);
  }
}
