import { memo,lazy } from 'react';

const TextSnippet = lazy(() => import('@mui/icons-material/TextSnippet'));
const GitHub = lazy(() => import('@mui/icons-material/GitHub'));
const LinkedIn = lazy(() => import('@mui/icons-material/LinkedIn'));
const Email = lazy(() => import('@mui/icons-material/Email'));
const WhatsApp = lazy(() => import('@mui/icons-material/WhatsApp'));
const Phone = lazy(() => import('@mui/icons-material/PhoneEnabled'));

const iconStyles = {
    fill: "rgb(31 41 55)",
    fontSize: "50px",
    padding: "5px",
    border: "5px #fde68a solid",
};

const GetInTouch = memo(() => {
    return (
        <div className='w-full md:w-1/2 text-slate-800 pt-6 p-5 md:p-10'>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <p className='text-gray-800 text-xl mb-6 md:my-12'>
                Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                Simply fill out the form or send me an email.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-5">
                <a href="https://drive.google.com/drive/folders/16cqxgYdWWXXogeputCJBm4x0NnsUURnY?usp=sharing" target='_blank' rel="noopener noreferrer" title="View my Resume" className="flex items-center justify-center cursor-pointer md:w-fit w-1/4 transition-transform duration-300 hover:gap-2 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none">
                    <TextSnippet className='rounded-full hover:shadow-[4px_4px_7px_#cab76e]' style={iconStyles} />
                </a>
                <a href="https://github.com/shiva167" target='_blank' rel="noopener noreferrer" title="Visit my Github" className="flex items-center justify-center cursor-pointer md:w-fit w-1/4 transition-transform duration-300 hover:gap-2 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none">
                    <GitHub className='rounded-full hover:shadow-[4px_4px_7px_#cab76e]' style={iconStyles} />
                </a>
                <a href="https://www.linkedin.com/in/shiva-agrawal/" target='_blank' rel="noopener noreferrer" title="Visit my LinkedIn" className="flex items-center justify-center cursor-pointer md:w-fit w-1/4 transition-transform duration-300 hover:gap-2 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none">
                    <LinkedIn className='rounded-full hover:shadow-[4px_4px_7px_#cab76e]' style={iconStyles} />
                </a>
                <a href="mailto:sagrawal16720@gmail.com" target='_blank' rel="noopener noreferrer" title="Mail me" className="flex items-center justify-center cursor-pointer md:w-fit w-1/4 transition-transform duration-300 hover:gap-2 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none">
                    <Email className='rounded-full hover:shadow-[4px_4px_7px_#cab76e]' style={iconStyles} />
                </a>
                <a href="tel:+91-7456048309" title="Call me" className="flex items-center justify-center cursor-pointer md:w-fit w-1/4 transition-transform duration-300 hover:gap-2 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none">
                    <Phone className='rounded-full hover:shadow-[4px_4px_7px_#cab76e]' style={iconStyles} />
                </a>
                <a href="https://wa.me/917456048309" target='_blank' rel="noopener noreferrer" title="WhatsApp me" className="flex items-center justify-center cursor-pointer md:w-fit w-1/4 transition-transform duration-300 hover:gap-2 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none">
                    <WhatsApp className='rounded-full hover:shadow-[4px_4px_7px_#cab76e]' style={iconStyles} />
                </a>
            </div>
        </div>
    );
});

export default GetInTouch;
