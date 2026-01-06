import mongoose from "mongoose";
import { TRIP_TYPES, BOOKING_STATUS } from "../constants/enums.js";

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    pickup: { type: String, required: true },
    drop: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    phone: { type: String, required: true },
    cabType: { type: String, required: true },

    pickupDate: { type: String, required: true },
    pickupTime: { type: String, required: true },

    tripType: {
      type: String,
      enum: Object.values(TRIP_TYPES),
      required: true,
    },

    numberOfDays: {
      type: Number,
      required: function () {
        return this.tripType === TRIP_TYPES.ROUND_TRIP;
      },
    },

    distanceKm: Number,
    estimatedFare: Number,

    status: {
      type: String,
      enum: Object.values(BOOKING_STATUS),
      default: BOOKING_STATUS.NEW,
    },
  },
  { timestamps: true }
);

export default mongoose.model("BookingModel", bookingSchema);
