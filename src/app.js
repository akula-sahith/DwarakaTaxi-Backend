import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bookingRoutes from "./routes/Booking.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/bookings", bookingRoutes);

app.use(errorHandler);

export default app;
