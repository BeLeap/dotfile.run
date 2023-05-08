import { FunctionComponent } from "preact";

const header: FunctionComponent = () => {
  return (
    <div className="flex">
      <a href="/">home</a>
      <a href="/dotfiles">dotfiles</a>
    </div>
  );
};
export default header;
