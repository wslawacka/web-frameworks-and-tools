import TeamList from "../components/TeamList";

function HomePage({
  teams,
  setTeams,
}: {
  teams: TeamType[];
  setTeams: Function;
}) {
  return (
    <div>
      HomePage
      <TeamList teams={teams} setTeams={setTeams} />
    </div>
  );
}

export default HomePage;
