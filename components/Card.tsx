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
      } border border-4 border-black m-4 p-4 flex flex-col flex-wrap justify-between font-black`}
    >
      {children}
    </div>
  );
};
export default card;
