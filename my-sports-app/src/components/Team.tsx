import { TeamType } from "../types";

function Team({ team }: { team: TeamType }) {
  return <div>{team.teamName}</div>;
}

export default Team;
