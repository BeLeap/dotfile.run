import { ComponentChildren, FunctionComponent } from "preact";

const headerLink: FunctionComponent<
  { href: string; children: ComponentChildren }
> = ({ href, children }) => {
  return (
    <a
      className=""
      href={href}
    >
      {children}
    </a>
  );
};
export default headerLink;
