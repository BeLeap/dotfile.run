import { FunctionComponent } from "preact";
import { Repository } from "../../types/Repository.ts";
import Card from "../Card.tsx";

interface Props {
  repo: Repository;
}

const repositoryCard: FunctionComponent<Props> = ({ repo }) => {
  return (
    <Card>
      <h1 className="text-2xl">{repo.nameWithOwner}</h1>
      <img
        className="rounded-full w-10 h-10"
        src={repo.owner.avatarUrl}
      />
    </Card>
  );
};
export default repositoryCard;
