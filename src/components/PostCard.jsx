import React from "react";

export default function PostCard() {
    return (
        <article className="w-full bg-white shadow-lg flex gap-2 p-2 h-28 relative rounded-xl my-2">
            <div className="bg-slate-400 w-1/3 min-w-[130px] rounded-xl "></div>
            <div className="overflow-x-hidden">
                <h3 className="text-xl">Judul Post</h3>

                <p className="text-sm text-slate-600 line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus ullam magni animi lorem.
                </p>
            </div>
        </article>
    );
}
