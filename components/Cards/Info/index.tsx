import Corner from "public/assets/images/Corner.svg";

import styles from "./Info.module.scss";
import { InfoCardProps } from "./types";

const { Info, Corner__tl, Corner__tr, Corner__br, Corner__bl } = styles;

const InfoCard = ({ children }: InfoCardProps) => {
  return (
    <div className={Info}>
      <Corner className={Corner__tl} />
      <Corner className={Corner__tr} />
      <div>{children}</div>
      <Corner className={Corner__bl} />
      <Corner className={Corner__br} />
    </div>
  );
};

export default InfoCard;
