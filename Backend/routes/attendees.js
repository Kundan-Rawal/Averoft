import express from "express";
import { getAttendees, addAttendee, updateAttendeeStatus } from "../controllers/attendeesController.js";

const router = express.Router();

router.get("/", getAttendees);
router.post("/", addAttendee);
router.put("/:id", updateAttendeeStatus);

export default router;