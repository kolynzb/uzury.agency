"use client"
import type {SanityImageSource} from "@sanity/image-url/lib/types/types";
import {SanityImage} from "@/components/blocks/sanity-image";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";


interface ImageData {
    asset: SanityImageSource;
    alt: string;
    caption?: string;
}
interface GalleryProps {
    display: "block"|"grid"|"slider";
    title: string;
    images:  ImageData[];
}

export const GalleryBlock = (props: GalleryProps) => {
    const { display, title, images } = props;

    switch (display) {
        case "grid":
            return (<div className="row">
                    {images.map((image, i) => (
                        <div key={i} className="col-12 col-md-6 col-lg-4 mb-4">
                            <SanityImage {...image} />
                        </div>
                    ))}
                </div>);
        case "slider":
            return (<>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    // modules={[Pagination]}
                className=""
            >
                {images.map((image, i) => (
                    <SwiperSlide key={i}>
                        <SanityImage {...image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>);

        default:
            return(  <>
                {images.map((image, i) => ( <SanityImage key={i} {...image} />))}
            </>);
    }
};
