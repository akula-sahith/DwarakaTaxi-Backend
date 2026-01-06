import { body } from "express-validator";
import { TRIP_TYPES } from "../constants/enums.js";

export const createBookingValidator = [
  body("name").notEmpty(),
  body("pickup").notEmpty(),
  body("drop").notEmpty(),
  body("email").isEmail(),
  body("phone").isLength({ min: 10 }),
  body("cabType").notEmpty(),
  body("pickupDate").notEmpty(),
  body("pickupTime").notEmpty(),
  body("tripType").isIn(Object.values(TRIP_TYPES)),
  body("numberOfDays")
    .if(body("tripType").equals(TRIP_TYPES.ROUND_TRIP))
    .isInt({ min: 1 }),
];
