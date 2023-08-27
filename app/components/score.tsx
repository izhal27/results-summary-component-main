import Image from "next/image";
import { IScore } from "../types/score";

interface Props {
  scores: IScore[];
}

const typeOfScore = [
  { category: "reaction", color: "text-light-red" },
  { category: "memory", color: "text-orange-yellow" },
  { category: "verbal", color: "text-green-teal" },
  { category: "visual", color: "text-cobalt-blue" },
];

function Score({ scores }: Props) {
  return (
    <ul className="sm:text-xs space-y-5 sm:space-y-3 mt-5">
      {typeOfScore.map((ts, i) => (
        <li
          className={"score x-2 px-5 py-5 sm:px-3 sm:py-2 " + ts.category}
          key={i}
        >
          <div className="flex items-center">
            <span className="score-icon">
              <Image
                src={scores[i].icon}
                alt="Category Icon"
                layout="fill"
                className="icon-img"
              ></Image>
            </span>
            <p className={ts.color}>{scores[i].category}</p>
          </div>
          <p>
            <span className="score-total">{scores[i].score}</span>{" "}
            <span className="score-per">/100</span>
          </p>
        </li>
      ))}
    </ul>
  );
}

export default Score;
