const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

app.get('/api/games', async (req, res) => {
  try {
    // read games.json
    const data = await fs.promises.readFile('games.json', 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
