import dotenv from "dotenv";

dotenv.config();

if (!process.env.TWILIO_SID) {
  console.error("❌ TWILIO_SID is missing");
}

if (!process.env.TWILIO_AUTH_TOKEN) {
  console.error("❌ TWILIO_AUTH_TOKEN is missing");
}

export default process.env;
