require("dotenv").config();
require("express-async-errors");
const express = require("express");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const connectDB = require("./db/connect");

const productsRouter = require("./routes/products");

app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><br><a href="/api/v1/products">Products</a>');
});

app.use("/api/v1/products", productsRouter);

app.use(express.json());
app.use(notFound);
app.use(errorHandler);
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} - ${delta}ms`);
});

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`🚀 [SERVER] is running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
