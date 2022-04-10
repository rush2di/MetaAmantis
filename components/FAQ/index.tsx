import { useState } from "react";
import { v4 as uuid } from "uuid";
import { motion, AnimatePresence } from "framer-motion";

import { FAQBlockProps, FAQProps } from "./types";

import {
  ANIMATION_TEXT_VARIANTS,
  ANIMATION_VARIANTS,
  ANIMATION_VARIANTS_KEYS,
} from "./FAQ.constants";
import { appendQuestionIndex } from "./FAQ.utils";

import styles from "./FAQ.module.scss";
import FAQToggle from "public/assets/images/FAQTOGGLE.svg";
import Corner from "public/assets/images/Corner.svg";

const { Faq, Faq__block } = styles;

const FAQ = ({ list }: FAQProps) => {
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <AnimatePresence>
      <motion.div className={Faq}>
        <Corner />
        <Corner />
        <motion.ul layout className="d-flex align-start flex-column">
          {list.map((content, index) => {
            return (
              <FAQBlock
                key={uuid()}
                index={index}
                expanded={expanded}
                setExpanded={setExpanded}
                {...content}
              />
            );
          })}
        </motion.ul>
        <Corner />
        <Corner />
      </motion.div>
    </AnimatePresence>
  );
};

const FAQBlock = ({
  index,
  question,
  answer,
  expanded,
  setExpanded,
}: FAQBlockProps) => {
  const isOpen = index === expanded;

  const handleOpen = () => setExpanded(isOpen ? false : index);

  return (
    <>
      <motion.li layout className="w-100">
        <motion.div className={Faq__block}>
          <motion.div className="d-flex align-start justify-between w-100">
            <motion.h5 className="txt-h5 font-weight-normal font-comp color-light">
              {appendQuestionIndex(index, question)}
            </motion.h5>
            <motion.button className="btn--naked" onClick={handleOpen}>
              <motion.div
                initial={false}
                animate={
                  isOpen ? ANIMATION_VARIANTS.open : ANIMATION_VARIANTS.closed
                }
              >
                <FAQToggle />
              </motion.div>
            </motion.button>
          </motion.div>
          {isOpen && (
            <motion.div
              initial={ANIMATION_VARIANTS_KEYS.closed}
              animate={ANIMATION_VARIANTS_KEYS.open}
              exit={ANIMATION_VARIANTS_KEYS.closed}
              variants={ANIMATION_TEXT_VARIANTS}
              className="color-muted"
              transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <motion.p className="txt">{answer}</motion.p>
            </motion.div>
          )}
        </motion.div>
      </motion.li>
    </>
  );
};

export default FAQ;

// import * as React from "react";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ContentPlaceholder } from "./ContentPlaceholder";

// const accordionIds = [0, 1, 2, 3];

// export const Example = () => {
//   const [expanded, setExpanded] = useState<false | number>(0);

//   return accordionIds.map((i) => (
//     <Accordion i={i} expanded={expanded} setExpanded={setExpanded} />
//   ));
// };

// const Accordion = ({ i, expanded, setExpanded }) => {
//   const isOpen = i === expanded;

//   // By using `AnimatePresence` to mount and unmount the contents, we can animate
//   // them in and out while also only rendering the contents of open accordions
//   return (
//     <>
//       <motion.header
//         initial={false}
//         animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
//         onClick={() => setExpanded(isOpen ? false : i)}
//       />
//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.section
//             key="content"
//             initial="collapsed"
//             animate="open"
//             exit="collapsed"
//             variants={{
//               open: { opacity: 1, height: "auto" },
//               collapsed: { opacity: 0, height: 0 }
//             }}
//             transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
//           >
//             <ContentPlaceholder />
//           </motion.section>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };
