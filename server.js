import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import auth from "./middleware/authMiddleware.js";
import coursesRouter from "./routes/coursesRoutes.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();
const app = express();


const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './client/build')));

//middleware
app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/courses", auth, coursesRouter);

//db connection
connectDb();

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
