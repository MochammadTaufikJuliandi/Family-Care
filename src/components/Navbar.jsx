import { BsFillMenuButtonFill } from "react-icons/bs";

import { RiMoonFill } from "react-icons/ri";

export default function Navbar() {
    return (
        <header>
            <nav className="navigation bg-teal-700 flex justify-between p-5">
                <div className="flex items-center">
                    <h1 className="text-white font-semibold md:text-black left-0 ml-2 ">
                        Family Care
                    </h1>
                </div>
                <ul className="flex gap-4 mr-4 items-center">
                    <li>
                        <RiMoonFill className="text-white" />
                    </li>

                    <li>
                        <BsFillMenuButtonFill />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
