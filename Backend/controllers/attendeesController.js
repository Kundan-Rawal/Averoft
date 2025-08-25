import pool from "../db.js";

export const getAttendees = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT a.id, u.name AS user_name, e.title AS event_title, a.status, a.registered_at
      FROM attendees a
      JOIN users u ON a.user_id = u.id
      JOIN events e ON a.event_id = e.id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addAttendee = async (req, res) => {
  const { user_id, event_id, status } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO attendees (user_id, event_id, status) VALUES ($1, $2, $3) RETURNING *",
      [user_id, event_id, status || "registered"]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateAttendeeStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const result = await pool.query(
      "UPDATE attendees SET status = $1 WHERE id = $2 RETURNING *",
      [status, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
