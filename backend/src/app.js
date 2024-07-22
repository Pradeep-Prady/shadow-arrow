import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import cookieParser from "cookie-parser";
 

import globalResponseController from "./utils/response-handlers/global-response-controller.js";
 
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:8002",

  "http://127.0.0.1:5173",
];
app.use(cookieParser());
 
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/src/uploads", express.static(path.join(__dirname, "src/uploads")));
app.use("/public", express.static(path.join(__dirname, "public")));

if (process.env.NODE_ENV === "prod") {
  app.use(express.static(path.join(__dirname, "../dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist/index.html"));
  });
}

app.use(globalResponseController);

export default app;
