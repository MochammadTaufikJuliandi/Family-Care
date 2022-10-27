import { FiMoon } from "react-icons/fi";
import { BsFillMenuButtonFill, BsSearch } from "react-icons/bs"
import { GrHomeOption } from 'react-icons/gr'

export default function NavBottom() {
  return (
    <nav className=" fixed bottom-0  right-0 left-0 bg-white text-teal-700 px-4 py-3 md:hidden">
    <ul className="flex justify-evenly">
      <li>
        <GrHomeOption />
      </li>
      <li>
        <BsSearch />
      </li>
      <li>
      <BsFillMenuButtonFill />
      </li>
      <li>
      <FiMoon />
      </li>
    </ul>
    </nav>
  );
}
