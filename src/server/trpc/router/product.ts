import { procedure, router } from "../utils";
import { prisma } from "../../db/client";

export const productRouter = router({
  all: procedure.query(async () => {
    const products = prisma.product.findMany();
    return products;
  }),
});
