import { Repository } from "../types/Repository.ts";

interface Props {
  repo: Repository;
}

export default function RepositoryCard({ repo }: Props) {
  return (
    <div className="border m-4 p-4 rounded">
      <h1 className="text-2xl">{repo.nameWithOwner}</h1>
    </div>
  );
}
