interface Props {
  reponame: string;
}

export default function RepositoryCard({ reponame }: Props) {
  return (
    <div className="border m-4 p-4 rounded">
      This is "{reponame}" Card
    </div>
  );
}
