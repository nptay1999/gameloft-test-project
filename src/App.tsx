import React from 'react';
import { Element, scroller } from 'react-scroll';
import shallow from 'zustand/shallow';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

import FormSection from './components/sections/FormSection';
import Hero from './components/heros/Hero';
import Community from './components/sections/Community';
import EventAndPromotion from './components/sections/EventAndPromotion';
import ExclusiveContent from './components/sections/ExclusiveContent';
// import { log } from './helper/utils';
import useScroll from './hooks/useScroll';
import Footer from './components/layouts/Footer';

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

  React.useEffect(() => {
    scroller.scrollTo('hero', {
      duration: 1500,
      delay: 0,
      smooth: true,
      offset: 0,
    });
    reset();
  }, [reset]);

  React.useEffect(() => {
    scroller.scrollTo(list[active], {
      duration: 200,
      delay: 0,
      smooth: true,
      offset: active === 0 ? 0 : -75,
    });
  }, [active, list]);

  return (
    <ReactScrollWheelHandler
      upHandler={(e) => up()}
      downHandler={(e) => down()}
    >
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
    </ReactScrollWheelHandler>
  );
}

export default App;
