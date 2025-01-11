import { TeamType, PlayerType } from "../types";

import Team from "./Team";
import Warning from "./Warning";
import Info from "./Info";

interface BodyProps {
  team: TeamType;
  players: PlayerType[];
  setPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>;
  playersNumber: number;
}

function Body(props: BodyProps) {
  return (
    <div className="body">
      {props.playersNumber < 11 ? <Warning /> : <Info />}
      <Team
        team={props.team}
        players={props.players}
        setPlayers={props.setPlayers}
      />
    </div>
  );
}

export default Body;
