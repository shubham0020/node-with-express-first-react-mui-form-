import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/users.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => res.send("From Express"));
app.all("*", (req, res) => res.send("Route dose not exist"));


app.listen(port, () => console.log('server is running on port http://localhost:',port)
);

    