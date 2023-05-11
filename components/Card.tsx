import { ComponentChildren, FunctionComponent } from "preact";
import { JSX } from "preact";

const card: FunctionComponent<
  { children: ComponentChildren } & JSX.HTMLAttributes<HTMLDivElement>
> = (
  props,
) => {
  const { children, className, ...divAttributes } = props;

  return (
    <div
      {...divAttributes}
      className={`${
        className ? className : ""
      } border border-4 border-black p-4 flex flex-col flex-wrap justify-between font-black`}
    >
      {children}
    </div>
  );
};
export default card;
