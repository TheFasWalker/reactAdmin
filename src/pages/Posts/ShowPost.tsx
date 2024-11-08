import { FC, useEffect, useRef, useState } from "react";
import { CreateEditHeader } from "../../components/general/CreateEditHeader";
import { useParams } from "react-router-dom";
import { Trash } from "../../components/ui/buttons/Trash";
import { Edit } from "../../components/ui/buttons/Edit";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css'
import noImage from '../../assets/noimage.png'

const postData =
{
    id: '11',
    description: "Некоторые породы кошек имеют свои уникальные особенности. Например, сиамские кошки известны своим характерным окрасом и громким голосом. Они очень общительны и требуют много внимания от своих владельцев.",
    images: [
        'https://s0.bloknot-voronezh.ru/thumb/850x0xcut/upload/iblock/509/0d1587dc21_7605080_8213488.jpg',
        'https://shansonline.ru/media/k2/items/cache/629f7e60ef7770800d94efc58b4ba79f_XL.jpg',
        'https://masterpiecer-images.s3.yandex.net/5f99831035d01c8:upscaled',
        'https://news.store.rambler.ru/img/865952f77b214170ac4054cf276d9256?img-1-resize=width%3A1280%2Cheight%3A960%2Cfit%3Acover&img-format=auto',
        'https://avatars.dzeninfra.ru/get-zen_doc/50840/pub_5d6741b18600e100ad3fca54_5d67433a028d6800ad0a2dc2/scale_1200',
    ]
}


export const ShowPost: FC = () => {
    const { id } = useParams();
    const swiperRef = useRef<any>(null); // Create a ref for the Swiper instance
    const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex); // Update active index on slide change
    };

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.on('slideChange', handleSlideChange);
        }
    }, []);
    return (
        <div className=" relative">
            <CreateEditHeader
                title='Просмотр поста' />
            <span>ItemId: {id}</span>
            <div className="grid grid-cols-[500px_1fr]">
                {postData.images.length >= 3 && (
                    <div className="w-full h-[500px]">

                        <Swiper
                            ref={swiperRef}
                            spaceBetween={10}
                            slidesPerView={1}
                            pagination={{ clickable: true }}>
                            {postData.images.map((image,index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-full h-full flex justify-center items-center " >
                                    <img className="" src={image} alt="" />
                                    </div>
                                    </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className=" flex gap-3 items-center">
                            {postData.images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`h-3 w-3   rounded-full ${activeIndex === index ? 'bg-blue-700' : 'bg-blue-300 hover:bg-blue-500'}`}
                                    onClick={() => swiperRef.current.swiper.slideTo(index)}
                                />
                            ))}
                        </div>

   
                    </div>
                )}
                {postData.images.length < 3 && postData.images.length != 0 && (
                    <div className="w-full flex flex-col gap-2">
                        {postData.images.map((image,index) => (
                            <img key={index} src={image} alt="" />
                        ))}

                    </div>
                )}
                {
                    postData.images.length == 0 && (
                        <div className="w-full flex items-center justify-center">
                            <img src={noImage} alt="" />
                        </div>

                    )

                }
                <div className=" px-3">{postData.description}</div>
            </div>
            <div className=" flex gap-3 absolute top-3 right-3">
                <Trash />
                <Edit />
            </div>
        </div>
    )
}
<style>

</style>