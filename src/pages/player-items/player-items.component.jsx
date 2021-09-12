import CharacterDataCard from "../../components/character-data-card/character-data-card.component";
import { useSelector } from "react-redux";

const PlayerItemsPage = () => {
  const character = useSelector((state) => state.userCharacter.data);
  const renderMoney = () => {
    return character.money.map((dataValue) => (
      <CharacterDataCard
        className={dataValue.code}
        key={dataValue.code}
        dataKey="money"
        dataValue={dataValue}
      />
    ));
  };
  return (
    <div>
      PlayerItemsPage
      <div>
        <div>Money</div>
        {renderMoney()}
      </div>
    </div>
  );
};

export default PlayerItemsPage;
