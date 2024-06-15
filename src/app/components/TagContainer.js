import {useState} from "react";
import Image from "next/image";

export default function TagContainer({tags, setTags}) {

    const tagElms = [...tags].map((tag) => {
        return (
            <div key={tag} className="rounded-md bg-light-gray overflow-hidden">
                <span className="text-[1.05rem] font-bold align-sub text-cyan px-2 inline-block">{tag}</span>
                <div className="bg-cyan hover:bg-dark-gray w-8 h-8 align-middle inline-flex items-center justify-center cursor-pointer" onClick={()=>setTags(new Set([...tags].filter(t=>t!=tag)))}>
                    <Image
                        className="inline-block"
                        src="/icon-remove.svg"
                        width={15}
                        height={15}
                    ></Image>
                </div>
            </div>
        );
    });

    const hidden = tagElms.length > 0 ? "" : "hidden";

    return (
        <div className={`bg-white relative rounded-md py-5 px-5 md:px-10 -mt-9 mb-5 md:-mb-9 flex justify-between items-center shadow-md ${hidden}`}> 
            <div className="flex flex-wrap gap-4">{tagElms}</div>
            <span onClick={()=>setTags(new Set([]))} className="text-[1.03rem] mx-1 font-bold text-gray hover:text-cyan hover:underline align-bottom h-[1.5rem] cursor-pointer">Clear</span>
        </div>
    );
}
