require("dotenv").config();
require("./db");

import cors from "cors";
import express from "express";
import helmet from "helmet";
import { nextTick } from "process";
import graphicDesignRoute from "./routes/graphicDesign.routes";
import webDevelopmentRoute from "./routes/webDevelopment.routes";

const app: any = express();

app.use(helmet());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.disable("x-powered-by");

// ROUTES //
app.use("/graphic-design", graphicDesignRoute);
app.use("/web-development", webDevelopmentRoute);

let PORT: string | number = process.env.PORT_NR || 8000;

app.listen(PORT, () => {
  console.log(
    "\x1b[33m%s\x1b[0m",
    "/// RUNNING ON:",
    `http://localhost:${PORT}/`
  );
});
