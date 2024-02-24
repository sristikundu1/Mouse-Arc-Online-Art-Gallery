"use client";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CoffeeIcon from '@mui/icons-material/Coffee';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Services = () => {
    return (
        <div className="bg-[#f0ead2] py-20">
            <h2 className='text-[#654321] text-4xl font-extrabold text-center mb-28 '>Services</h2>

            <div className='flex flex-col md:flex md:flex-row justify-evenly items-center'>
                <Box className='w-80 flex gap-3 justify-left items-center border-b-2 border-stone-500 md:w-[500px] mb-10'>
                    <IconButton sx={{ color: '#bc6c25', size: 'large'}}>
                        <MusicNoteIcon></MusicNoteIcon>
                    </IconButton>
                    <p className='text-2xl'>Audioguide</p>
                </Box>
                <Box className='w-80 flex gap-3 justify-left items-center border-b-2 border-stone-500 md:w-[500px] mb-10'>
                    <IconButton sx={{ color: '#bc6c25', size: 'large'}}>
                        <CameraAltIcon></CameraAltIcon>
                    </IconButton>
                    <p className='text-2xl'>Photography</p>
                </Box>
                
            </div>
            <div className='flex flex-col md:flex md:flex-row justify-evenly items-center '>
                <Box className='w-80 flex gap-3 justify-left items-center border-b-2 border-stone-500 md:w-[500px] mb-10'>
                    <IconButton sx={{ color: '#bc6c25', size: 'large'}}>
                        <CoffeeIcon></CoffeeIcon>
                    </IconButton>
                    <p className='text-2xl'>Restaurant and Cafe</p>
                </Box>
                <Box className='w-80 flex gap-3 justify-left items-center border-b-2 border-stone-500 md:w-[500px] mb-10'>
                    <IconButton sx={{ color: '#bc6c25', size: 'large'}}>
                        <AddShoppingCartIcon></AddShoppingCartIcon>
                    </IconButton>
                    <p className='text-2xl'>Shop</p>
                </Box>
                
            </div>

        </div>
    );
};

export default Services;