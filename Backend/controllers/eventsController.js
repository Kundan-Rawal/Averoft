import pool from "../db.js";

export const getEvents = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM events ORDER BY event_date ASC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createEvent = async (req, res) => {
  const { title, description, location, event_date, capacity, created_by } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO events (title, description, location, event_date, capacity, created_by) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [title, description, location, event_date, capacity, created_by]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM events WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
