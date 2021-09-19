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

  const renderFeatures = () => {
    return character.features.map((dataValue) => (
      <CharacterDataCard
        className={dataValue.code}
        key={dataValue.code}
        dataKey="features"
        dataValue={dataValue}
      />
    ));
  };

  const renderItems = () => {
    return character.items.map((dataValue) => (
      <CharacterDataCard
        className={dataValue.code}
        key={dataValue.code}
        dataKey="items"
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
  const renderSavingThrows = () => {
    return character.savingThrows.map((dataValue) => (
      <CharacterDataCard
        className={dataValue.code}
        key={dataValue.code}
        dataKey="savingThrows"
        dataValue={dataValue}
      />
    ));
  };
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
  const renderTraits = () => {
    return character.traits.map((dataValue) => (
      <CharacterDataCard
        className={dataValue.code}
        key={dataValue.code}
        dataKey="traits"
        dataValue={dataValue}
      />
    ));
  };
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
      PlayerDetailsPage
      <div>
        <div>Details</div>
        {renderDetials()}
        <div>Ability Scores</div>
        {renderAbilityScores()}
        <div>Saving Throws</div>
        {renderSavingThrows()}
        <div>Resistances</div>
        {renderResistances()}
        <div>Stats</div>
        {renderStats()}
        <div>Features</div>
        {renderFeatures()}
        <div>Items</div>
        {renderItems()}
        <div>Traits</div>
        {renderTraits()}
        <div>Money</div>
        {renderMoney()}
      </div>
    </div>
  );
};

export default PlayerDetailsPage;
