import { productRouter } from "./product";
import { t } from "../utils";
import exampleRouter from "./example";

export const appRouter = t.mergeRouters(exampleRouter, productRouter);

export type IAppRouter = typeof appRouter;
