import Image from "next/image";
import { motion } from "framer-motion";

import Strips from "components/Strips";
import Cover from "../../../public/assets/images/GIRLSX.png";

import {
  ImageAnimationProps,
  SUBTITLE,
  textAnimation,
  TITLE,
  wrapperAnimation,
} from "./S03.constants";
import styles from "./S03.module.scss";

const { S03, S03__cover, S03__content } = styles;

const Section03 = () => {
  return (
    <section className={S03}>
      <Strips />
      <div className={S03__cover}>
        <div className="container">
          <motion.div {...ImageAnimationProps}>
            <Image src={Cover} layout="responsive" priority />
          </motion.div>
          <div className={S03__content}>
            <motion.div className="container" {...wrapperAnimation}>
              <motion.h3
                className="txt-h2 font-comp txt-center"
                {...textAnimation}
              >
                {TITLE}
              </motion.h3>
              <motion.h4
                className="txt-h3 font-comp txt-center"
                {...textAnimation}
              >
                {SUBTITLE}
              </motion.h4>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section03;
