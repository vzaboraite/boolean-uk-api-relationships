const prisma = require("../../utils/database");

const getAll = async (req, res) => {
  try {
    const result = await prisma.user.findMany();

    res.json({ users: result });
  } catch (error) {
    console.error({ error: error.message });

    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAll };
