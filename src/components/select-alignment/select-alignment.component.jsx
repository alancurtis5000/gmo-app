import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "../select/select.component";
import alignments from "../../constants/alignments";

const SelectAlignment = (props) => {
  const { disabled } = props;
  const [selected, setSelected] = useState();
  const options = alignments;

  // Left off here: todo // finish alignment drop down !!!!

  // const alignment = useSelector(
  //   (state) => state.userCharacter.data.details.alignment
  // );

  const handleSelect = (alignment) => {
    console.log(alignment);
    // setSelected(alignment);
  };

  useEffect(() => {
    // getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="select-character">
      <Select
        label="Alignment"
        options={options}
        handleSelect={handleSelect}
        value={selected}
        placeholder="Alignment"
        disabled={disabled}
      />
    </div>
  );
};

export default SelectAlignment;
