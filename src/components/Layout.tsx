import type { ParentProps } from "solid-js";
import Navbar from "./Navbar/Navbar";

export function Layout(props: ParentProps) {
  return (
    <main class='mx-auto max-w-7xl px-4'>
      <Navbar />
      {props.children}
    </main>
  );
}
