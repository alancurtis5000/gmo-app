// these models are blank structure for character data tables based of user-character-initial-state.js

// details section
const classes = [
  { code: "id", value: 0, inputType: "number" },
  { code: "level", value: 0, inputType: "number" },
  { code: "type", value: "", inputType: "text" },
];

// stats section
const hitDice = [
  { code: "level", value: 0, inputType: "number" },
  { code: "used", value: 0, inputType: "number" },
  { code: "die", value: "", inputType: "text" },
];

// features section
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

// items

const weapons = [
  { code: "name", value: "", inputType: "text" },
  {
    code: "description",
    value: "",
    inputType: "textArea",
  },
  { code: "damageDice", value: "", inputType: "text" },
  { code: "advantageToHit", value: 0, inputType: "number" },
  { code: "damageType", value: "", inputType: "text" },
  { code: "isEquipt", value: "", inputType: "text" },
  { code: "isMagic", value: "", inputType: "text" },
  { code: "grip", value: "", inputType: "text" },
  { code: "range", value: "", inputType: "text" },
  { code: "distanceMin", value: 0, inputType: "number" },
  { code: "distanceMax", value: 0, inputType: "number" },
  {
    code: "distanceDisadvantage",
    value: 0,
    inputType: "number",
  },
  { code: "value", value: 0, inputType: "number" },
  { code: "weight", value: 0, inputType: "number" },
];

const armor = [
  { code: "name", value: "", inputType: "text" },
  {
    code: "description",
    value: "",
    inputType: "textArea",
  },
  {
    code: "armorClassContribution",
    value: 0,
    inputType: "number",
  },
  { code: "isEquipt", value: "", inputType: "text" },
  { code: "isMagic", value: "", inputType: "text" },
  { code: "value", value: 0, inputType: "number" },
  { code: "weight", value: 0, inputType: "number" },
];

const misc = [
  { code: "name", value: "", inputType: "text" },
  {
    code: "description",
    value: "",
    inputType: "textArea",
  },
  {
    code: "armorClassContribution",
    value: 0,
    inputType: "number",
  },
  { code: "isEquipt", value: "", inputType: "text" },
  { code: "isMagic", value: "", inputType: "text" },
  { code: "value", value: 0, inputType: "number" },
  { code: "weight", value: 0, inputType: "number" },
];

const ammo = [
  {
    code: "name",
    value: "",
    inputType: "text",
  },
  {
    code: "description",
    value: "",
    inputType: "textArea",
  },
  {
    code: "quantity",
    value: 0,
    inputType: "number",
  },
  {
    code: "damageModifier",
    value: 0,
    inputType: "number",
  },
  { code: "isMagic", value: "", inputType: "text" },
  { code: "value", value: 0, inputType: "number" },
  { code: "weight", value: 0, inputType: "number" },
];

// traits section

const racial = [
  { code: "name", value: "", inputType: "text" },
  {
    code: "description",
    value: "",
    inputType: "textArea",
  },
];

const languages = [{ code: "name", value: "", inputType: "text" }];
const proficiencies = [{ code: "name", value: "", inputType: "text" }];

export const models = {
  classes,
  hitDice,
  limited,
  constants,
  weapons,
  armor,
  misc,
  ammo,
  racial,
  languages,
  proficiencies,
};
