import axios from 'axios';
import { useState, useCallback } from 'react';
import toast from 'react-hot-toast';

const url = import.meta.env.VITE_URL;

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = useCallback(async (e) => {
        e.preventDefault();

        if (!navigator.onLine) {
            toast.error('No internet connection. Please check your connection and try again.');
            return;
        }
        setIsLoading(true);

        // Generate the timestamp
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const day = dayNames[date.getDay()];
        const dayOfMonth = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const timestamp = `${hours}:${minutes}:${seconds} ${day} ${dayOfMonth}/${month}/${year}`;

        // Send the message via axios
        toast.promise(
            axios.post(url, {
                data: [
                    {
                        id: "INCREMENT",
                        timestamp,
                        name,
                        email,
                        message,
                    },
                ],
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                setName('');
                setEmail('');
                setMessage('');
                return 'Message sent successfully.';
            }),
            {
                loading: 'Sending...',
                success: <b>Message Sent</b>,
                error: <b>Could not send.</b>,
            }
        ).catch((error) => {
            console.error('Error:', error);
            toast.error('Couldn\'t send message.');
        }).finally(() => {
            setIsLoading(false);
        });
    }, [name, email, message]);


    return (
        <div className='w-full md:w-1/2 text-slate-800 pt-6 p-5 md:p-10'>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Contact Me</h2>
            <form onSubmit={submitHandler}>
                <div className="mb-4 text-xl">
                    <label className="block text-gray-800 mb-1" htmlFor="name">Your Name</label>
                    <input
                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 transition duration-300"
                        placeholder="Enter your name"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4 text-xl">
                    <label className="block text-gray-800 mb-1" htmlFor="email">Your Email</label>
                    <input
                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 transition duration-300"
                        placeholder="Enter your email"
                        name="email"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4 text-xl">
                    <label className="block text-gray-800 mb-1" htmlFor="message">Your Message</label>
                    <textarea
                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 transition duration-300"
                        rows="4"
                        placeholder="Enter your message"
                        name="message"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button
                    className="flex items-center bg-cyan-400 gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest text-xl rounded-md
                                hover:bg-cyan-500 duration-300 hover:gap-2 hover:translate-x-3 hover:shadow-[4px_4px_7px_black]
                                focus:outline-none focus:ring-2 focus:ring-cyan-300
                                active:bg-cyan-600 active:translate-x-4 active:translate-y-[0.10rem] active:shadow-none"
                    disabled={isLoading}
                >
                    {isLoading ? 'Sending...' : 'Send'}
                    <svg
                        className="w-5 h-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
