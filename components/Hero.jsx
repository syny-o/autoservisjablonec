import Button from "./Button";

import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section className="h-[70vh] bg-[url(/assets/img/hero/bg-ai.jpg)] bg-no-repeat bg-cover bg-center relative">
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10"></div>

      {/* CONTENT */}
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="z-20 text-white text-center mx-auto xl:mx-0 flex flex-col items-center max-w-[700px]">
          <h1 className="h1 text-white mb-4">
            <span className="text-accent">Spolehlivý</span> autoservis
          </h1>
          <p className="mb-9">
            Postaráme se o vaše vozidlo od A do Z – výměna <b>pneumatik</b>, pravidelný servis, <b>diagnostika</b> i příprava na <b>STK</b>. Rychle, férově a s osobním přístupem.
          </p>
          {/* BUTTONS */}
          <ScrollLink to="services" smooth={true} duration={500} offset={-70}>
            <Button text="naše služby" />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
