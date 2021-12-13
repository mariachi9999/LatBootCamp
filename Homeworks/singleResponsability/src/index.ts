// import express from "express";
import Book from "./book";
import Invoice from "./invoice";
import InvoicePrinter from "./invoicePrinter";
import InvoicePersistence from "./invoicePersistence";

const book = new Book("Clen Code", "Bob", 1995, 49, "SD-456-ASD");
const invoice = new Invoice(book, 1, 50, 14);
const printer = new InvoicePrinter(invoice);
// console.log(printer);

const persistence = new InvoicePersistence();
persistence.saveToFile(invoice);
