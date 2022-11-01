import React from "react";
import { BsPinAngle } from "react-icons/bs";

export default function PinCard() {
    return (
        <article className="w-full bg-white shadow-lg flex gap-2 p-2 h-28 relative rounded-xl">
            <BsPinAngle className="absolute top-1 right-0 text-slate-500 " />
            <div className="bg-slate-400 w-1/2 rounded-xl "></div>
            <div>
                <h3 className="text-xl">Judul pin</h3>
            </div>
        </article>
    );
}
