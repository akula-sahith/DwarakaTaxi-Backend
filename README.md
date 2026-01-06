

  <h1>🚖 Dwaraka Taxi – Backend Service</h1>

  <p>
    A <strong>production-ready backend system</strong> for a taxi booking platform,
    built as part of an <strong>internship project</strong>.
    The system handles taxi bookings, supports one-way and round-trip journeys,
    stores booking data securely, and sends real-time admin notifications via WhatsApp.
  </p>

  <hr />

  <h2>📌 Project Overview</h2>

  <p>
    Dwaraka Taxi Backend is a <strong>RESTful backend application</strong> designed to
    support a real-world taxi service.
    Customers can submit bookings, and administrators can view and manage bookings
    through an admin dashboard (frontend planned).
  </p>

  <p>The backend focuses on:</p>

  <ul>
    <li>Clean architecture</li>
    <li>Input validation</li>
    <li>Error handling</li>
    <li>Scalability</li>
    <li>Real-time notifications</li>
  </ul>

  <hr />

  <h2>🎯 Key Features</h2>

  <h3>✅ Booking Management</h3>
  <ul>
    <li>Supports <strong>One Way</strong> and <strong>Round Trip</strong> bookings</li>
    <li>Conditional fields based on trip type</li>
    <li>
      Status lifecycle:
      <code>NEW → CONFIRMED → COMPLETED / CANCELLED</code>
    </li>
  </ul>

  <h3>✅ Real-Time Notifications</h3>
  <ul>
    <li>WhatsApp notification sent to admin on every booking</li>
    <li>Integrated using <strong>Twilio WhatsApp API</strong> (Sandbox – development phase)</li>
  </ul>

  <h3>✅ Robust Validation</h3>
  <ul>
    <li>Strong request validation using <code>express-validator</code></li>
    <li>Prevents invalid or incomplete booking data</li>
  </ul>

  <h3>✅ Production-Ready Architecture</h3>
  <ul>
    <li>MVC + Services pattern</li>
    <li>Centralized error handling</li>
    <li>Environment-based configuration</li>
    <li>Async-safe logic</li>
  </ul>

  <hr />

  <h2>🧱 Tech Stack</h2>

  <table border="1" cellpadding="8" cellspacing="0">
    <thead>
      <tr>
        <th>Layer</th>
        <th>Technology</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Runtime</td>
        <td>Node.js</td>
      </tr>
      <tr>
        <td>Framework</td>
        <td>Express.js</td>
      </tr>
      <tr>
        <td>Database</td>
        <td>MongoDB (Mongoose ODM)</td>
      </tr>
      <tr>
        <td>Validation</td>
        <td>express-validator</td>
      </tr>
      <tr>
        <td>Notifications</td>
        <td>Twilio WhatsApp API</td>
      </tr>
      <tr>
        <td>Logging</td>
        <td>Morgan</td>
      </tr>
      <tr>
        <td>Security</td>
        <td>Helmet</td>
      </tr>
      <tr>
        <td>Environment Config</td>
        <td>dotenv</td>
      </tr>
      <tr>
        <td>Architecture</td>
        <td>MVC + Services</td>
      </tr>
    </tbody>
  </table>

