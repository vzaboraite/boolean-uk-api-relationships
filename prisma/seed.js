const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
  const users = [
    {
      email: "mike@mail.com",
      firstName: "Mike",
      lastName: "H",
    },
    {
      email: "nathan@mail.com",
      firstName: "Nathan",
      lastName: "K",
    },
  ];

  const userPromises = users.map(async (user) => {
    return await prisma.user.create({ data: user });
  });

  try {
    await Promise.all(userPromises);
  } catch (error) {
    console.error("[ERROR] Seeding user model: ", {
      code: error.code,
      error: error.message,
    });

    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
