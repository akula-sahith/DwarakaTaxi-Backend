import express from "express";
import { createBooking, getAllBookings } from "../controllers/BookingController.js";
import { createBookingValidator } from "../validators/BookingValidator.js";

const router = express.Router();

router.post("/", createBookingValidator, createBooking);
router.get("/", getAllBookings);

export default router;
