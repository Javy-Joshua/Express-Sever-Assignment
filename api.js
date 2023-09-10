const express = require("express");
const itemsrouter = require("./items/api.router");

const port = 4444;

const app = express();

app.use(express.json());

app.use("/items", itemsrouter);

app.get("*", (req, res) => {
  res.status(404).json({
    data: null,
    error: "Route not found",
  });
});

app.listen(port, () => console.log(`lISTENING TO PORT: ${port}`));
