import Seo from "components/Seo";
import { Test } from "templates/Test";
import type { NextPage } from "next";
import { Section03 } from "templates/home";

const Home: NextPage = () => {
  return (
    <>
      <Seo pageTitle={"Home"} pageDesc={"Hello world"} />
      {/* <Test /> */}
      <Section03 />
    </>
  );
};

export default Home;
