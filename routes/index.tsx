import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>dotfile.run</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <p class="my-6">
          Hello, World!
        </p>
      </div>
    </>
  );
}
