"use client"
import Image from "next/image";
import {useState} from "react";

import TagContainer from "@/app/components/TagContainer.js";
import JobCard from "@/app/components/JobCard.js";

import jobsData from '@/app/data.json' assert { type: 'json' };

export default function Home() {
    let [tags, setTags] = useState(new Set(["Frontend", "CSS", "Javascript"]));

    function addTag(tag) {
        setTags([...tags, tag])
    }
    const jobCards = jobsData.map(jobData => {
        return (
            <JobCard data={jobData} addTag={addTag}></JobCard>
        );
    });

    return (
        <main className="font-league-spartan">
            <TagContainer tags={tags} setTags={setTags}></TagContainer>
            
            {/* <div className="bg-cyan w-32 h-2"></div>
            <div className="bg-light-gray-bg w-32 h-2"></div>
            <div className="bg-light-gray w-32 h-2"></div>
            <div className="bg-gray w-32 h-2"></div>
            <div className="bg-dark-gray w-32 h-2"></div> */}

            {jobCards}
            
        </main>
    );
}
