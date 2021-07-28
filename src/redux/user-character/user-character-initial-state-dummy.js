export const initialState = {
  data: {
    details: {
      name: "Blurg Wingbat",
      description: {
        eyes: "Blue",
        hair: "Bald",
        skin: "Dark Brown",
        size: "Medium",
        age: 32,
      },
      background:
        "Village got burnt down by evil man. Looking to for revenge against an unknown evil",
      level: 3,
      alignment: "Chaotic Good",
      experience: 2500,
      race: "Half Elf",
      classes: [{ id: 0, level: 2, type: "Fighter" }],
    },
    abilityScores: {
      strength: { value: 17, modifier: 3 },
      dexterity: { value: 12, modifier: 1 },
      constitution: { value: 16, modifier: 2 },
      intelligence: { value: 7, modifier: -1 },
      wisdom: { value: 8, modifier: -1 },
      charisma: { value: 20, modifier: 5 },
    },
    savingThrows: {
      base: [
        { code: "strength", title: "Strength", value: 7 },
        { code: "dexterity", title: "Dexterity", value: 3 },
        { code: "constitution", title: "Consitution", value: 0 },
        { code: "intelligence", title: "Intelligence", value: -1 },
        { code: "wisdom", title: "Wisdom", value: -2 },
        { code: "charisma", title: "Charisma", value: 7 },
      ],
      skills: [
        {
          code: "acrobatics",
          title: "Acrobatics",
          value: 2,
          type: "dexterity",
        },
        {
          code: "animalHandling",
          title: "Animal Handling",
          value: -1,
          type: "wisdom",
        },
        { code: "arcane", title: "Arcane", value: -2, type: "intelligence" },
        { code: "athletics", title: "Athletics", value: 5, type: "strength" },
        { code: "deception", title: "Deception", value: 0, type: "charisma" },
        { code: "history", title: "History", value: 3, type: "intelligence" },
        { code: "insight", title: "Insight", value: 1, type: "wisdom" },
        {
          code: "intimidation",
          title: "Intimidation",
          value: 2,
          type: "charisma",
        },
        {
          code: "investigation",
          title: "Investigation",
          value: -3,
          type: "intelligence",
        },
        { code: "medicine", title: "Medicine", value: 1, type: "wisdom" },
        { code: "nature", title: "Nature", value: 2, type: "intelligence" },
        { code: "perception", title: "Perception", value: 3, type: "wisdom" },
        {
          code: "performance",
          title: "Performance",
          value: -1,
          type: "charisma",
        },
        { code: "persuasion", title: "Persuasion", value: 0, type: "charisma" },
        {
          code: "sleightOfHand",
          title: "Sleight of Hand",
          value: 0,
          type: "dexterity",
        },
        { code: "stealth", title: "Stealth", value: -1, type: "dexterity" },
        { code: "survival", title: "Survival", value: 3, type: "wisdom" },
        { code: "tool", title: "Tool", value: 4, type: "none" },
      ],
      resistances: [
        {
          id: 0,
          title: "all Physical(rage)",
          details: "I ingore all physical damaged while in rage",
        },
        { id: 1, title: "fire", details: "all fire damage is reduced by half" },
      ],
    },
    stats: {
      hitPoints: { title: "Hit Points", max: 34, current: 13, temporary: 0 },
      armorClass: { title: "Armor Class", value: 13, temporary: 0 }, // should be calcutated from equipt items with attribute armorClassContribution
      proficiency: { title: "Profienciency", value: 2 },
      initiative: { title: "Initiative", value: 3 },
      deathSaves: {
        title: "Death Saves",
        successes: 0,
        failures: 0,
      },
      hitDice: [{ id: 0, level: 4, die: "d12+4", used: 0 }],
      speed: { title: "Speed", base: 10, encombered: 4 },
    },
    features: {
      limited: [
        {
          id: 0,
          type: "limited",
          title: "Rage",
          max: 3,
          recovery: "long rest",
          used: 0,
          description: "+ 2 to melee Damage for 3 rounds",
        },
        {
          id: 1,
          type: "limited",
          title: "Relentless Endurance",
          max: 1,
          recovery: "short rest",
          used: 0,
          description: "if you go below 0hp you can go back to 1hp",
        },
      ],
      constants: [
        {
          id: 0,
          type: "constant",
          title: "Danger Sense",
          description:
            "Advantage on dexterity saves against seen effects (not blinded / defened / or incapacitated)",
        },
      ],
    },
    racialTraits: [{ title: "", description: "" }],
    items: [
      {
        id: 0,
        quantity: 1,
        type: "weapon",
        damageDice: "1d8",
        title: "Battle Axe",
        code: "battleAxe",
        advantageToHit: 2,
        damageType: "slashing",
        isEquipt: true,
        isMagic: false,
        istwoHanded: true,
        range: {
          type: "melee", // melee, touch, ranged, melee/ranged
          distance: { min: 0, max: 5 },
        },
        value: 100,
        description: "Battle axe bought from Store",
        weight: 3,
      },
      {
        id: 1,
        quantity: 1,
        type: "weapon",
        damageDice: "1d8",
        title: "Long Bow",
        code: "battleAxe",
        advantageToHit: 2,
        damageModifier: 3,
        damageType: "piercing",
        istwoHanded: false,
        isEquipt: false,
        isMagic: false,
        range: {
          type: "ranged",
          distance: { min: 20, max: 50, disadvantage: 100 },
        },
        value: 100,
        description: "Battle axe bought from Store",
        weight: 1,
      },
      {
        id: 3,
        quantity: 1,
        type: "weapon",
        damageDice: "1d8",
        title: "Throwing Axe",
        code: "thowingAxe",
        advantageToHit: 0,
        damageModifier: 0,
        damageType: "slashing",
        isEquipt: false,
        isMagic: false,
        istwoHanded: false,
        range: {
          type: "ranged",
          distance: { min: 10, max: 20, disadvantage: 50 },
        },
        value: 100,
        description: "Battle axe bought from Store",
        weight: 1,
      },
      {
        id: 4,
        quantity: 1,
        type: "armor",
        damageDice: "1d8",
        title: "Chain Mail",
        code: "chainMail",
        armorClassContribution: 12,
        damageType: "slashing",
        isEquipt: true,
        isMagic: false,
        value: 200,
        description: "Basic Chain Mail from guard",
        weight: 10,
      },
      {
        id: 5,
        quantity: 1,
        type: "misc",
        title: "Magic Ring",
        code: "", // game master created
        armorClassContribution: 12,
        isEquipt: true,
        description: "+2 to Armor Class",
        isMagic: true,
        weight: 0.1,
      },
      {
        id: 6,
        quantity: 1,
        type: "misc",
        title: "Backpack",
        code: "backpack",
        description: "Basic Backpack",
        isMagic: false,
        weight: 0.5,
      },
      {
        id: 7,
        quantity: 1,
        type: "misc",
        title: "Quiver",
        code: "quiver",
        description: "Basic Quiver",
        isMagic: false,
        weight: 0.1,
      },
      {
        id: 9,
        quantity: 1,
        type: "misc",
        title: "Gem",
        code: "gem",
        description: "hamberger shaped gem",
        isMagic: false,
        weight: 0.1,
      },
      {
        id: 8,
        type: "ammunition",
        title: "Arrows",
        code: "arrows",
        description: "Silver tipped arrows",
        isMagic: false,
        quantity: 30,
        weight: 0.1,
        damageDice: "1d8",
        damageType: "piercing",
      },
    ],
    money: {
      gold: 0,
      silver: 0,
      copper: 0,
    },
    // todo spells
  },
  isLoaded: false,
  error: "",
};

/// original default ///
const originalInitialState = {
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
