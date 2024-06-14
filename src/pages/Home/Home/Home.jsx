import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, } from "swiper";
import Slide from "../../../components/Slide/Slide";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slider_1 from '../../../assets/SwiperSlide/slider-banner-1.png'
import slider_2 from '../../../assets/SwiperSlide/slider-banner-2.png'
import SomeInstructors from "../SomeInstructors/SomeInstructors";
import PopularClasses from "../PopularClasses/PopularClasses";
import SomeText from "../SomeText/SomeText";


const Home = () => {
    return (
        <>
        <div className="">
            <div className="w-10/12 mx-auto ">
                <Swiper
                    spaceBetween={50}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}

                    pagination={{
                        dynamicBullets: true,
                    }}


                    modules={[Autoplay, Pagination,]}
                    className="mySwiper "
                >
                    <SwiperSlide> <Slide photo={slider_2} subHeading=" A Journey to Discover New Horizons" Heading="Exploring the Wonders of Language Learning" title="Welcome to the fascinating world of language learning! Whether you're embarking on this journey for personal enrichment, academic purposes, or to communicate with people from diverse cultures, learning a new language opens up a multitude of opportunities. In this text, we'll delve into the benefits, challenges, and effective strategies for mastering a foreign tongue." ></Slide>  </SwiperSlide>
                    <SwiperSlide> <Slide photo={slider_1} subHeading=" A Journey to Discover New Horizons " Heading="Why Learn a New Language?" title='Learning a new language has numerous advantages that extend beyond the ability to communicate. It enhances cognitive abilities, boosts memory, and improves problem-solving skills. Moreover, it broadens your perspective by immersing you in a different culture and fostering empathy and understanding. Additionally, it opens doors to professional opportunities, increases employability, and facilitates international travel.'></Slide>  </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <SomeInstructors></SomeInstructors>
        <PopularClasses></PopularClasses>
        <SomeText></SomeText>
        </>

    );
};

export default Home;