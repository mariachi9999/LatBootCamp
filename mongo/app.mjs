import { connect, disconnect } from "./connection.mjs";
import { save, read, update, remove } from "./data-access/bookDataAccess.mjs";
import { upload, download } from "./data-access/gridFs.mjs";

await connect();

const book = {
    author: 'Robert',
    title: 'Javascript',
    year: 2021
}

const savedBook = await save(book);
console.log(await read(savedBook.id));

const bookToUpdate = {
    title: 'Javascript updated revision 2022'
}

console.log(await update(savedBook.id, bookToUpdate));
console.log(await remove(savedBook.id));

const fileName = 'helloWorld.txt'
//await upload(fileName);

await download(fileName);

// for desktop
//disconnect()