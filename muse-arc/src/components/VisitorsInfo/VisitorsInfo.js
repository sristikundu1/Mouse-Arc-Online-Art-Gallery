"use client";
import visitorImg from '@/assests/visitor.jpg'
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';

const VisitorsInfo = () => {
    return (
        <div className='flex flex-col md:flex md:flex-row'>
            <div className='flex-1'>
                <Image className='object-cover' width={700} height={700} src={visitorImg} alt='visitorImage' />
            </div>
            <div className='bg-black flex-1 px-16 py-16'>
                <h2 className='text-[#fefae0] text-4xl font-extrabold text-center mb-28 '>Visitor Info</h2>
                <h2 className='text-[#dde5b6] text-xl font-medium text-left pb-4'>Admission Prices</h2>
                <hr />
                <div className='text-[#adb5bd] flex gap-5 pt-5 items-center text-2xl justify-between'>
                    <h2>Adults</h2>
                    <p>50.00 TK</p>
                </div>
                <div className='text-[#adb5bd] flex gap-5 pt-5 items-center text-2xl justify-between'>
                    <h2>Groups (10 max)</h2>
                    <p>30.00 TK</p>
                </div>
                <div className='text-[#adb5bd] flex gap-5 py-5 items-center text-2xl justify-between'>
                    <h2>Youth 19 - 24</h2>
                    <p>20.00 TK</p>
                </div>

                <hr />

                <h2 className='text-[#dde5b6] text-xl font-medium text-left pb-4 pt-16'>Opening Hours</h2>

                <hr />
                <div className='text-[#adb5bd] flex gap-5 pt-5 items-center text-2xl justify-between'>
                    <h2>Wednesday - <br /> Saturday</h2>
                    <p>10 a.m. – 5 p.m.</p>
                </div>
                <div className='text-[#adb5bd] flex gap-5 pt-5 items-center text-2xl justify-between'>
                    <h2>Friday</h2>
                    <p>11 a.m. – 5 p.m.</p>
                </div>

                <Box className='flex gap-3 justify-left items-center mt-28'>
                    <p className='text-[#fefae0]'>Buy Ticket</p>
                    <IconButton sx={{ color: '#fefae0' }}>
                        <ArrowForwardIcon></ArrowForwardIcon>
                    </IconButton>
                </Box>
            </div>

        </div>
    );
};

export default VisitorsInfo;