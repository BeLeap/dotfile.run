import { ComponentChildren, FunctionComponent } from "preact";

const card: FunctionComponent<{ children: ComponentChildren }> = (
  { children },
) => {
  return (
    <div className="border m-4 p-4 rounded flex justify-between">
      {children}
    </div>
  );
};
export default card;
