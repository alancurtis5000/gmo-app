export const initialState = {
  data: {
    details: [
      {
        code: "name",
        label: "Name",
        value: { value: "Blurg Wingbat", inputType: "text" },
      },
      {
        code: "eyes",
        label: "Eyes",
        value: { value: "Blue", inputType: "text" },
      },
      {
        code: "hair",
        label: "Hair",
        value: { value: "Silver", inputType: "text" },
      },
      {
        code: "skin",
        label: "Skin",
        value: { value: "Tan", inputType: "text" },
      },
      {
        code: "size",
        label: "Size",
        value: { value: "Medium", inputType: "text" },
      },
      { code: "age", label: "Age", value: { value: 32, inputType: "number" } },

      {
        code: "background",
        label: "Background",
        value: {
          value:
            "Village got burnt down by evil man. Looking to for revenge against an unknown evil",
          inputType: "textArea",
        },
      },
      {
        code: "level",
        label: "Level",
        value: { value: 3, inputType: "number" },
      },
      {
        code: "alignment",
        label: "alignment",
        value: { value: "Chaotic Good", inputType: "text" },
      },
      {
        code: "experience",
        label: "experience",
        value: { value: "2500", inputType: "number" },
      },
      {
        code: "race",
        label: "race",
        value: { value: "Half Elf", inputType: "text" },
      },
      {
        code: "classes",
        label: "Classes",
        table: {
          columns: [
            { code: "id", label: "Id" },
            { code: "level", label: "Level" },
            { code: "type", label: "Type" },
            { code: "remove", label: "Remove" },
          ],
          rows: [
            [
              { code: "id", value: 0, inputType: "number" },
              { code: "level", value: 0, inputType: "number" },
              { code: "type", value: "Fighter", inputType: "text" },
            ],
            [
              { code: "id", value: 3, inputType: "number" },
              { code: "level", value: 3, inputType: "number" },
              { code: "type", value: "Bard", inputType: "text" },
            ],
          ],
        },
      },
    ],
    abilityScores: [
      {
        code: "strength",
        label: "Strength",
        value: { label: "Value", value: 18, inputType: "number" },
        modifier: { label: "Mod", value: 1, inputType: "number" },
        save: { label: "Save", value: 3, inputType: "number" },
      },
      {
        code: "dexterity",
        label: "Dexterity",
        value: { label: "Value", value: 18, inputType: "number" },
        modifier: { label: "Mod", value: 1, inputType: "number" },
        save: { label: "Save", value: 3, inputType: "number" },
      },
      {
        code: "constitution",
        label: "Constitution",
        value: { label: "Value", value: 18, inputType: "number" },
        modifier: { label: "Mod", value: 1, inputType: "number" },
        save: { label: "Save", value: 3, inputType: "number" },
      },
      {
        code: "intelligence",
        label: "Intelligence",
        value: { label: "Value", value: 18, inputType: "number" },
        modifier: { label: "Mod", value: 1, inputType: "number" },
        save: { label: "Save", value: 3, inputType: "number" },
      },
      {
        code: "wisdom",
        label: "Wisdom",
        value: { label: "Value", value: 18, inputType: "number" },
        modifier: { label: "Mod", value: 1, inputType: "number" },
        save: { label: "Save", value: 3, inputType: "number" },
      },
      {
        code: "charisma",
        label: "Charisma",
        value: { label: "Value", value: 18, inputType: "number" },
        modifier: { label: "Mod", value: 1, inputType: "number" },
        save: { label: "Save", value: 3, inputType: "number" },
      },
    ],
    savingThrows: [
      {
        type: "base",
        code: "strength",
        label: "Strength",
        value: { value: 7, inputType: "number" },
      },
      {
        type: "base",
        code: "dexterity",
        label: "Dexterity",
        value: { value: 7, inputType: "number" },
      },
      {
        type: "base",
        code: "constitution",
        label: "Consitution",
        value: { value: 7, inputType: "number" },
      },
      {
        type: "base",
        code: "intelligence",
        label: "Intelligence",
        value: { value: 7, inputType: "number" },
      },
      {
        type: "base",
        code: "wisdom",
        label: "Wisdom",
        value: { value: 7, inputType: "number" },
      },
      {
        type: "base",
        code: "charisma",
        label: "Charisma",
        value: { value: 7, inputType: "number" },
      },
      {
        type: "skill",
        code: "acrobatics",
        label: "Acrobatics",
        value: { value: 7, inputType: "number" },
        ability: "dexterity",
      },
      {
        type: "skill",
        code: "animalHandling",
        label: "Animal Handling",
        value: { value: -7, inputType: "number" },
        ability: "wisdom",
      },
      {
        type: "skill",
        code: "arcane",
        label: "Arcane",
        value: { value: 7, inputType: "number" },
        ability: "intelligence",
      },
      {
        type: "skill",
        code: "athletics",
        label: "Athletics",
        value: { value: 7, inputType: "number" },
        ability: "strength",
      },
      {
        type: "skill",
        code: "deception",
        label: "Deception",
        value: { value: 7, inputType: "number" },
        ability: "charisma",
      },
      {
        type: "skill",
        code: "history",
        label: "History",
        value: { value: 7, inputType: "number" },
        ability: "intelligence",
      },
      {
        type: "skill",
        code: "insight",
        label: "Insight",
        value: { value: 7, inputType: "number" },
        ability: "wisdom",
      },
      {
        type: "skill",
        code: "intimidation",
        label: "Intimidation",
        value: { value: 7, inputType: "number" },
        ability: "charisma",
      },
      {
        type: "skill",
        code: "investigation",
        label: "Investigation",
        value: { value: -3, inputType: "number" },
        ability: "intelligence",
      },
      {
        type: "skill",
        code: "medicine",
        label: "Medicine",
        value: { value: 7, inputType: "number" },
        ability: "wisdom",
      },
      {
        type: "skill",
        code: "nature",
        label: "Nature",
        value: { value: 7, inputType: "number" },
        ability: "intelligence",
      },
      {
        type: "skill",
        code: "perception",
        label: "Perception",
        value: { value: 7, inputType: "number" },
        ability: "wisdom",
      },
      {
        type: "skill",
        code: "performance",
        label: "Performance",
        value: { value: 7, inputType: "number" },
        ability: "charisma",
      },
      {
        type: "skill",
        code: "persuasion",
        label: "Persuasion",
        value: { value: 7, inputType: "number" },
        ability: "charisma",
      },
      {
        type: "skill",
        code: "sleightOfHand",
        label: "Sleight of Hand",
        value: { value: 7, inputType: "number" },
        ability: "dexterity",
      },
      {
        type: "skill",
        code: "stealth",
        label: "Stealth",
        value: { value: 7, inputType: "number" },
        ability: "dexterity",
      },
      {
        type: "skill",
        code: "survival",
        label: "Survival",
        value: { value: 7, inputType: "number" },
        ability: "wisdom",
      },
      {
        type: "skill",
        code: "tool",
        label: "Tool",
        value: { value: 7, inputType: "number" },
        ability: "none",
      },
    ],
    resistances: [
      {
        code: "resistances",
        label: "Resistances",
        table: {
          columns: [
            { code: "title", label: "Title" },
            { code: "details", label: "Details" },
            { code: "remove", label: "Remove" },
          ],
          rows: [
            [
              { code: "title", value: "All Physical(rage)", inputType: "text" },
              {
                code: "details",
                value: "I ingore all physical damaged while in rage",
                inputType: "textArea",
              },
            ],
            [
              { code: "title", value: "fire", inputType: "text" },
              {
                code: "details",
                value: "all fire damage is reduced by half",
                inputType: "textArea",
              },
            ],
          ],
        },
      },
    ],
    stats: [
      {
        code: "hitPoints",
        label: "Hit Points",
        max: { label: "Max", value: 34, inputType: "number" },
        current: { label: "Current", value: 13, inputType: "number" },
        temporary: { label: "Temp", value: 0 },
      },
      {
        code: "armorClass",
        label: "Armor Class",
        value: { label: "Base", value: 13, inputType: "number" },
        temporary: { label: "Temp", value: 0, inputType: "number" },
      }, // should be calcutated from equipt items with attribute armorClassContribution
      {
        code: "proficiency",
        label: "Profienciency",
        value: { label: "Base", value: 2, inputType: "number" },
      },
      {
        code: "initiative",
        label: "Initiative",
        value: { label: "Base", value: 3, inputType: "number" },
      },
      {
        code: "deathSaves",
        label: "Death Saves",
        successes: { label: "Successes", value: 0, inputType: "number" },
        failures: { label: "Failures", value: 0, inputType: "number" },
      },
      {
        code: "hitDice",
        label: "Hit Dice",
        table: {
          columns: [
            { code: "level", label: "Level" },
            { code: "used", label: "Used" },
            { code: "die", label: "Die" },
            { code: "remove", label: "Remove" },
          ],
          rows: [
            [
              { code: "level", value: 0, inputType: "number" },
              { code: "used", value: 0, inputType: "number" },
              { code: "die", value: "1d4+5", inputType: "text" },
            ],
            [
              { code: "level", value: 3, inputType: "number" },
              { code: "used", value: 3, inputType: "number" },
              { code: "die", value: "1d8+4", inputType: "text" },
            ],
          ],
        },
      },
      {
        code: "speed",
        label: "Speed",
        base: { label: "Base", value: 10, inputType: "number" },
        encombered: { label: "Encombered", value: 4, inputType: "number" },
      },
    ],
    features: [
      {
        code: "limited",
        label: "Limited",
        table: {
          columns: [
            { code: "name", label: "Name" },
            { code: "description", label: "Description" },
            { code: "max", label: "Max" },
            { code: "used", label: "Used" },
            { code: "recovery", label: "Recovery" },
            { code: "remove", label: "Remove" },
          ],
          rows: [
            [
              { code: "name", value: "Rage", inputType: "text" },
              {
                code: "description",
                value: "+ 2 to melee Damage for 3 rounds",
                inputType: "textArea",
              },
              { code: "max", value: 3, inputType: "number" },
              { code: "used", value: 1, inputType: "number" },
              { code: "recovery", value: "Long Rest", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "Relentless Endurance",
                inputType: "text",
              },
              {
                code: "description",
                value: "if you go below 0hp you can go back to 1hp",
                inputType: "textArea",
              },
              { code: "max", value: 2, inputType: "number" },
              { code: "used", value: 0, inputType: "number" },
              { code: "recovery", value: "Short Rest", inputType: "text" },
            ],
          ],
        },
      },
      {
        code: "constants",
        label: "Constants",
        table: {
          columns: [
            { code: "name", label: "Name" },
            { code: "description", label: "Description" },
            { code: "remove", label: "Remove" },
          ],
          rows: [
            [
              { code: "name", value: "Danger Sense", inputType: "text" },
              {
                code: "description",
                value:
                  "Advantage on dexterity saves against seen effects (not blinded / defened / or incapacitated)",
                inputType: "textArea",
              },
            ],
          ],
        },
      },
    ],

    traits: [
      {
        code: "racial",
        label: "Racial",
        table: {
          columns: [
            { code: "name", label: "Name" },
            { code: "description", label: "Description" },
            { code: "remove", label: "Remove" },
          ],
          rows: [
            [
              { code: "name", value: "Dark Vision", inputType: "text" },
              {
                code: "description",
                value:
                  "Can see 60 feet in low light as if it were well lite, and 30 feet in no light as if it were poorly lite.",
                inputType: "textArea",
              },
            ],
          ],
        },
      },
      {
        code: "languages",
        label: "Languages",
        table: {
          columns: [
            { code: "name", label: "Name" },
            { code: "remove", label: "Remove" },
          ],
          rows: [[{ code: "name", value: "Orcish", inputType: "text" }]],
        },
      },
      {
        code: "proficiencies",
        label: "Proficiencies",
        table: {
          columns: [
            { code: "name", label: "Name" },
            { code: "remove", label: "Remove" },
          ],
          rows: [[{ code: "name", value: "Axes", inputType: "text" }]],
        },
      },
    ],
    items: [
      {
        code: "weapons",
        label: "Weapons",
        table: {
          columns: [
            { code: "name", label: "Name" },
            { code: "description", label: "Description" },
            { code: "damageDice", label: "Damage Dice" },
            { code: "advantageToHit", label: "Advantage to hit" },
            { code: "damageType", label: "Damage Type" },
            { code: "isEquipt", label: "Equipt" },
            { code: "isMagic", label: "Magical" },
            { code: "grip", label: "Grip" },
            { code: "range", label: "Range" },
            { code: "distanceMin", label: "Min" },
            { code: "distanceMax", label: "Max" },
            { code: "distanceDisadvantage", label: "Disadvantage" },
            { code: "value", label: "Value" },
            { code: "weight", label: "Weight" },

            { code: "remove", label: "Remove" },
          ],
          rows: [
            [
              { code: "name", value: "Battle Axe", inputType: "text" },
              {
                code: "description",
                value: "A large axe with a dragon etched into the side",
                inputType: "textArea",
              },
              { code: "damageDice", value: "1d8", inputType: "text" },
              { code: "advantageToHit", value: 2, inputType: "number" },
              { code: "damageType", value: "Slashing", inputType: "text" },
              { code: "isEquipt", value: "true", inputType: "text" },
              { code: "isMagic", value: "true", inputType: "text" },
              { code: "grip", value: "Two Handed", inputType: "text" },
              { code: "range", value: "Melee", inputType: "text" },
              { code: "distanceMin", value: 0, inputType: "number" },
              { code: "distanceMax", value: 50, inputType: "number" },
              {
                code: "distanceDisadvantage",
                value: 25,
                inputType: "number",
              },
              { code: "value", value: 100, inputType: "number" },
              { code: "weight", value: 2, inputType: "number" },
            ],
          ],
        },
      },
      {
        code: "armor",
        label: "Armor",
        table: {
          columns: [
            { code: "name", label: "Name" },
            { code: "description", label: "Description" },
            { code: "armorClassContribution", label: "Armor Class +" },
            { code: "isEquipt", label: "Equipt" },
            { code: "isMagic", label: "Magical" },
            { code: "value", label: "Value" },
            { code: "weight", label: "Weight" },

            { code: "remove", label: "Remove" },
          ],
          rows: [
            [
              { code: "name", value: "Chain Mail", inputType: "text" },
              {
                code: "description",
                value: "Family Armor passed down from grandfather",
                inputType: "textArea",
              },
              {
                code: "armorClassContribution",
                value: 12,
                inputType: "number",
              },
              { code: "isEquipt", value: "true", inputType: "text" },
              { code: "isMagic", value: "true", inputType: "text" },
              { code: "value", value: 100, inputType: "number" },
              { code: "weight", value: 2, inputType: "number" },
            ],
          ],
        },
      },
      {
        code: "misc",
        label: "Misc",
        table: {
          columns: [
            { code: "name", label: "Name" },
            { code: "description", label: "Description" },
            { code: "armorClassContribution", label: "Armor Class +" },
            { code: "isEquipt", label: "Equipt" },
            { code: "isMagic", label: "Magical" },
            { code: "value", label: "Value" },
            { code: "weight", label: "Weight" },

            { code: "remove", label: "Remove" },
          ],
          rows: [
            [
              { code: "name", value: "Magic Ring", inputType: "text" },
              {
                code: "description",
                value: "Green Ring that gives wearer +2 AC",
                inputType: "textArea",
              },
              {
                code: "armorClassContribution",
                value: 2,
                inputType: "number",
              },
              { code: "isEquipt", value: "true", inputType: "text" },
              { code: "isMagic", value: "true", inputType: "text" },
              { code: "value", value: 100, inputType: "number" },
              { code: "weight", value: 2, inputType: "number" },
            ],
          ],
        },
      },
      {
        code: "ammo",
        label: "Ammo",
        table: {
          columns: [
            { code: "name", label: "Name" },
            { code: "description", label: "Description" },
            { code: "quantity", label: "Quantity" },
            { code: "damageModifier", label: "Damage Mod" },
            { code: "isMagic", label: "Magical" },
            { code: "value", label: "Value" },
            { code: "weight", label: "Weight" },

            { code: "remove", label: "Remove" },
          ],
          rows: [
            [
              {
                code: "name",
                value: "Silver Tipped Arrows",
                inputType: "text",
              },
              {
                code: "description",
                value: "Green Ring that gives wearer +2 AC",
                inputType: "textArea",
              },
              {
                code: "quantity",
                value: 25,
                inputType: "number",
              },
              {
                code: "damageModifier",
                value: 2,
                inputType: "number",
              },
              { code: "isMagic", value: "true", inputType: "text" },
              { code: "value", value: 100, inputType: "number" },
              { code: "weight", value: 2, inputType: "number" },
            ],
          ],
        },
      },
    ],
    money: [
      {
        code: "platinum",
        label: "Plantinum",
        value: { value: 3, inputType: "number" },
      },
      { code: "gold", label: "Gold", value: { value: 4, inputType: "number" } },
      {
        code: "electrum",
        label: "Electrum",
        value: { value: 2, inputType: "number" },
      },
      {
        code: "silver",
        label: "Silver",
        value: { value: 1, inputType: "number" },
      },
      {
        code: "copper",
        label: "Copper",
        value: { value: 0, inputType: "number" },
      },
    ],
    // todo spells
  },
  isLoaded: false,
  error: "",
};
