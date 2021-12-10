import express from "express";
import Book from "./book";
import Invoice from "./invoice";
import InvoiceSave from "./invoice_save";

const book = new Book("Clen Code", "Bob", 1995, 49, "SD-456-ASD");
const invoice = new Invoice(book, 1, 50, 0.14);
invoice.calculateTotal();

const persistence = new InvoiceSave();
persistence.saveToFile();