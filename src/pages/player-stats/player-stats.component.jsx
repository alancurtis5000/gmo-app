import { useSelector } from "react-redux";
import PlayerStatsCard from "../../components/player-stats-card/player-stats-card.component";

const PlayerStatsPage = () => {
  const character = useSelector((state) => state.userCharacter.data);

  const renderStats = () => {
    return character.stats.map((stat) => (
      <PlayerStatsCard className={stat.code} key={stat.code} stat={stat} />
    ));
  };

  const renderAbilityScores = () => {
    return character.abilityScores.map((abilityScore) => (
      <PlayerStatsCard
        className={abilityScore.code}
        key={abilityScore.code}
        stat={abilityScore}
      />
    ));
  };

  return (
    <div className="player-stats">
      <div className="grid">
        {renderStats()}
        {renderAbilityScores()}
      </div>
    </div>
  );
};

export default PlayerStatsPage;
