import { motion } from "framer-motion";

import { InfoCard } from "components/Cards";
import { defaultAnimationProps } from "helpers/constants/common/animations";

import { PARAGRAPH_ONE, PARAGRAPH_TWO, TITLE } from "./S02.constants";
import styles from "./S02.module.scss";

const { S02, S02__grads } = styles;

const Section02 = () => {
  return (
    <>
      <div className={S02__grads} id="vision">
        <div>
          <section className="container">
            <motion.div {...defaultAnimationProps} className={S02}>
              <InfoCard>
                <h2 className="txt-h4 font-comp color-light mb-1">{TITLE}</h2>
                <p className="txt mb-0-50">{PARAGRAPH_ONE}</p>
                <p className="txt">{PARAGRAPH_TWO}</p>
              </InfoCard>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Section02;
