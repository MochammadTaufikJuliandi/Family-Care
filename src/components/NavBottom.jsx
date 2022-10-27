import {
    RiHomeLine,
    RiApps2Line,
    RiSearch2Line,
    RiMoonLine,
} from "react-icons/ri";

export default function NavBottom() {
    return (
        <nav className=" fixed bottom-0  right-0 left-0 bg-white text-teal-700 py-3 md:hidden">
            <ul className="flex justify-around  [&>svg]:w-6 [&>a]:w-min-[14px] [&>li>a]:flex [&>li>a]:flex-col [&>li>a]:items-center [&>li>a>p]:text-sm">
                <li className="">
                    <a href="#">
                        <RiHomeLine />
                        <p>Home</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <RiSearch2Line />
                        <p>Search</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <RiApps2Line />
                        <p>Menu</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <RiMoonLine />
                        <p>Dark Mode</p>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
