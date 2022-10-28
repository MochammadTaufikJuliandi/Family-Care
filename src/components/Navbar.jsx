import { FiHome } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsToggleOn } from "react-icons/bs";

export default function Navbar() {
    return (
        <header>
            <nav className="navigation bg-teal-700 flex justify-between p-5">
                <div className="flex items-center">
                    <GiHamburgerMenu />
                    <h1 className="text-white font-semibold md:text-black left-0 ml-2 ">
                        Family Care
                    </h1>
                </div>
                <ul className="flex gap-4 mr-4 items-center">
                    <li>
                        <FiHome />
                    </li>
                    <li>
                        <a href="#">
                            <BsSearch />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BsFillMenuButtonFill />
                        </a>
                    </li>
                    <li>
                        <BsToggleOn />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
