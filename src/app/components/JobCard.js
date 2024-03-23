export default function JobContainer({data}) {
    const tags = [data.role, data.level, ...data.languages, ...data.tools].map(tag => {
        return (
            <span className="rounded-md bg-light-gray text-lg font-bold align-sub text-cyan px-3 inline-block">{tag}</span>
        );
    });
    return (
        <div className="rounded-md bg-white w-[88%] mx-auto p-4 my-10">
            {/* <Image>

            </Image> */}
            <h2>
                {data.company}
                <span>{data.new ? "NEW!" : null}</span>
                <span>{data.featured ? "FEATURED!" : null}</span>
            </h2>
            <h1>{data.position}</h1>
            <span>{data.postedAt} &#x2022; {data.contract} &#x2022; {data.location}</span>
            <hr></hr>
            <div className="">{tags}</div>
        </div>
    );
}