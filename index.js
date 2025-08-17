const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/apps/free-gift/config", (req, res) => {
  res.json({
    threshold: parseInt(process.env.THRESHOLD_CENTS),
    giftVariantId: process.env.GIFT_VARIANT_ID,
    claimText: process.env.CLAIM_TEXT,
    goalText: process.env.GOAL_TEXT,
    reachedText: process.env.REACHED_TEXT,
  });
});

app.listen(PORT, () => {
  console.log(`Free Gift app listening on port ${PORT}`);
});
