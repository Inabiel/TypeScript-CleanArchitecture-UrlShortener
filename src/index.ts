require("dotenv").config();
import Express, { Request, Response } from "express";
import morgan from "morgan";
import fs from "fs";

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(
  morgan("combined", {
    stream: fs.createWriteStream("./access.log", { flags: "a" }),
  })
);
app.use(morgan("combined");

const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`App Berjalan di port ${port}`);
});
