import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

console.log("TWILIO_SID:", process.env.TWILIO_SID);
console.log("TWILIO_AUTH_TOKEN:", process.env.TWILIO_AUTH_TOKEN ? "LOADED" : "MISSING");

export const notifyAdmin = async (booking) => {
  await client.messages.create({
    from: process.env.TWILIO_WHATSAPP_FROM,
    to: process.env.ADMIN_WHATSAPP,
    body: `🚖 New Booking
Name: ${booking.name}
Phone: ${booking.phone}
Pickup: ${booking.pickup}
Drop: ${booking.drop}
Trip: ${booking.tripType}`,
  });
};
