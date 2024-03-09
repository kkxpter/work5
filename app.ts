import {router as insert} from "./api/insert";
import {router as deletee} from "./api/delete";
import {router as movie} from "./api/movie";
import bodyParser from "body-parser";
import cors from "cors";


import express from "express";

export const app = express();
// app.use("/", (req, res) => {
//   res.send("Hello World!!!");
// });

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use("/insert",insert);
app.use("/deletee",deletee);
app.use("/seach",movie);

