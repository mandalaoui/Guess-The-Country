require('dotenv').config();
const express = require('express');
const cors = require('cors');
const gameRoutes = require('./routes/gameRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Mount game routes under /api
app.use('/api', gameRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});