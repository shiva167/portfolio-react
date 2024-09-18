import React, { Suspense, useMemo } from 'react';
import './TemApp.css'
import Marquee from 'react-fast-marquee';
import allTechList from "./assets/data/techList.js";
import SkillCard from './assets/UI/Skills/SkillCard.jsx';

const TemApp = () => {
    const allTechList = [
        { tech: "html5", tooltip: "HTML5 structures and presents web content." },
        { tech: "css3", tooltip: "CSS3 styles and layouts web pages." },
        { tech: "javascript", tooltip: "JavaScript adds interactivity to web pages." },
        { tech: "react", tooltip: "React builds user interfaces for web apps." },
        { tech: "nextjs", tooltip: "Next.js is a React framework for SSR and SSG." },
        { tech: "nodejs", tooltip: "Node.js runs JavaScript on the server." },
        { tech: "nodemon", tooltip: "Nodemon restarts Node.js apps on changes." },
        { tech: "express", tooltip: "Express is a Node.js web application framework." },
        { tech: "python", tooltip: "Python is a versatile and readable programming language." },
        { tech: "java", tooltip: "Java is a robust, platform-independent programming language." },
        { tech: "typescript", tooltip: "TypeScript is JavaScript with static types." },
        { tech: "git", tooltip: "Git tracks changes in source code." },
        { tech: "mongodb", tooltip: "MongoDB is a NoSQL document-oriented database." },
        { tech: "mongoose", tooltip: "Mongoose is an ODM for MongoDB in Node.js." },
        { tech: "mysql", tooltip: "MySQL is an open-source relational database." },
        { tech: "bootstrap", tooltip: "Bootstrap is a responsive front-end framework." },
        { tech: "redux", tooltip: "Redux manages state in JavaScript apps." },
        { tech: "bash", tooltip: "Bash is a Unix shell for command-line scripting." },
        { tech: "linux", tooltip: "Linux is an open-source operating system kernel." },
        { tech: "vscode", tooltip: "Visual Studio Code is a versatile code editor." },
        { tech: "firebase", tooltip: "Firebase offers real-time databases and backend services." },
        { tech: "materialui", tooltip: "Material-UI provides React components with Material Design." },
        { tech: "tailwindcss", tooltip: "Tailwind CSS is a utility-first CSS framework." },
        { tech: "npm", tooltip: "npm manages JavaScript packages and dependencies." },
        { tech: "docker", tooltip: "Docker enables containerized applications." },
        { tech: "netlify", tooltip: "Netlify automates web project deployment and hosting." },
        { tech: "postman", tooltip: "Postman tests and interacts with APIs." },
        { tech: "babel", tooltip: "Babel compiles modern JavaScript to compatible versions." },
        { tech: "axios", tooltip: "Axios is a promise-based HTTP client for JavaScript." },
        { tech: "jest", tooltip: "Jest is a JavaScript testing framework." },
        { tech: "reactrouter", tooltip: "React Router handles routing in React apps." },
        { tech: "vercel", tooltip: "Vercel optimizes frontend frameworks and static sites." },
        { tech: "canva", tooltip: "Canva is a graphic design tool for creating visuals." },
        { tech: "github", tooltip: "GitHub is a platform for version control with Git." },
        { tech: "githubcodespaces", tooltip: "GitHub Codespaces provides a cloud-based development environment." },
        { tech: "codepen", tooltip: "CodePen showcases HTML, CSS, and JavaScript code snippets." },
        { tech: "vitejs", tooltip: "Vite is a fast build tool for modern web projects." },
        { tech: "c", tooltip: "C is a powerful, low-level programming language." },
        { tech: "cplusplus", tooltip: "C++ extends C with object-oriented features." }
    ]

    const marqueeStyles = useMemo(() => ({
        margin: '20px',
        WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
        maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)"
    }), []
    );

    const firstIndex = Math.ceil(allTechList.length / 3);
    const secIndex = firstIndex * 2;
    const techList = allTechList.slice(0, firstIndex);
    const techList2 = allTechList.slice(firstIndex, secIndex);
    const techList3 = allTechList.slice(secIndex);

    return (
        <div>
            <div className='bg-amber-400 p-2 m-2 h-96 overflow-hidden'>

                <div className='transform w-[800px] -rotate-[45deg] relative -left-full overflow-hidden flex flex-col'>
                    <Suspense fallback={<div>Loading skills...</div>}>
                        <Marquee speed={30} direction="" pauseOnHover style={{ margin: '10px' }}>
                            {techList.map((tech, key) => (
                                <div key={key} className='bg-slate-100 text-blue-700 px-4 py-2 m-2 border-blue-600 rounded-3xl text-sm'>
                                    {tech.tech}
                                </div>
                            ))}
                        </Marquee>
                        <Marquee speed={30} pauseOnHover style={{ margin: '10px' }}>
                            {techList2.map((tech, key) => (
                                <div key={key} className='bg-slate-100 text-blue-700 px-4 py-2 m-2 border-blue-600 rounded-3xl text-sm'>
                                    {tech.tech}
                                </div>
                            ))}
                        </Marquee>
                        <Marquee speed={30} direction="" pauseOnHover style={{ margin: '10px' }}>
                            {techList3.map((tech, key) => (
                                <div key={key} className='bg-slate-100 text-blue-700 px-4 py-2 m-2 border-blue-600 rounded-3xl text-sm'>
                                    {tech.tech}
                                </div>
                            ))}
                        </Marquee>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default TemApp;
