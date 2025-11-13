import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

import Button from "./Button";
import Pretitle from "./Pretitle";
import Link from "next/link";

function Contact() {
  return (
    <section className="mx-auto bg-primary text-white mt-25">
      {/* <motion.div
        // variants={fadeIn("up", 0.2)}
        // initial="hidden"
        // whileInView="show"
        // viewport={{ once: false, amount: 0.2 }}
        className="text-left mx-auto "
      >
        <Pretitle text="Služby" center />
        <h2 className="h2 mb-3 text-center">Co u nás najdete</h2>
        <p className="mb-11 mx-auto text-center">
          Nabízíme komplexní služby pro váš automobil:
        </p>
      </motion.div> */}

      <div className="flex justify-center flex-col items-center gap-3 p-12">
        {/* contact items */}
        <div className="flex flex-col xl:flex-row gap-[40px] mb-16">
          {/* contact item */}
          <div className="flex items-start gap-[20px]">
            <div>
              <RiChat1Line className="text-[28px] text-accent" />
            </div>
            <div>
              <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                Napište nám
              </h5>
              <p className="mb-4">Náš tým je tu pro vás a rád vám pomůže.</p>
              <p className="font-semibold text-accent">
                info@profimachining.eu
              </p>
            </div>
          </div>
          {/* contact item */}
          <div className="flex items-start gap-[20px]">
            <div>
              <RiMapPin2Line className="text-[28px] text-accent" />
            </div>
            <div>
              <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                Sídlo společnosti
              </h5>
              <p className="mb-4">
                Zastavte se u nás nebo nás kontaktujte předem.
              </p>
              <p className="font-semibold text-accent">
                Větrná 1919/20A 46601 Jablonec nad Nisou
              </p>
            </div>
          </div>
          {/* contact item */}
          <div className="flex items-start gap-[20px]">
            <div>
              <RiSmartphoneLine className="text-[28px] text-accent" />
            </div>
            <div>
              <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                Telefon
              </h5>
              <p className="mb-4">Pondělí–pátek od 8:00 do 16:00.</p>
              <p className="font-semibold text-accent">+420 724 777 078</p>
            </div>
          </div>
        </div>
        <Link href="/about">
          <Button text="Přejít na mapu" />
        </Link>
      </div>
    </section>
  );
}
export default Contact;
