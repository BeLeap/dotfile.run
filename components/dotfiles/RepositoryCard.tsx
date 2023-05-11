import { FunctionComponent } from "preact";
import { Repository } from "../../types/Repository.ts";
import Card from "../Card.tsx";

interface Props {
  repo: Repository;
}

const repositoryCard: FunctionComponent<Props> = ({ repo }) => {
  return (
    <a href={repo.url}>
      <Card>
        <img
          className="rounded-full w-10 h-10"
          src={repo.owner.avatarUrl}
        />
        <h1 className="text-2xl">{repo.nameWithOwner}</h1>
      </Card>
    </a>
  );
};
export default repositoryCard;
