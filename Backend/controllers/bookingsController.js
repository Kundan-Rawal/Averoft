import pool from "../db.js";

export const getBookings = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT bookings.id, users.name AS user_name, events.title AS event_title, bookings.booked_at
FROM bookings
JOIN users ON bookings.user_id = users.id
JOIN events ON bookings.event_id = events.id;
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createBooking = async (req, res) => {
  const { user_id, event_id } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO bookings (user_id, event_id) VALUES ($1, $2) RETURNING *",
      [user_id, event_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
