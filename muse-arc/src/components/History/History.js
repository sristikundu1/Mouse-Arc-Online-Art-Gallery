"use client";

import { Button } from "@mui/material";
import Image from "next/image";
import historyImg from '@/assests/historybg.jpg'
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Muse-Arc transcends mere digital presence; it is an odyssey through the corridors of creativity. Here, we unearth the narratives woven into the fabric of artistry, spanning epochs and geographies. Each stroke of a brush, each sculpted form, and each captured moment carries with it a story—a testament to human imagination and fervor. From the ancient echoes to the modern-day marvels, our mission is to illuminate the myriad perspectives, movements, and innovations that have sculpted our cultural terrain. With an unwavering dedication to honoring art in its myriad forms, Muse-Arc invites you to immerse yourself in a journey of discovery, celebrating the legacy of artistic inspiration.`;

const History = () => {
    return (
        <div className="relative h-[1300px] md:h-[900px]">
            <Image className=' object-cover' src={historyImg} alt='historyImg' fill={true} />
            
            <div className="absolute text-center px-2 pt-24 md:text-center md:pt-48 md:px-5 lg:text-right  lg:top-3.5 lg:left-96 lg:right-16">
                <h2 className="text-3xl md:text-5xl mb-10 text-[#4f000b] font-bold">Exploring the Legacy of Creativity</h2>
                
                <TextGenerateEffect className="font-serif text-sm" words={words} />

                <Button variant="contained" color="success" className="bg-[#6a040f] mt-14">
                    More About
                </Button>
            </div>

        </div>
    );
};

export default History;