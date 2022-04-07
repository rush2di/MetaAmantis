import Button from "components/Button";
import { BSCCard } from "components/Cards";
import { ButtonProps } from "components/Button";
import SectionIntro, { SectionIntroProps } from "components/SectionIntro";

import {
  INTRO_SUBTITLE,
  INTRO_TEXT,
  INTRO_TITLE,
  BUTTON_WHITEPAPER_HREF,
  BUTTON_TOKONOMICS_HREF,
} from "./S01.constants";

import styles from "./S01.module.scss";
import VecSVG from "public/assets/images/BGV.svg";

const { S01, S01__illustration } = styles;

const Section01 = () => {
  const buttonThemeEffect = ButtonProps.color.main;

  return (
    <header className={S01}>
      <div className="container">
        <div className="row align-center">
          <div className="col-6 col-lg-6 col-xsm-12">
            <div className="my-auto">
              <SectionIntro
                tag={SectionIntroProps.tag.h1}
                title={INTRO_TITLE}
                subtitle={INTRO_SUBTITLE}
                text={INTRO_TEXT}
              />
              <div className="mt-1 row">
                <div className="col-1 col-sm-12">
                  <Button
                    href={BUTTON_WHITEPAPER_HREF}
                    color={ButtonProps.color.comp}
                    variant={ButtonProps.variant.fill}
                  >
                    Whitepaper
                  </Button>
                </div>
                <div className="col-1 col-sm-12">
                  <Button
                    href={BUTTON_TOKONOMICS_HREF}
                    variant={ButtonProps.variant.outline}
                    color={buttonThemeEffect}
                  >
                    Tokonomics
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-6 col-xsm-12">
            <div className={S01__illustration}>
              <div />
              <img src="#" />
              <VecSVG />
              <BSCCard />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Section01;
