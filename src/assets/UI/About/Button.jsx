import React from 'react'

const Button = () => {
  return (
    <a href='https://drive.google.com/drive/folders/16cqxgYdWWXXogeputCJBm4x0NnsUURnY?usp=sharing' target='_blank' className={` border-amber-400 border-[3px] relative group px-4 py-2 rounded-md text-2xl tracking-wider shadow-sm shadow-slate-800 hover:shadow-none transition-all duration-300 hover:text-amber-400
    `}>
      Hire me
      <div className="absolute top-[20%] right-[20%] w-[25px] transition-all duration-500 z-[-5] group-hover:top-[-80%] group-hover:right-[10%] group-hover:z-[2] ease-out">
        <Star />
      </div>
      <div className="absolute top-[45%] left-0 w-[15px] transition-all duration-500 z-[-5] group-hover:top-[-10%] group-hover:left-[-25%] group-hover:z-[2] ease-out">
        <Star />
      </div>
      <div className="absolute top-[40%] left-[40%] w-[5px] transition-all duration-500 z-[-5] group-hover:top-[55%] group-hover:left-[25%] group-hover:z-[2] ease-out">
        <Star />
      </div>
      <div className="absolute top-[20%] left-[40%] w-[8px] transition-all duration-500 z-[-5] group-hover:top-[30%] group-hover:left-[80%] group-hover:z-[2] ease-out">
        <Star />
      </div>
      <div className="absolute top-[25%] left-[45%] w-[15px] transition-all duration-500 z-[-5] group-hover:top-[25%] group-hover:left-[115%] group-hover:z-[2] ease-out">
        <Star />
      </div>
      <div className="absolute top-[5%] left-[50%] w-[5px] transition-all duration-500 ease z-[-5] group-hover:top-[5%] group-hover:left-[60%] group-hover:z-[2] ease-out">
        <Star />
      </div>
    </a>
  )
}

export default Button

const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 784.11 815.53"
      className='fill-amber-300'
    >
      <path
        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
      ></path>
    </svg>
  )
}