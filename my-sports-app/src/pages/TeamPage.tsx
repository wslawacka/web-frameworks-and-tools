import Menu from "../components/Menu";
import Team from "../components/Team";
import Footer from "../components/Footer";
import { TeamType, PlayerType } from "../types";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function TeamPage({ teams }: { teams: TeamType[] }) {
  const { id } = useParams<{ id: string }>();
  const team = teams.find((team) => team.id === id || "");

  const [players, setPlayers] = useState<PlayerType[]>([]);
  const [playersNumber, setPlayersNumber] = useState(0);

  useEffect(() => {
    setPlayersNumber(players.length);
  }, [players]);

  if (!team) return <div>Team not found</div>;

  return (
    <>
      <Menu />
      <Team team={team} players={players} setPlayers={setPlayers} />
      <Footer />
    </>
  );
}

export default TeamPage;
