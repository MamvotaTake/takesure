import {GiSkills} from "react-icons/gi";
import {
    BiGitMerge, BiLogoDocker,
    BiLogoGithub,
    BiLogoHtml5,
    BiLogoJavascript, BiLogoLinkedin, BiLogoMongodb, BiLogoPostgresql,
    BiLogoReact,
    BiLogoRedux, BiLogoTailwindCss,
    BiLogoTypescript
} from "react-icons/bi";
import {SiExpress, SiNestjs, SiSalesforce, SiStyledcomponents} from "react-icons/si";
import {Skill} from "./Skill.tsx";

const skills = [
    {
        name: 'React',
        icon: <BiLogoReact  className='text-xl fill-cyan-200'/>,
        year: 2
    },
    {
        name: 'JavaScript',
        icon: <BiLogoJavascript className='text-xl fill-cyan-200'/>,
        year: 3
    },
    {
        name: 'Redux',
        icon: <BiLogoRedux className='text-xl fill-cyan-200'/>,
        year: 1.5
    },
    {
        name: 'Typescript',
        icon: <BiLogoTypescript className='text-xl fill-cyan-200'/>,
        year: 1
    },
    {
        name: 'Styled Components',
        icon: <SiStyledcomponents  className='text-xl fill-cyan-200'/>,
        year: 2
    },
    {
        name: 'Git',
        icon: <BiGitMerge className='text-xl fill-cyan-200'/>,
        year: 3
    },
    {
        name: 'GitHub',
        icon: <BiLogoGithub className='text-xl fill-cyan-200'/>,
        year: 3
    },
    {
        name: 'HTML',
        icon: <BiLogoHtml5 className='text-xl fill-cyan-200'/>,
        year: 3
    },
    {
        name: 'Tailwind CSS',
        icon: <BiLogoTailwindCss className='text-xl fill-cyan-200'/>,
        year: 1,

    },
    {
        name: 'Docker',
        icon: <BiLogoDocker className={`text-xl fill-cyan-200`}/>,
        year: 2,


    },
    {
        name: 'NestJs',
        icon: <SiNestjs className='text-xl fill-cyan-200'/>,
        year: 1.2
    },
    {
        name: 'MongoDB',
        icon: <BiLogoMongodb className='text-xl fill-cyan-200'/>,
        year: 1.5
    },
    {
        name: 'ExpressJs',
        icon: <SiExpress className='text-xl fill-cyan-200'/>,
        year: 1.5
    },
    {
        name: 'GetSales',
        icon: <SiSalesforce className='text-xl fill-cyan-200'/>,
        year: 2
    },
    {
        name: 'Sales Navigator',
        icon: <BiLogoLinkedin className='text-xl fill-cyan-200'/>,
        year: 2
    },
    {
        name: 'Postgres',
        icon: <BiLogoPostgresql className='text-xl fill-cyan-200'/>,
        year: 1.5
    }
]
export const Skills = () => {
    return (
        <>
            <div className='flex flex-col gap-2 mb-20'>
                <div className='flex items-center gap-4 mt-3 '>
                    <div className='flex justify-center bg-zinc-800 w-12 h-12 rounded items-center'>
                        <GiSkills className='text-4xl  fill-cyan-200'/>
                    </div>
                    <p className='text-2xl font-bold'>Skills</p>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-7 gap-4 mt-4'>
                    {skills.map((skill) => (
                        <Skill
                            key={skill.name}
                            skill={skill}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};