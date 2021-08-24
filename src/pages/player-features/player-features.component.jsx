import CharacterFeaturesCard from "../../components/character-features-card/character-features-card.component";
import { useSelector } from "react-redux";

const PlayerFeaturesPage = () => {
  const character = useSelector((state) => state.userCharacter.data);

  const renderConstants = () => {
    const filtered = character.features.filter(
      (savingThrow) => savingThrow.type === "constant"
    );
    const mapped = filtered.map((dataValue) => (
      <CharacterFeaturesCard
        className={dataValue.code}
        key={dataValue.code || dataValue.id}
        dataKey="features"
        dataValue={dataValue}
      />
    ));
    return (
      <div className="constants">
        <div>Contants</div>
        <div>{mapped}</div>
      </div>
    );
  };
  const renderLimited = () => {
    const filtered = character.features.filter(
      (savingThrow) => savingThrow.type === "limited"
    );
    const mapped = filtered.map((dataValue) => (
      <CharacterFeaturesCard
        className={dataValue.code}
        key={dataValue.code || dataValue.id}
        dataKey="features"
        dataValue={dataValue}
      />
    ));
    return (
      <div className="base">
        <div>Limited</div>
        <div>{mapped}</div>
      </div>
    );
  };

  return (
    <div>
      PlayerFeaturesPage
      <div>{renderConstants()}</div>
      <div>{renderLimited()}</div>
    </div>
  );
};

export default PlayerFeaturesPage;
