import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bookingRoutes from "./routes/BookingRoutes.js";
import { errorHandler } from "./middlewares/ErrorMiddleware.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

const router = express.Router();

app.use("/",router.get("/", (req, res) => {
  res.send("Server is running 🚀");
}));

app.use("/api/bookings", bookingRoutes);

app.use(errorHandler);

export default app;
