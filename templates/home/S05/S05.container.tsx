import { v4 as uuid } from "uuid";

import SectionIntro, { SectionIntroProps } from "components/SectionIntro";
import { RoadmapCard } from "components/Cards";
import { joinClassNames } from "helpers/utils";

import { TITLE, ROADMAP_CONTENT } from "./S05.constants";
// import styles from "./S05.module.scss";

// const { S05 } = styles;

const Section05 = () => {
  return (
    <section className={joinClassNames(["container pt-4 mb-2 pt-xsm-3 pb-xsm-0 mb-xsm-1"])}>
      <SectionIntro
        title={TITLE}
        tag={SectionIntroProps.tag.h6}
        variant={SectionIntroProps.variant.md}
        isCenter
      />
      <div className="mt-4-75 mt-xsm-3 pt-1">
        {ROADMAP_CONTENT.map((cardProps) => {
          return (
            <div key={uuid()} className="mb-2">
              <RoadmapCard {...cardProps} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section05;
