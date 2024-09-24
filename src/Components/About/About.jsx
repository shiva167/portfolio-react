import React, { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import myImgSm from '../../assets/images/smImages/about-sm.png';
import myImgMd from '../../assets/images/mdImages/about-md.png';

const AttentionSeeker = lazy(() => import('react-awesome-reveal').then(module => ({ default: module.AttentionSeeker })));
const Bounce = lazy(() => import('react-awesome-reveal').then(module => ({ default: module.Bounce })));
const Button = lazy(() => import('../../assets/UI/About/Button'));


const About = () => {
    const [isMd, setIsMd] = useState(false);

    const handleResize = useCallback(debounce(() => {
        setIsMd(window.innerWidth >= 768);
    }, 200), []);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return (
        <div id='about-section' className='about-wrapper bg-cyan-400 flex flex-col-reverse md:flex-row text-slate-800 text-lg h-full'>
            <div className='md:w-2/3 py-12 px-4 md:p-12 pt-20 md:pt-12 flex flex-col relative justify-center'>
                {!isMd ?
                    <div className='w-screen absolute -top-1 left-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <defs>
                                <filter id="shadow">
                                    <feDropShadow dx="0" dy="2" stdDeviation="20" flood-color="rgb(0, 0, 0)" />
                                </filter>
                            </defs><path className='fill-amber-200' fillOpacity="1" d="M0,128L26.7,112C53.3,96,107,64,160,85.3C213.3,107,267,181,320,186.7C373.3,192,427,128,480,85.3C533.3,43,587,21,640,26.7C693.3,32,747,64,800,112C853.3,160,907,224,960,218.7C1013.3,213,1067,139,1120,138.7C1173.3,139,1227,213,1280,229.3C1333.3,245,1387,203,1413,181.3L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z" filter='url(#shadow)' /></svg>

                    </div>
                    :
                    null}
                <h2 className='text-5xl md:text-8xl font-semibold md:ml-6 font-beauty'>
                    Welcome
                    <Suspense fallback={<span className="animate-pulse">...</span>}>
                        <Bounce style={{ animationIterationCount: 'infinite' }} className='inline-block'>.</Bounce>
                        <Bounce style={{ animationIterationCount: 'infinite', animationDelay: '166ms' }} className='inline-block'>.</Bounce>
                        <Bounce style={{ animationIterationCount: 'infinite', animationDelay: '333ms' }} className='inline-block'>.</Bounce>
                    </Suspense>
                </h2>

                <div className='text-justify md:text-left md:leading-9 h-fit transition-transform duration-300 text-lg md:text-2xl mt-10 mb-10 md:mb-20 md:font-semibold md:border-l-4 md:border-amber-400 md:pl-6 rounded-xl'>
                    I'm <Suspense fallback={<span className="animate-pulse">Shiva Agrawal</span>}>
                        <AttentionSeeker className='border-b-4 drop-shadow-2xl border-b-slate-800 md:border-b-amber-400 rounded-lg inline-block font-bold text-2xl md:text-5xl md:text-amber-400 font-beauty'>Shiva Agrawal</AttentionSeeker>
                    </Suspense>, a Full Stack Developer based in Aligarh, India. With a deep expertise in React.js, JavaScript, and backend technologies like SQL and Docker, I've engineered robust solutions that bridge dynamic front-end experiences with powerful backend systems. From crafting sleek, responsive interfaces to architecting scalable enterprise systems, I ensure that every layer of the tech stack—from pixel-perfect UI components to seamless API integrations—works in harmony.  I'm passionate about delivering end-to-end solutions that are not just functional but intuitive and engaging.
                </div>
                <div className='justify-center md:justify-start md:ml-6 relative flex'>
                    <Suspense fallback={<button>Hire Me</button>}>
                        <Button />
                    </Suspense>
                </div>

            </div>
            <div className='md:w-1/3 flex justify-center bg-amber-200 md:bg-cyan-400 relative items-center overflow-hidden'>
                <div className='w-10/12 md:w-10/12 h-1/2 bg-cyan-400 md:bg-amber-200 animate-spin-clockwise-1 absolute' style={{ borderRadius: '62% 41% 30% 67% / 56% 50% 33% 37% ' }}></div>
                <div className='w-10/12 md:w-10/12 h-1/2 bg-cyan-400 md:bg-amber-200 animate-spin-counterclockwise-1 absolute' style={{ borderRadius: '26% 74% 70% 30% / 47% 45% 55% 53%' }}></div>
                <div className='w-10/12 md:w-10/12 h-1/2 bg-cyan-400 md:bg-amber-200 animate-spin-clockwise-2 absolute' style={{ borderRadius: '32% 68% 29% 71% / 27% 42% 58% 73%' }}></div>
                <div className='w-10/12 md:w-10/12 h-1/2 bg-cyan-400 md:bg-amber-200 animate-spin-counterclockwise-2 absolute' style={{ borderRadius: '59% 41% 49% 51% / 53% 77% 23% 47%' }}></div>
                <Suspense fallback={<div>Shiva Agrawal</div>}>
                    <picture>
                        <source
                            media="(max-width: 767px)"
                            srcSet={myImgSm}
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet={myImgMd}
                        />
                        <img
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                            className="object-contain h-full"
                            loading="lazy"
                            style={{
                                WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
                                maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)"
                            }}
                            alt="portfolio-image"
                        />
                    </picture>
                </Suspense>
            </div>
        </div>
    );
}

export default About;
