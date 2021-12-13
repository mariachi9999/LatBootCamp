import Invoice from "./invoice";
import fs from "fs";

export default class InvoicePersistence {
  constructor() {}
  saveToFile(invoice: Invoice) {
    const obj = JSON.stringify(invoice);

    fs.appendFile("../saved_invoices/invoice.txt", obj, function (err: any) {
      if (err) throw err;
      console.log("Saved!");
    });
  }
}
