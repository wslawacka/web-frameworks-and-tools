import { TeamType, PlayerType } from "../types";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Menu from "../components/Menu";
import Body from "../components/Body";
import Footer from "../components/Footer";

interface TeamPageProps {
  teams: TeamType[];
}

function TeamPage(props: TeamPageProps) {
  const { id } = useParams<{ id: string }>();
  const team = props.teams.find((team) => team.id === id);

  const [players, setPlayers] = useState<PlayerType[]>([]);
  const [playersNumber, setPlayersNumber] = useState(0);

  useEffect(() => {
    setPlayersNumber(players.length);
  }, [players]);

  if (!team) return <div>Team not found</div>;

  return (
    <>
      <Menu team={team} />
      <Body
        team={team}
        players={players}
        setPlayers={setPlayers}
        playersNumber={playersNumber}
      />
      <Footer />
    </>
  );
}

export default TeamPage;
