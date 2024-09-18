import { useEffect, useState } from 'react';
import SliderM from '../../assets/UI/Project/Sliders/SliderM'
import Slider from "../../assets/UI/Project/Sliders/Slider";
import data from "../../assets/data/projectsData";

const Projects2 = () => {
    const [isMd, setIsMd] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMd(a => window.innerWidth >= 768); // md: corresponds to 768px
        };
        handleResize(); // Initialize on mount
        window.addEventListener('resize', handleResize);
    }, []);
    return (
        <div id="projects-section" className="flex justify-center items-center flex-col w-full pb-24 pt-6 overflow-x-auto bg-cyan-400">
            <h2 className='text-3xl md:text-5xl font-bold text-center mb-12'>Projects</h2>

            {isMd ? <Slider data={data} activeSlide={2} /> : <SliderM data={data} activeSlide={2} />}


        </div>
    )
}

export default Projects2