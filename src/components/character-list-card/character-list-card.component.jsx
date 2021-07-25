const CharacterListCard = (props) => {
  const { character } = props;

  return (
    <div>
      <div>CharacterListCard</div>
      <div>{character?.details?.name}</div>
      <div>{character?.abilityScores?.strength?.value}</div>
    </div>
  );
};

export default CharacterListCard;
