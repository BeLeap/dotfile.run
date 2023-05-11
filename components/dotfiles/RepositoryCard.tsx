import { FunctionComponent } from "preact";
import { Repository } from "../../types/Repository.ts";
import LinkCard from "../LinkCard.tsx";

interface Props {
  repo: Repository;
}

const repositoryCard: FunctionComponent<Props> = ({ repo }) => {
  return (
    <LinkCard href={repo.url}>
      <img
        className="rounded-full w-10 h-10"
        src={repo.owner.avatarUrl}
      />
      <h1 className="text-2xl">{repo.nameWithOwner}</h1>
    </LinkCard>
  );
};
export default repositoryCard;
