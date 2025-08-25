import express from "express";
import { getEvents, createEvent ,getEventById} from "../controllers/eventsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// only logged in users can see events
router.get("/", getEvents);

// only admins can create events
router.post("/", createEvent);

router.get("/:id",getEventById)

export default router;