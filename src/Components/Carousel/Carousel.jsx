// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';




const Carousel = () => {
    const isWideScreen = window.innerWidth > 640;

    return (
        <div className='carousel-container justify-center m-auto tablet:w-11/12 mobile1:w-full'>
            <h1 className="text-base font-bold mt-9 mb-3 tablet:text-2xl">Peça do conforto da sua casa</h1>


            <Swiper
                breakpoints={{
                    //if width > ?
                    200: {
                        slidesPerView: 4,
                    },
                    640: {
                        slidesPerView: 7,
                    },
                    900: {
                        slidesPerView: 8,
                    },
                    1020: {
                        slidesPerView: 10,
                    },
                    1280: {
                        slidesPerView: 12,
                    },
                }}
                spaceBetween={8}
                pagination={{
                    type: "progressbar",
                }}
                navigation={isWideScreen} // Ativa a navegação somente quando for maior que 640
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className="rounded-full w-full" src="https://picsum.photos/800/600?1" /></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src="https://picsum.photos/800/600?2" /></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src="https://picsum.photos/800/600?3" /></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src="https://picsum.photos/800/600?4" /></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src="https://picsum.photos/800/600?5" /></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src="https://picsum.photos/800/600?6" /></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src="https://picsum.photos/800/600?7" /></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src="https://picsum.photos/800/600?8" /></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src="https://picsum.photos/800/600?9" /></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src="https://picsum.photos/800/600?10" /></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src="https://picsum.photos/800/600?11" /></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src="https://picsum.photos/800/600?12" /></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src="https://picsum.photos/800/600?13" /></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src="https://picsum.photos/800/600?14" /></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src="https://picsum.photos/800/600?15" /></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src="https://picsum.photos/800/600?16" /></SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Carousel