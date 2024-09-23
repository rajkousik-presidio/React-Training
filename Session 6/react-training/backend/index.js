const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});
let todos = [{task: "Helo from backend", id: "ed1859ab-a9ea-4d5b-85c7-5d09484ff812", done: false}];

app.get('/', (_, res) => {
  return res.status(200).send(todos);
  // return res.status(500).send('Server error');
});

app.post('/', (req, res) => {
  const todo = req.body?.todo;

  todos.push(todo);
  return res.status(200).send(todos);
});

app.delete('/:todoId', (req, res) => {
  const todoId = req.params?.todoId;
  console.log({ todoId });

  todos = todos.filter((todo) => todo.id !== todoId);

  return res.status(200).send(todos);
});

app.put('/', (req, res) => {
  const todo = req.body?.todo;
  const todoId = todo?.id;

  const index = todos.find((todo) => todo.id === todoId);
  if (index !== -1) todos.splice(index, 1, todo);

  return res.status(200).send(todos);
});

app.listen(PORT, () => console.log('Server running'));
