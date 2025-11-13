import Pretitle from "./Pretitle";
import FaqItem from "./FaqItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const faqItemsData = [
  {
    title: "Jak dlouho trvá běžná oprava?",
    description:
      "Záleží na typu závady. Menší servisní úkony zvládneme během jednoho dne, složitější opravy podle dostupnosti dílů.",
  },
  {
    title: "Musím si opravu předem objednat?",
    description:
      "Doporučujeme domluvit si termín předem, abychom Vám mohli vyhradit čas. Naléhavé závady řešíme individuálně.",
  },
  {
    title: "Používáte originální nebo alternativní díly?",
    description:
      "Nabízíme obě možnosti. Vždy se s Vámi domluvíme, co je pro Váš vůz a rozpočet nejvhodnější.",
  },
  {
    title: "Můžete udělat diagnostiku i bez předchozí domluvy?",
    description:
      "Pokud máme volné kapacity, diagnostiku provedeme na počkání. Doporučujeme ale krátkou telefonickou domluvu.",
  },
  {
    title: "Poskytujete záruku na opravy?",
    description:
      "Ano, na práci i náhradní díly poskytujeme standardní záruku podle typu služby a použitých dílů.",
  },
];

// animation variants for FAQ items
const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 }, // staggered animation
  }),
};

const Faq = () => {
  return (
    <section className="py-16 xl:py-32">
      <div className="container mx-auto">
        {/* text */}
        <motion.div
          // variants={fadeIn("up", 0.2)}
          // initial="hidden"
          // whileInView="show"
          // viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="Často se ptáte" center />
          <h2 className="h2 mb-3">Máte dotazy? Rádi vám poradíme</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Připravili jsme odpovědi na nejčastější otázky, které vám pomohou
            lépe se zorientovat v servisu vašeho vozu.
          </p>
        </motion.div>
        {/* faq items */}
        <ul className="w-full flex flex-col">
          {faqItemsData.map((item, index) => {
            return (
              <motion.li
                key={index}
                // variants={faqItemVariants}
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once: false, amount: 0.8 }}
                // custom={index} // pass index to control stagger effect
              >
                <FaqItem title={item.title} description={item.description} />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
