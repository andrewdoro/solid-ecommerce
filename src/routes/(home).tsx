import { For, Show, type VoidComponent } from "solid-js";
import { Title } from "solid-start";
import ProductCard from "~/components/ProductCard/ProductCard";
import { trpc } from "~/utils/trpc";

const Home: VoidComponent = () => {
  const products = trpc.all.useQuery();
  return (
    <>
      <Title>Create JD App</Title>
      <div class='grid grid-cols-2 h-80vh gap-2'>
        <Show when={products.data}>
          <For each={products.data}>
            {(product, index) => <ProductCard {...product} largeFeature={index() === 0} />}
          </For>
        </Show>
      </div>
    </>
  );
};

export default Home;
