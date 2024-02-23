"use client";

import Image from 'next/image';
import bannerImg from '@/assests/banner.png'
import Navbar from '../shared/Navbar';
import { Button } from '@mui/material';
import { TypewriterEffectSmooth } from '../ui/typewriter-effect';


const Banner = () => {
    const words = [
        {
            text: "Muse-Arc:",
            className: "text-[#a8dadc]",
        },
        {
            text: "A",
            className: "text-[#fefae0]"
        },
        {
            text: "Haven",
            className: "text-[#fefae0]"
        },
        {
            text: "for",
            className: "text-[#fefae0]"
        },
        {
            text: "Artistic",
            className: "text-[#fefae0]"

        },
        {
            text: "Discovery",
            className: "text-[#fefae0]"
        },
    ];
    return (

        <div className='relative h-[550px]'>

            <Image className='object-cover' src={bannerImg} alt='bannerImg' fill={true} />
            <div className='absolute inset-0 bg-black opacity-50'></div>

            <div>
                <Navbar></Navbar>
            </div>

            <div className='absolute top-1/3 max-w-6xl mx-auto text-center'>

               <div className='pl-14 lg:pl-28'>
               <TypewriterEffectSmooth words={words} />
               </div>

                <p className='xs:text-sm my-4 text-[#e9edc9] text-center md:text-xl md:text-center'>Explore the Beauty, Discover the Stories, Immerse Yourself in Art.</p>

                <Button variant="outlined" className='hover: bg-[#003049]'
                    style={{
                        color: '#fdf0d5'
                    }}
                > View Exhibitions</Button>
            </div>


        </div>
    );
};

export default Banner;