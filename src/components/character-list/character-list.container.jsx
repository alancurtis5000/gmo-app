// containers don't render anything. just use for passing props
import { connect } from "react-redux";
import { compose } from "redux";

import WithSpinner from "../with-spinner/with-spinner.component";
import CharacterList from "./character-list.component";

const mapStateToProps = (state) => ({
  isLoaded: state.userCharacters.isLoaded,
});

// without compose
// export const CharacterListContainer = connect(mapStateToProps)(
//   WithSpinner(CharacterList)
// );

export const CharacterListContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CharacterList);

export default CharacterListContainer;
