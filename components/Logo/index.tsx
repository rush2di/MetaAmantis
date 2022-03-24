import styles from "./Logo.module.scss";

const { logo__txt } = styles;

const Logo = () => (
  <div className="logo d-flex align-center">
    <img src="assets/images/CSZ_logo.svg" alt="Crypto Stallionz Logo" />
    <h1
      className={`txt-btn --themed-logo font-comp font-weight-medium ${logo__txt}`}
    >
      <span>Meta</span>
      <br />
      <span>Amantis</span>
    </h1>
  </div>
);

export default Logo;
