const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  status: { type: String, enum: ["liked", "matched", "rejected"], default: "liked" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Match", matchSchema);
