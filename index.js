import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import requestRouter from "./routes/wasteRequest.route.js";

const app = express();
dotenv.config();

async function main() {
  await mongoose.connect(process.env.MONGO_URL);

  console.log("connected to db");
}
main().catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/waste-request", requestRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Internal server error";
  return res.status(errorStatus).send(errorMessage);
});

app.listen(5000, () => {
  console.log("server running..");
});
