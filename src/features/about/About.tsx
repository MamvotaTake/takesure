import {HiMiniCodeBracketSquare} from "react-icons/hi2";
import {PiCodesandboxLogo} from "react-icons/pi";
import {IoIosBusiness} from "react-icons/io";
import {FaFigma} from "react-icons/fa";
import { Tooltip } from 'antd';
// import {Review} from "../../components/Review.tsx";
import {WhatIDo} from "./WhatIDo.tsx";
import {LuBringToFront} from "react-icons/lu";
import take01 from "../../assets/take01.png"
import qrcode from "../../assets/qrcode.png"
import agric from "../../assets/agric.png"
import bot from "../../assets/bot.png"
import lean from "../../assets/lean.png"


import {
    BiLink,
    BiLogoFacebookCircle,
    BiLogoGithub,
    BiLogoLinkedin, BiLogoSlack,
    BiLogoTelegram,
} from "react-icons/bi";
import {BsGit} from "react-icons/bs";
import {SiAnaconda, SiAsana, SiNotion, SiPostman, SiVisualstudiocode, SiWebstorm} from "react-icons/si";

// const reviews  = [
//     {
//         name: 'Elena',
//         position: 'CEO',
//         company: 'Crypton Studio',
//         text: 'This code creates a dictionary representing a review and then writes it to a JSON file named "review.json". You can customize the review data according to your needs.',
//         image: 'data:image/png;base64,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',
//         logo: 'data:image/png;base64,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'
//     },
//     {
//         name: 'Nikolai',
//         position: 'Director',
//         company: 'Unisiter',
//         text: 'This code creates a dictionary representing a review and then writes it to a JSON file named "review.json". You can customize the review data according to your needs.',
//         image: 'data:image/jpeg;base64,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',
//         logo: 'data:image/jpeg;base64,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'
//     },
//     {
//         name: 'Maksim',
//         position: 'CEO',
//         company: 'BringIt',
//         text: 'This code creates a dictionary representing a review and then writes it to a JSON file named "review.json". You can customize the review data according to your needs.',
//         image: 'https://avatars.githubusercontent.com/u/103953235?v=4',
//         logo: 'https://avatars.githubusercontent.com/u/103953235?v=4'
//     },
// ]

const whatIdo = [
    {
        name: 'Frontend Developer',
        description: 'The most modern and high-quality design made at a professional level.',
        icon: <HiMiniCodeBracketSquare className='text-6xl fill-cyan-700'/>
    },
    {
        name: 'Backend Developer',
        description: 'Build and deploy secure and scalable application using contemporary frameworks',
        icon: <PiCodesandboxLogo className='text-6xl fill-cyan-700'/>
    },
    {
        name: 'Business Developer',
        description: 'Invest in modern, scalable technology to automate and reduce our workflows eg Sales Navigator, Get Sales, Apollo',
        icon: <IoIosBusiness className='text-6xl fill-cyan-700'/>
    },
    {
        name: 'UX/UI',
        description: 'Creating a user-friendly UX/UI design by understand who our users are, what they want, and how they behave.',
        icon: <FaFigma className='text-6xl fill-cyan-700'/>
    }
]

