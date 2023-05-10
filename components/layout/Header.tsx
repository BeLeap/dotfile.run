import { FunctionComponent } from "preact";

export type HeaderProps = { active: HeaderMenuId };
type HeaderMenuId = "home" | "dotfiles";

const header: FunctionComponent<HeaderProps> = ({ active }) => {
  const menus: { name: string; href: string; id: HeaderMenuId }[] = [
    { id: "home", name: "Home", href: "/" },
    { id: "dotfiles", name: "Dotfiles", href: "/dotfiles" },
  ];

  return (
    <div className="flex">
      {menus.map((it) => {
        const baseStyle = "m-4 p-2 text-xl";

        const style = it.id == active
          ? baseStyle
          : `${baseStyle} text-gray-400 hover:text-black`;

        return (
          <a
            className={style}
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
