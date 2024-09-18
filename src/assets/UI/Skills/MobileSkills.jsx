import React from 'react';
import allTechList from "../../data/techList.js";
import SkillCard from './SkillCard.jsx';

const MobileSkills = () => {
  const len = Math.ceil(allTechList.length / 4);
  const techList = allTechList.slice(0, len);
  const techList2 = allTechList.slice(len,2*len);
  const techList3 = allTechList.slice(2*len,3*len);
  const techList4 = allTechList.slice(3*len);
  return (
    <>
      <div className='overflow-hidden w-full' style={{
        maskImage: "radial-gradient(closest-corner at center, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)"
        ,
// border:"10px #000000 solid"
      }}>
        <div className='transform -rotate-45 relative left-1/3'>

          <div className='w-[1290px] relative -left-1/2 h-[35rem]'>
            <SkillCard speed={35} list={techList} direction="left" />
            <SkillCard speed={35} list={techList2} />
            <SkillCard speed={35} list={techList3} direction="left" />
            <SkillCard speed={35} list={techList4} />
            {/* <div className='h-[200px] w-96 bg-blue-300'></div> */}
          </div>
        </div>
      </div>
      {/* <div className='md:hidden absolute top-0 w-screen h-full shadow-[inset_0px_0px_20px_5px_rgba(0,255,0,0.7)] z-20'></div> */}
    </>
  )
}

export default MobileSkills