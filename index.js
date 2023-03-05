import express from "express";
import route from "./router/route.js";

const app = express();
const PORT = 5000;

app.use("/api/v1/", route);
app.listen(PORT, () => console.log(`connected at port ${PORT}`));
