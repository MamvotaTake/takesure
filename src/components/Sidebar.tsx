import takers from "../assets/take01.png";
import qrcode from "../assets/qrcode1.png";
import {CiMail} from "react-icons/ci";
import {BiCalendar, BiCurrentLocation} from "react-icons/bi";
import {TiDevicePhone} from "react-icons/ti";
import {AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterSquare} from "react-icons/ai";
import {ImTelegram} from "react-icons/im";
import {Link} from "react-router-dom";
export const Sidebar = () => {
    return (
        <>
            <div className='md:fixed relative overflow-hidden hidden md:flex flex-col h-full space-y-7'>
                <div className='flex flex-col space-y-7 items-center '>
                    <div className='bg-zinc-800 w-3/2   rounded-lg'>
                        <img className='rounded-lg w-20 cursor-pointer' src={takers} alt="logo"/>
                    </div>
                    <div className='flex flex-col items-center space-y-4'>
                        <h1 className='text-xl font-bold  text-white'>Mamvota Takesure</h1>
                        <div className='text-xs font-bold text-white leading-8 '>
                        <span className='bg-zinc-800 py-1 px-0.5 rounded-sm'>
                            Web Developer
                        </span> |
                            <span className='bg-zinc-800 py-1 px-1 ml-1 rounded-sm'>
                            Business Developer
                        </span>
                        </div>
                    </div>
                </div>
                <div className='border w-full border-gray-700'/>

                <div className='flex flex-col space-y-7 cursor-pointer'>
                    <div className="flex gap-4 ">
                        <span> <CiMail className="text-5xl p-2 bg-zinc-800 rounded-lg fill-cyan-700"/></span>
                        <div className='flex flex-col text-xs font-semibold uppercase text-zinc-400 leading-7'>
                            Email: <span className='text-xs font-normal text-stone-100 lowercase'>tooyoungmamvota@gmail.com</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <span> <TiDevicePhone className="text-5xl p-2 bg-zinc-800 rounded-lg fill-cyan-700"/></span>
                        <div className='flex flex-col text-xs font-semibold uppercase text-zinc-400 leading-7'>
                            Phone: <span className='text-xs font-normal text-stone-100 lowercase'>(+7) 999-576-82-14</span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <span> <BiCalendar className="text-5xl p-2 bg-zinc-800 rounded-lg fill-cyan-700"/></span>
                        <div className='flex flex-col text-xs font-semibold uppercase text-zinc-400 leading-7'>
                            Birthday: <span className='text-xs font-normal text-stone-100 capitalize'>June 1997</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <span> <BiCurrentLocation className="text-5xl p-2 bg-zinc-800 rounded-lg fill-cyan-700"/></span>
                        <div className='flex flex-col text-xs font-semibold uppercase text-zinc-400 leading-7'>
                            Location: <span className='text-xs font-normal text-stone-100  capitalize'>Tomsk</span>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-4 cursor-pointer'>
                <Link to="https://www.facebook.com/takesure.mamvota.1">
                    <AiFillFacebook className="text-2xl fill-stone-200"/>
                </Link>
                    <Link to="https://github.com/MamvotaTake">
                    <AiFillGithub className="text-2xl fill-stone-200"/>
                </Link>
                    <Link to="https://www.linkedin.com/in/mamvota-takesure-0a703b1b9/">
                    <AiFillLinkedin className="text-2xl fill-stone-200"/>
                </Link>
                    <span>
                    <AiFillTwitterSquare className="text-2xl fill-stone-200"/>
                </span>

                </div>
                <div className='absolute bottom-0 hover:-translate-y-7 mt-4 mb-8 transition-all ease-in-out duration-1000 translate-y-96 rounded-lg  w-full cursor-pointer bg-zinc-800 py-3 px-4'>
                    <div className='flex text-xs text-stone-300  justify-between'>
                        <span>@takesureM</span>
                        <ImTelegram className="text-lg fill-stone-300"/>
                    </div>
                    <div className='flex items-center justify-between gap-4 py-4'>
                        <img className='cursor-pointer' src={qrcode} alt="logo"/>
                        {/*<p className='text-lg text-stone-300'>Hi, I'm His Telegram</p>*/}
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='md:hidden flex gap-2 items-center text-lg cursor-pointer justify-between text-stone-300 before:content-[""] before:h-0.5 before:w-full before:bg-stone-300 after:content-[""] after:h-0.5 after:w-screen after:bg-stone-300'>
                    <span className='flex gap-2'>
                    <AiFillGithub/>
                    <AiFillLinkedin/>
                </span>
                    <div>
                        <Link to="https://hh.ru/applicant/resumes/view?resume=023263afff0657d9ee0039ed1f5447756d6e69">
                            <img className='w-10 h-1/5' src="https://i.hh.ru/logos/svg/hh.ru__min_.svg?v=11032019" alt="" />
                        </Link>
                    </div>
                </div>
                <p className='md:hidden text-stone-300 text-xs flex justify-center mt-4'>Let your constraints enable your focus</p>
        </div>
        </>
    );
};