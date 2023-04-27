import { Repository } from "../types/Repository.ts";

interface Props {
  repo: Repository;
}

export default function RepositoryCard({ repo }: Props) {
  return (
    <div className="border m-4 p-4 rounded flex justify-between">
      <h1 className="text-2xl">{repo.nameWithOwner}</h1>
      <img
        className="rounded-full w-10 h-10"
        src={repo.owner.avatarUrl}
      />
    </div>
  );
}
