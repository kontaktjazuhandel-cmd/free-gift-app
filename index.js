
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 10000;

app.use(cors());

app.get('/apps/free-gift/config', (req, res) => {
  const variantId = req.query.variant_id || process.env.GIFT_VARIANT_ID;
  const threshold = parseInt(process.env.THRESHOLD_CENTS || '5000');

  const response = {
    threshold,
    gift_variant_id: variantId,
    texts: {
      goal: process.env.GOAL_TEXT || '',
      reached: process.env.REACHED_TEXT || '',
      claim: process.env.CLAIM_TEXT || ''
    }
  };

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(response));
});

app.listen(port, () => {
  console.log(`Free Gift App running on port ${port}`);
});
