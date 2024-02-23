"use client";

import { Box } from "@mui/material";
import Navbar from "./shared/Navbar";
import bannerImage from '@/assests/banner.png'

const Banner = () => {
    return (
        <>
            {/* <div className="min-h-screen" style={{ backgroundImage: `url(${bannerImage})` }} > */}

            <Box
                component="div"
                sx={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh', // Set minimum height to fill the viewport
                }}
            >
                {/* Your content */}
                <Navbar></Navbar>
            </Box>
            {/* </div> */}

        </>
    );
};

export default Banner;