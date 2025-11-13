"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./Button";

import Pretitle from "./Pretitle";
import {
  PiWrenchFill,
  PiPaintBrushHouseholdFill,
  PiCpuFill,
  PiTireFill,
} from "react-icons/pi";

const serviceData = [
  {
    name: "repair",
    icon: PiWrenchFill,
    title: "Oprava vozidel",
    description:
      "Provádíme kompletní servis a opravy všech značek vozidel. Od běžné údržby přes výměnu brzd, olejů, rozvodů až po složité opravy motorů a podvozků. Každému autu věnujeme maximální péči a preciznost.",
    serviceList: [
      "Mechanické opravy všech značek",
      "Výměna oleje, filtrů, brzd",
      "Servis motorů a převodovek",
      "Kontrola podvozku a tlumičů",
      "Příprava a zajištění STK",
    ],
  },
  {
    name: "bodywork",
    icon: PiPaintBrushHouseholdFill,
    title: "Klempířské a lakýrnické práce",
    description:
      "Postaráme se o opravu karoserie po nehodách, odstranění promáčklin i koroze a profesionální lakování. Používáme kvalitní laky a technologické postupy, které vrátí vašemu vozu původní vzhled.",
    serviceList: [
      "Opravy karoserie po nehodách",
      "Lakování celých vozidel i dílů",
      "Oprava a odstranění koroze",
      "Rovnání rámů a plechů",
      "Leštění a ochrana laku",
    ],
  },
  {
    name: "diagnostics",
    icon: PiCpuFill,
    title: "Diagnostika",
    description:
      "Pomocí moderních diagnostických přístrojů odhalíme i skryté závady. Zajistíme správné fungování všech elektronických systémů vašeho vozidla a předejdeme nákladným opravám.",
    serviceList: [
      "Diagnostika motoru a řídicích jednotek",
      "Kontrola emisních systémů",
      "Reset servisních intervalů",
      "Měření a vyhodnocení chybových kódů",
      "Poradenství při opravě závad",
    ],
  },
  {
    name: "tires",
    icon: PiTireFill,
    title: "Pneuservis",
    description:
      "Nabízíme kompletní služby pneuservisu – přezutí, vyvážení, opravy defektů a prodej nových pneumatik. Zajistíme, aby vaše vozidlo mělo vždy dokonalý kontakt s vozovkou.",
    serviceList: [
      "Sezónní přezutí a vyvážení kol",
      "Opravy defektů",
      "Prodej pneumatik a disků",
      "Kontrola opotřebení a tlaku",
      "Uschování pneumatik (na přání)",
    ],
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("repair");
  return (
    <section className="pt-16 xl:pt-12 mb-10" id="services">
      <div className="container mx-auto">
        <motion.div
          // variants={fadeIn("up", 0.2)}
          // initial="hidden"
          // whileInView="show"
          // viewport={{ once: false, amount: 0.2 }}
          className="text-left mx-auto mb-20"
        >
          <Pretitle text="Služby" center />
          <h2 className="h2 mb-3 text-center">Co u nás najdete</h2>
          <p className="mb-11 mx-auto text-center">
            Nabízíme komplexní služby pro váš automobil:
          </p>
        </motion.div>

        {/* tabs */}
        <motion.div
        // variants={fadeIn("up", 0.3)}
        // initial="hidden"
        // whileInView="show"
        // viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue="repair"
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col xl:flex-row w-full gap-[30px]"
          >
            <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full rounded-none p-0 bg-transparent xl:w-[345px]">
              {serviceData.map((item) => {
                const Icon = item.icon;
                return (
                  <TabsTrigger
                    key={item.name}
                    value={item.name}
                    className="w-full group rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none bg-white cursor-pointer hover:text-accent"
                  >
                    <div
                      className={`group w-[100px] h-[100px] flex items-center justify-center absolute left-0 border-r-2 border-white hover:bg-accent ${
                        activeTab === item.name
                          ? "bg-accent text-primary"
                          : "bg-primary text-white"
                      }`}
                    >
                      <div>
                        <Icon style={{ width: 28, height: 28 }} className="shrink-0"/>
                      </div>
                    </div>
                    <div
                      className={`uppercase font-primary font-semibold tracking-[.6px] w-[160px] ml-16 text-xl text-wrap hover:text-accent ${
                        activeTab === item.name
                          ? "text-accent-hover"
                          : "text-primary"
                      }`}
                    >
                      {item.title}
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/* tabs content */}
            <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">
              {serviceData.map((item) => (
                <TabsContent key={item.name} value={item.name} className="m-0">
                  <motion.div
                    // variants={fadeInVariant}
                    // initial="hidden"
                    // whileInView="show"
                    // exit="hidden"
                    className="flex flex-col md:flex-row gap-[30px]"
                  >
                    {/* text & button */}
                    <div>
                      <div>
                        <h3 className="h3 mb-6">{item.title}</h3>
                        <p className="mb-10">{item.description}</p>
                        {/* service list */}
                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-12">
                          {item.serviceList.map((service, index) => {
                            return (
                              <li
                                key={index}
                                className="flex items-center gap-4"
                              >
                                <div className="w-[6px] h-[6px] bg-accent"></div>
                                <div className="font-medium text-primary">
                                  {service}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    {/* images */}
                    {/* <div className="flex md:flex-col gap-5 xl:gap-[30px] justify-center">
                      {item.thumbs.map((thumb, index) => (
                        <div
                          key={index}
                          className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                        >
                          <Image src={thumb.url} fill alt="" />
                        </div>
                      ))}
                    </div>                     */}
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
