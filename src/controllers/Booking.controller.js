import { validationResult } from "express-validator";
import BookingModel from "../models/Booking.Model.js";
import { notifyAdmin } from "../services/whatsapp.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../middlewares/async.middleware.js";

export const createBooking = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(
      new ApiResponse(false, "Invalid input", errors.array())
    );
  }

  const booking = await BookingModel.create(req.body);

  // fire and forget (do not block API)
  notifyAdmin(booking).catch(console.error);

  res
    .status(201)
    .json(new ApiResponse(true, "Booking submitted successfully", booking));
});

export const getAllBookings = asyncHandler(async (req, res) => {
  const bookings = await BookingModel.find().sort({ createdAt: -1 });
  res.json(new ApiResponse(true, "Bookings fetched", bookings));
});
