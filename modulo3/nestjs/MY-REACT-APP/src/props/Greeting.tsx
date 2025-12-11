import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function Greeting(props: { name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) {
  return <h2>Hola, {props.name}</h2>;
}