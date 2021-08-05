import { useSelector } from "react-redux";

const PlayerStatsPage = () => {
  const stats = useSelector((state) => state.userCharacter.data.stats);
  const { hitPoints, hitDice, armorClass, proficiency, initiative, speed } =
    stats;
  return (
    <div className="player-stats">
      <h3>Stats</h3>
      <div>
        <div>hit point</div>
        <div>current</div>
        <div>{hitPoints.current}</div>
        <div>Max</div>
        <div>{hitPoints.max}</div>
        <div>Temporary</div>
        <div>{hitPoints.temporary}</div>
      </div>
      <div>
        <div>Hit Dice</div>
        <div>Level</div>
        <div>{hitDice[0].level}</div>
        <div>Die</div>
        <div>{hitDice[0].die}</div>
        <div>used</div>
        <div>{hitDice[0].used}</div>
      </div>
      <div>
        <div>Armor Class</div>
        <div>{armorClass.value}</div>
      </div>
      <div>
        <div>Proficiency</div>
        <div>{proficiency.value}</div>
      </div>
      <div>
        <div>initiative</div>
        <div>{initiative.value}</div>
      </div>
      <div>
        <div>Speed</div>
        <div>{speed.base}</div>
        <div>encombered</div>
        <div>{speed.encombered}</div>
      </div>
    </div>
  );
};

export default PlayerStatsPage;
