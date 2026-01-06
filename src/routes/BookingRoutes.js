import express from "express";
import { createBooking, getAllBookings } from "../controllers/BookingController.js";
import { createBookingValidator } from "../validators/Booking.validator.js";

const router = express.Router();

router.post("/", createBookingValidator, createBooking);
router.get("/", getAllBookings);

export default router;
