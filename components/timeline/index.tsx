/* eslint-disable react/jsx-no-target-blank */
import Container from '../Container';
import TimelineList from './List';

const Timeline = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 pt-20 pb-40">
      <Container>
        <h1 data-aos="fade-up" className="text-3xl lg:text-5xl pb-20">
          Where I&apos;ve worked
        </h1>
        <TimelineList />
      </Container>
    </section>
  );
};

export default Timeline;
