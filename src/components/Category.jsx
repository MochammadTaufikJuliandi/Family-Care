import React from "react";

export default function Category({ category, icon, colorFrom, colorTo }) {
    return (
        <div
            className={`bg-gradient-to-r ${colorFrom} ${colorTo} px-4 py-5  w-max-[50px] rounded-lg max-w-[150px] min-w-[120px] overflow-hidden relative inline-block shadow-lg`}
        >
            <p className="text-white font-semibold"> {category}</p>
            {icon}
            <div className="p-4  bg-gradient-to-br from-white/70 to-white/0 bottom--2 right-0 absolute rounded-full "></div>
            <div className="p-8  bg-gradient-to-br from-white/70 to-white/0  bottom--1 right-4 absolute rounded-full"></div>
        </div>
    );
}
