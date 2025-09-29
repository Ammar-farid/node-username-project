import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { db } from './db.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve register.html
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'register.html'));
  //res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

// Handle form submission
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  db.query(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [username, password],
    (err, result) => {
      if (err) {
        console.error('❌ Insert error:', err);
        return res.status(500).send('Registration failed');
      }
      res.send('✅ User registered successfully!');
    }
  );
});

// Optional: Test route
app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: 'Database query failed' });
    res.json(results);
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});