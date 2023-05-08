import { FunctionComponent } from "preact";
import HeaderLink from "./HeaderLink.tsx";

const header: FunctionComponent = () => {
  return (
    <div className="flex">
      <HeaderLink href="/">home</HeaderLink>
      <HeaderLink href="/dotfiles">dotfiles</HeaderLink>
    </div>
  );
};
export default header;
