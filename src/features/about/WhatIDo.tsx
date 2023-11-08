
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
            <div className='flex gap-4 bg-gradient-to-t from-gray-900 to-zinc-950/50 rounded-sm shadow-sm shadow-zinc-900 px-4 py-2'>
                <span>{icon}</span>
                <span className=' relative text-xl font-bold'>
                   {name}
                    <p className='text-sm mt-2 font-normal'>
                        {description}
                    </p>
                </span>
            </div>
        </>
    );
};