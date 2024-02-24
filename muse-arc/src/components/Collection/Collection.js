"use client";

import { Box, IconButton } from "@mui/material";
import LayoutGrid from "../ui/layout-grid";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import React, { useState, useRef, useEffect } from "react";


const SkeletonOne = () => {
    return (
        <div>
           <p className="font-bold text-4xl text-[#caf0f8]">Whispers in the Wind</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-extrabold text-2xl my-4 max-w-lg text-neutral-200">
            Artist:<span className="font-bold text-xl">Michael Chang</span>
            </p>
            <p className="text-[#fefae0]">Genre: Contemporary Realism</p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-[#caf0f8]">Starry Night</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-extrabold text-2xl my-4 max-w-lg text-neutral-200">
            Artist:<span className="font-bold text-xl"> Vincent van Gogh</span>
            </p>
            <p className="text-[#fefae0]">Genre: Post-Impressionism</p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-[#caf0f8]">Echoes of Serenity</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-extrabold text-2xl my-4 max-w-lg text-neutral-200">
            Artist:<span className="font-bold text-xl"> Isabella Rodriguez</span>
            </p>
            <p className="text-[#fefae0]">Genre: Abstract Expressionism</p>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>
           <p className="font-bold text-4xl text-[#caf0f8]">The Last Supper</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-extrabold text-2xl my-4 max-w-lg text-neutral-200">
            Artist:<span className="font-bold text-xl"> Leonardo da Vinci</span>
            </p>
            <p className="text-[#fefae0]">Genre: Renaissance</p>
        </div>
    );
};
const SkeletonFive = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-[#caf0f8]">Whispers of the Sea</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-extrabold text-2xl my-4 max-w-lg text-neutral-200">
            Artist:<span className="font-bold text-xl"> Sebastian Gomez</span>
            </p>
            <p className="text-[#fefae0]">Genre: Marine Art</p>
        </div>
    );
};
const SkeletonSix = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-[#caf0f8]">The Persistence of Memory</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-extrabold text-2xl my-4 max-w-lg text-neutral-200">
            Artist:<span className="font-bold text-xl"> Salvador Dalí</span>
            </p>
            <p className="text-[#fefae0]">Genre: Surrealism</p>
        </div>
    );
};
const SkeletonSeven = () => {
    return (
        <div>
              <p className="font-bold text-4xl text-[#caf0f8]">Guernica</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-extrabold text-2xl my-4 max-w-lg text-neutral-200">
            Artist:<span className="font-bold text-xl"> Pablo Picasso</span>
            </p>
            <p className="text-[#fefae0]">Genre: Cubism</p>
        </div>
    );
};
const SkeletonEight = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-[#caf0f8]">The Night Watch</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-extrabold text-2xl my-4 max-w-lg text-neutral-200">
            Artist:<span className="font-bold text-xl"> Rembrandt</span>
            </p>
            <p className="text-[#fefae0]">Genre: Baroque</p>
        </div>
    );
};


const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2",
        thumbnail:
            "https://img.freepik.com/premium-photo/whispers-wind_670382-58220.jpg",
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail:
            "https://images.saatchiart.com/saatchi/2173367/art/10205545/9268283-VXYHPXOK-7.jpg",
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail:
            "https://d7hftxdivxxvm.cloudfront.net/?height=332&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F3m9Y6dRHPpi9f6CNMr617Q%2Flarger.jpg&width=445",
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2",
        thumbnail:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/The-Last-Supper-Restored-Da-Vinci_32x16.jpg/2560px-The-Last-Supper-Restored-Da-Vinci_32x16.jpg",
    },
    {
        id: 5,
        content: <SkeletonFive />,
        className: "md:col-span-2",
        thumbnail:
            "https://www.singulart.com/images/artworks/v2/cropped/19529/main/zoom/1852525_0d0b75b34f6932396265ede2f02bf592.jpeg",
    },
    {
        id: 6,
        content: <SkeletonSix />,
        className: "md:col-span-1",
        thumbnail:
            "https://www.singulart.com/blog/wp-content/uploads/2019/08/the-persistence-of-memory-1931.jpg",
    },
    {
        id: 7,
        content: <SkeletonSeven />,
        className: "md:col-span-1",
        thumbnail:
            "https://media.artsper.com/artwork/2054688_1_l.jpg",
    },
    {
        id: 8,
        content: <SkeletonEight />,
        className: "md:col-span-2",
        thumbnail:
            "https://www.singulart.com/blog/wp-content/uploads/2019/10/nightwatch2.jpg",
    },
];

const Collection = () => {

    return (
        <div className="bg-[#f8edeb] py-20 pb-32">
            <div className='flex justify-between items-center border-b-2 border-black pb-4 lg:max-w-6xl mx-auto '>
                <h2 className='text-4xl font-bold text-[#654321]'>Collection</h2>
                <Box className='flex gap-3 justify-center items-center'>
                    <p>View All Collections</p>
                    <IconButton sx={{ color: 'black' }}>
                        <ArrowForwardIcon></ArrowForwardIcon>
                    </IconButton>
                </Box>
            </div>
            <div className="h-screen py-20 w-full">
                <LayoutGrid cards={cards} />
            </div>
        </div>
    );
};



export default Collection;