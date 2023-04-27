import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { GraphQLRequest } from "gql_request";
import { githubGqlEndpoint } from "../utils/constant.ts";
import { getEnv } from "../utils/env.ts";
import RepositoryCard from "../components/RepositoryCard.tsx";
import { Repository } from "../types/Repository.ts";

export const handler: Handlers<Repository[] | null> = {
  async GET(_, ctx) {
    const query = `
      query {
        topic(name: "dotfiles") {
          name
          repositories(first: 10) {
            edges {
              node {
                id
                url
                nameWithOwner
              }
            }
          }
        }
      }
    `;
    const request = new GraphQLRequest(
      githubGqlEndpoint,
      query,
      {
        headers: {
          Authorization: `Bearer ${getEnv("GITHUB_TOKEN")}`,
        },
      },
    );

    const response = await fetch(request);
    const body: {
      data: {
        topic: {
          name: string;
          repositories: { edges: { node: Repository }[] };
        };
      };
    } = await response.json();

    return ctx.render(
      body.data.topic.repositories.edges.map((elem) => elem.node),
    );
  },
};

export default function Home({ data }: PageProps<Repository[] | null>) {
  if (!data) {
    return <h1>Failed to fetch data</h1>;
  }

  return (
    <>
      <Head>
        <title>dotfile.run</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <p class="my-6">
          {data?.map((elem) => (
            <RepositoryCard
              repo={elem}
            />
          ))}
        </p>
      </div>
    </>
  );
}
