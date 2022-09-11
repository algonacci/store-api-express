require("dotenv").config();

const connect = require("./db/connect");
const Product = require("./models/product");
const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connect(process.env.MONGODB_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("SUCCESS");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
