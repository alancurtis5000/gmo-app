// these models are blank structure for character data tables
const classes = [
  { code: "id", value: 0, inputType: "number" },
  { code: "level", value: 0, inputType: "number" },
  { code: "type", value: "", inputType: "text" },
];

const hitDice = [
  { code: "level", value: 0, inputType: "number" },
  { code: "used", value: 0, inputType: "number" },
  { code: "die", value: "", inputType: "text" },
];

// features
const limited = [
  { code: "name", value: "", inputType: "text" },
  {
    code: "description",
    value: "",
    inputType: "textArea",
  },
  { code: "max", value: 0, inputType: "number" },
  { code: "used", value: 0, inputType: "number" },
  { code: "recovery", value: "", inputType: "text" },
];

const constants = [
  { code: "name", value: "", inputType: "text" },
  {
    code: "description",
    value: "",
    inputType: "textArea",
  },
];

export const models = {
  classes,
  hitDice,
  limited,
  constants,
};
