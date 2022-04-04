import { v4 as uuid } from "uuid";
import styles from "./Roadmap.module.scss";

import { joinClassNames } from "helpers/utils";
import { RoadmapCardProps } from "./types";

const { Roadmap, Roadmap__body, Roadmap__dark, Roadmap__light } = styles;

const RoadmapCard = ({ hasColor, title, subtitle, list }: RoadmapCardProps) => {
  const coloring = hasColor ? Roadmap__light : Roadmap__dark;
  const titleColor = hasColor ? "color-dark" : "color-light";
  const textColor = hasColor ? "color-dark" : "color-muted";

  return (
    <div className={joinClassNames([Roadmap, "d-flex align-center"])}>
      <div className={joinClassNames([Roadmap__body, coloring])}>
        <div></div>
        <div className="d-flex flex-column align-start">
          <div className={joinClassNames([titleColor, "font-comp mb-1"])}>
            <h3 className="txt-h3">{title}</h3>
            <h4 className="txt-h6">{subtitle}</h4>
          </div>
          <ul
            className={joinClassNames([
              textColor,
              "d-flex flex-column align-start",
            ])}
          >
            {list.map((text) => {
              return (
                <li className="ml-1 my-0-25 list-decimal" key={uuid()}>
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoadmapCard;
