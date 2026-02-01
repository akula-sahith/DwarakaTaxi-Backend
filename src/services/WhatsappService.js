import admin from "firebase-admin";
// import path from "path";
// import { fileURLToPath } from "url";
import AdminModel from "../models/AdminModel.js";

// ES module __dirname fix
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// ✅ Correct path: SAME folder
if (!admin.apps.length) {
  const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT
  );

  serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  console.log("🔥 Firebase Admin initialized via ENV");
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
      body: `${booking.pickup} → ${booking.drop}`,
    },
    data: {
      bookingId: booking._id.toString(),
    },
    tokens,
  };

  try {
    const response = await admin
      .messaging()
      .sendEachForMulticast(message);

    console.log(
      `📲 Push summary | Success: ${response.successCount}, Failed: ${response.failureCount}`
    );

    // 🔍 Detailed failure logs
    response.responses.forEach((resp, idx) => {
      if (!resp.success) {
        console.error("❌ Push failed for token:", tokens[idx]);
        console.error("   ↳ Code:", resp.error.code);
        console.error("   ↳ Message:", resp.error.message);
      }
    });
  } catch (error) {
    console.error("🔥 FCM send failed completely");
    console.error("Code:", error.code);
    console.error("Message:", error.message);
  }
};
