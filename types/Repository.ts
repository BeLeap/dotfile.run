export type Repository = {
  id: string;
  url: string;
  nameWithOwner: string;
  owner: {
    id: string;
    avatarUrl: string;
  };
};
