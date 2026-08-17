import { Router } from "express";
import { worldCups } from "../data/worldCups.js";

const router = Router();

router.get("/", (_req, res) => {
  res.json(worldCups);
});

export default router;
