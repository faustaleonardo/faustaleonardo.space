import {
  MENUS_TYPE,
  SITE_META_TYPE,
  SOCIAL_MEDIA_TYPE,
  TECH_STACK_TYPE,
} from './types';

export const DARK = 'dark';
export const LIGHT = 'light';
export const SAYURBOX_URL = 'https://www.sayurbox.com';
export const TECH_STACK_BASE_URL = 'https://img.shields.io';

export const MENUS: Array<MENUS_TYPE> = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'works',
    path: '/works',
  },
];

export const SITE_METADATA: SITE_META_TYPE = {
  title: 'faustaleonardo.space',
  url: 'https://faustaleonardo.space',
  description:
    'Forward-thinking and progress-driven software engineer with background working productively in dynamic environments. Dedicated to achieving development objectives according to tight schedules while producing impeccable code.',
  author: 'Fausta Leonardo',
  type: 'article',
  imageUrl: 'https://faustaleonardo.space/meta/meta.png',
  twitterUsername: '@faustaleonardo',
};

export const SOCIAL_MEDIA_LINK: SOCIAL_MEDIA_TYPE = {
  linkedin: 'https://www.linkedin.com/in/faustaleonardo/',
  twitter: 'https://twitter.com/faustaleonardo',
  github: 'https://github.com/faustaleonardo',
  hashNode: 'https://hashnode.com/@faustaleonardo',
  email: 'mailto:faustaleonardo11@gmail.com',
};

export const TECH_STACK: TECH_STACK_TYPE[] = [
  {
    name: 'React',
    link: 'https://reactjs.org/',
    color: '#7cc5d9',
  },
  {
    name: 'React Native',
    link: 'https://reactnative.dev/',
    color: '#7cc5d9',
  },
  {
    name: 'GraphQL',
    link: 'https://graphql.org/',
    color: '#d64292',
  },
  {
    name: 'Expressjs',
    link: 'https://expressjs.com/',
    color: '#444',
  },
  {
    name: 'Nextjs',
    link: 'https://nextjs.org/',
    color: '#696969',
  },
  {
    name: 'Nodejs',
    link: 'https://nodejs.org/',
    color: '#84ba64',
  },
  {
    name: 'Jest',
    link: 'https://jestjs.io/',
    color: '#c21325',
  },
  {
    name: 'Javascript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    color: '#f5da55',
  },
  {
    name: 'Typescript',
    link: 'https://www.typescriptlang.org/',
    color: '#3178c6',
  },
  {
    name: 'HTML5',
    link: 'https://www.w3.org/html/',
    color: '#FF5733',
  },
  {
    name: 'CSS3',
    link: 'https://www.w3schools.com/css/',
    color: '#264de4',
  },
  {
    name: 'Webpack',
    link: 'https://webpack.js.org/',
    color: '#2b3a42',
  },
  {
    name: 'Docker',
    link: 'https://www.docker.com/',
    color: '#2496ed',
  },
  {
    name: 'Kubernetes',
    link: 'https://kubernetes.io/',
    color: '#3371e3',
  },
  {
    name: 'Babel',
    link: 'https://babeljs.io/',
    color: '#f5da55',
  },
];
