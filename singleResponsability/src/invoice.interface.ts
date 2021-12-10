export default interface InvoiceI {
    calculateTotal(): void;
    printInvoice(): void;
    saveToFile(): void;
}