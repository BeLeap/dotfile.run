import { FunctionComponent } from "preact";
import { JSX } from "preact";
import Card from "./Card.tsx";

const linkCard: FunctionComponent<
  JSX.HTMLAttributes<HTMLAnchorElement>
> = (
  props,
) => {
  const { children, ...anchorAttributes } = props;

  return (
    <a
      {...anchorAttributes}
    >
      <Card>
        {children}
      </Card>
    </a>
  );
};
export default linkCard;
