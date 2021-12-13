import Book from "./book";
import InvoiceI from "./invoice.interface";

export default class Invoice implements InvoiceI {
  private total: number;
  constructor(
    private book: Book,
    private quantity: number,
    private discountRate: number,
    private taxRate: number // value it´s passed in an absolute way.
  ) {
    this.total =
      this.book.getPrice() *
      this.quantity *
      (1 - this.discountRate / 100) *
      (1 + this.taxRate / 100);
  }

  calculateTotal() {
    console.log(`${this.book.getName()} Invoice quantity: ${this.quantity}`);
    console.log(`Net Price: ${this.book.getPrice() * this.quantity}  `);
    console.log(`Discount Rate: ${this.discountRate}`);
    console.log(`Tax Rate: ${this.taxRate}`);
    console.log(`TOTAL: ${this.total.toFixed(2)}`);
    return this.total;
  }
}
