interface Props {
  reponame: string;
}

export default function RepositoryCard({ reponame }: Props) {
  return <div>This is "{reponame}" Card</div>;
}
