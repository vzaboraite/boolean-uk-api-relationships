const prisma = require("../../utils/database");

const getAll = async (req, res) => {
  try {
    const result = await prisma.address.findMany();

    res.json({ addresses: result });
  } catch (error) {
    console.error({ error: error.message });

    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAll };
