import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
import Slider from "./Slider";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">
          {/* text */}
          <motion.div
            // variants={fadeIn("right", 0.2)}
            // initial="hidden"
            // whileInView="show"
            // viewport={{ once: false, amount: 0.2 }}
            className="flex-1 max-w-[484px] xl:pt-[54px] mb-12 xl:mb-0"
          >
            <Pretitle text="O Nás" />
            <h2 className="h2 mb-6">Vítá Vás autoservis Jablonec nad Nisou</h2>
            <p className="mb-10 max-w-[420px]">
              Jsem rád, že vás mohu přivítat na stránkách našeho autoservisu.
              Nabízíme kompletní služby pro váš vůz a sídlíme v Proseči nad
              Nisou, součásti Jablonce nad Nisou. Naší péči využívají motoristé
              z Liberce, Chrastavy, Hrádku nad Nisou i okolních měst.
              Disponujeme moderním vybavením, diagnostikou a ke každému
              zákazníkovi přistupujeme individuálně – vždy za férové ceny. Pokud
              máte jakýkoliv dotaz, neváhejte nás kontaktovat. Těšíme se na
              setkání s vámi.
            </p>
            <p className="font-semibold">Miroslav Ehrlich, majitel</p>
            {/* <Button text="Work with us" /> */}
          </motion.div>
          {/* img & slider */}
          <motion.div
            // variants={fadeIn("left", 0.2)}
            // initial="hidden"
            // whileInView="show"
            // viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex flex-col xl:flex-row xl:justify-end"
          >
            <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px]">
              <Image
                src="/assets/img/testimonials/img2.jpg"
                fill
                className="object-cover rounded-xl"
                // quality={100}
                alt=""
              />
            </div>
            <motion.div
              // variants={fadeIn("left", 0.1)}
              // initial="hidden"
              // whileInView="show"
              // viewport={{ once: false, amount: 0.2 }}
              className="xl:absolute xl:bottom-0 xl:right-[160px] relative max-w-max"
            >
              {/* quote icon img/div */}
              <div className="absolute z-20 -top-4 left-[60px] text-9xl text-accent font-bold italic">
                "
              </div>
              <Slider />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
