"use client";

import { Box, Button, IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from "next/image";
import InfoIcon from '@mui/icons-material/Info';
import Divider from '@mui/material/Divider';



const EventPrograms = () => {
    return (
        <div className="text-[#f1faee] px-10 py-20 md:py-20">
            <div className='flex justify-between items-center border-b-2 border-black pb-4 lg:max-w-6xl mx-auto '>
                <h2 className='text-4xl font-bold text-[#654321]'>Events & Programs</h2>
                <Box className='flex gap-3 justify-center items-center '>
                    <p className="text-[#7f5539]">See All Events</p>
                    <IconButton sx={{ color: 'black' }}>
                        <ArrowForwardIcon></ArrowForwardIcon>
                    </IconButton>
                </Box>
            </div>

           
                <div className="px-20 py-14">
                    <div className=" mb-5 flex flex-col md:flex md:flex-row gap-4">
                        <div className="flex flex-col">
                            <div className="flex gap-3 items-end">
                                <p className="text-5xl text-[#ddb892] font-extrabold">11</p>
                                <h2 className="text-black ">May</h2>
                            </div>
                            <p className="text-[#555b6e] text-xl">MONDAY</p>
                        </div>
                        <div className="mx-20">
                            <Image className="object-cover" width={100} height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/161px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" alt="eventImg" />
                        </div>
                        <div>
                            <p className="text-xl text-[#284b63]">Talk</p>
                            <h2 className="font-bold text-4xl text-[#16697a]">Artist Talk: Leonardo da Vinci</h2>
                            <p className="text-sm text-[#7d8597] mb-5 mt-3">May 31, 2024 - 9:00 AM - June 5, 2024 - 7:00 AM</p>
                            <Button sx={{ color: '#036666' }} variant="outlined" startIcon={<InfoIcon />}>
                                Details
                            </Button>
                        </div>
                    </div>
                    <Divider />
                </div>
                <div className="px-20 py-14">
                    <div className=" mb-5 flex flex-col md:flex md:flex-row gap-4">
                        <div className="flex flex-col">
                            <div className="flex gap-3 items-end">
                                <p className="text-5xl text-[#ddb892] font-extrabold">01</p>
                                <h2 className="text-black ">APRIL</h2>
                            </div>
                            <p className="text-[#555b6e] text-xl">MONDAY</p>
                        </div>
                        <div className="mx-20">
                            <Image className="object-cover" width={100} height={50} src="https://d3d00swyhr67nd.cloudfront.net/w800h800/collection/NTII/ATT/NTII_ATT_608953-001.jpg" alt="eventImg" />
                        </div>
                        <div>
                            <p className="text-xl text-[#284b63]">Film Screening</p>
                            <h2 className="font-bold text-4xl text-[#16697a]">Film Screening: Art Through the Ages</h2>
                            <p className="text-sm text-[#7d8597] mb-5 mt-3">APRIL 01, 2024 - 4:00 PM - APRIL 5, 2024 - 9:00 PM </p>
                            <Button sx={{ color: '#036666' }} variant="outlined" startIcon={<InfoIcon />}>
                                Details
                            </Button>
                        </div>
                    </div>
                    <Divider />
                </div>

                <div className="px-20 py-14">
                    <div className="mb-5 flex flex-col md:flex md:flex-row gap-4 ">
                        <div className="flex flex-col">
                            <div className="flex gap-3 items-end">
                                <p className="text-5xl text-[#ddb892] font-extrabold">17</p>
                                <h2 className="text-black ">MARCH</h2>
                            </div>
                            <p className="text-[#555b6e] text-xl">THURSDAY</p>
                        </div>
                        <div className="mx-20">
                            <Image className="object-cover" width={100} height={50} src="https://lh3.googleusercontent.com/proxy/VyL7nxmhytapO8ZwIbCZNobklbCX7aFoQtXm47rVHCuyqExxBZtY1hZhdwRLDtfsWSM6hYbX4flyaAmbNKPxPIGfBBw3KQ63Zk2ZQjd8fuxJ78tCWxf5R2tTpFHmyD9nPivKqQ5ZlYssfWjusFjROVDtdvsk7MtH5uyIzHjEQbSPlqOWZ1vn3tm2cLmROA" alt="eventImg" />
                        </div>
                        <div>
                            <p className="text-xl text-[#284b63]">Auction</p>
                            <h2 className="font-bold text-4xl text-[#16697a]">Art Auction: Modern Masterpieces</h2>
                            <p className="text-sm text-[#7d8597] mb-5 mt-3">March 17, 2022 - 11:00 AM - March 31, 2022 - 1:00 PM</p>
                            <Button sx={{ color: '#036666' }} variant="outlined" startIcon={<InfoIcon />}>
                                Details
                            </Button>
                        </div>
                    </div>
                    <Divider />
                </div>
            </div>

      
    );
};

export default EventPrograms;