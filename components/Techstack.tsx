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
      <a className={`block px-3 bg-[#7cc5d9]`} href={REACT_URL} target="_blank">
        <span className="text-white drop-shadow-lg">{REACT}</span>
      </a>
      <a
        className={`block px-3 bg-[#7cc5d9]`}
        href={REACT_NATIVE_URL}
        target="_blank"
      >
        <span className="text-white drop-shadow-lg">{REACT_NATIVE}</span>
      </a>
      <a
        className={`block px-3 bg-[#d64292]`}
        href={GRAPHQL_URL}
        target="_blank"
      >
        <span className="text-white drop-shadow-lg">{GRAPHQL}</span>
      </a>
      <a
        className={`block px-3 bg-[#444]`}
        href={EXPRESS_JS_URL}
        target="_blank"
      >
        <span className="text-white drop-shadow-lg">{EXPRESS_JS}</span>
      </a>
      <a
        className={`block px-3 bg-[#696969]`}
        href={NEXT_JS_URL}
        target="_blank"
      >
        <span className="text-white drop-shadow-lg">{NEXT_JS}</span>
      </a>
      <a
        className={`block px-3 bg-[#84ba64]`}
        href={NODE_JS_URL}
        target="_blank"
      >
        <span className="text-white drop-shadow-lg">{NODE_JS}</span>
      </a>
      <a className={`block px-3 bg-[#c21325]`} href={JEST_URL} target="_blank">
        <span className="text-white drop-shadow-lg">{JEST}</span>
      </a>
      <a
        className={`block px-3 bg-[#f5da55]`}
        href={JAVASCRIPT_URL}
        target="_blank"
      >
        <span className="text-white drop-shadow-lg">{JAVASCRIPT}</span>
      </a>
      <a
        className={`block px-3 bg-[#3178c6]`}
        href={TYPESCRIPT_URL}
        target="_blank"
      >
        <span className="text-white drop-shadow-lg">{TYPESCRIPT}</span>
      </a>
      <a className={`block px-3 bg-[#ff5733]`} href={HTML5_URL} target="_blank">
        <span className="text-white drop-shadow-lg">{HTML5}</span>
      </a>
      <a className={`block px-3 bg-[#264de4]`} href={CSS3_URL} target="_blank">
        <span className="text-white drop-shadow-lg">{CSS3}</span>
      </a>
      <a
        className={`block px-3 bg-[#2b3a42]`}
        href={WEBPACK_URL}
        target="_blank"
      >
        <span className="text-white drop-shadow-lg">{WEBPACK}</span>
      </a>
      <a
        className={`block px-3 bg-[#2496ed]`}
        href={DOCKER_URL}
        target="_blank"
      >
        <span className="text-white drop-shadow-lg">{DOCKER}</span>
      </a>
      <a
        className={`block px-3 bg-[#3371e3]`}
        href={KUBERNETES_URL}
        target="_blank"
      >
        <span className="text-white drop-shadow-lg">{KUBERNETES}</span>
      </a>
      <a className={`block px-3 bg-[#f5da55]`} href={BABEL_URL} target="_blank">
        <span className="text-white drop-shadow-lg">{BABEL}</span>
      </a>
    </div>
  );
};

export default TechStack;
