import Menu from "../components/Menu";
import Team from "../components/Team";
import Footer from "../components/Footer";
import { TeamType } from "../types";
import { useParams } from "react-router-dom";

function TeamPage({ teams }: { teams: TeamType[] }) {
  const { id } = useParams<{ id: string }>();
  const team = teams.find((team) => team.id === parseInt(id || ""));

  if (!team) return <div>Team not found</div>;

  return (
    <>
      <Menu />
      <Team team={team} />
      <Footer />
    </>
  );
}

export default TeamPage;
