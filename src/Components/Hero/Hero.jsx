import React, { useMemo, Suspense, lazy } from 'react';
import ExpandMore from '@mui/icons-material/ExpandMore';

const ReactNebula = lazy(() => import('@flodlc/nebula').then(module => ({ default: module.ReactNebula })));
const LazyFade = lazy(() => import('react-awesome-reveal').then(module => ({ default: module.Fade })));
const LazySlide = lazy(() => import('react-awesome-reveal').then(module => ({ default: module.Slide })));
const Hero = () => {
    const word1 = "Brilliant";
    const word2 = "Solutions";

    const getSpan = (word) => {
        return word.split('').map((letter, index) => (
            <span
                className='text-3xl md:text-8xl md:text-stroke-1 text-amber-300 md:text-fill-transparent'
                key={index}
            >
                {letter}
            </span>
        ));
    };

    const spans1 = useMemo(() => getSpan(word1), [word1]);
    const spans2 = useMemo(() => getSpan(word2), [word2]);

    return (
        <div className='h-screen flex justify-center flex-col items-center' id='hero-section'>
                <ReactNebula config={{
                    starsCount: 680,
                    starsColor: "#FFF",
                    starsRotationSpeed: 3,
                    cometFrequence: 100,
                    nebulasIntensity: 10,
                    bgColor: "rgb(8,8,8)",
                    sunScale: 3,
                    planetsScale: 3,
                    solarSystemOrbite: 65,
                    solarSystemSpeedOrbit: 100
                }} />
                <div className='flex flex-col justify-center items-center z-10'>
                    <div className='md:mb-10 font-bold text-xl md:text-6xl'>
                        <div className='flex justify-center'>
                            <LazySlide triggerOnce={true} className='text-2xl md:text-6xl mb-9'>
                                <p>From&nbsp;</p>
                            </LazySlide>

                            <LazyFade triggerOnce={true} delay={1000} cascade damping={0.2} className='mb-9 inline'>
                                <span className='text-2xl md:text-7xl font-codic md:text-stroke-1 text-amber-300 md:text-fill-transparent'>ZEROS</span>
                                <span className='text-2xl md:text-6xl'>&nbsp;and&nbsp;</span>
                                <span className='text-2xl md:text-7xl font-codic md:text-stroke-1 text-amber-300 md:text-fill-transparent'>ONES</span>
                            </LazyFade>
                        </div>
                        <div className='flex'>
                            <LazySlide triggerOnce={true} className='mb-9 text-2xl md:text-6xl'>
                                <p>To&nbsp;</p>
                            </LazySlide>
                            <LazyFade triggerOnce={true} delay={2000} cascade damping={0.1} className='mb-9 inline font-extrabold font-beauty'>
                                {spans1}
                            </LazyFade>&nbsp;
                            <LazyFade triggerOnce={true} delay={2900} cascade damping={0.1} className='mb-9 inline font-beauty'>
                                {spans2}
                            </LazyFade>
                        </div>
                    </div>

                    <LazyFade delay={4000} triggerOnce={true}>
                        <div className="hero-links flex leading-loose">
                            <a
                                href='#about-section'
                                className='text-xl md:text-2xl font-semibold mx-5 pb-1 bg-gradient-to-r from-amber-500 to-amber-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
                            >
                                About Me
                            </a>
                            <a
                                href='#projects-section'
                                className='text-xl md:text-2xl font-semibold mx-5 pb-1 bg-gradient-to-r from-amber-500 to-amber-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
                            >
                                Projects
                            </a>
                            <a
                                href='#contact'
                                className='text-xl md:text-2xl font-semibold mx-5 pb-1 bg-gradient-to-r from-amber-500 to-amber-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
                            >
                                Get In Touch
                            </a>
                        </div>
                    </LazyFade>
                </div>
                <LazyFade delay={4000} triggerOnce={true} className='flex justify-center'>
                    <a href='#about-section' className='absolute bottom-3 chevron z-10 animate-bounce'>
                        <ExpandMore fontSize='large' />
                    </a>
                </LazyFade>
            </div>
    );
}

export default Hero;
