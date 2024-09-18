import React, { Suspense, useMemo } from 'react'
import Marquee from 'react-fast-marquee'
import allTechList from "../../data/techList.js";
import SkillCard from './SkillCard.jsx';

const DesktopSkills = () => {
    const midIndex = Math.ceil(allTechList.length / 2);
    const techList = allTechList.slice(0, midIndex);
    const techList2 = allTechList.slice(midIndex);
    return (
        <div className='w-full'>
            <SkillCard list={techList} />
            <SkillCard list={techList2} direction="left" />
        </div>
    )
}

export default DesktopSkills