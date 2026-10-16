const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.post('/calculate', (req, res) => {
  const { a, b, op } = req.body;
  const x = parseFloat(a), y = parseFloat(b);
  let result;
  switch (op) {
    case '+': result = x + y; break;
    case '-': result = x - y; break;
    case '*': result = x * y; break;
    case '/': result = y !== 0 ? x / y : null; break;
    default: return res.status(400).json({ error: 'invalid op' });
  }
  if (result === null) return res.status(400).json({ error: 'division by zero' });
  res.json({ result });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));