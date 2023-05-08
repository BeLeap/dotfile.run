import { Head } from "$fresh/runtime.ts";
import { ComponentChildren, FunctionComponent } from "preact";
import Header from "./Header.tsx";

const layout: FunctionComponent<{ children: ComponentChildren }> = (
  { children },
) => {
  return (
    <>
      <Head>
        <title>dotfile.run</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      {children}
    </>
  );
};

export default layout;
