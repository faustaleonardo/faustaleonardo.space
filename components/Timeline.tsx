/* eslint-disable react/jsx-no-target-blank */
import { TIMELINE } from '../lib/constants';
import Container from './Container';

const Timeline = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 pt-20 pb-40">
      <Container>
        <h1 className="text-3xl lg:text-5xl pb-20">Where I&apos;ve worked</h1>
        {TIMELINE.map((item, index) => (
          <>
            <div key={item.company}>
              <h3 className="text-xl">
                <span>{item.position} </span>
                <a
                  href={item.companyUrl}
                  target="_blank"
                  className="text-base custom-link"
                >
                  {` @${item.company}`}
                </a>
              </h3>
              <p className="text-base text-gray-500 dark:text-gray-400">
                {item.period}
              </p>
              <ul className="custom-list-type ml-3">
                {item.description.map((desc) => (
                  <li
                    key={desc}
                    className="text-base text-gray-500 dark:text-gray-400 pl-2"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
              <p className="text-base text-gray-500 dark:text-gray-400 pt-3">
                Tech stacks: {item.techStacks}
              </p>
            </div>
            {index !== TIMELINE.length - 1 ? (
              <div className="border border-y-1 my-10"></div>
            ) : null}
          </>
        ))}
      </Container>
    </section>
  );
};

export default Timeline;
