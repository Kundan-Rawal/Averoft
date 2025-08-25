import pool from "../db.js";

export const getBookings = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT b.id, u.name AS user_name, e.title AS event_title, b.booked_at
      FROM bookings b
      JOIN users u ON b.user_id = u.id
      JOIN events e ON b.event_id = e.id
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
