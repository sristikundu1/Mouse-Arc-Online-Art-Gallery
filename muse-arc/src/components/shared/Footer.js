import logo from '@/assests/logo.png'
import { Box, IconButton, Stack, dividerClasses } from '@mui/material';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='max-w-6xl mx-auto'>
            <div className='xs:flex xs:flex-col xs:justify-center xs:items-center md:flex justify-center items-center gap-36 mb-5'>
                <div className='lg:mr-44'>
                    <Image src={logo} width={150} height={150} alt='logo' />
                    <h2 className='text-3xl mb-5 text-[#fefae0]'>Online Art Gallery</h2>
                    <p className='text-sm text-[#dde5b6] mb-2'>34th Ave, Queens, NY 11106</p>
                    <p className='text-sm text-[#dde5b6]'>+(880) 1234598745</p>
                </div>
                <div className='flex flex-col '>
                    <h2 className='text-2xl mb-5 text-[#fefae0]'>Links</h2>
                    <a className='text-sm hover:underline hover:cursor-pointer text-[#dde5b6] mb-2'>Home</a>
                    <a className='text-sm hover:underline hover:cursor-pointer text-[#dde5b6] mb-2'>Artist Profiles</a>
                    <a className='text-sm hover:underline hover:cursor-pointer text-[#dde5b6]'>Contact Us</a>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-2xl mb-5 text-[#fefae0]'>Info</h2>
                    <a className='text-sm hover:underline hover:cursor-pointer text-[#dde5b6] mb-2'>About</a>
                    <a className='text-sm hover:underline hover:cursor-pointer text-[#dde5b6] mb-2'>Blog</a>
                    <a className='text-sm hover:underline hover:cursor-pointer text-[#dde5b6]'>Shop</a>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-2xl mb-5 text-[#fefae0]'>Legal</h2>
                    <a className='text-sm hover:underline hover:cursor-pointer text-[#dde5b6] mb-2'>Terms of use</a>
                    <a className='text-sm hover:underline hover:cursor-pointer text-[#dde5b6] mb-2'>Privacy policy</a>
                    <a className='text-sm hover:underline hover:cursor-pointer text-[#dde5b6]'>Cookie policy</a>
                </div>

            </div>
            <hr />
            <div className='flex justify-between mt-5'>
                <Box>
                  <Stack direction="row">
                  <IconButton sx={{ color: '#1877f2',fontSize: '24px'  }}>
                        <FacebookIcon></FacebookIcon>
                    </IconButton>
                    <IconButton sx={{ fontSize: '24px' }}>
                        <InstagramIcon className='bg-gradient-to-br from-[#405DE6] to-[#833AB4]'></InstagramIcon>
                    </IconButton>
                    <IconButton sx={{ color: '#0a66c2' ,fontSize: '24px'}}>
                        <LinkedInIcon></LinkedInIcon>
                    </IconButton>
                  </Stack>
                </Box>
                <h2 className='text-sm text-[#dde5b6] mb-2'> <span className='text-[#fefae0]'>MuseArt</span> © 2024. ALL RIGHTS RESERVED</h2>

            </div>
        </div>
        </div>
    );
};

export default Footer;