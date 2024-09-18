import { useEffect, useState, Suspense, lazy, useCallback, useMemo } from 'react';
import axios from 'axios';
import ToTheTop from '@mui/icons-material/PanToolAlt';
import AOS from 'aos';
import styles from './App.module.css';

const url = import.meta.env.VITE_URL;

const Hero = lazy(() => import('./Components/Hero/Hero'));
const About = lazy(() => import('./Components/About/About'));
const Skills = lazy(() => import('./Components/Skills/Skills'));
const Projects = lazy(() => import('./Components/Projects/Projects'));
const Contact = lazy(() => import('./Components/Contact/Contact'));
const Footer = lazy(() => import('./Components/Footer/Footer'));

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2400 });
  }, []);

  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        const response = await axios.get(`${url}/cells/F2`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        if (response.data && response.data.F2) {
          const newVisitorCount = parseInt(response.data.F2) + 1;
          await axios.patch(
            `${url}/id/0`,
            {
              data: {
                visitor_count: newVisitorCount, //INCREMENT
              },
            },
            {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            }
          );
        } else {
          console.error('Error receiving visitor count');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    updateVisitorCount();
  }, []);

  useEffect(() => {
    let debounceTimer;
    const handleScroll = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        if (window.scrollY > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }, 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, []);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const randomFallbackMessage = useMemo(() => getRandomFallbackMessage(), []);

  return (
    <div className="font-titillium">
      <Suspense fallback={<Fallback message={randomFallbackMessage} />}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
      {showButton && (
        <button
          id="scrollToTopButton"
          className="fixed bottom-2 right-2 z-50 md:bottom-5 md:right-5 bg-cyan-400 text-fill-transparent p-3 rounded-full shadow-black shadow-md duration-300 opacity-80
          hover:-translate-y-1 hover:transition-all
          active:shadow-none active:translate-y-1"
          onClick={handleScrollToTop}
        >
          <ToTheTop />
        </button>
      )}
    </div>
  );
};

export default App;

const Fallback = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-amber-200">
      <div className={styles.loader}></div>
      <div className="text-center grid place-items-center">
        <h1 className="text-2xl font-semibold text-gray-800 px-10">{message}</h1>
      </div>
    </div>
  );
};

function getRandomFallbackMessage() {
  const messages = [
    "Hold tight! coding some magic for you...",
    "Grabbing the freshest bytes... just a sec!",
    "Patience! Pixels are aligning perfectly...",
    "Loading... because great things take time!",
    "Good things come to those who refresh!",
    "Hacking into the mainframe... or maybe just fetching data!",
    "Wait for it... the awesomeness is on its way!",
    "Give a moment... compiling some brilliance!",
    "Just a sec! Ensuring your data is as fresh as morning coffee.",
    "Data is incoming... at the speed of creativity!",
    "Please stand by... fine-tuning the awesomeness!",
    "Loading... because even code needs a coffee break!",
    "Stay tuned... your data is on its way, no buffering!",
    "On it... your data is in the microwave!",
    "Cooking up some fresh pixels... almost ready!",
    "Getting things ready... because you deserve the best!",
    "Almost there... Servers are just tying their shoelaces!",
    "Loading... with just the right amount of suspense!",
    "Hold on... making sure everything is pixel-perfect!",
  ];

  return messages[Math.floor(Math.random() * messages.length)];
}
