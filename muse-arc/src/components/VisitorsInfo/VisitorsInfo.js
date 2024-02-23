"use client";
import visitorImg from '@/assests/visitor.jpg'
import Image from 'next/image';

const VisitorsInfo = () => {
    return (
        <div>
            <div>
                <Image className='object-cover' width={400} height={700} src={visitorImg} alt='visitorImage'/>
            </div>
            
        </div>
    );
};

export default VisitorsInfo;