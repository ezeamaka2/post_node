import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All todos");
  res.end;
});

export default router;
