const GameCharacterSheet = (props) => {
  const { character } = props;
  const { id, name, content } = character;

  return (
    <div className="game-character-sheet">
      <div>{id}</div>
      <div>{name}</div>
      <div>{content}</div>
    </div>
  );
};

GameCharacterSheet.defaultProps = {
  character: {
    id: "",
    name: "",
    content: "",
  },
};

export default GameCharacterSheet;
