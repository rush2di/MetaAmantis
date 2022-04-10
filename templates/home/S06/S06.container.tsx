import SectionIntro, { SectionIntroProps } from "components/SectionIntro";
import { joinClassNames } from "helpers/utils";

import FAQ from "components/FAQ";
import { TITLE, FAQ_LIST } from "./S06.constants";

const Section06 = () => {
  return (
    <section className={joinClassNames(["container py-4 pt-xsm-3 pb-xsm-2 mb-xsm-1 mb-2"])}>
      <SectionIntro
        title={TITLE}
        tag={SectionIntroProps.tag.h6}
        variant={SectionIntroProps.variant.md}
        isCenter
      />
      <div className="mt-4-75 mt-xsm-3 pt-1">
        <FAQ list={FAQ_LIST} />
      </div>
    </section>
  );
};

export default Section06;
