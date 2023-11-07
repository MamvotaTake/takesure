import {createBrowserRouter} from "react-router-dom";
import {AppLayout} from "../components/AppLayout.tsx";
import {NotFound} from "../components/Error.tsx";
import {About} from "../features/about/About.tsx";
import {Resume} from "../features/resume/Resume.tsx";
import {Blog} from "../features/blog/Blog.tsx";
import {Portfolio} from "../features/portfolio/Portfolio.tsx";


export const router = createBrowserRouter([
        {
            element: <AppLayout />,
            errorElement: <NotFound />,
            children: [
                {
                    path: "/about",
                    element: <About/>
                },
                {
                    path: '/portfolio',
                    element: <Portfolio/>
                },
                {
                    path: "/resume",
                    element: <Resume/>
                },
                {
                    path: "/blog",
                    element:<Blog/>
                }
            ]
        },
    ])