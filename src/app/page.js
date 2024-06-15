"use client";
import Image from "next/image";
import {useState} from "react";

import TagContainer from "@/app/components/TagContainer.js";
import JobCard from "@/app/components/JobCard.js";

import jobsData from "@/app/data.json" assert {type: "json"};

export default function Home() {
    const [tags, setTags] = useState(new Set(["Frontend", "CSS", "JavaScript"]));
    // const [tags, setTags] = useState(new Set([]));

    function addTag(tag) {
        setTags(new Set([...tags, tag]));
    }
    const jobCards = jobsData
        .filter(jobData => {
            return [...tags].every(tag => {
                return [
                    jobData.role,
                    jobData.level,
                    ...jobData.languages,
                    ...jobData.tools,
                ].includes(tag);
            });
        })
        .map((jobData) => {
            return <JobCard key={jobData.id} data={jobData} addTag={addTag}></JobCard>;
        });

    return (
        <main className="font-league-spartan">
            <div className="w-[87%] md:w-[77%] max-w-6xl mx-auto">
                <TagContainer tags={tags} setTags={setTags}></TagContainer>
                <div className="mt-14 md:mt-20">
                    {jobCards}
                </div>
            </div>

            {/* <div className="bg-cyan w-32 h-2"></div>
            <div className="bg-light-gray-bg w-32 h-2"></div>
            <div className="bg-light-gray w-32 h-2"></div>
            <div className="bg-gray w-32 h-2"></div>
            <div className="bg-dark-gray w-32 h-2"></div> */}
        </main>
    );
}
