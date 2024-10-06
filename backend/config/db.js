import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sanjeevrajput8508:9103326146@cluster0.fxqdj.mongodb.net/food-del')
    .then(()=>console.log("DB Connected"));
}