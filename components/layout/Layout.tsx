import { Head } from "$fresh/runtime.ts";
import { ComponentChildren, FunctionComponent } from "preact";
import Header, { HeaderProps } from "./Header.tsx";

const layout: FunctionComponent<{ children: ComponentChildren } & HeaderProps> =
  (
    { children, active },
  ) => {
    return (
      <>
        <Head>
          <title>dotfile.run</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Header active={active} className="border-b-black border-b-8 mb-4" />
        {children}
      </>
    );
  };

export default layout;
