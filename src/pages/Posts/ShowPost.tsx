import { FC } from "react";
import { CreateEditHeader } from "../../components/general/CreateEditHeader";
import { useParams } from "react-router-dom";
import { Trash } from "../../components/ui/buttons/Trash";
import { Edit } from "../../components/ui/buttons/Edit";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

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
    return (
        <div className=" relative">
            <CreateEditHeader
                title='Просмотр поста' />
            <span>ItemId: {id}</span>
            <div className="grid grid-cols-[500px_1fr]">
                <div className="w-full h-500">
                    <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                        {postData.images.map(image=>(
                            <SwiperSlide><img src={image} alt="" /></SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className=" px-3">{postData.description}</div>
            </div>
            <div className=" flex gap-3 absolute top-3 right-3">
                <Trash />
                <Edit />
            </div>
        </div>
    )
}