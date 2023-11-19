import pizza from '../../assets/pizza.jpg'
import movie from '../../assets/movie.png'
import worldwise from '../../assets/worldwise.jpg'
import robin from '../../assets/robin.png'

import {
    BiBookContent,
    BiGitMerge,
    BiLink,
    BiLogoGithub,
    BiLogoJavascript,
    BiLogoRedux,
    BiLogoTypescript
} from "react-icons/bi";
import {DiReact} from "react-icons/di";
import {SiCssmodules, SiReactrouter, SiTailwindcss} from "react-icons/si";
import {Link} from "react-router-dom";

export const Portfolio = () => {
    return (
        <>
            <div className='flex flex-col gap-7 mb-16'>
                <div className='space-y-4'>
                    <h1 className='text-2xl md:text-4xl font-semibold'>Robin Marketplace</h1>
                    <p className='md:text-lg text-xs text-justify'>
                        Is a  platform, designed to connect countries in the SADC region (Zimbabwe,Zambia, South Africa, Mozambique, Botswana),
                        provides a seamless way for individuals and businesses to buy and sell a wide range of products.
                        From agricultural goods to electronics and handmade crafts, our platform offers a secure environment for transactions.
                        With features like secure payment options, comprehensive product listings,
                        and direct communication channels between buyers and sellers, our platform empowers businesses and individuals to trade with ease in the SADC region.
                    </p>
                </div>
                <div className='space-y-4'>
                    <h1 className='text-xl font-semibold'>Product Scope</h1>
                    <p className='md:text-lg text-xs text-justify'>
                        The Robin Marketplace is a cross-platform system that allows customers to buy products online without physically visiting the shop or the country.
                        It provides automation support for placing orders and facilitates the actual sale. Customers can maintain their shopping cart, add or remove products,
                        and make purchases using their home country currency. The system is user-friendly and does not require any specific educational level, experience, or
                        technical expertise. Users can create an account, browse, search, select, and add products to their shopping cart, and proceed to checkout if the
                        products are available.
                    </p>
                </div>
                <div className='mt-8 space-y-4'>
                    <p className='text-lg font-semibold'>User Interface for Robin Marketplace</p>
                    <img className='object-cover w-full h-full rounded-lg' src={robin} alt="tech" />
                </div>
                {/*<div>*/}
                {/*    <p className='text-lg'>Please join our community</p>*/}
                {/*</div>*/}
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1  gap-7 py-6 px-6 mb-16">

                <div className='relative flex flex-col cursor-pointer overflow-hidden'>
                    <figure className='relative hover:scale-105 hover:opacity-80 w-full rounded-lg overflow-hidden mb-8 transition-all duration-500'>
                        <img className='object-cover w-full h-full rounded-lg transition-all duration-700' src={movie} alt="tech" />

                    </figure>
                    <div className='flex flex-col'>
                        <div className='flex gap-2 mb-3 text-zinc-500 text-lg md:text-xl'>
                            <DiReact/>
                            <SiTailwindcss/>
                            <SiReactrouter/>
                            <BiLogoJavascript/>
                            <BiGitMerge/>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col '>
                                <p className='text-lg font-bold text-stone-100'>Entertainment</p>
                                <p className='text-sm text-stone-500'>Web Development</p>
                            </div>
                            <div className='flex gap-2 md:gap-6'>
                                <Link to='https://github.com/MamvotaTake/movie-house'>
                                    <BiLogoGithub className='md:text-xl text-lg hover:text-cyan-200 transition-all duration-500'/>
                                </Link>
                                <BiLink className='md:text-xl text-lg hover:text-cyan-200 transition-all duration-500'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative flex flex-col cursor-pointer overflow-hidden'>
                    <figure className='relative hover:scale-105 hover:opacity-80 w-full h-full rounded-lg overflow-hidden mb-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-transparent before:z-10 transition-all duration-500'>
                        <img className='object-cover rounded-lg transition-all duration-700' src={pizza} alt="tech" />

                    </figure>
                    <div className='flex flex-col'>
                        <div className='flex gap-2 mb-3 text-zinc-500 text-lg md:text-xl'>
                            <DiReact/>
                            <SiTailwindcss/>
                            <SiReactrouter/>
                            <BiLogoTypescript/>
                            <BiGitMerge/>
                            <BiLogoRedux/>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col '>
                                <p className='text-lg font-bold text-stone-100'>Food</p>
                                <p className='text-sm text-stone-500'>Web Development</p>
                            </div>
                            <div className='flex gap-2 md:gap-6'>
                                <Link to='https://github.com/MamvotaTake/movie-house'>
                                    <BiLogoGithub className='md:text-xl text-lg hover:text-cyan-200 transition-all duration-500'/>
                                </Link>
                                <BiLink className='md:text-xl text-lg hover:text-cyan-200 transition-all duration-500'/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='relative flex flex-col cursor-pointer overflow-hidden'>
                    <figure className='relative hover:scale-105 hover:opacity-80 w-full h-full rounded-lg overflow-hidden mb-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-transparent before:z-10 transition-all duration-500'>
                        <img className='object-cover rounded-lg transition-all duration-700' src={worldwise} alt="tech" />
                    </figure>
                    <div className='flex flex-col'>
                        <div className='flex gap-2 mb-3 text-zinc-500 text-lg md:text-xl'>
                            <DiReact/>
                            <SiCssmodules/>
                            <BiBookContent/>
                            <BiLogoJavascript/>
                            <BiGitMerge/>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col '>
                                <p className='text-lg font-bold text-stone-100'>Travel</p>
                                <p className='text-sm text-stone-500'>Web Development</p>
                            </div>
                            <div className='flex gap-2 md:gap-6'>
                                <Link to='https://github.com/MamvotaTake/worldwise'>
                                    <BiLogoGithub className='md:text-xl text-lg hover:text-cyan-200 transition-all duration-500'/>
                                </Link>
                                <BiLink className='md:text-xl text-lg hover:text-cyan-200 transition-all duration-500'/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};