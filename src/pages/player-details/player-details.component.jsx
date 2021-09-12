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
  return (
    <div>
      PlayerDetailsPage
      <div>
        <div>Details</div>
        {renderDetials()}
      </div>
    </div>
  );
};

export default PlayerDetailsPage;
