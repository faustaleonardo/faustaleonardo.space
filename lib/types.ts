export type SITE_META_TYPE = {
  title: string;
  url: string;
  description: string;
  author: string;
  type: string;
  imageUrl: string;
  twitterUsername: string;
};

export type MENUS_TYPE = {
  name: string;
  path: string;
};

export type CAREER_TYPE = {
  position: string;
  company: string;
  companyUrl: string;
  period: string;
  description: string[];
  techStacks: string;
};

export type THUMBNAILS_TYPE = {
  name: string;
  link: string;
  imageUrl: string;
};
