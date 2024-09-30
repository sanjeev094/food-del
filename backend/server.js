import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";



//app config
const app = express();
const port = 4000;

//Middleware
app.use(express.json());
app.use(cors());

//DB connection
connectDB();

//Api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get('/',(req,res) => {
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://sanjeevsingh:<db_password>@cluster0.mdoui.mongodb.net/?