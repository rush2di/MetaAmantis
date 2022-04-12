import { motion } from "framer-motion";

import { joinClassNames } from "helpers/utils";

import {
  SectionIntroProps,
  textAnimation,
  wrapperAnimation,
} from "./SectionIntro.constants";
import { setClassName } from "./SectionIntro.utils";
import { SectionIntroPropsType } from "./types";
import styles from "./SectionIntro.module.scss";

const { sectionIntro, sectionIntro__center } = styles;

const SectionIntro = ({
  tag = SectionIntroProps.tag.h1,
  variant = SectionIntroProps.variant.lg,
  isCenter = SectionIntroProps.isCenter.false,
  animated = SectionIntroProps.animated.false,
  subtitle,
  title,
  text,
}: SectionIntroPropsType) => {
  const CostumTag = tag;

  const componentStyles = isCenter
    ? joinClassNames([sectionIntro, sectionIntro__center])
    : sectionIntro;

  return (
    <motion.div
      {...(animated ? { ...wrapperAnimation } : {})}
      className={componentStyles}
    >
      {!!subtitle && (
        <motion.p
          {...(animated ? { ...textAnimation } : {})}
          className="txt-md txt-uppercase color-comp mb-0-50"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div {...(animated ? { ...textAnimation } : {})}>
        <CostumTag className={setClassName(variant)}>{title}</CostumTag>
      </motion.div>
      {!!text && (
        <motion.p {...(animated ? { ...textAnimation } : {})} className="txt">
          {text}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionIntro;
export { SectionIntroProps };
