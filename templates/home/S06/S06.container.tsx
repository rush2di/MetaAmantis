import { motion } from "framer-motion";

import FAQ from "components/FAQ";
import SectionIntro, { SectionIntroProps } from "components/SectionIntro";
import { defaultAnimationProps } from "helpers/constants/common/animations";

import { TITLE, FAQ_LIST } from "./S06.constants";

const Section06 = () => {
  return (
    <section
      id="faq"
      className="container py-4 pt-xsm-2 pb-xsm-2 mb-xsm-1 mb-2"
    >
      <SectionIntro
        title={TITLE}
        tag={SectionIntroProps.tag.h6}
        variant={SectionIntroProps.variant.md}
        animated
        isCenter
      />
      <motion.div {...defaultAnimationProps} className="mt-4-75 mt-xsm-3 pt-1">
        <FAQ list={FAQ_LIST} />
      </motion.div>
    </section>
  );
};

export default Section06;
