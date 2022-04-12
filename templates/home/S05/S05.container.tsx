import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";

import SectionIntro, { SectionIntroProps } from "components/SectionIntro";
import { defaultAnimationProps } from "helpers/constants/common/animations";
import { RoadmapCard } from "components/Cards";

import { TITLE, ROADMAP_CONTENT } from "./S05.constants";

const Section05 = () => {
  return (
    <section className="container pt-4 mb-2 pt-xsm-3 pb-xsm-0 mb-xsm-0">
      <SectionIntro
        title={TITLE}
        tag={SectionIntroProps.tag.h6}
        variant={SectionIntroProps.variant.md}
        animated
        isCenter
      />
      <div className="mt-4-75 mt-xsm-3 pt-1">
        {ROADMAP_CONTENT.map((cardProps) => {
          return (
            <motion.div
              key={uuid()}
              className="mb-2"
              {...defaultAnimationProps}
            >
              <RoadmapCard {...cardProps} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Section05;
