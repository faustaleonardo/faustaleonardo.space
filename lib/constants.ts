import type {
  CAREER_TYPE,
  MENUS_TYPE,
  SITE_META_TYPE,
  THUMBNAILS_TYPE,
} from './types';

export const JUSTIFY_END = 'justify-end';
export const JUSTIFY_START = 'justify-start';
export const DARK = 'dark';
export const LIGHT = 'light';
export const REACT = 'React';
export const REACT_URL = 'https://reactjs.org/';
export const REACT_NATIVE = 'React Native';
export const REACT_NATIVE_URL = 'https://reactnative.dev/';
export const GRAPHQL = 'GraphQL';
export const GRAPHQL_URL = 'https://graphql.org/';
export const EXPRESS_JS = 'Express.js';
export const EXPRESS_JS_URL = 'https://expressjs.com/';
export const NEXT_JS = 'Next.js';
export const NEXT_JS_URL = 'https://nextjs.org/';
export const NODE_JS = 'Node.js';
export const NODE_JS_URL = 'https://nodejs.org/';
export const JEST = 'Jest';
export const JEST_URL = 'https://jestjs.io/';
export const JAVASCRIPT = 'Javascript';
export const JAVASCRIPT_URL =
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
export const TYPESCRIPT = 'Typescript';
export const TYPESCRIPT_URL = 'https://www.typescriptlang.org/';
export const HTML5 = 'HTML5';
export const HTML5_URL = 'https://www.w3.org/html/';
export const CSS3 = 'CSS3';
export const CSS3_URL = 'https://www.w3schools.com/css/';
export const WEBPACK = 'Webpack';
export const WEBPACK_URL = 'https://webpack.js.org/';
export const DOCKER = 'Docker';
export const DOCKER_URL = 'https://www.docker.com/';
export const KUBERNETES = 'Kubernetes';
export const KUBERNETES_URL = 'https://kubernetes.io/';
export const BABEL = 'Babel';
export const BABEL_URL = 'https://babeljs.io/';
export const CLICK_SOUND_PATH = '/click-sound.wav';
export const SAYURBOX_URL = 'https://www.sayurbox.com';

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
  title: 'Fausta | Mobile & Web Engineer',
  url: 'https://faustaleonardo.com',
  description:
    'Forward-thinking and progress-driven software engineer with background working productively in dynamic environments. Dedicated to achieving development objectives according to tight schedules while producing impeccable code.',
  author: 'Fausta Leonardo',
  type: 'article',
  imageUrl: 'https://faustaleonardo.space/meta/meta.png',
  twitterUsername: '@faustaleonardo',
};

export const SOCIAL_MEDIA_LINK: Record<string, string> = {
  linkedin: 'https://www.linkedin.com/in/faustaleonardo/',
  twitter: 'https://twitter.com/faustaleonardo',
  github: 'https://github.com/faustaleonardo',
  hashNode: 'https://hashnode.com/@faustaleonardo',
  email: 'mailto:faustaleonardo11@gmail.com',
};

export const TIMELINE: CAREER_TYPE[] = [
  {
    position: 'SDE Frontend',
    company: 'Sayurbox',
    companyUrl: SAYURBOX_URL,
    period: 'Jul 2021 - Mar 2022',
    description: [
      'Developed, monitored and provided stabilization support for referral (sayurfluencer) and affiliate program (sayurfluencer plus). Key result: acquiring 1K new customers on first month release, with growth 20%.',
      'One of the main contributors in refactoring team. Refactored features, such as: category page, search page, referral, affiliate, loyalty points, PDP, event tracking and optimized list rendering.',
      'Reviewed code to validate structures, and verify browser, device and operating system compatibility.',
      'Worked in Agile-driven environment to effectively maintain project timelines and utilize available resources.',
      'Conducted live coding interviews for SDE level 1 to 3 and interns.',
      'Mentored interns to be successful in their professional development.',
    ],
    techStacks: 'React, React Native, Javascript, Typescript, GraphQL',
  },
  {
    position: 'Software Engineer',
    company: 'Payfazz',
    companyUrl: 'https://www.payfazz.com/',
    period: 'Feb 2021 - Jul 2021',
    description: [
      ' Completed redesigns of existing web pages to improve performance and enhance visuals.',
      'Conceived and built optimized landing pages in HTML and CSS.',
      'Employed coding practices based on commonly accepted standards to establish site layout and user interface.',
      'Improved and maintained codebase quality.',
      'Analysed system specifications and translated system requirements to task specifications.',
    ],
    techStacks: 'React, Javascript, Go, PostgreSQL',
  },
  {
    position: 'Work and Holiday Maker',
    company: 'Australia',
    companyUrl: 'https://www.australia.com/',
    period: 'Dec 2017 - Jan 2020',
    description: ['Studied, lived and worked in Australia'],
    techStacks: 'React, Javascript, Go, PostgreSQL',
  },
  {
    position: 'Web Developer',
    company: 'Freelance',
    companyUrl: 'https://freelancer.com/',
    period: 'Sep 2016 - Nov 2017',
    description: [
      'Converted mockups into HTML, JavaScript, AJAX, and JSON.',
      'Created responsive website layouts and user interface using HTML and CSS best practices.',
      'Designed site to be compatible with top browsers, including Firefox, Chrome, and Safari.',
      'Established web hosting for site and uploaded site files to the hosting account.',
    ],
    techStacks: 'Tech stacks: HTML, CSS, Javascript, Bootstrap',
  },
];

export const THUMBNAILS: THUMBNAILS_TYPE[] = [
  {
    name: 'sayurfluencer',
    link: '#',
    imageUrl: '/thumbnails/sayurfluencer.png',
  },
  {
    name: 'solvin',
    link: 'https://faustaleonardo.bitbucket.io/frontend-solvin/',
    imageUrl: '/thumbnails/solvin.png',
  },
  {
    name: 'solivis',
    link: '#',
    imageUrl: '/thumbnails/solivis.png',
  },
  {
    name: 'medanstore',
    link: 'https://github.com/faustaleonardo/medanstore-microservices/',
    imageUrl: '/thumbnails/medanstore.png',
  },
  {
    name: 'medanhost',
    link: 'https://github.com/faustaleonardo/medanhost/',
    imageUrl: '/thumbnails/medanhost.png',
  },
  {
    name: 'forumzone',
    link: 'https://documenter.getpostman.com/view/361363/SzKWtx8U?version=latest/',
    imageUrl: '/thumbnails/forumzone.png',
  },
];
