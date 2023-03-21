import FormSection from './components/sections/FormSection';
import Hero from './components/heros/Hero';
import Community from './components/sections/Community';

function App(): JSX.Element {
  return (
    <div>
      <Hero />
      <FormSection />
      <Community />
    </div>
  );
}

export default App;
