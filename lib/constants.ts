import type {
  CAREER_TYPE,
  MENUS_TYPE,
  SITE_META_TYPE,
  THUMBNAILS_TYPE,
} from './types';

export const DARK = 'dark';
export const LIGHT = 'light';
export const REACT = 'React';
export const PLAYWRIGHT = 'Playwright';
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
export const PLAYWRIGHT_URL = 'https://playwright.dev/';
export const CLICK_SOUND_PATH = '/click-sound.wav';
export const AGODA_URL = 'https://www.agoda.com';

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
    "I'm a software engineer specializing in mobile and web app. Currently, I'm working as a Staff Software Engineer @Agoda",
  author: 'Fausta Leonardo',
  type: 'article',
  imageUrl: 'https://faustaleonardo.com/meta/meta.png',
  imageWidth: '2122',
  imageHeight: '776',
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
    position: 'Staff Software Engineer',
    company: 'Agoda',
    companyUrl: AGODA_URL,
    period: '',
    description: [
      'Led the design and delivery of a mission-critical Payment SDK, enabling seamless payment integration and cross-team collaboration; delivered on time with strong stakeholder feedback.',
      'Boosted build and development efficiency by modernizing tooling and optimizing workflows, achieving up to 9x faster compile and 17.5x faster build times.',
      'Provided technical leadership and mentorship, supporting multiple teams and onboarding new engineers with clear documentation and hands-on guidance.',
      'Refactored and modularized legacy payment code, introducing scalable architecture and enabling direct development and testing of payment features—reducing setup and iteration time from hours to minutes.',
      'Drove process improvements and a culture of ownership, streamlining critical procedures and optimizing alerting for faster, more reliable operations.',
    ],
    techStacks:
      'React, Redux, React Testing Library, Jest, Playwright, Rspack, Webpack, Javascript, Typescript.',
  },
  {
    position: 'Senior Software Engineer',
    company: 'Agoda',
    companyUrl: AGODA_URL,
    period: '',
    description: [
      'Carried a key role in the design and implementation of unified payment form, significantly reducing onboarding time for new payment methods from 10 SPs to 1 SP.',
      'Resolved multiple UI issues in payment form, resulting in a significant increase of 123 Incremental Bookings Per Day (IBPD).',
      'Led end-end-to-end design and implementation of a robust Payment SDK, delivering optimized solutions for seamless payment processing.',
      'Revamped QR payment flow, streamlining processes to improve usability, reliability, and transaction speed.',
      'Set up a Continuous Integration (CI) pipeline, ensuring robust test coverage and reliable end-to-end testing for payment form.',
    ],
    techStacks:
      'React, Redux, React Testing Library, Jest, Playwright, Rspack, Webpack, Javascript, Typescript.',
  },
  {
    position: 'Software Engineer II, Web Infrastructure',
    company: 'Traveloka',
    companyUrl: 'https://www.traveloka.com',
    period: 'Oct 2022 - Aug 2023',
    description: [
      'Migrated monorepo that contains more than 250 micro packages from yarn workspace to pnpm. Reduced time needed to install packages from 8.5 minutes to 1.5 minutes.',
      'Saved bundle size of hotel detail page by around 67KB and improved its LCP (Largest Contentful Paint) score by 13 seconds. Increased overall performance page score from 55 to 82.',
      'Migrated product components out of web-components mono package. Resulted in saving CI/CD build time by more than 10 minutes.',
      'Ensured monitoring, dashboard, alerting, and SLO of frontend services function as expected and encouraged product web engineers to follow incident response SOP.',
      'Assisted product web engineers with any problems they would encounter while using our framework.',
    ],
    techStacks:
      'React, Next.js, Javascript, Typescript, Go, Terraform, Datadog, Docker, AWS (ECS, X-Ray, CloudWatch, Amplify, Lambda)',
  },
  {
    position: 'Software Engineer II, Mobile & Web',
    company: 'Traveloka',
    companyUrl: 'https://www.traveloka.com',
    period: 'Mar 2022 - Oct 2022',
    description: [
      'Integrated Eats Driver app with crash reporting and error monitoring tools.',
      'Increased crash-free statistics in app to more than 98%.',
      'Developed Front-end tracking utilities to support product decisions.',
      'Wrote clean and clear code for various projects, such as in-app updates, waiting for food journey, tray and map improvements.',
      'Updated old code bases to modern development standards and improved functionality.',
    ],
    techStacks: 'React, React Native, Javascript, Typescript, Kotlin',
  },
  {
    position: 'SDE Frontend',
    company: 'Sayurbox',
    companyUrl: 'https://www.sayurbox.com',
    period: 'Jul 2021 - Mar 2022',
    description: [
      'Developed, monitored and provided stabilization support for referral (Sayurfluencer) and affiliate program (Sayurfluencer Plus). Key result: acquiring 1K new customers on first month release, with growth 20%.',
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
