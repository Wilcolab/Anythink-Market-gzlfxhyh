const express = require('express');
const app = express();

app.use(express.json());

let tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

// GET /
app.get('/', (req, res) => {
  res.send('Hello World');
});

// POST /tasks
app.post('/tasks', (req, res) => {
  if (req.body && req.body.text) {
    tasks.push(req.body.text);
    res.json({ message: 'Task added successfully' });
  } else {
    res.status(400).json({ error: 'Missing task text' });
  }
});

// GET /tasks
app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

app.listen(8001, () => {
  console.log('Express server listening on port 8001');
});