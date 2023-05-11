import { FunctionComponent, JSX } from "preact";

export type HeaderProps = { active: HeaderMenuId };
type HeaderMenuId = "home" | "dotfiles";

const header: FunctionComponent<HeaderProps & JSX.HTMLAttributes> = (
  { active, className },
) => {
  const menus: { name: string; href: string; id: HeaderMenuId }[] = [
    { id: "home", name: "Home", href: "/" },
    { id: "dotfiles", name: "Dotfiles", href: "/dotfiles" },
  ];

  return (
    <div className={`${className} flex`}>
      {menus.map((it) => {
        const baseStyle = "m-4 p-2 text-xl font-black";

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
