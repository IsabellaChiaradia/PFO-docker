const express = require('express');
const app = express();
const db = require('./db');
const PORT = 3000;

app.use(express.static('public'));

app.get('/personas', (req, res) => {
  db.query('SELECT * FROM personas', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al obtener personas');
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`🌐 Servidor corriendo en http://localhost:${PORT}`);
});
