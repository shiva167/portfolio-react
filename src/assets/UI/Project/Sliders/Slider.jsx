import React, { useState, useCallback, useMemo } from "react";
import ProjectCard from "../ProjectCard";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import debounce from 'lodash.debounce';

const Carousel = React.memo((props) => {
    const [activeSlide, setActiveSlide] = useState(props.activeSlide);

    const next = useCallback(debounce(() => {
        setActiveSlide(prev => Math.min(prev + 1, props.data.length - 1));
    }, 300), [props.data.length]);

    const prev = useCallback(debounce(() => {
        setActiveSlide(prev => Math.max(prev - 1, 0));
    }, 300), []);

    const getStyles = useCallback((index) => {
        if (activeSlide === index)
            return {
                opacity: 1,
                transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
                zIndex: 10
            };
        else if (activeSlide - 1 === index)
            return {
                opacity: 1,
                transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
                zIndex: 9
            };
        else if (activeSlide + 1 === index)
            return {
                opacity: 1,
                transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
                zIndex: 9
            };
        else if (activeSlide - 2 === index)
            return {
                opacity: 1,
                transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
                zIndex: 8
            };
        else if (activeSlide + 2 === index)
            return {
                opacity: 1,
                transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
                zIndex: 8
            };
        else if (index < activeSlide - 2)
            return {
                opacity: 0,
                transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
                zIndex: 7
            };
        else if (index > activeSlide + 2)
            return {
                opacity: 0,
                transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
                zIndex: 7
            };
    }, [activeSlide]);

    return (
        <>
            {/* carousel */}
            <div id="carousel-window" className={`w-[569px] h-80 mx-0 my-auto perspective-1000 transform-style-preserve-3d rounded-3xl relative`}>
                {props.data.map((item, i) => (
                    <React.Fragment key={item.id}>
                        <div id="single-carousel-element"
                            className={`flex h-full w-full items-center justify-center transition-all duration-500 absolute rounded-3xl`}
                            style={{
                                background: item.bgColor,
                                ...getStyles(i)
                            }}
                        >
                            <ProjectCard {...item} />
                        </div>
                        <div
                            className={`absolute w-full h-16 -bottom-14 rounded-3xl rounded-bl-none rounded-br-none transition-all duration-500`}
                            style={{
                                zIndex: -1,
                                background: `linear-gradient(to bottom, ${item.bgColor}20, transparent)`,
                                ...getStyles(i)
                            }}
                        />
                    </React.Fragment>
                ))}
            </div>
            {/* carousel */}

            <div className="btns flex justify-between gap-8 pt-16">
                <div
                    className="cursor-pointer"
                    onClick={prev}
                >
                    <ArrowBackIosRoundedIcon style={{ fontSize: '40px' }} />
                </div>
                <div
                    className="cursor-pointer"
                    onClick={next}
                >
                    <ArrowForwardIosRoundedIcon style={{ fontSize: '40px' }} />
                </div>
            </div>
        </>
    );
});

export default Carousel;
