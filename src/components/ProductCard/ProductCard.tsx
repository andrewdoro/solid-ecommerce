import type { Product } from "@prisma/client";
import clsx from "clsx";
import type { Component } from "solid-js";

const ProductCard: Component<Product & { largeFeature: boolean }> = (props) => {
  return (
    <div
      class={clsx(
        "relative rounded-lg overflow-hidden",
        props.largeFeature && "col-span-2 flex items-center justify-center"
      )}>
      <h3
        class={clsx(
          "p-4 absolute z-50 text-white text-4xl",
          props.largeFeature ? "text-7xl font-900 " : "bottom-0 font-700 "
        )}>
        {props.name}
      </h3>
      <div class='absolute top-0 left-0 bg-gradient-to-bl from-transparent via-transparent to-black from h-full w-full z-40' />
      <img class='top-0 z-0 left-0 absolute object-cover w-full h-full' src={props.image} />
    </div>
  );
};

export default ProductCard;
