import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/users.js";
import eventRoutes from "./routes/events.js";
import bookingRoutes from "./routes/bookings.js";
import attendeeRoutes from "./routes/attendees.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/attendees", attendeeRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Event Management Backend is Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
