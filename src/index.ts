import express,{Request,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoutes from "./routes/MyUserRoutes"

const PORT = 7000;
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=>console.log("db connection successful"));

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user",MyUserRoutes);



app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
});