import express from "express";
import cors from "cors";

import worldCupRoutes from "./routes/worldCupRoutes.js";

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "healthy",
  });
});

app.use("/api/world-cups", worldCupRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
