const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;
const DATA = "/app/data/todos.json";

app.use(express.json());

if (!fs.existsSync("/app/data")) fs.mkdirSync("/app/data");
if (!fs.existsSync(DATA)) fs.writeFileSync(DATA, "[]");

const readTodos = () => JSON.parse(fs.readFileSync(DATA));
const saveTodos = todos => fs.writeFileSync(DATA, JSON.stringify(todos));

app.get("/", (req, res) => {
  res.json({ message: "Todo App Running" });
});

app.get("/todos", (req, res) => {
  res.json(readTodos());
});

app.post("/todos", (req, res) => {
  const todos = readTodos();

  const todo = {
    id: Date.now(),
    task: req.body.task,
    completed: false
  };

  todos.push(todo);
  saveTodos(todos);

  res.status(201).json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const todos = readTodos().filter(
    todo => todo.id !== Number(req.params.id)
  );

  saveTodos(todos);
  res.json({ message: "Todo deleted" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

