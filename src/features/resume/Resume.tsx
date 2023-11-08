import {AiOutlineBook} from "react-icons/ai";
import {MdOutlineWork} from "react-icons/md";
import {Skills} from "./Skills.tsx";

export const Resume = () => {
    return (
        <>
            <div className='flex flex-col'>
                <div>
                    <div className='flex items-center gap-4 mt-8'>
                        <div className='flex justify-center bg-zinc-800 w-12 h-12 rounded items-center'>
                            <AiOutlineBook className='text-4xl  fill-amber-200'/>
                        </div>
                        <p className='text-2xl font-bold'>Education</p>
                    </div>
                    <div className='relative  flex flex-col  gap-3 space-y-7 ml-4 mt-8 mb-8'>
                        <div className=' flex space-x-9 '>
                            <div className='flex justify-center bg-zinc-800 w-4 h-4 rounded-full items-center  time-line'>
                                <span className='bg-amber-200 w-2 h-2 z-10 rounded-full'/>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-xl font-semibold'>Ukhta State Technical University</p>
                                <p className='text-lg'>Russian Language</p>
                                <p className='text-sm text-amber-200'>2017 - 2018</p>
                                <p className='text-xs leading-5'>Outpost of oil and gas education in the European North of Russia.</p>
                            </div>
                        </div>
                        <div className='flex space-x-10'>
                            <div className='flex justify-center bg-zinc-800 w-5 h-4 rounded-full items-center'>
                                <span className='bg-amber-200 w-2 h-2 z-10 rounded-full'/>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-xl font-semibold'>Tomsk State University of Control Systems and Radioelectronics</p>
                                <p className='text-lg'>Bachelor Degree</p>
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
                                <p className='text-xl font-semibold'>Unisiter</p>
                                <p className='text-lg'>Tomsk, Russia</p>
                                <p className='text-sm text-amber-200'>Head of Business Development</p>
                                <p className='text-xs leading-5'>Outpost of oil and gas education in the European North of Russia.</p>
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
                                <p className='text-sm text-amber-200'>FullStack Developer</p>
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