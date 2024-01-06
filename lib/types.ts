export type ProjectType = {
  project: {
    imageName: string;
    name: string;
    description: string;
    githubLink: string | null;
    liveLink: string | null;
  };
  imageUrl: string;
};

export type RawProjectType = {
  imageName: string;
  name: string;
  description: string;
  githubLink: string | null;
  liveLink: string | null;
};

export type Skill = {
  name: string;
  imgName: string;
  imageClassName?: string;
};
