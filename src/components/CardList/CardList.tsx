import { Monster } from "../../App";
import "./CardList.css";
import Card from "../Card/Card";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <Card monster={monster} />
    ))}
  </div>
);

export default CardList;
