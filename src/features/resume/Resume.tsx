import {AiOutlineBook} from "react-icons/ai";
import {MdOutlineWork} from "react-icons/md";
import {Skills} from "./Skills.tsx";
import {BiCheck} from "react-icons/bi";
import {Link} from "react-router-dom";

export const Resume = () => {
    return (
        <>
            <div className='flex flex-col'>
                <div>
                    <div className='md:flex md:flex-row flex-col space-y-5 justify-between'>
                        <div className='flex flex-col space-y-2'>

                            <span className='md:flex md:flex-row flex-col items-center gap-2'>
                                <span className='font-semibold'>Employment:</span>
                                full time, part time, project work, volunteering
                            </span>
                            <span  className='md:flex md:flex-row flex-col items-center gap-2'>
                                <span className='font-semibold'>Work schedule:</span>
                                full day, shift schedule, flexible schedule, remote working
                            </span>
                        </div>
                        <div className='flex gap-4'>
                            <div className='flex items-center gap-2 text-xs text-amber-200 md:text-black px-2 rounded-full bg-none md:bg-amber-200/70'>
                                Actively searching for a job
                                <BiCheck className='text-xl fill-amber-200'/>
                            </div>
                            <span className='hidden md:flex'>
                                <Link to="https://hh.ru/applicant/resumes/view?resume=023263afff0657d9ee0039ed1f5447756d6e69">
                                    <img className='w-8'  src="https://i.hh.ru/logos/svg/hh.ru__min_.svg?v=11032019" alt="" />
                                </Link>
                            </span>
                        </div>

                    </div>
                    <div className='flex items-center gap-4 mt-8'>
                        <div className='flex justify-center bg-zinc-800 w-12 h-12 rounded items-center'>
                            <AiOutlineBook className='text-4xl  fill-amber-200'/>
                        </div>
                        <p className='text-2xl font-bold'>Education</p>
                    </div>
                    <div className='relative  flex flex-col  gap-3 space-y-7 ml-5 mt-8 mb-8'>
                        <div className=' flex space-x-9 '>
                            <div className='flex justify-center bg-zinc-800 w-3 h-4 rounded-full items-center  time-line'>
                                <span className='bg-amber-200 w-2 h-2 z-10 rounded-full'/>
                            </div>
                            <div className='md:space-y-2 space-y-1'>
                                <p className='text-xl font-semibold'>Ukhta State Technical University</p>
                                <p className='text-xs md:text-lg font-bold md:font-normal'>Russian Language</p>
                                <p className='text-sm text-amber-200'>2017 - 2018</p>
                                <p className='text-xs leading-5'>Outpost of oil and gas education in the European North of Russia.</p>
                            </div>
                        </div>
                        <div className='flex space-x-10'>
                            <div className='flex justify-center bg-zinc-800 w-5 h-4 rounded-full items-center'>
                                <span className='bg-amber-200 w-2 h-2 z-10 rounded-full'/>
                            </div>
                            <div className='md:space-y-2 space-y-1'>
                                <p className='text-xl font-semibold'>Tomsk State University of Control Systems and Radioelectronics</p>
                                <p className='text-xs md:text-lg font-bold md:font-normal'>Bachelor Degree</p>
                                <p className='text-sm text-amber-200'>2018 - 2022</p>
                                <p className='text-xs leading-5'>TUSUR is a recognized leader in the field of training qualified personnel for high-tech sectors of the economy, introducing innovative educational and research programs, applied developments of new technology, equipment and control systems.</p>
                            </div>
                        </div>
                        <div className='flex space-x-10'>
                            <div className='flex justify-center bg-zinc-800 w-5 h-4 rounded-full items-center'>
                                <span className='bg-amber-200 w-2 h-2 z-10 rounded-full'/>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-xl font-semibold'>Tomsk State University of Control Systems and Radioelectronics</p>
                                <p className='text-lg'>Masters Degree</p>
                                <p className='text-sm text-amber-200'>2023 - Current</p>
                                <p className='text-xs leading-5'>TUSUR is a recognized leader in the field of training qualified personnel for high-tech sectors of the economy, introducing innovative educational and research programs, applied developments of new technology, equipment and control systems.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-8'>
                    <div className='flex items-center gap-4 mt-8'>
                        <div className='flex justify-center bg-zinc-800 w-12 h-12 rounded items-center'>
                            <MdOutlineWork className='text-4xl  fill-amber-200'/>
                        </div>
                        <p className='text-2xl font-bold'>Experience</p>
                    </div>
                    <div className='relative  flex flex-col  gap-3 space-y-7 ml-4 mt-8 mb-8'>
                        <div className=' flex space-x-10 '>
                            <div className='flex justify-center bg-zinc-800 w-4 h-4 rounded-full items-center z-10  time-line'>
                                <span className='bg-amber-200 w-2 h-2 z-10 rounded-full'/>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-xl font-semibold'>uniSiter</p>
                                <p className='text-lg'>Tomsk, Russia</p>
                                <p className='text-sm text-amber-200'>Head of Business Development</p>
                                <p className='text-xs leading-5'>Specialize in developing the best e-commerce platform. And we are doing this not in Silicon Valley, but worldwide. Our solution is used by hundreds of satisfied customers in African countries, Kazakhstan, Uzbekistan and Russia.</p>
                            </div>
                        </div>
                        <div className='flex space-x-10'>
                            <div className='flex justify-center bg-zinc-800 w-4 h-4 rounded-full items-center'>
                                <span className='bg-amber-200 w-2 h-2 z-10 rounded-full'/>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-xl font-semibold'>Crypton Studio</p>
                                <p className='text-lg'>Tomsk</p>
                                <p className='text-sm text-amber-200'>Business Developer</p>
                                <p className='text-xs leading-5'>high-tech sectors of the economy, introducing innovative educational and research programs, applied developments of new technology, equipment and control systems.</p>
                            </div>
                        </div>
                        <div className='flex space-x-10'>
                            <div className='flex justify-center bg-zinc-800 w-4 h-4 rounded-full items-center'>
                                <span className='bg-amber-200 w-2 h-2 z-10 rounded-full'/>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-xl font-semibold'>Bringit Technologies</p>
                                <p className='text-lg'>Israel</p>
                                <p className='text-sm text-amber-200'>Fullstack Developer</p>
                                <p className='text-xs leading-5'>high-tech sectors of the economy, introducing innovative educational and research programs, applied developments of new technology, equipment and control systems.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Skills/>
            </div>
        </>
    );
};