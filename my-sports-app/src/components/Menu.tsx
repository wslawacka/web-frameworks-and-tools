import { TeamType } from "../types";

import "../styles/menu.css";

interface MenuProps {
  team: TeamType;
}

function Menu(props: MenuProps) {
  return (
    <div className="menu">
      <h1>{props.team.teamName}</h1>
    </div>
  );
}

export default Menu;
