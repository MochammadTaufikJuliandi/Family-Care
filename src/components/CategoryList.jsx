import React from "react";
import Category from "./Category";
import { FaCookieBite } from "react-icons/fa";
import { GiCookingGlove } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { CgGym } from "react-icons/cg";

export default function CategoryList() {
    return (
        <div className=" overflow-x-auto w-full flex gap-2 my-4 scr">
            <Category
                category="Kids"
                colorFrom="from-blue-600"
                colorTo="to-blue-300"
                icon={
                    <FaCookieBite className="text-white/50 absolute text-4xl right-0 top-0" />
                }
            />
            <Category
                category="Mommy"
                colorFrom="from-pink-600"
                colorTo="to-pink-300"
                icon={
                    <GiCookingGlove className="text-white/50 absolute text-4xl right-0 top-0" />
                }
            />
            <Category
                colorFrom="from-cyan-600"
                colorTo="to-cyan-300"
                category="Daddy"
                icon={
                    <CgGym className="text-white/50 absolute text-4xl right-0 top-0" />
                }
            />
            <Category
                colorFrom="from-orange-600"
                colorTo="to-orange-300"
                category="Puppy"
                icon={
                    <MdPets className="text-white/50 absolute text-4xl right-0 top-0" />
                }
            />
        </div>
    );
}
