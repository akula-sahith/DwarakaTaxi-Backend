import AdminModel from "../models/AdminModel.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../middlewares/AsyncMiddleware.js";

export const registerAdminToken = asyncHandler(async (req, res) => {
  const { fcmToken } = req.body;

  if (!fcmToken) {
    return res
      .status(400)
      .json(new ApiResponse(false, "FCM token required"));
  }

  // Prevent duplicates
  await AdminModel.findOneAndUpdate(
    { fcmToken },
    { fcmToken },
    { upsert: true, new: true }
  );

  res.json(new ApiResponse(true, "Admin token registered"));
});
