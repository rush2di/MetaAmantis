import { BSCCard, RoadmapCard } from "components/Cards";
import FAQ from "components/FAQ";
import Strips from "components/Strips";
import { v4 as uuid } from "uuid";
import { FAQ_LIST, ROADMAP_CONTENT } from "./Test.constants";
import Image from "next/image";

const Test = () => {
  return (
    <>
      <div className="container">
        <div className="my-5">
          <BSCCard />
          <div className="my-5">
            {ROADMAP_CONTENT.map((cardProps) => {
              return <RoadmapCard key={uuid()} {...cardProps} />;
            })}
          </div>
          <FAQ list={FAQ_LIST} />
        </div>
      </div>
    </>
  );
};

export default Test;
