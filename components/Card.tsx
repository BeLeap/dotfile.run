import { ComponentChildren, FunctionComponent } from "preact";
import { JSX } from "preact";

const card: FunctionComponent<
  { children: ComponentChildren } & JSX.HTMLAttributes
> = (
  { className, children },
) => {
  return (
    <div
      className={`${
        className ? className : ""
      } border m-4 p-4 rounded flex justify-between`}
    >
      {children}
    </div>
  );
};
export default card;
