import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:123@alura.d7k4im4.mongodb.net/alura-node")

let db = mongoose.connection

export default db