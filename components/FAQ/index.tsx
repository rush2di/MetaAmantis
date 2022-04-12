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
  return (
    <motion.div className={Faq}>
      <Corner />
      <Corner />
      <motion.ul layout className="d-flex align-start flex-column">
        {list.map((content, index) => {
          return <FAQBlock key={uuid()} index={index} {...content} />;
        })}
      </motion.ul>
      <Corner />
      <Corner />
    </motion.div>
  );
};

const FAQBlock = ({ index, question, answer }: FAQBlockProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleOpen = () => setExpanded(!expanded);

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
                  expanded ? ANIMATION_VARIANTS.open : ANIMATION_VARIANTS.closed
                }
              >
                <FAQToggle />
              </motion.div>
            </motion.button>
          </motion.div>
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={ANIMATION_VARIANTS_KEYS.closed}
                animate={ANIMATION_VARIANTS_KEYS.open}
                exit={ANIMATION_VARIANTS_KEYS.closed}
                variants={ANIMATION_TEXT_VARIANTS}
                className="color-muted"
                transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <motion.p className="txt txt-wrap">{answer}</motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.li>
    </>
  );
};

export default FAQ;
