"use client";

import { Box, IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const EventPrograms = () => {
    return (
        <div className="text-[#f1faee]">
             <div className='flex justify-between items-center border-b-2 border-black pb-4 lg:max-w-6xl mx-auto '>
                <h2 className='text-4xl font-bold text-[#654321]'>Events & Programs</h2>
                <Box className='flex gap-3 justify-center items-center'>
                    <p>See All Events</p>
                    <IconButton sx={{ color: 'black' }}>
                        <ArrowForwardIcon></ArrowForwardIcon>
                    </IconButton>
                </Box>
            </div>
            
        </div>
    );
};

export default EventPrograms;