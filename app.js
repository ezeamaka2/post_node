import express from "express";
import cors from "cors";
import homeRoute from "./routes/home";

const app = express();
const PORT = process.env.PORT || 5000;

//middlewears
app.use(cors());
app.use(express.json());
app.use("/todos", homeRoute);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

//Export app, else you get TypeError: app.address is not a function when you run test with mocha
export default app;
