import { Link } from "react-router-dom"
import { NavBar } from "./nav-bar"

export const Header = () => {
    return (
        <header className="bg-black shadow-xl w-full h-16 /text-white text-lg justify-between items-center flex p-8">
        <h1> <Link to={"/"} className="text-white">Logo
        </Link></h1>
        <section>
            <NavBar/>
        </section>
        </header>

        
    )
}
