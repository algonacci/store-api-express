const getAllProductStatic = async (req, res) => {
  throw new Error("🔥🔥🔥🔥🔥testing express async error package🔥🔥🔥🔥🔥");
  res.status(200).json({ message: "products testing route" });
};
const getAllProducts = async (req, res) => {
  res.status(200).json({ message: "products route" });
};

module.exports = {
  getAllProductStatic,
  getAllProducts,
};
