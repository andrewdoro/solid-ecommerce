import { procedure, router } from "../utils";

export const productRouter = router({
  all: procedure.query(async () => {
    const products = prisma?.product.findMany();
    return products;
  }),
});
