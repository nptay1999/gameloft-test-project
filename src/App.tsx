import FormSection from './components/sections/FormSection';
import Hero from './components/heros/Hero';
import Community from './components/sections/Community';
import EventAndPromotion from './components/sections/EventAndPromotion';
import ExclusiveContent from './components/sections/ExclusiveContent';

function App(): JSX.Element {
  return (
    <div>
      <Hero />
      <FormSection />
      <Community />
      <EventAndPromotion />
      <ExclusiveContent />
    </div>
  );
}

export default App;
