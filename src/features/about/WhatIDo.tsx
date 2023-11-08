
interface WhatIDoProps {
    whatIDo: {
        name: string;
        description: string;
        icon: React.ReactNode;
    }

}
export const WhatIDo = ({whatIDo}: WhatIDoProps) => {
    const {name, description, icon} = whatIDo
    return (
        <>
            <div className='flex md:flex-row flex-col md:gap-4 md:justify-start justify-center md:items-start items-center gap-7 bg-gradient-to-t from-gray-900 to-zinc-950/50 rounded-sm shadow-sm shadow-zinc-900 px-4 py-2'>
                <span>{icon}</span>
                <span className=' relative text-xs md:text-xl font-bold text-center md:text-start'>
                   {name}
                    <p className=' text-xs md:text-lg mt-2 font-normal'>
                        {description}
                    </p>
                </span>
            </div>
        </>
    );
};