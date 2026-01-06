🚖 Dwaraka Taxi – Backend Service

A production-ready backend system for a taxi booking platform, built as part of an internship project.
The system handles taxi bookings, supports one-way and round-trip journeys, stores booking data securely, and sends real-time admin notifications via WhatsApp.

📌 Project Overview

Dwaraka Taxi Backend is a RESTful backend application designed to support a real-world taxi service.
Customers can submit bookings, and administrators can view and manage bookings through an admin dashboard (frontend planned).

The backend focuses on:

Clean architecture

Input validation

Error handling

Scalability

Real-time notifications

🎯 Key Features
✅ Booking Management

Supports One Way and Round Trip bookings

Conditional fields based on trip type

Status lifecycle: NEW → CONFIRMED → COMPLETED / CANCELLED

✅ Real-Time Notifications

WhatsApp notification sent to admin on every booking

Integrated using Twilio WhatsApp API (Sandbox – development phase)

✅ Robust Validation

Strong request validation using express-validator

Prevents invalid or incomplete booking data

✅ Production-Ready Architecture

MVC + Services pattern

Centralized error handling

Environment-based configuration

Async-safe logic

🧱 Tech Stack
Layer	Technology
Runtime	Node.js
Framework	Express.js
Database	MongoDB (Mongoose ODM)
Validation	express-validator
Notifications	Twilio WhatsApp API
Logging	Morgan
Security	Helmet
Environment Config	dotenv
Architecture	MVC + Services