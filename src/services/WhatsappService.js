import admin from "firebase-admin";
import path from "path";
import { fileURLToPath } from "url";
import AdminModel from "../models/AdminModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      path.join(__dirname, "../../firebase-admin-key.json")
    ),
  });
}

export const notifyAdmin = async (booking) => {
  const admins = await AdminModel.find();

  if (admins.length === 0) {
    console.log("⚠️ No admin devices registered");
    return;
  }

  const tokens = admins.map((a) => a.fcmToken);

  const message = {
    notification: {
      title: "🚨 New Booking Received",
      body: `${booking.pickupLocation} → ${booking.dropLocation}`,
    },
    data: {
      bookingId: booking._id.toString(),
    },
    tokens,
  };

  const response = await admin
    .messaging()
    .sendEachForMulticast(message);

  console.log(
    `📲 Push | Success: ${response.successCount}, Failed: ${response.failureCount}`
  );
};
