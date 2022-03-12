import React from 'react';
import { TIMELINE } from '../../lib/constants';
import TimelineSection from './Section';

const TimelineList = () => {
  return (
    <>
      {TIMELINE.map((item, index) => (
        <TimelineSection
          key={item.company}
          item={item}
          index={index}
          totalItems={TIMELINE.length}
        />
      ))}
    </>
  );
};

export default TimelineList;
