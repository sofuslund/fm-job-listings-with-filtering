import {useState} from "react";
import Image from "next/image";

export default function TagContainer() {
    const [tags, setTags] = useState(["Frontend", "CSS"]);

    const tagElms = tags.map((tag) => {
        return (
            <div className="rounded-md bg-light-gray overflow-hidden">
                <h1 className="text-lg font-bold align-sub text-cyan px-3 inline-block">{tag}</h1>
                <div className="bg-cyan w-9 h-9 align-middle inline-flex items-center justify-center">
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

    return <div className="flex flex-wrap gap-4 p-4 bg-white w-10/12 m-auto rounded-lg relative -my-8 mb-2">{tagElms}</div>;
}
