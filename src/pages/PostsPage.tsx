import { FC } from "react";
import { PostPreview } from "../components/posts/PostPreview";
import { ButtonType1 } from "../components/ui/buttons/SybmitButton";

const postaArray = [
    {
        img: "https://shansonline.ru/media/k2/items/cache/629f7e60ef7770800d94efc58b4ba79f_XL.jpg",
        description: "Кошки – это удивительные существа, которые могут стать отличными компаньонами. Они независимы, но в то же время любят проводить время с людьми. Кошки известны своим игривым характером и забавными выходками. Они могут быть как активными, так и ленивыми, в зависимости от своего настроения."
    },
    {
        img: "https://s0.bloknot-voronezh.ru/thumb/850x0xcut/upload/iblock/509/0d1587dc21_7605080_8213488.jpg",
        description: "Существует множество пород кошек, каждая из которых имеет свои уникальные черты. Например, мейн-кун – это одна из самых больших домашних кошек, которая славится своим дружелюбным характером. А сфинксы, хотя и выглядят необычно, очень ласковые и преданные."
    },
    {
        img: "https://sever-press.ru/images/insecure/rs:fill-down:1920:1080/aHR0cHM6Ly84NTQyMjAuc2VsY2RuLnJ1L3lhbWFsbmV3cy84NzdhZTY1Zi00MTcud2VicA.webp",
        description: "Кошки известны своей способностью к охоте. Даже домашние кошки сохраняют инстинкты своих диких предков. Они любят играть с игрушками, которые имитируют движение добычи. Это не только развлечение, но и важная часть их физической активности."
    },
    {
        img: "https://masterpiecer-images.s3.yandex.net/5f99831035d01c8:upscaled",
        description: "Кошки могут быть очень выразительными. Их мяуканье, мурлыканье и даже позы могут многое сказать о их настроении. Например, если кошка поднимает хвост вверх, это означает, что она счастлива и уверена в себе. Важно понимать язык тела вашего питомца."
    },
    {
        img: "https://news.store.rambler.ru/img/865952f77b214170ac4054cf276d9256?img-1-resize=width%3A1280%2Cheight%3A960%2Cfit%3Acover&img-format=auto",
        description: "У кошек есть уникальная способность приземляться на лапы после падения. Это связано с их гибким позвоночником и способностью к быстрой ориентации в воздухе. Эта способность делает их отличными ловцами и помогает избегать травм при падениях."
    },
    {
        img: "https://avatars.dzeninfra.ru/get-zen_doc/50840/pub_5d6741b18600e100ad3fca54_5d67433a028d6800ad0a2dc2/scale_1200",
        description: "Кошки – это не только милые создания, но и настоящие терапевты. Исследования показывают, что общение с кошками может снижать уровень стресса и тревоги у людей. Их мягкое мурлыканье создает успокаивающую атмосферу в доме."
    },
    {
        img: "https://ir.ozone.ru/s3/multimedia-3/c1000/6562378143.jpg",
        description: "Кошки могут быть очень привязанными к своим хозяевам. Некоторые из них следуют за людьми по дому, а другие любят сидеть на коленях во время отдыха. Эта привязанность создает особую связь между кошкой и ее владельцем."
    },
    {
        img: "https://placekitten.com/407/300",
        description: "Каждая кошка имеет свои предпочтения в еде и играх. Некоторые любят играть с мячами или перышками, а другие предпочитают более спокойные занятия, такие как лежание на солнце или наблюдение за птицами за окном."
    },
    {
        img: "https://placekitten.com/408/300",
        description: "Кошки также известны своей чистоплотностью. Они тратят много времени на grooming (уход за шерстью), что помогает им оставаться чистыми и здоровыми. Это также способствует укреплению связи между кошкой и ее владельцем."
    },
    {
        img: "https://placekitten.com/409/300",
        description: "Кошки могут жить до 15 лет и более при правильном уходе. Забота о здоровье вашей кошки включает регулярные визиты к ветеринару, сбалансированное питание и физическую активность. Здоровая кошка – это счастливая кошка!"
    },
    {
        img: "https://placekitten.com/410/300",
        description: "Некоторые породы кошек имеют свои уникальные особенности. Например, сиамские кошки известны своим характерным окрасом и громким голосом. Они очень общительны и требуют много внимания от своих владельцев."
    },
    {
        img: "",
        description: "Кошки – это не только домашние животные, но и настоящие члены семьи. Их присутствие в доме приносит радость и уют. Каждая кошка имеет свою индивидуальность, что делает их общение с людьми особенным."
    }
];


export const PostsPage:FC =()=>{



    return <>
    <div className="">

        <div className="grid grid-cols-4 gap-5">
            {postaArray.map(post=>(
                <PostPreview
                img={post.img}
                description={post.description}
                />
            ))}
            

        </div>
    </div>
    </>
}