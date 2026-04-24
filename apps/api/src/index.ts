import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "sols-api" });
});

// Example: mock student dashboard payload.
app.get("/api/student/me", (_req, res) => {
  res.json({
    id: "stu_001",
    firstName: "Elias",
    grade: "Grade 10",
    section: "A",
    overallProgress: 75,
    weeklyDelta: 5,
  });
});

const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`[sols-api] listening on http://localhost:${PORT}`);
});
