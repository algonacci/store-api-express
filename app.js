const express = require("express");

app = express();

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`🚀Server is running on port http://localhost:${PORT}`);
});

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} - ${delta}ms`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
