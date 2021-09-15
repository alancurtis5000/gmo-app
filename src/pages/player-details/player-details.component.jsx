import CharacterDataCard from "../../components/character-data-card/character-data-card.component";
import { useSelector } from "react-redux";

const PlayerDetailsPage = () => {
  const character = useSelector((state) => state.userCharacter.data);
  const renderDetials = () => {
    return character.details.map((dataValue) => (
      <CharacterDataCard
        className={dataValue.code}
        key={dataValue.code}
        dataKey="details"
        dataValue={dataValue}
      />
    ));
  };
  const renderResistances = () => {
    return character.resistances.map((dataValue) => (
      <CharacterDataCard
        className={dataValue.code}
        key={dataValue.code}
        dataKey="resistances"
        dataValue={dataValue}
      />
    ));
  };
  return (
    <div>
      PlayerDetailsPage
      <div>
        <div>Details</div>
        {renderDetials()}
        <div>Resistances</div>
        {renderResistances()}
      </div>
    </div>
  );
};

export default PlayerDetailsPage;
