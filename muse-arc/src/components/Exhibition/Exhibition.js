"use client";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import exhibitionImg from '@/assests/upcomingExhibition.jpg'

const Exhibition = () => {
    return (
        <div className="bg-[#f0ead2] py-20">
            <div className='flex justify-between items-center border-b-2 border-black pb-4 lg:max-w-6xl mx-auto '>
                <h2 className='text-4xl font-bold text-[#654321]'>Upcoming Exhibitions</h2>
                <Box className='flex gap-3 justify-center items-center'>
                    <p>View All Exhibitions</p>
                    <IconButton sx={{ color: 'black' }}>
                        <ArrowForwardIcon></ArrowForwardIcon>
                    </IconButton>
                </Box>
            </div>
            <div className=' max-w-6xl mx-auto'>

                <Image className='object-cover mt-10' width={1200} height={600} src={exhibitionImg} alt='UpcomingExhibitionImage' />
            </div>

        </div>
    );
};

export default Exhibition;