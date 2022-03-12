/* eslint-disable react/jsx-no-target-blank */
import { CAREER_TYPE } from '../../lib/types';

type TimelineSectionProps = {
  item: CAREER_TYPE;
  index: number;
  totalItems: number;
};

const TimelineSection: React.FC<TimelineSectionProps> = ({
  item,
  index,
  totalItems,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={(index + 1) * 100}
      key={item.company}
    >
      <div>
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
      {index !== totalItems - 1 ? (
        <div className="border border-y-1 my-10"></div>
      ) : null}
    </div>
  );
};

export default TimelineSection;
