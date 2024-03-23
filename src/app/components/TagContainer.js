import {useState} from "react";
import Image from "next/image";

export default function TagContainer({tags, setTags}) {

    const tagElms = [...tags].map((tag) => {
        return (
            <div className="rounded-md bg-light-gray overflow-hidden">
                <span className="text-lg font-bold align-sub text-cyan px-3 inline-block">{tag}</span>
                <div className="bg-cyan w-8 h-8 align-middle inline-flex items-center justify-center cursor-pointer" onClick={()=>setTags(new Set([...tags].filter(t=>t!=tag)))}>
                    <Image
                        className="inline-block"
                        src="/icon-remove.svg"
                        width={18}
                        height={18}
                    ></Image>
                </div>
            </div>
        );
    });

    return (
        <div className="bg-white relative w-[88%] mx-auto rounded-md p-4 -my-8 mb-2 flex justify-between items-center"> 
            <div className="flex flex-wrap gap-4">{tagElms}</div>
            <span onClick={()=>setTags(new Set([]))} className="text-[1.05rem] mx-2 font-bold text-gray align-bottom h-[1.5rem] cursor-pointer">Clear</span>
        </div>
    );
}
