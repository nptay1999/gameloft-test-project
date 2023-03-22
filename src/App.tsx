import FormSection from './components/sections/FormSection';
import Hero from './components/heros/Hero';
import Community from './components/sections/Community';
import EventAndPromotion from './components/sections/EventAndPromotion';

function App(): JSX.Element {
  return (
    <div>
      <Hero />
      <FormSection />
      <Community />
      <EventAndPromotion />
    </div>
  );
}

export default App;
