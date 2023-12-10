import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

const port: number = parseInt(process.env.PORT!);

app.use(express.json());

app.use(cors);

app.listen(port, () => {
	console.log();
});
