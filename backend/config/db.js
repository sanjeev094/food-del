import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sanjeevsingh:Kailashdevi0094@cluster0.mdoui.mongodb.net/food-del')
    .then(() => console.log("DB Connected"));
}