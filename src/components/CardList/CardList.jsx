import "./CardList.css";
import Card from "../Card/Card";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <Card monster={monster} />
    ))}
  </div>
);

export default CardList;
