import { useRef } from 'react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../src/styles.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { ImLocation } from "react-icons/im";

export default function Banner() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='h-screen md:h-[800px] relative flex justify-center items-center'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#ccd7af',
                    '--swiper-pagination-color': '#ccd7af',
                }}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/5FtLsVC/Rangamati.jpg" className='relative object-cover object-center' alt="" />
                    <div className='absolute p-5 w-2/3 md:w-1/3 text-base-content backdrop-blur-sm bg-base-100/10 md:top-20 flex flex-col items-center md:right-10'>
                        <div className='flex items-center md:gap-x-1 font-extrabold text-[#617540]'>
                            <ImLocation className='h-7 w-7'></ImLocation>
                            <h1 className='text-base md:text-3xl'>Rangamati, Bangladesh</h1>
                        </div>
                        <br />
                        <p className='font-medium'>Explore the serene beauty of Rangamati, Bangladesh. From shimmering lakes to lush hills, it's a paradise for nature lovers.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/BtnGMW9/Kuala-Lumpur-Malaysia.jpg" className='object-cover object-center' alt="" />
                    <div className='absolute p-5 w-2/3 md:w-1/3 text-base-content backdrop-blur-sm bg-base-100/10 md:top-20 flex flex-col items-center md:left-10'>
                        <div className='flex items-center md:gap-x-1 font-extrabold text-[#617540]'>
                            <ImLocation className='h-7 w-7'></ImLocation>
                            <h1 className='text-base md:text-3xl'>Kuala Lumpur, Malaysia</h1>
                        </div>
                        <br />
                        <p className='font-medium'>Immerse yourself in the vibrant culture of Kuala Lumpur, Malaysia. Iconic landmarks, delicious street food, and bustling markets await.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/JBv3MVd/Ha-Long-Bay-Vietnam-B1.jpg" className='object-cover object-center' alt="" />
                    <div className='absolute p-5 w-2/3 md:w-1/3 text-base-content backdrop-blur-sm bg-base-100/10 md:top-20 flex flex-col items-center md:right-10'>
                        <div className='flex items-center md:gap-x-1 font-extrabold text-[#617540]'>
                            <ImLocation className='h-7 w-7'></ImLocation>
                            <h1 className='text-base md:text-3xl'>Ha Long Bay, Vietnam</h1>
                        </div>
                        <br />
                        <p className='font-medium'>Cruise through the breathtaking beauty of Ha Long Bay, Vietnam. Limestone karsts, hidden caves, and tranquil bays beckon.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/26pjG7J/Koh-Samui-Thailand.jpg" className='object-cover object-center' alt="" />
                    <div className='absolute p-5 w-2/3 md:w-1/3 text-base-content backdrop-blur-sm bg-base-100/10 md:top-20 flex flex-col items-center md:left-10'>
                        <div className='flex items-center md:gap-x-1 font-extrabold text-[#617540]'>
                            <ImLocation className='h-7 w-7'></ImLocation>
                            <h1 className='text-base md:text-3xl'>Koh Samui, Thailand</h1>
                        </div>
                        <br />
                        <p className='font-medium'>Indulge in tropical bliss on Koh Samui's pristine beaches. Crystal-clear waters, palm-fringed shores, and stunning sunsets await.</p>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
            <div className='absolute z-10 h-44 md:h-56 w-44 md:w-56 p-5 -bottom-28 rounded-full border-2 border-[#657a42] bg-[#ccd7af] flex justify-center items-center shadow-lg'>
                <p className='text-center text-base md:text-xl text-[#657a42] font-bold'>
                    Traveling – it leaves you speechless, then turns you into a storyteller
                </p>
            </div>
        </div>
    );
}