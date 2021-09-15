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

export const models = {
  classes,
  hitDice,
};
