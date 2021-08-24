import { useSelector } from "react-redux";
import CharacterDataCard from "../../components/character-data-card/character-data-card.component";

const PlayerSavingThrowsPage = () => {
  const character = useSelector((state) => state.userCharacter.data);

  const renderBase = () => {
    const filtered = character.savingThrows.filter(
      (savingThrow) => savingThrow.type === "base"
    );
    const mapped = filtered.map((dataValue) => (
      <CharacterDataCard
        className={dataValue.code}
        key={dataValue.code}
        dataKey="savingThrows"
        dataValue={dataValue}
      />
    ));
    return (
      <div className="base">
        <div>Base</div>
        <div>{mapped}</div>
      </div>
    );
  };
  const renderSkills = () => {
    const filtered = character.savingThrows.filter(
      (savingThrow) => savingThrow.type === "skill"
    );
    const mapped = filtered.map((dataValue) => (
      <CharacterDataCard
        className={dataValue.code}
        key={dataValue.code}
        dataKey="savingThrows"
        dataValue={dataValue}
      />
    ));
    return (
      <div className="base">
        <div>Skills</div>
        <div>{mapped}</div>
      </div>
    );
  };

  console.log({ sv: character.savingThrows });

  return (
    <div className="player-saving-throws">
      <div className="base">{renderBase()}</div>
      <div className="skills">{renderSkills()}</div>
    </div>
  );
};
export default PlayerSavingThrowsPage;
