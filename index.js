import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";
import router from "./routes/feedback.js";


const app = express();
const PORT = 3000;

app.use(express.json())

//mounting routes
app.use("/api/v1",router);

dotenv.config(); 

dbConnect();


app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});










