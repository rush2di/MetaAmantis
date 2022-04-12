import { joinClassNames } from "helpers/utils";
import styles from "./Logo.module.scss";

const { logo } = styles;

const Logo = () => (
  <div className={joinClassNames([logo, "d-flex align-center"])}>
    <img src="./assets/images/MALOGO.svg" alt="Meta Amantis Logo" />
    <h1 className="txt-btn color-light">Meta Amantis</h1>
  </div>
);

export default Logo;
