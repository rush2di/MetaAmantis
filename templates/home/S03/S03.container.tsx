import Image from "next/image";

import Strips from "components/Strips";
import Cover from "../../../public/assets/images/GIRLSX.png";

import styles from "./S03.module.scss";
import { SUBTITLE, TITLE } from "./S03.constants";

const { S03, S03__cover, S03__content } = styles;

const Section03 = () => {
  return (
    <section className={S03}>
      <Strips />
      <div className={S03__cover}>
        <div className="container">
          <Image src={Cover} layout="responsive" placeholder="blur" />
          <div className={S03__content}>
            <h3 className="txt-h2 font-comp">{TITLE}</h3>
            <h4 className="txt-h3 font-comp">{SUBTITLE}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section03;
