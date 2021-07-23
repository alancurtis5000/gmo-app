import GameCharacterSheet from "../game-character-sheet/game-character-sheet.component";

const GameMasterCharacterList = (props) => {
  const { characters } = props;

  return (
    <div className="game-master-character-list">
      {characters.map((character) => (
        <GameCharacterSheet key={character.id} character={character} />
      ))}
    </div>
  );
};

GameMasterCharacterList.defaultProps = {
  characters: [],
};

export default GameMasterCharacterList;
