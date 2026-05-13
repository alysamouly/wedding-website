import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import GettingHere from './components/GettingHere';
import WhereToStay from './components/WhereToStay';
import ThingsToDo from './components/ThingsToDo';
import Vibes from './components/Vibes';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Events />
        <GettingHere />
        <WhereToStay />
        <ThingsToDo />
        <Vibes />
        <FAQs />
      </main>
      <Footer />
    </>
  );
}

export default App;
