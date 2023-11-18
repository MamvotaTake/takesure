import {NavLink} from "react-router-dom";
import {HiDesktopComputer} from "react-icons/hi";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  gap: 0.8rem;
`

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    cursor: pointer;
    color:#e0f2fe;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #0284c7;
    border-radius: 1px;
  }
  

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: gray;
  }
`

export const MainLink = () => {
    return (
        <nav>
            <NavList className='flex flex-col md:flex-row md:justify-between bg-zinc-900 text-stone-300 space-x-4'>
                <div className='flex items-center text-2xl md:text-left text-center px-8 py-5 gap-2'><span className='bg-zinc-500 rounded-full p-1'><HiDesktopComputer className='fill-cyan-200 text-xl'/></span> Fullstack Developer</div>
                <div className={`flex md:text-lg space-x-16 md:space-x-16 md:justify-between justify-center  md:px-8 py-4 rounded-br-lg rounded-bl-lg  transition-all duration-700`}>
                    <li>
                        <StyledNavLink to="/">About</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/resume">Resume</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/portfolio">Portfolio</StyledNavLink>
                    </li>

                    {/*<li>*/}
                    {/*    <NavLink to="/blog">Blog</NavLink>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <NavLink to="/blog">News</NavLink>*/}
                    {/*</li>*/}
                </div>
            </NavList>
        </nav>
    );
};