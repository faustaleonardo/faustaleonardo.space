/* eslint-disable react/jsx-no-target-blank */

import {
  BABEL,
  BABEL_URL,
  CSS3,
  CSS3_URL,
  DOCKER,
  DOCKER_URL,
  EXPRESS_JS,
  EXPRESS_JS_URL,
  GRAPHQL,
  GRAPHQL_URL,
  HTML5,
  HTML5_URL,
  JAVASCRIPT,
  JAVASCRIPT_URL,
  JEST,
  JEST_URL,
  KUBERNETES,
  KUBERNETES_URL,
  NEXT_JS,
  NEXT_JS_URL,
  NODE_JS,
  NODE_JS_URL,
  PLAYWRIGHT,
  PLAYWRIGHT_URL,
  REACT,
  REACT_NATIVE,
  REACT_NATIVE_URL,
  REACT_URL,
  TYPESCRIPT,
  TYPESCRIPT_URL,
  WEBPACK,
  WEBPACK_URL,
} from '../lib/constants';

const TechStack = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <div data-aos="zoom-in" data-aos-delay={500}>
        <a
          className="block px-3 bg-[#d64292] transform transition duration-300 hover:scale-110"
          href={PLAYWRIGHT_URL}
          target="_blank"
        >
          <span className="text-white drop-shadow-lg">{PLAYWRIGHT}</span>
        </a>
      </div>
      <div data-aos="zoom-in" data-aos-delay={600}>
        <a
          className="block px-3 bg-[#7cc5d9] transform transition duration-300 hover:scale-110"
          href={REACT_URL}
          target="_blank"
        >
          <span className="text-white drop-shadow-lg">{REACT}</span>
        </a>
      </div>
      <div data-aos="zoom-in" data-aos-delay={700}>
        <a
          className="block px-3 bg-[#7cc5d9] transform transition duration-300 hover:scale-110"
          href={REACT_NATIVE_URL}
          target="_blank"
        >
          <span className="text-white drop-shadow-lg">{REACT_NATIVE}</span>
        </a>
      </div>
      <div data-aos="zoom-in" data-aos-delay={800}>
        <a
          className="block px-3 bg-[#d64292] transform transition duration-300 hover:scale-110"
          href={GRAPHQL_URL}
          target="_blank"
        >
          <span className="text-white drop-shadow-lg">{GRAPHQL}</span>
        </a>
      </div>
      <div data-aos="zoom-in" data-aos-delay={900}>
        <a
          className="block px-3 bg-[#444] transform transition duration-300 hover:scale-110"
          href={EXPRESS_JS_URL}
          target="_blank"
        >
          <span className="text-white drop-shadow-lg">{EXPRESS_JS}</span>
        </a>
      </div>
      <div data-aos="zoom-in" data-aos-delay={1000}>
        <a
          className="block px-3 bg-[#696969] transform transition duration-300 hover:scale-110"
          href={NEXT_JS_URL}
          target="_blank"
        >
          <span className="text-white drop-shadow-lg">{NEXT_JS}</span>
        </a>
      </div>

      <div data-aos="zoom-in" data-aos-delay={1100}>
        <a
          className="block px-3 bg-[#84ba64] transform transition duration-300 hover:scale-110"
          href={NODE_JS_URL}
          target="_blank"
        >
          <span className="text-white drop-shadow-lg">{NODE_JS}</span>
        </a>
      </div>

      <div data-aos="zoom-in" data-aos-delay={1200}>
        <a
          className="block px-3 bg-[#c21325] transform transition duration-300 hover:scale-110"
          href={JEST_URL}
          target="_blank"
        >
          <span className="text-white drop-shadow-lg">{JEST}</span>
        </a>
      </div>

      <div data-aos="zoom-in" data-aos-delay={1300}>
        <a
          className="block px-3 bg-[#f5da55] transform transition duration-300 hover:scale-110"
          href={JAVASCRIPT_URL}
          target="_blank"
        >
          <span className="text-white drop-shadow-lg">{JAVASCRIPT}</span>
        </a>
      </div>

      <div data-aos="zoom-in" data-aos-delay={1400}>
        <a
          className="block px-3 bg-[#3178c6] transform transition duration-300 hover:scale-110"
          href={TYPESCRIPT_URL}
          target="_blank"
        >
          <span className="text-white drop-shadow-lg">{TYPESCRIPT}</span>
        </a>
      </div>

      <div data-aos="zoom-in" data-aos-delay={1500}>
        <a
          className="block px-3 bg-[#ff5733] transform transition duration-300 hover:scale-110"
          href={HTML5_URL}
          target="_blank"
        >
          <span className="text-white drop-shadow-lg">{HTML5}</span>
        </a>
      </div>

      <div data-aos="zoom-in" data-aos-delay={1600}>
        <a
          className="block px-3 bg-[#264de4] transform transition duration-300 hover:scale-110"
          href={CSS3_URL}
          target="_blank"
        >
          <span className="text-white drop-shadow-lg">{CSS3}</span>
        </a>
      </div>

      <div data-aos="zoom-in" data-aos-delay={1700}>
        <a
          className="block px-3 bg-[#2b3a42] transform transition duration-300 hover:scale-110"
          href={WEBPACK_URL}
          target="_blank"
        >
          <span className="text-white drop-shadow-lg">{WEBPACK}</span>
        </a>
      </div>

      <div data-aos="zoom-in" data-aos-delay={1800}>
        <a
          className="block px-3 bg-[#2496ed] transform transition duration-300 hover:scale-110"
          href={DOCKER_URL}
          target="_blank"
        >
          <span className="text-white drop-shadow-lg">{DOCKER}</span>
        </a>
      </div>

      <div data-aos="zoom-in" data-aos-delay={1900}>
        <a
          className="block px-3 bg-[#3371e3] transform transition duration-300 hover:scale-110"
          href={KUBERNETES_URL}
          target="_blank"
        >
          <span className="text-white drop-shadow-lg">{KUBERNETES}</span>
        </a>
      </div>

      <div data-aos="zoom-in" data-aos-delay={2000}>
        <a
          className="block px-3 bg-[#f5da55] transform transition duration-300 hover:scale-110"
          href={BABEL_URL}
          target="_blank"
        >
          <span className="text-white drop-shadow-lg">{BABEL}</span>
        </a>
      </div>
    </div>
  );
};

export default TechStack;
