import { FunctionComponent } from "preact";
import HeaderLink from "./HeaderLink.tsx";

const header: FunctionComponent = () => {
  return (
    <div className="flex">
      <HeaderLink href="/">Home</HeaderLink>
      <HeaderLink href="/dotfiles">Dotfiles</HeaderLink>
    </div>
  );
};
export default header;
