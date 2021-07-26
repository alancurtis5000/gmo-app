import { useSelector, useDispatch } from "react-redux";
import Select from "../select/select.component";
import alignments from "../../constants/alignments";
import { updateUserCharacterLocal } from "../../redux/user-character/user-character.actions";

const SelectAlignment = (props) => {
  const { disabled } = props;
  const options = alignments;
  const dispatch = useDispatch();
  const alignment = useSelector(
    (state) => state.userCharacter.data.details.alignment
  );
  const characterDetails = useSelector(
    (state) => state.userCharacter.data.details
  );

  const handleSelect = (selectedAlignment) => {
    const update = {
      details: {
        ...characterDetails,
        alignment: selectedAlignment.title,
      },
    };
    dispatch(updateUserCharacterLocal(update));
  };

  return (
    <div className="select-character">
      <Select
        label="Alignment"
        options={options}
        handleSelect={handleSelect}
        value={alignment}
        placeholder="Alignment"
        disabled={disabled}
      />
    </div>
  );
};

export default SelectAlignment;
