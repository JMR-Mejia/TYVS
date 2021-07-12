const express = require("express");

const StatsService = require("../services/stats");

const statsService = new StatsService();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const stats = await statsService.getStats();

    res.status(200).json({
      data: stats,
      message: "Stats listed",
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/:statId", async (req, res) => {
  const { statId } = req.params;

  try {
    const stat = await statsService.getStat(statId);

    res.status(200).json({
      data: stat,
      message: "stat retrieve",
    });
  } catch (error) {
    console.error(error);
  }
});

router.post("/", async (req, res) => {
  const { body: stat } = req;

  try {
    const createStatId = await statsService.createStat(stat);

    res.status(201).json({
      data: createStatId,
      message: "stat created",
    });
  } catch (error) {
    console.error(error);
  }
});

router.delete("/:statId", async (req, res) => {
  const { statId } = req.params;

  try {
    const deleteStatId = await statsService.removeStat(statId);

    res.status(200).json({
      data: deleteStatId,
      message: "stat deleted",
    });
  } catch (error) {}
});

module.exports = router;
