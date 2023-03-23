import React from 'react';
import { Element, scroller } from 'react-scroll';
import shallow from 'zustand/shallow';

import FormSection from './components/sections/FormSection';
import Hero from './components/heros/Hero';
import Community from './components/sections/Community';
import EventAndPromotion from './components/sections/EventAndPromotion';
import ExclusiveContent from './components/sections/ExclusiveContent';
import { log } from './helper/utils';
import useScroll from './hooks/useScroll';

function App(): JSX.Element {
  const { list, active, up, down, reset } = useScroll(
    (state) => ({
      list: state.scroll.list,
      active: state.scroll.active,
      up: state.up,
      down: state.down,
      reset: state.reset,
    }),
    shallow,
  );

  const scrollEvent = React.useCallback(
    (e: any): void => {
      log(e);
      if (e.wheelDeltaY < -10) {
        down();
      }
      if (e.wheelDeltaY > 10) {
        up();
      }
    },
    [down, up],
  );

  React.useEffect(() => {
    document.addEventListener('wheel', scrollEvent);
    return () => document.removeEventListener('whell', scrollEvent);
  }, [scrollEvent]);

  React.useEffect(() => {
    scroller.scrollTo('hero', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 0,
    });
    reset();
  }, [reset]);

  React.useEffect(() => {
    scroller.scrollTo(list[active], {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: active === 0 ? 0 : 76,
    });
  }, [active, list]);

  return (
    <div>
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
    </div>
  );
}

export default App;
