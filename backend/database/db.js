import mongoose from "mongoose";

export const ConnectDB = () => {
    mongoose.connect(process.env.MONGO_URL, { dbName: process.env.DATABASE_NAME })
        .then(() => {
            console.log('Database connected.')
        }).catch((err) => {
            console.log(err)
        })
}