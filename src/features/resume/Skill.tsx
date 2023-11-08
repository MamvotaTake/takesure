import React from "react";

interface SkillProps {
    skill: {
        name: string;
        icon: React.ReactNode;
        year: number,

    }
}
export const Skill = ({skill}: SkillProps) => {
    const {name, icon, year} = skill
    return (
        <>
            <div  className='relative overflow-hidden'>
                <span className='flex flex-col -z-10  items-center gap-2 bg-zinc-800 px-2 py-2 text-xs rounded-lg font-normal cursor-pointer'>
                    <span className='fill-red-200'>{icon}</span>
                    {name}
                </span>
                <span className='skill z-20  bg-stone-300 '>
                    <span className='text-lg text-center font-bold px-2 text-black'>
                        Experience: <br/> {year} years
                    </span>
                </span>
            </div>
        </>
    );
};