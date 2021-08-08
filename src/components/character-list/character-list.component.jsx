import CharacterListCard from "../character-list-card/character-list-card.component";
import { connect } from "react-redux";

const CharacterList = (props) => {
  const { userCharacters } = props;

  const displayCharacters = () => {
    return userCharacters.map((character, i) => {
      return <CharacterListCard key={character.id} character={character} />;
    });
  };

  return (
    <div>
      <div>List of Characters</div>
      {displayCharacters()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userCharacters: state.userCharacters.data,
});

export default connect(mapStateToProps)(CharacterList);
