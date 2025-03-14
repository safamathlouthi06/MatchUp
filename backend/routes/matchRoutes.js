const express = require("express");
const Match = require("../models/matchs");
const router = express.Router();

// 🔹 Ajouter un match
router.post("/add", async (req, res) => {
  try {
    const newMatch = new Match(req.body);
    await newMatch.save();
    res.status(201).json(newMatch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔹 Récupérer tous les matchs
router.get("/findall", async (req, res) => {
  try {
    const matches = await Match.find().populate("userId jobId");
    res.json(matches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Récupérer un match par son ID
router.get("/find/:id", async (req, res) => {
  try {
    const match = await Match.findById(req.params.id).populate("userId jobId");
    if (!match) {
      return res.status(404).json({ message: "Match non trouvé" });
    }
    res.json(match);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Supprimer un match
router.delete("/delete/:id", async (req, res) => {
  try {
    await Match.findByIdAndDelete(req.params.id);
    res.json({ message: "Match supprimé" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
