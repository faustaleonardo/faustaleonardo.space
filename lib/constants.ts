type SITE_METADATA_PROPS = {
  title: string;
  url: string;
  description: string;
  author: string;
  type: string;
  imageUrl: string;
  twitterUsername: string;
};

type MENUS_PROPS = {
  name: string;
  path: string;
};

type SOCIAL_MEDIA_LINK_PROPS = {
  linkedin: string;
  twitter: string;
  github: string;
  hashNode: string;
  email: string;
};

export const DARK = 'dark';
export const LIGHT = 'light';

export const MENUS: Array<MENUS_PROPS> = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'works',
    path: '/works',
  },
];

export const SITE_METADATA: SITE_METADATA_PROPS = {
  title: 'faustaleonardo.space',
  url: 'https://faustaleonardo.space',
  description:
    'Forward-thinking and progress-driven software engineer with background working productively in dynamic environments. Dedicated to achieving development objectives according to tight schedules while producing impeccable code.',
  author: 'Fausta Leonardo',
  type: 'article',
  imageUrl: 'https://faustaleonardo.space/meta/meta.png',
  twitterUsername: '@faustaleonardo',
};

export const SOCIAL_MEDIA_LINK: SOCIAL_MEDIA_LINK_PROPS = {
  linkedin: 'https://www.linkedin.com/in/faustaleonardo/',
  twitter: 'https://twitter.com/faustaleonardo',
  github: 'https://github.com/faustaleonardo',
  hashNode: 'https://hashnode.com/@faustaleonardo',
  email: 'mailto:faustaleonardo11@gmail.com',
};
