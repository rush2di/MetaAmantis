import { InfoCard } from "components/Cards";
import { joinClassNames } from "helpers/utils";
import {
  PARAGRAPH_ONE,
  PARAGRAPH_TWO,
  PRESALE_SUPPLY_TXT,
  PRESALE_SUPPLY_VALUE,
  PUBSALE_SUPPLY_TXT,
  PUBSALE_SUPPLY_VALUE,
  TITLE,
} from "./S04.constants";
import styles from "./S04.module.scss";

const { S04 } = styles;

const Section04 = () => {
  return (
    <section className={joinClassNames([S04, "container pt-5 mb-1 pt-xsm-4 pb-xsm-0 mb-xsm-1"])}>
      <InfoCard>
        <h2 className="txt-h4 font-comp color-light mb-1">{TITLE}</h2>
        <p className="txt mb-0-50">{PARAGRAPH_ONE}</p>
        <p className="txt">{PARAGRAPH_TWO}</p>
        <div className="d-flex mt-1">
          <div className="d-flex txt-h6 font-comp txt-uppercase mt-1">
            <p className="color-light font-weight-medium">{PRESALE_SUPPLY_TXT}</p>
            <p className="color-muted ml-0-50 mr-1-50">{PRESALE_SUPPLY_VALUE}</p>
          </div>
          <div className="d-flex txt-h6 font-comp txt-uppercase mt-1">
            <p className="color-light font-weight-medium">{PUBSALE_SUPPLY_TXT}</p>
            <p className="color-muted ml-0-50">{PUBSALE_SUPPLY_VALUE}</p>
          </div>
        </div>
      </InfoCard>
    </section>
  );
};

export default Section04;
