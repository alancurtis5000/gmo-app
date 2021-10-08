import CharacterSubSection from "../../components/character-subsection/character-subsection.component";

import { useSelector } from "react-redux";

const PlayerDetailsPage = () => {
  const character = useSelector((state) => state.userCharacter.data);
  const renderDetials = () => {
    return character.details.map((dataValue) => (
      <CharacterSubSection
        className={dataValue.code}
        key={dataValue.code}
        dataKey="details"
        dataValue={dataValue}
      />
    ));
  };
  const renderResistances = () => {
    return character.resistances.map((dataValue) => (
      <CharacterSubSection
        className={dataValue.code}
        key={dataValue.code}
        dataKey="resistances"
        dataValue={dataValue}
      />
    ));
  };

  const renderFeatures = () => {
    return character.features.map((dataValue) => (
      <CharacterSubSection
        className={dataValue.code}
        key={dataValue.code}
        dataKey="features"
        dataValue={dataValue}
      />
    ));
  };

  const renderItems = () => {
    return character.items.map((dataValue) => (
      <CharacterSubSection
        className={dataValue.code}
        key={dataValue.code}
        dataKey="items"
        dataValue={dataValue}
      />
    ));
  };
  const renderAbilityScores = () => {
    return character.abilityScores.map((dataValue) => (
      <CharacterSubSection
        className={dataValue.code}
        key={dataValue.code}
        dataKey="abilityScores"
        dataValue={dataValue}
      />
    ));
  };
  const renderSavingThrows = () => {
    return character.savingThrows.map((dataValue) => (
      <CharacterSubSection
        className={dataValue.code}
        key={dataValue.code}
        dataKey="savingThrows"
        dataValue={dataValue}
      />
    ));
  };
  const renderStats = () => {
    return character.stats.map((dataValue) => (
      <CharacterSubSection
        className={dataValue.code}
        key={dataValue.code}
        dataKey="stats"
        dataValue={dataValue}
      />
    ));
  };
  const renderTraits = () => {
    return character.traits.map((dataValue) => (
      <CharacterSubSection
        className={dataValue.code}
        key={dataValue.code}
        dataKey="traits"
        dataValue={dataValue}
      />
    ));
  };
  const renderMoney = () => {
    return character.money.map((dataValue) => (
      <CharacterSubSection
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
