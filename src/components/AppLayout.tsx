import {Outlet} from "react-router-dom";
import {Header} from "./Header.tsx";
import {Sidebar} from "./Sidebar.tsx";
import {Footer} from "./Footer.tsx";

export const AppLayout = () => {
    return (
        <>
            <div className="gap-4 rounded-sm grid grid-cols-1 md:grid-cols-[300px_minmax(900px,_1fr)] bg-[#1E1E1E] overflow-hidden  h-screen">
                <div className='relative flex  justify-center rounded-lg  px-5 py-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950 via-gray-900 to-zinc-900 shadow-2xl shadow-zinc-950'>
                    <Sidebar/>
                </div>
                <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950 via-gray-900 to-zinc-900 shadow-2xl shadow-zinc-950 rounded-lg  overflow-y-scroll">
                    <Header/>
                    <main className="flex flex-col px-4 md:px-8 py-8 text-stone-300">
                        <Outlet/>
                    </main>
                    <Footer/>
                </div>
            </div>
        </>
    );
};

