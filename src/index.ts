import * as dotenv from "dotenv";
import Cors from "cors";
import Express, { Request, Response } from "express";
import Fs from "fs";
import Helmet from "helmet";
import Morgan from "morgan";

dotenv.config();

const app = Express();
app.use(Helmet());
app.use(Cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(
  Morgan("combined", {
    stream: Fs.createWriteStream("./access.log", { flags: "a" }),
  })
);
app.use(Morgan("combined"));

const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`App Berjalan di port ${port}`);
});
