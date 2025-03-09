import React, { useRef } from 'react';
import About from './sections/About';
import Achievements from './sections/Achievements';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';
import Layout from './components/Layout';

const App: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <About handleClick={scrollToContact} />
      <Achievements />
      <TechStack />
      <Contact sectionRef={contactRef} />
    </Layout>
  );
};

export default App;
