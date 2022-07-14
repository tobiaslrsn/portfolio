import mongoose from "mongoose";

let DB: string = process.env.API_URI;

mongoose
  .connect(DB, {})
  .then(() => {
    console.log("\x1b[36m%s\x1b[0m", "Server is working.");
  })
  .catch((err) => {
    console.log(err);
  });
