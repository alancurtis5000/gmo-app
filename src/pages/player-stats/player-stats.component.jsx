import { useSelector } from "react-redux";
import Card from "../../components/card/card.component";
import PlayerStatsCardArmorClass from "../../components/player-stats-card-armor-class/player-stats-card-armor-class.component";

const PlayerStatsPage = () => {
  const stats = useSelector((state) => state.userCharacter.data.stats);
  const abilityScores = useSelector(
    (state) => state.userCharacter.data.abilityScores
  );
  const { hitPoints, hitDice, armorClass, proficiency, initiative, speed } =
    stats;
  return (
    <div className="player-stats">
      <div className="grid">
        <PlayerStatsCardArmorClass className="armor-class" />
        <Card className="hit-points" header={<div>Hit Points</div>} />
        <Card className="initiative" header={<div>Initiative</div>} />
        <Card className="hit-dice" header={<div>Hit Dice</div>} />
        <Card className="proficiency" header={<div>proficiency</div>} />
        <Card className="death-saves" header={<div>death-saves</div>} />
        <Card className="strength attribute" header={<div>strength</div>} />
        <Card className="dexterity attribute" header={<div>dexterity</div>} />
        <Card
          className="constitution attribute"
          header={<div>constitution</div>}
        />
        <Card
          className="intelligence attribute"
          header={<div>intelligence</div>}
        />
        <Card className="wisdom attribute" header={<div>wisdom</div>} />
        <Card className="charisma attribute" header={<div>charisma</div>} />
      </div>

      {/*       
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
      <div>-------</div>
      <div>
        <div>Ability Scores</div>
        <div>Strength</div>
        <div>{abilityScores.strength.value}</div>
        <div>Modifier</div>
        <div>{abilityScores.strength.modifier}</div>
        <div>Save</div>
        <div>{abilityScores.strength.save}</div>
        <div>Dexterity</div>
        <div>{abilityScores.dexterity.value}</div>
        <div>Modifier</div>
        <div>{abilityScores.dexterity.modifier}</div>
        <div>Save</div>
        <div>{abilityScores.dexterity.save}</div>
        <div>Constitution</div>
        <div>{abilityScores.constitution.value}</div>
        <div>Modifier</div>
        <div>{abilityScores.constitution.modifier}</div>
        <div>Save</div>
        <div>{abilityScores.constitution.save}</div>
        <div>Intelligence</div>
        <div>{abilityScores.intelligence.value}</div>
        <div>Modifier</div>
        <div>{abilityScores.intelligence.modifier}</div>
        <div>Save</div>
        <div>{abilityScores.intelligence.save}</div>
        <div>Wisdom</div>
        <div>{abilityScores.wisdom.value}</div>
        <div>Modifier</div>
        <div>{abilityScores.wisdom.modifier}</div>
        <div>Save</div>
        <div>{abilityScores.wisdom.save}</div>
        <div>Charisma</div>
        <div>{abilityScores.charisma.value}</div>
        <div>Modifier</div>
        <div>{abilityScores.charisma.modifier}</div>
        <div>Save</div>
        <div>{abilityScores.charisma.save}</div>
      </div> */}
    </div>
  );
};

export default PlayerStatsPage;
