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
    <ul className="text-sm space-y-3 mt-5">
      {typeOfScore.map((ts, i) => (
        <li className={"score " + ts.category}>
          <div className="flex items-center">
            <span className="score-icon">
              <img src={scores[i].icon}></img>
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
