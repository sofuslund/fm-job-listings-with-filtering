import Image from "next/image";

export default function JobCard({data}) {
    const tags = [data.role, data.level, ...data.languages, ...data.tools].map(tag => {
        return (
            <span className="rounded-md bg-light-gray text-[1.05rem] font-bold align-sub text-cyan px-3 py-0.5 inline-block">{tag}</span>
        );
    });

    const border = data.featured ? "border-cyan box-border border-l-[.35rem]" : "";
    
    const newTag = data.new ? <span className="bg-cyan mr-2 ml-6 text-white rounded-2xl px-2 pt-2 pb-1">NEW!</span> : null;
    const featuredTag = data.featured ? <span className="bg-dark-gray text-white rounded-2xl px-2 pt-2 pb-1">FEATURED!</span> : null;

    return (
        <div className={`rounded-md bg-white w-[88%] mx-auto p-6 my-10 shadow-md ${border}`}>
            <Image className="rounded-full -mt-11" src={data.logo} width="45" height="45">

            </Image>
            <h2 className="text-cyan font-bold my-2">
                {data.company}
                {newTag}
                {featuredTag}
            </h2>
            <h1 className="font-bold my-2" >{data.position}</h1>
            <span className="font-semibold text-gray my-2">{data.postedAt} &#x2022; {data.contract} &#x2022; {data.location}</span>
            <hr className="border-gray  my-4"></hr>
            <div className="flex flex-wrap gap-4">{tags}</div>
        </div>
    );
}