export const About = () => {
    return (
        <div className='space-y-8 py-3 md:py-12 flex flex-col mb-8'>
            <div className='relative space-y-8 flex flex-col'>
                <div className='flex flex-col gap-5'>
                    <h1 className='md:flex text-3xl  text-center md:text-4xl md:text-left font-extrabold md:font-bold'>I'm passionate about science because it is a way of engaging with Nature.</h1>
                    <p className='text-sm md:text-lg font-normal text-justify' >
                        {/*I&apos;m based in Tomsk, Russia. I strive to build immersive and*/}
                        {/*beautiful web applications through carefully crafted code and*/}
                        {/*user-centric design.*/}
                        In the world of science and technology, there is no doubt that people are opting for the internet as a mode of communication.
                        It is one such reason that is responsible for bringing millions of people together in a fraction of seconds or sometimes minutes.
                    </p>

                </div>
                <h1 className='text-2xl font-bold mt-8 md:mt-0'>My passion: </h1>
                <div className='grid grid-cols-1 mb-40 md:grid-cols-3 gap-4'>
                    <span className='flex  justify-between bg-zinc-700 p-2 rounded-lg'>
                        <span className='flex items-center gap-4'>
                            <img src={agric} alt="avatar" className=' h-12 w-12 rounded-full   object-cover' />
                        <p>AgroTechnology</p>
                        </span>
                        <BiLink className='text-xl cursor-pointer hover:fill-cyan-200 transition-all duration-300'/>

                    </span>
                    <span className='flex  justify-between bg-zinc-700 p-2 rounded-lg'>
                        <span className='flex items-center gap-4'>
                            <img src={bot} alt="avatar" className=' h-12 w-12 rounded-full   object-cover' />
                            <p>Internet of Things (IoT)</p>
                        </span>
                        <BiLink className='text-xl cursor-pointer hover:fill-cyan-200 transition-all duration-300'/>
                    </span>
                    <span className='flex  justify-between bg-zinc-700 p-2 rounded-lg'>
                        <span className='flex items-center gap-4'>
                            <img src={lean} alt="avatar" className=' h-12 w-12 rounded-full   object-cover' />
                            <p>Entrepreneur</p>
                        </span>
                        <BiLink className='text-xl cursor-pointer hover:fill-cyan-200 transition-all duration-300'/>
                    </span>

                </div>
                <h1 className='text-xl font-bold mt-8 '>Tools:</h1>
                <div className='flex justify-between text-lg md:text-5xl text-zinc-700 overflow-hidden'>
                    <Tooltip title="Visual Studio Code" placement="bottom">
                        <SiVisualstudiocode className='cursor-pointer'/>
                    </Tooltip>
                    <Tooltip title="Git" placement="top">
                        <BsGit  className='cursor-pointer'/>
                    </Tooltip>
                    <Tooltip title="Asana" placement="top">
                        <SiAsana  className='cursor-pointer'/>
                    </Tooltip>
                    <Tooltip title="Slack" placement="top">
                        <BiLogoSlack  className='cursor-pointer'/>
                    </Tooltip>
                    <Tooltip title="Webstorm" placement="top">
                        <SiWebstorm  className='cursor-pointer'/>
                    </Tooltip>
                    <Tooltip title="Github" placement="top">
                        <BiLogoGithub  className='cursor-pointer'/>
                    </Tooltip>
                    <Tooltip title="Notion" placement="top">
                        <SiNotion  className='cursor-pointer'/>
                    </Tooltip>
                    <Tooltip title="Postman" placement="top">
                        <SiPostman  className='cursor-pointer'/>
                    </Tooltip>
                    <Tooltip title="Anaconda" placement="top">
                        <SiAnaconda  className='cursor-pointer'/>
                    </Tooltip>

                </div>

            </div>

            <div className='py-4 space-y-4 md:space-y-2'>
                <h1 className='text-xl font-bold'>Facts</h1>

                    <li className='space-y-2'>
                        I had the privilege of participating in the prestigious <span className='font-extrabold text-cyan-600 uppercase'>Акселератор ФРИИ</span> program for a duration of six months.
                    </li>
                    <li>I love my PARENTS</li>

                    <p className='flex flex-col'> <li>I speak 3 languages:</li>
                        <span className='relative flex mt-2 gap-2 font-light text-stone-400 w-fit p-1 rounded'>
                            <span className='before:content-["Sh"] before:absolute before:top-2  before:text-sm before:mr-1 before:bg-cyan-600 before:w-5 before:h-4 before:text-gray-900 before:rounded-sm'>Shona</span>
                            <span className='before:content-["En"] before:absolute before:top-2 before:text-sm before:mr-1 before:bg-cyan-600 before:w-5 before:h-4 before:text-gray-900 before:rounded-sm'>English</span>
                            <span className='before:content-["Ru"] before:absolute before:top-2 before:text-sm before:mr-1 before:bg-cyan-600 before:w-5 before:h-4 before:text-gray-900 before:rounded-sm'>Russian</span>

                        </span>
                    </p>


            </div>
            <div className='flex flex-col gap-8 '>
                <h1 className='text-center md:text-left text-xl md:text-2xl font-bold mt-12'>What I Do</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-7 space-y-8'>
                    {whatIdo.map((ido) => (
                        <WhatIDo
                            key={ido.name}
                            whatIDo={ido}
                        />
                    ))}
                </div>
                {/*<div className='flex flex-col space-y-8 md:overflow-hidden overflow-y-scroll h-52 scroll'>*/}
                {/*    <h1 className='text-2xl font-bold'>Reviews</h1>*/}
                {/*    <div className='flex md:flex-row flex-col sm:gap-7 gap-14 '>*/}
                {/*        {reviews.map((review) => (*/}
                {/*            <Review*/}
                {/*                key={review.name}*/}
                {/*                review={review}*/}
                {/*            />*/}
                {/*        ))}*/}

                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <div className='md:hidden space-y-4 flex flex-col'>
                <h1 className='text-2xl font-bold'>Get in touch</h1>
                <div className='relative flex flex-col'>
                    <div className='bg-white rounded-t-3xl '>
                        <div className='flex  space-y-4 px-4 py-3'>
                        <span className='flex text-lg font-bold text-gray-900 flex-col'>
                            Takesure Mamvota
                            <span className='text-sm font-normal'>13.06.1997</span>
                        </span>
                            <span>
                            <img  src={take01} alt="phone" />
                        </span>
                            <span className='relative flex flex-col text-sm  font-normal text-center'>
                            <LuBringToFront className='absolute left-0 -top-2.5  text-4xl'/>
                            <span className='text-black text-xs font-semibold'>3</span> years
                        </span>
                        </div>
                    </div>
                    <div className='relative -top-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950 via-gray-900 to-zinc-900 w-full rounded-3xl'>
                        <div className='flex flex-col  space-y-4 px-4 py-3'>
                            <div className='flex gap-5 items-center text-gray-100 text-lg'>
                                <BiLogoGithub/>
                                <BiLogoLinkedin/>
                                <BiLogoFacebookCircle/>
                                <BiLogoTelegram/>
                            </div>
                            <div className='flex justify-between py-4 -py-5'>
                                <div>
                                    <img className='border border-zinc-200 p-1 rounded-lg w-28 h-28' src={qrcode} alt="phone" />
                                    <p className='text-zinc-100'>@takesureM</p>
                                </div>
                                <div className='flex flex-col space-y-2'>
                                <span className='flex text-sm uppercase flex-col text-gray-100 font-light'>
                                    Phone Number:
                                    <span className='font-bold capitalize text-sm'>8999-576-82-14</span>
                                </span>

                                    <span className='flex text-sm uppercase flex-col text-gray-100 font-light'>
                                    Location:
                                    <span className='font-bold capitalize text-sm'>Tomsk, Russia</span>
                                </span>
                                    <span className='flex text-sm uppercase flex-col text-gray-100 font-light'>
                                    Nationality:
                                    <span className='font-bold capitalize text-sm'>Zimbabwean</span>
                                </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};