import { useSelector } from "react-redux";
import CharacterDataCard from "../../components/character-data-card/character-data-card.component";
import PlayerStatsCard from "../../components/player-stats-card/player-stats-card.component";

const PlayerStatsPage = () => {
  const character = useSelector((state) => state.userCharacter.data);

  const renderStats = () => {
    return character.stats.map((dataValue) => (
      <CharacterDataCard
        className={dataValue.code}
        key={dataValue.code}
        dataKey="stats"
        dataValue={dataValue}
      />
    ));
  };

  const renderAbilityScores = () => {
    return character.abilityScores.map((dataValue) => (
      <CharacterDataCard
        className={dataValue.code}
        key={dataValue.code}
        dataKey="abilityScores"
        dataValue={dataValue}
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
