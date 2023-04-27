import { Handlers } from "$fresh/server.ts";
import { parse } from "https://deno.land/x/querystring@v1.0.2/mod.js";

interface QueryParam {
  repo: string | undefined;
}

export const handler: Handlers = {
  GET(req, _ctx) {
    const queryString = req.url.split("?")[1];
    const queryParam = parse(queryString) as unknown as QueryParam;

    const targetRepo = queryParam.repo;
    const dirname = targetRepo?.split("/")[1];

    const payload = `
cd $HOME
git clone https://github.com/${queryParam.repo}

${dirname}/install.sh
    `;

    return new Response(payload);
  },
};
