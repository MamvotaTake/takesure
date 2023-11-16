import {NavLink} from "react-router-dom";
import {HiDesktopComputer} from "react-icons/hi";

export const MainLink = () => {
    return (
        <>
            <ul className='flex flex-col md:flex-row md:justify-between bg-gray-900 text-stone-300 space-x-4'>
                <div className='flex items-center text-2xl md:text-left text-center px-8 py-5 gap-2'><span className='bg-zinc-500 rounded-full p-1'><HiDesktopComputer className='fill-amber-200 text-xl'/></span> FullStuck Developer</div>
                <div className={`flex md:text-lg space-x-16 md:space-x-16 md:justify-between justify-center  md:px-8 py-4 rounded-br-lg rounded-bl-lg  transition-all duration-700 cursor-pointer`}>
                    <li>
                        <NavLink to="/">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume">Resume</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>

                    {/*<li>*/}
                    {/*    <NavLink to="/blog">Blog</NavLink>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <NavLink to="/blog">News</NavLink>*/}
                    {/*</li>*/}
                </div>
            </ul>
        </>
    );
};