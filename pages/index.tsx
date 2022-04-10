import Seo from "components/Seo";
import { Test } from "templates/Test";
import type { NextPage } from "next";
import {
  Section01,
  Section02,
  Section03,
  Section04,
  Section05,
  Section06,
} from "templates/home";

const Home: NextPage = () => {
  return (
    <>
      <Seo pageTitle={"Home"} pageDesc={"Hello world"} />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
    </>
  );
};

export default Home;
