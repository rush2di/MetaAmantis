import { joinClassNames } from "helpers/utils";
import { SectionIntroProps } from "./SectionIntro.constants";
import { setClassName } from "./SectionIntro.utils";
import styles from "./SectionIntro.module.scss";
import { SectionIntroPropsType } from "./types";

const { sectionIntro, sectionIntro__center } = styles;

const SectionIntro = ({
  tag = SectionIntroProps.tag.h1,
  variant = SectionIntroProps.variant.lg,
  isCenter = SectionIntroProps.isCenter.false,
  subtitle,
  title,
  text,
}: SectionIntroPropsType) => {
  const CostumTag = tag;

  const styles = isCenter
    ? joinClassNames([sectionIntro, sectionIntro__center])
    : sectionIntro;

  return (
    <div className={styles}>
      {!!subtitle && (
        <p className="txt-md txt-uppercase color-comp mb-0-50">{subtitle}</p>
      )}
      <CostumTag className={setClassName(variant)}>{title}</CostumTag>
      {!!text && <p className="txt">{text}</p>}
    </div>
  );
};

export default SectionIntro;
export { SectionIntroProps };
