import types from "./user-character.types";

export const initialState = {
  data: {
    details: {
      name: "",
      description: "",
      background: "",
      level: 0,
      alignment: "",
      experience: 0,
      race: "",
      class: [{ level: 0, type: "" }],
    },
    abilityScores: {
      strength: { value: 0, modifier: 0 },
      dexterity: { value: 0, modifier: 0 },
      constitution: { value: 0, modifier: 0 },
      intelligence: { value: 0, modifier: 0 },
      wisdom: { value: 0, modifier: 0 },
      charisma: { value: 0, modifier: 0 },
    },
    savingThrows: {
      base: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      },
      skills: {
        acrobatics: { value: 0, type: "dexterity" },
        animalHandling: { value: 0, type: "wisdom" },
        arcane: { value: 0, type: "intelligence" },
        athletics: { value: 0, type: "strength" },
        deception: { value: 0, type: "charisma" },
        history: { value: 0, type: "intelligence" },
        insight: { value: 0, type: "wisdom" },
        intimidation: { value: 0, type: "charisma" },
        investigation: { value: 0, type: "intelligence" },
        medicine: { value: 0, type: "wisdom" },
        nature: { value: 0, type: "intelligence" },
        perception: { value: 0, type: "wisdom" },
        performance: { value: 0, type: "charisma" },
        persuasion: { value: 0, type: "charisma" },
        sleightOfHand: { value: 0, type: "dexterity" },
        stealth: { value: 0, type: "dexterity" },
        survival: { value: 0, type: "wisdom" },
        tool: { value: 0, type: "none" },
      },
      resistances: [],
    },
    stats: {
      hitPoints: { max: 0, current: 0, temporary: 0 },
      armorClass: 0,
      proficiency: 0,
      initiative: 0,
      deathSaves: {
        successes: [],
        failures: [],
      },
      hitDice: [],
      speed: { base: 0, encombered: 0 },
    },
    features: [{ name: "", max: 0, recovery: "", used: 0, description: "" }],
  },
  isLoaded: false,
  error: "",
};

const userCharactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER_CHARACTER:
      return { ...state, data: { ...state.data, ...action.payload } };
    case types.RESET_USER_CHARACTER:
      return { ...initialState };
    // GET
    case types.GET_USER_CHARACTER_START:
      return { ...state, isLoaded: false };
    case types.GET_USER_CHARACTER_SUCCESS:
      return { ...state, data: { ...action.payload }, isLoaded: true };
    case types.GET_USER_CHARACTER_FAILURE:
      return { ...state, data: {}, isLoaded: true, error: [...action.payload] };
    // CREATE
    case types.CREATE_USER_CHARACTER_START:
      return { ...state, isLoaded: false };
    case types.CREATE_USER_CHARACTER_SUCCESS:
      return { ...initialState, isLoaded: true };
    case types.CREATE_USER_CHARACTER_FAILURE:
      return { ...state, isLoaded: true, error: [...action.payload] };
    // UPDATE
    case types.UPDATE_USER_CHARACTER_START:
      return { ...state, isLoaded: false };
    case types.UPDATE_USER_CHARACTER_SUCCESS:
      return { ...state, data: { ...action.payload }, isLoaded: true };
    case types.UPDATE_USER_CHARACTER_FAILURE:
      return { ...state, isLoaded: true, error: [...action.payload] };
    default:
      return state;
  }
};

export default userCharactersReducer;
