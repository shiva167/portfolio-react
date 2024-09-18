import { Suspense, lazy } from 'react';
import { Parallax } from 'react-parallax';
import bgEarthImage from '../../assets/images/earth.webp';
import { Toaster } from 'react-hot-toast';

// Lazy load the child components
const ContactForm = lazy(() => import('./ContactForm/ContactForm'));
const GetInTouch = lazy(() => import('./ContactForm/GetInTouch'));
const CurvyDividerTop = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full absolute z-10 -top-3 fill-cyan-400">
        <defs>
            <filter id="shadowW">
                <feDropShadow dx="0" dy="-2" stdDeviation="10" flood-color="rgb(255, 255, 255)" />
            </filter>
        </defs>
        <path fillOpacity="1" d="M0,128L40,149.3C80,171,160,213,240,218.7C320,224,400,192,480,165.3C560,139,640,117,720,122.7C800,128,880,160,960,170.7C1040,181,1120,171,1200,160C1280,149,1360,139,1400,133.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" filter='url(#shadowW)' />
    </svg>
);
const CurvyDividerBottom = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full absolute -bottom-3 fill-amber-200 z-0">
        <defs>
            <filter id="shadowW">
                <feDropShadow dx="0" dy="-2" stdDeviation="10" flood-color="rgb(255, 255, 255)" />
            </filter>
        </defs>
        <path fill-opacity="1" d="M0,288L48,288C96,288,192,288,288,240C384,192,480,96,576,101.3C672,107,768,213,864,234.7C960,256,1056,192,1152,165.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" filter='url(#shadowW)'/>
    </svg>
);
const Contact = () => {
    return (
        <div className="relative">
            <CurvyDividerTop />
            <Parallax
                bgImage={bgEarthImage}
                bgImageAlt="layered earth"
                bgImageStyle={{ objectFit: 'cover' }}
                strength={-200}
                className='relative px-7 py-20 md:p-12'
            >
                <Toaster />
                <section
                    id='contact'
                    className='mx-auto flex bg-gray-100 rounded-lg shadow-lg justify-center flex-col md:flex-row md:my-52'
                >
                    <Suspense fallback={<div>Loading...</div>}>
                        <ContactForm />
                    </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                        <GetInTouch />
                    </Suspense>
                </section>
            </Parallax>
            <CurvyDividerBottom />
        </div>
    );
};

export default Contact;