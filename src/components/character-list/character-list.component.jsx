import { useEffect } from "react";
import CharacterListCard from "../character-list-card/character-list-card.component";
import { connect } from "react-redux";
import { getUserCharacters } from "../../redux/user-characters/user-characters.actions";

const CharacterList = (props) => {
  const { getUserCharacters, userCharacters, userId } = props;
  useEffect(() => {
    getUserCharacters();
  }, [userId, getUserCharacters]);

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
  userId: state.user.id,
});
const mapDispatchToProps = (dispatch) => ({
  getUserCharacters: () => dispatch(getUserCharacters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
