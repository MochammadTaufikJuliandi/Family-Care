import React from "react";
import PostCard from "./PostCard";

export default function ListPost() {
    return (
        <article className="p-4 flex-col ">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </article>
    );
}
