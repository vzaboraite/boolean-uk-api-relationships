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

const getOneById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    res.json({ user: result });
  } catch (error) {
    console.error({ error: error.message });

    res.json({ error: error.message });
  }
};

module.exports = { getAll, getOneById };
