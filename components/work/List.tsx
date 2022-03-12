/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import { THUMBNAILS } from '../../lib/constants';
import WorkCard from './Card';

const WorkList = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
      {THUMBNAILS.map(({ link, imageUrl, name }, index) => (
        <WorkCard
          key={name}
          link={link}
          imageUrl={imageUrl}
          name={name}
          index={index}
        />
      ))}
    </div>
  );
};

export default WorkList;
