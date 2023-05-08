import { ComponentChildren, FunctionComponent } from "preact";

const headerLink: FunctionComponent<
  { href: string; children: ComponentChildren }
> = ({ href, children }) => {
  return (
    <a
      className="m-4 p-2 text-xl hover:underline"
      href={href}
    >
      {children}
    </a>
  );
};
export default headerLink;
