const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    rating: { type: Number, min: 1, max: 5, index: true },
    comment: String,
    source: { type: String, index: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

feedbackSchema.index({ createdAt: 1 });

module.exports = mongoose.model("Feedback", feedbackSchema);
