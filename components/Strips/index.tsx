import { SIGNATURE, TEXT_M_Y, TITLE } from "./Strips.constants";
import styles from "./Strips.module.scss";

const { strips, strips__h, strips__m, strips__b } = styles;

const Strips = () => {
  return (
    <div className={strips}>
      <div className={strips__h}>
        <StripFS />
        <StripFS />
      </div>
      <div className={strips__m}>
        <StripSS />
        <StripSS />
      </div>
      <div className={strips__b}>
        <StripTS />
        <StripTS />
      </div>
    </div>
  );
};

const StripFS = () => {
  return (
    <div className="d-flex align-center">
      {TEXT_M_Y}
      <span />
      {TEXT_M_Y}
      <span />
      {TEXT_M_Y}
      <span />
      {TEXT_M_Y}
      <span />
    </div>
  );
};

const StripSS = () => {
  return (
    <div className="d-flex align-center">
      {TITLE}
      <span />
      {TITLE}
      <span />
      {TITLE}
      <span />
      {TITLE}
      <span />
    </div>
  );
};

const StripTS = () => {
  return (
    <div className="d-flex align-center">
      {SIGNATURE}
      <div />
      {SIGNATURE}
      <div />
      {SIGNATURE}
      <div />
      {SIGNATURE}
      <div />
    </div>
  );
};

export default Strips;
