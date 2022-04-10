import { motion } from "framer-motion";

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
import { joinClassNames } from "helpers/utils";

const { S01, S01__illustration, S01__blobs, S01__mobile, S01__hide_mobile } =
  styles;

console.log(styles);

const Section01 = () => {
  const buttonThemeEffect = ButtonProps.color.main;

  return (
    <header className={S01}>
      <div className={joinClassNames([S01__mobile])}>
        <img className="w-100" src="./assets/images/HERO2.png" alt="" />
      </div>
      <div className="container">
        <div className="row align-center">
          <div className="col-6 col-lg-6 col-xsm-12">
            <div className="my-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <SectionIntro
                  tag={SectionIntroProps.tag.h1}
                  title={INTRO_TITLE}
                  subtitle={INTRO_SUBTITLE}
                  text={INTRO_TEXT}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { staggerChildren: 0.4, delay: 1.5 } }}
                className="mt-1 row"
              >
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="col-1 col-sm-12"
                >
                  <Button
                    href={BUTTON_WHITEPAPER_HREF}
                    color={ButtonProps.color.main}
                    variant={ButtonProps.variant.grads}
                  >
                    Whitepaper
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="col-1 col-sm-12"
                >
                  <Button
                    href={BUTTON_TOKONOMICS_HREF}
                    variant={ButtonProps.variant.outline_grads}
                    color={buttonThemeEffect}
                  >
                    Roadmap
                  </Button>
                </motion.div>
              </motion.div>
              <div className="mt-3">
                <BSCCard />
              </div>
            </div>
          </div>
          <div
            className={joinClassNames([
              S01__hide_mobile,
              "col-6 col-lg-6 col-xsm-12",
            ])}
          >
            <div className={S01__illustration}>
              <div />
              <img src="./assets/images/HERO1.png" />
            </div>
          </div>
        </div>
      </div>
      <div className={joinClassNames([S01__blobs])}>
        <img src="./assets/images/CENTER.png" alt="" />
      </div>
    </header>
  );
};

export default Section01;
