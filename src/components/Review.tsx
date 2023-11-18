import {AiFillStar} from "react-icons/ai";

interface ReviewProps {
    review: {
        name: string;
        position: string;
        company: string;
        text: string;
        image: string;
        logo: string;
    }
}
export const Review = ({review}: ReviewProps) => {
    const {name, position, company, text, image, logo} = review
    return (
        <>
            <div className='relative flex justify-center gap-4 bg-gradient-to-t from-gray-900 to-zinc-950/50 rounded-sm shadow-sm shadow-zinc-900 px-4 py-2'>
                <div className='absolute flex space-y-2 flex-col items-center justify-center hover:translate-y-36 transition-all ease-in-out duration-1000 top-0 left-0 bottom-0 right-0  bg-gray-100'>
                    <div className='flex items-center justify-center bg-yellow-300   rounded-full'>
                        <img src={image} alt="logo" className='rounded-full w-16 cursor-pointer'/>
                    </div>
                    <div className='flex flex-col gap-1 mb-8 items-center justify-center text-black font-semibold'>
                        <span className='flex items-center gap-3'>
                            <AiFillStar className='fill-cyan-700'/>
                            <AiFillStar className='fill-cyan-700'/>
                            <AiFillStar className='fill-cyan-700'/>
                            <AiFillStar/>
                        </span>
                        {name}
                        <div className='flex gap-2 mb-16'>
                            <img className='rounded-full animate-pulse w-6 cursor-pointer' src={logo} alt="logo" />
                            <span>
                                {company}
                            </span>
                            {position}
                        </div>
                    </div>
                </div>
                <div className=' cursor-pointer text-sm rounded-lg hover:backdrop-blur-sm text-justify px-4 py-5 bg-gradient-to-t from-zinc-900/50 to-gray-900/50 font-normal hover:z-10 hover:text-gray-100 transition-all ease-in-out duration-1000'>
                    <p className='cursor-pointer'>{text}</p>
                </div>

            </div>
        </>
    );
};