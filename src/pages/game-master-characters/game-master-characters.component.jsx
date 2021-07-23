import GameMasterCharacterList from "../../components/game-master-character-list/game-master-character-list.component";
const GameMasterCharacterPage = () => {
  let characters = [];
  for (let x = 0; x < 6; x++) {
    characters.push({ id: x, name: "millie", content: "bard elf" });
  }

  return (
    <div>
      Game Master Characters Page
      <GameMasterCharacterList characters={characters} />
    </div>
  );
};

export default GameMasterCharacterPage;
