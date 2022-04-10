import Corner from "public/assets/images/Corner.svg";

import styles from "./Info.module.scss";
import { InfoCardProps } from "./types";

const { Info } = styles;

const InfoCard = ({ children }: InfoCardProps) => {
  return (
    <div className={Info}>
      <Corner />
      <Corner />
      <div>{children}</div>
      <Corner />
      <Corner />
    </div>
  );
};

export default InfoCard;
