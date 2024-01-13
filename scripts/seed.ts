const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Primary Education" },
        { name: "Corporate Training" },
        { name: "Art & Craft" },
        { name: "Agriculture" },
        { name: "Travel & Tourism" },
        { name: "Entrepreneurship Development" },
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();