import Seo from "components/Seo";
import { Test } from "templates/Test";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Seo pageTitle={"Home"} pageDesc={"Hello world"} />
      <Test />
    </>
  );
};

export default Home;
