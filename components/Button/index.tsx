import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.constants";
import { ButtonPropsType } from "./types";

const { Button__text } = styles;

const Button = ({
  variant = ButtonProps.variant.fill,
  color = ButtonProps.color.comp,
  children,
  icon,
  href,
}: ButtonPropsType) => {
  const CostumTag = !!href ? "a" : "div";
  const textAlignment = !!icon ? "ml-0-50" : "m-auto";

  return (
    <CostumTag
      className={`align-center btn btn--${variant}-${color} d-flex w-100`}
      {...(href ? { href } : {})}
    >
      {!!icon && <FontAwesomeIcon icon={icon} className={Button__text} />}
      <span
        className={`txt-btn font-comp font-weight-medium ${textAlignment} ${Button__text}`}
      >
        {children}
      </span>
    </CostumTag>
  );
};

export default Button;
export { ButtonProps };
