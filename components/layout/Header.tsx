import { FunctionComponent } from "preact";

export type HeaderProps = { active: HeaderMenuId };
type HeaderMenuId = "home" | "dotfiles";

const header: FunctionComponent<HeaderProps> = () => {
  const menus: { name: string; href: string; id: HeaderMenuId }[] = [
    { id: "home", name: "Home", href: "/" },
    { id: "dotfiles", name: "Dotfiles", href: "/dotfiles" },
  ];

  return (
    <div className="flex">
      {menus.map((it) => {
        return (
          <a
            className="m-4 p-2 text-xl hover:underline"
            href={it.href}
          >
            {it.name}
          </a>
        );
      })}
    </div>
  );
};
export default header;
