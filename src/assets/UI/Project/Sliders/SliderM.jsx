import React, { useState } from "react";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Button from "../Button";


export default (props) => {
    const [activeSlide, setactiveSlide] = useState(props.activeSlide);

    const next = () => activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

    const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

    const getStyles = (index) => {
        if (activeSlide === index)
            return {
                opacity: 1,
                transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
                zIndex: 10
            };
        else if (activeSlide - 1 === index)
            return {
                opacity: 1,
                transform: "translateX(-70px) translateZ(-200px) rotateY(35deg)",
                zIndex: 9
            };
        else if (activeSlide + 1 === index)
            return {
                opacity: 1,
                transform: "translateX(70px) translateZ(-200px) rotateY(-35deg)",
                zIndex: 9
            };
        else if (activeSlide - 2 === index)
            return {
                opacity: 1,
                transform: "translateX(-100px) translateZ(-250px) rotateY(35deg)",
                zIndex: 8
            };
        else if (activeSlide + 2 === index)
            return {
                opacity: 1,
                transform: "translateX(100px) translateZ(-250px) rotateY(-35deg)",
                zIndex: 8
            };
        else if (index < activeSlide - 2)
            return {
                opacity: 0,
                transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
                zIndex: 7,
                display: 'none'
            };
        else if (index > activeSlide + 2)
            return {
                opacity: 0,
                transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
                zIndex: 7,
                display: 'none'
            };
    };

    return (
        <>
            {/* carousel */}
            <div className={`md:hidden flex items-center justify-center flex-col relative perspective-1000 transform-style-preserve-3d w-auto h-96`}>
                {props.data.map((item, i) => (
                    <React.Fragment key={item.id}>
                        <div
                            className="h-[430px] w-64 p-4 rounded-3xl transform transition-all duration-500 flex flex-col ease-out absolute"
                            style={{
                                background: item.bgColor,
                                ...getStyles(i)
                            }}
                        >
                            <SliderContent {...item} />
                        </div>
                    </React.Fragment>
                ))}
            </div>
            {/* carousel */}

            <div className="flex pt-16 gap-12">
                <div
                    className="btn"
                    onClick={prev}
                    color="#fff"
                    size="2x"
                ><ArrowBackIosRoundedIcon style={{ fontSize: '40px' }} /></div>
                <div
                    className="btn"
                    onClick={next}
                    color="#fff"
                    size="2x"
                ><ArrowForwardIosRoundedIcon style={{ fontSize: '40px' }} /></div>
            </div>
        </>
    );
};

const SliderContent = (props) => {
    return (
        <>
            <img className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={props.projImg} />
            <h2 className="text-xl mt-6 tracking-widest">{props.title}</h2>
            <p className="text-white font-sans">{props.shortDescription}</p>
            <div className="flex justify-around items-center mt-4">
                <Button to={'github'} goto={props.ghLink} />
                <Button to={'site'} goto={props.demoLink} />
            </div>
        </>
    )
}