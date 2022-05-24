type GithubPr = {
  title: string;
  head: {
    ref: string;
  };
};

type GitlabMr = {
  title: string;
  source_branch: string;
};

type Github = {
  pr: GithubPr;
};

type Gitlab = {
  mr: GitlabMr;
};

export type Danger = {
  github: Github;
  gitlab: Gitlab;
};

export type GitProvider = 'github' | 'gitlab';
