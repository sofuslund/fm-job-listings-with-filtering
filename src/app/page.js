import Image from "next/image";

import TagContainer from "@/app/components/TagContainer.js";

export default function Home() {
    return (
        <main className="">
            <TagContainer></TagContainer>
            <div className="bg-cyan w-32 h-8"></div>
            <div className="bg-light-gray-bg w-32 h-8"></div>
            <div className="bg-light-gray w-32 h-8"></div>
            <div className="bg-gray w-32 h-8"></div>
            <div className="bg-dark-gray w-32 h-8"></div>
        </main>
    );
}
