import { Icon } from "solid-heroicons";
import type { Component } from "solid-js";
import { For, Match, Switch } from "solid-js";
import { useSession } from "~/hooks/useSession";
import { ThemeSelector } from "./ThemeSelector";
import { bolt, chevronRight } from "solid-heroicons/solid";
import { A } from "solid-start";
import { Button } from "@kobalte/core";
import { signIn, signOut } from "@auth/solid-start/client";

const navItems = [
  {
    href: "products",
    name: "Products",
  },
  { href: "vision", name: "Vision" },
  {
    href: "about",
    name: "About",
  },
];

const NavbarItem: Component<{ href: string; name: string }> = (props) => {
  return (
    <A
      href={props.href}
      class='text-sm font-500 rounded-full px-4 py-1  dark:(text-gray-400 hover:(text-gray-2 bg-neutral-8) ) text-gray-7 hover:(text-black bg-neutral-1)'>
      {props.name}
    </A>
  );
};

const Navbar = () => {
  const session = useSession();

  return (
    <nav class='dark flex items-center pb-12 py-5 '>
      <div class='flex flex-1 gap-1 items-center'>
        <Icon path={bolt} class='h-6 w-6' />
        <h1 class='text-xl font-600 leading-none tracking-wide '>wine</h1>
      </div>
      <div class='flex-1 flex justify-center'>
        <For each={navItems}>{(item) => <NavbarItem href={item.href} name={item.name} />}</For>
      </div>
      <div class='flex justify-end flex-1 items-center gap-2'>
        <ThemeSelector />
        <Switch
          fallback={
            <Button.Root
              onPress={signIn}
              class='flex gap-1 items-center py-2 px-4 dark:bg-neutral-800 bg-neutral-200 font-semibold rounded-full'>
              Login
              <Icon path={chevronRight} class='h-4 w-4' />
            </Button.Root>
          }>
          <Match when={session.loading}>
            <div class='w-8 h-8 bg-gray-200 rounded-full' />
          </Match>
          <Match when={session()?.user} keyed>
            {(user) => user.image && <img class='w-8 h-8 rounded-full' src={user.image} />}
          </Match>
        </Switch>
      </div>
    </nav>
  );
};

export default Navbar;
