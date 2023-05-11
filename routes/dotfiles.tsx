import { Handlers, PageProps } from "$fresh/server.ts";
import { GraphQLRequest } from "gql_request";
import { githubGqlEndpoint } from "../utils/constant.ts";
import { getEnv } from "../utils/env.ts";
import RepositoryCard from "../components/dotfiles/RepositoryCard.tsx";
import { Repository } from "../types/Repository.ts";
import { FunctionComponent } from "preact";
import Layout from "../components/layout/Layout.tsx";

export const handler: Handlers<Repository[] | null> = {
  async GET(_, ctx) {
    const query = await Deno.readTextFile(
      "./queries/listRepositoryInTopic.gql",
    );
    const request = new GraphQLRequest(
      githubGqlEndpoint,
      query,
      {
        headers: {
          Authorization: `Bearer ${getEnv("GITHUB_TOKEN")}`,
        },
        variables: {
          first: 15,
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

const home: FunctionComponent<PageProps<Repository[] | null>> = (
  { data },
) => {
  if (!data) {
    return <h1>Failed to fetch data</h1>;
  }

  return (
    <Layout active="dotfiles">
      <div class="p-4 mx-auto">
        {data?.map((elem) => (
          <RepositoryCard
            repo={elem}
          />
        ))}
      </div>
    </Layout>
  );
};
export default home;
