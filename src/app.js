import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bookingRoutes from "./routes/BookingRoutes.js";
import adminRoutes from "./routes/AdminRoutes.js";
import { errorHandler } from "./middlewares/ErrorMiddleware.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

const router = express.Router();

app.use("/",router.get("/", (req, res) => {
  res.send("Server is running with firebase🚀");
}));

app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);

app.use(errorHandler);

export default app;
