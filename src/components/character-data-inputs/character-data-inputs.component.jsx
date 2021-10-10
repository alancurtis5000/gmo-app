import InputSwitch from "../input-switch/InputSwitch.component";

const CharacterDataInputs = (props) => {
  const { className, dataValue, dataSection } = props;
  const { inputs } = dataValue;

  const renderInputs = () => {
    return inputs.map((input, inputIndex) => (
      <InputSwitch
        key={input.code}
        data={input}
        rowIndex={inputIndex}
        dataValue={dataValue}
        dataSection={dataSection}
      />
    ));
  };

  return (
    <div className={`character-data-inputs ${className}`}>
      <div className="inputs">{renderInputs()}</div>
    </div>
  );
};

export default CharacterDataInputs;
