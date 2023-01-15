import type { Product } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const products: Omit<Product, "id">[] = [
  {
    name: "Something",
    price: 50,
    image: "/images/desert.jpg",
  },
  {
    name: "Fxbits",
    price: 23,
    image: "/images/woman.jpg",
  },
  {
    name: "Romania",
    price: 502,
    image: "/images/duck.jpg",
  },
];

async function main() {
  await Promise.all(
    products.map((product) =>
      prisma.product.create({
        data: product,
      })
    )
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
