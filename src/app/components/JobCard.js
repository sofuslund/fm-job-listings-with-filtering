import Image from "next/image";

export default function JobCard({data, addTag}) {
    const tags = [data.role, data.level, ...data.languages, ...data.tools].map(tag => {
        return (
            <span onClick={()=>{addTag(tag)}} className="rounded-md bg-light-gray hover:bg-cyan text-[1.05rem] font-bold align-sub text-cyan hover:text-white px-2 py-0.5 inline-block cursor-pointer">{tag}</span>
        );
    });

    const border = data.featured ? "border-cyan box-border border-l-[.35rem]" : "";
    
    const newTag = data.new ? <span className="bg-cyan mr-2 ml-6 text-white rounded-2xl px-2 pt-2 pb-1">NEW!</span> : null;
    const featuredTag = data.featured ? <span className="bg-dark-gray text-white rounded-2xl px-2 pt-2 pb-1">FEATURED</span> : null;

    return (
        <div className={`rounded-md bg-white w-[88%] max-w-6xl mx-auto py-6 px-5 md:px-12 my-10 shadow-md md:flex gap-5 items-center justify-between ${border}`}>
            <div className="md:flex items-center flex-shrink-0 gap-6">
                <Image className="rounded-full -mt-11 md:mt-0 md:w-20 md:h-20" src={data.logo} width="48" height="48">
                </Image>
                <div>
                    
                    <h2 className="text-cyan font-bold my-2">
                        {data.company}
                        {newTag}
                        {featuredTag}
                    </h2>
                    <h1 className="font-bold my-2 text-lg hover:text-cyan cursor-pointer" >{data.position}</h1>
                    <span className="font-semibold text-gray my-2">{data.postedAt} &#x2022; {data.contract} &#x2022; {data.location}</span>
                    <hr className="border-gray my-4 md:hidden"></hr>
                </div>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end flex-shrink-[1]">{tags}</div>
        </div>
    );
}