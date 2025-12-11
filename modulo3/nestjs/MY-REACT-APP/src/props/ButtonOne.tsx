import type { MouseEventHandler } from "react";

export default function ButtonOne(props: { onClick: MouseEventHandler<HTMLButtonElement> | undefined; }) {
  return <button onClick={props.onClick}>Haz clic aquí</button>;
}