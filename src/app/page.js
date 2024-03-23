"use client"
import Image from "next/image";
import {useState} from "react";

import TagContainer from "@/app/components/TagContainer.js";

export default function Home() {
    let [tags, setTags] = useState(new Set(["Frontend", "CSS", "Javascript"]));

    function addTag(tag) {
        setTags([...tags, tag])
    }

    return (
        <main className="font-league-spartan">
            <TagContainer tags={tags} setTags={setTags}></TagContainer>
            
            <div className="bg-cyan w-32 h-2"></div>
            <div className="bg-light-gray-bg w-32 h-2"></div>
            <div className="bg-light-gray w-32 h-2"></div>
            <div className="bg-gray w-32 h-2"></div>
            <div className="bg-dark-gray w-32 h-2"></div>

            {/* <div className="w-[47px] h-[66px] bg-orange-400 flex justify-center">
                <div className="w-[39px] h-[66px] bg-white rounded-[18px/18px]"></div>
            </div> */}
        </main>
    );
}
