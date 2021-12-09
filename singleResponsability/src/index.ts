import express from "express";
import Book from "./book";
import Invoice from "./invoice";

const book = new Book("Clen Code", "Bob", 1995, 49, "SD-456-ASD");
const invoice = new Invoice(book, 1, 0, 0.14);
invoice.calculateTotal();