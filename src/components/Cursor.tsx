import {useEffect, useState} from "react";
import { motion } from 'framer-motion'

export function Cursor() {
    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleMove = (event: MouseEvent) => {
            setPosition({x: event.clientX, y: event.clientY});
        };
        window.addEventListener("mousemove", handleMove);

        return () => {
            window.removeEventListener("mousemove", handleMove);
        };
    })
    return <motion.div className='w-[30px] h-[30px] rounded-full fixed z-[999] border-1 border-solid border-2 border-sky-600' animate={{ x: position.x + 10, y: position.y +10 }}/>
}