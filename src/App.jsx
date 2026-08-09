import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import GettingHere from './components/GettingHere';
import WhereToStay from './components/WhereToStay';
import ExploreMap from './components/ExploreMap';
import Vibes from './components/Vibes';
import FAQs from './components/FAQs';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  // Fade sections in as they enter the viewport.
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Events />
        <GettingHere />
        <WhereToStay />
        <ExploreMap />
        <Vibes />
        <Gallery />
        <FAQs />
      </main>
      <Footer />
    </>
  );
}

export default App;
