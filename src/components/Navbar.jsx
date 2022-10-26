import { FiHome } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

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
            <a href="#">
              <FiHome />
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
