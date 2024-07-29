import { NavLink } from "react-router-dom"

const activeStles = " text-blue-700 hover:text-blue-500 transition-all duration-500 ease-in-out underline"
const inactiveStyles = "text-lg text-white hover:text-blue-500 transition-all duration-500 ease-in-out"
export const NavBar = () => {
    return (
        <nav className="space-x-8">

        <NavLink to={"/"}
        className={({ isActive })=> `${ isActive ? activeStles : inactiveStyles}`}>
            Home
        </NavLink>

        <NavLink to={"/login"}
         className={({ isActive })=> `${ isActive ? activeStles : inactiveStyles}`}>
        login
        </NavLink>

        <NavLink to={"/singup"}
         className={({ isActive })=> `${ isActive ? activeStles : inactiveStyles}`}>
            Criar Conta
        </NavLink>
        </nav>
    )
}