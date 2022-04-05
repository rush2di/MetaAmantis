import { BSCCard, RoadmapCard } from "components/Cards";
import FAQ from "components/FAQ";
import Strips from "components/Strips";
import { v4 as uuid } from "uuid";
import { FAQ_LIST, ROADMAP_CONTENT } from "./Test.constants";
import Cover from "../../public/assets/images/GIRLSX.png";
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
      <div className="my-5">
        <Strips />
      </div>
      <div className="my-5">
        <div className="cover">
          <div className="container">
            <Image
              src={Cover}
              layout="responsive"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
