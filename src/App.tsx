import React from 'react';
import { Element, scroller } from 'react-scroll';

import FormSection from './components/sections/FormSection';
import Hero from './components/heros/Hero';
import Community from './components/sections/Community';
import EventAndPromotion from './components/sections/EventAndPromotion';
import ExclusiveContent from './components/sections/ExclusiveContent';
import Footer from './components/layouts/Footer';
import useScrollContext from './hooks/useScrollContext';

function App(): JSX.Element {
  const { list, active, up, down } = useScrollContext();

  React.useEffect(() => {
    scroller.scrollTo('hero', {
      duration: 1500,
      delay: 0,
      smooth: true,
      offset: 0,
    });
  }, []);

  React.useEffect(() => {
    scroller.scrollTo(list[active], {
      duration: 200,
      delay: 1,
      smooth: true,
      offset: active === 0 ? 0 : -75,
    });
  }, [active, list]);

  const onWheel = React.useCallback(
    (e: React.WheelEvent<HTMLDivElement>): void => {
      if (e.deltaY > 0) {
        down();
      } else if (e.deltaY < 0) {
        up();
      }
    },
    [down, up],
  );

  return (
    <div onWheel={(e) => onWheel(e)}>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="form">
        <FormSection />
      </Element>
      <Element name="community">
        <Community />
      </Element>
      <Element name="promotion">
        <EventAndPromotion />
      </Element>
      <Element name="exclustive">
        <ExclusiveContent />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
