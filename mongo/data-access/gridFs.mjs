import Mongoose from 'mongoose';
import fs from 'fs';

export async function upload(fileName) {
    const bucket = new Mongoose.mongo.GridFSBucket(Mongoose.connection.db);

    await fs.createReadStream(`./${fileName}`)
        .pipe(bucket.openUploadStream(fileName))
        .on('finish', () => {
            Mongoose.connection.close();
        })
}

export async function download(fileName) {
    const bucket = new Mongoose.mongo.GridFSBucket(Mongoose.connection.db);

    await bucket.openDownloadStreamByName(fileName)
    .pipe(fs.createWriteStream(`./${fileName}`))
    .on('finish', () => Mongoose.connection.close())
}