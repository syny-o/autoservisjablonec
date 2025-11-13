import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import SliderBtns from "./SliderBtns";

// data
const testimonials = [
  {
    name: "Stanislav Gončar",
    text: "Tuto službu mohu doporučit. Jedná se o rodinný podnik doma. Kluci pracují rychle, kvalitně a za adekvátní peníze. Výborně Velmi čisté a uklizené v samotné službě.",
    image: "/assets/img/testimonials/avatar.jpg",
  },
  {
    name: "Martin Viták",
    text: "Auto a Pneuservis, kde vědí co dělají. Vstřícné vystupování a rovné jednání. S opravou auta i pneumatiky si vždy vědí rady. Vždy jsem tu byl spokojen a vůz nechám servisovat u pana Ehrlicha. Můžu jen doporučit, naprostá spokojenost.",
    image: "/assets/img/testimonials/avatar.jpg",
  },
  {
    name: "Trucker Judlaj",
    text: "U pana Ehrlicha jsem byl kvůli unikající pneumatice a i když měl dovolenou, tak mě přijal a perfektně opravil. Naprostá spokojenost.",
    image: "/assets/img/testimonials/avatar.jpg",
  },
  {
    name: "Pavel Soukup",
    text: "Naprostá spokojenost, kvalita a profesionální přístup, mohu jen doporučit.",
    image: "/assets/img/testimonials/avatar.jpg",
  },
];

const Slider = () => {
  return (
    <Swiper className="bg-white shadow-custom w-full max-w-[630px] h-[300px] xl:h-[200px] rounded-xl">
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="px-12 py-5 md:pl-[60px] flex flex-col xl:flex-row items-center gap-9 h-full">
            {/* avatar img */}
            {/* <div className="relative xl:flex w-[90px] h-[90px]">
              <Image
                src={item.image}
                fill
                className="object-contain rounded-full"
                quality={100}
                alt={item.name}
              />
            </div> */}

            {/* text */}
            <div className="flex-1 flex flex-col gap-2">
              <p>{item.text}</p>
              <p className="font-primary font-semibold text-primary">
                {item.name}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* slider btns */}
      <SliderBtns />
    </Swiper>
  );
};

export default Slider;
