export const initialState = {
  data: {
    // character section is array of subSections
    details: [
      {
        // each subSection has a code this is the card
        code: "name",
        label: "Name",
        inputs: [
          // each card has an array of inputs or a table with inputs
          {
            code: "name",
            label: "",
            value: "Blurg Wingbat",
            inputType: "text",
          },
        ],
      },
      {
        code: "eyes",
        label: "Eyes",
        inputs: [
          {
            code: "eyes",
            label: "",
            value: "Blue",
            inputType: "text",
          },
        ],
      },
      {
        code: "hair",
        label: "Hair",
        inputs: [
          {
            code: "hair",
            label: "",
            value: "Silver",
            inputType: "text",
          },
        ],
      },
      {
        code: "skin",
        label: "Skin",
        inputs: [
          {
            code: "skin",
            label: "",
            value: "Tan",
            inputType: "text",
          },
        ],
      },
      {
        code: "size",
        label: "Size",
        inputs: [
          {
            code: "size",
            label: "",
            value: "Medium",
            inputType: "text",
          },
        ],
      },
      {
        code: "age",
        label: "Age",
        inputs: [
          {
            code: "age",
            label: "",
            value: 23,
            inputType: "number",
          },
        ],
      },
      {
        code: "background",
        label: "Background",
        inputs: [
          {
            code: "background",
            label: "",
            value:
              "Village got burnt down by evil man. Looking to for revenge against an unknown evil",
            inputType: "textArea",
          },
        ],
      },
      {
        code: "level",
        label: "Level",
        inputs: [
          {
            code: "level",
            label: "",
            value: 3,
            inputType: "number",
          },
        ],
      },
      {
        code: "alignment",
        label: "Alignment",
        inputs: [
          {
            code: "alignment",
            label: "",
            value: "Chaotic Good",
            inputType: "text",
          },
        ],
      },
      {
        code: "experience",
        label: "Experience",
        inputs: [
          {
            code: "experience",
            label: "",
            value: 2300,
            inputType: "number",
          },
        ],
      },
      {
        code: "race",
        label: "Race",
        inputs: [
          {
            code: "race",
            label: "",
            value: "Half Elf",
            inputType: "text",
          },
        ],
      },
      {
        code: "classes",
        label: "Classes",
        table: {
          options: {
            canAddRows: true,
            canRemoveRows: true,
          },
          columns: [
            { code: "type", label: "Type" },
            { code: "level", label: "Level" },
          ],
          rows: [
            [
              { code: "type", value: "Fighter", inputType: "text" },
              { code: "level", value: 0, inputType: "number" },
            ],
            [
              { code: "type", value: "Bard", inputType: "text" },
              { code: "level", value: 3, inputType: "number" },
            ],
          ],
        },
      },
    ],
    abilityScores: [
      {
        code: "strength",
        label: "Strength",
        inputs: [
          { code: "base", label: "Base", value: 11, inputType: "number" },
          { code: "modifier", label: "Mod", value: 2, inputType: "number" },
          { code: "save", label: "Save", value: 4, inputType: "number" },
        ],
      },
      {
        code: "dexterity",
        label: "Dexterity",
        inputs: [
          { code: "base", label: "Base", value: 13, inputType: "number" },
          { code: "modifier", label: "Mod", value: 4, inputType: "number" },
          { code: "save", label: "Save", value: 1, inputType: "number" },
        ],
      },
      {
        code: "constitution",
        label: "Constitution",
        inputs: [
          { code: "base", label: "Base", value: 13, inputType: "number" },
          { code: "modifier", label: "Mod", value: 4, inputType: "number" },
          { code: "save", label: "Save", value: 1, inputType: "number" },
        ],
      },
      {
        code: "intelligence",
        label: "Intelligence",
        inputs: [
          { code: "base", label: "Base", value: 13, inputType: "number" },
          { code: "modifier", label: "Mod", value: 4, inputType: "number" },
          { code: "save", label: "Save", value: 1, inputType: "number" },
        ],
      },
      {
        code: "wisdom",
        label: "Wisdom",
        inputs: [
          { code: "base", label: "Base", value: 13, inputType: "number" },
          { code: "modifier", label: "Mod", value: 4, inputType: "number" },
          { code: "save", label: "Save", value: 1, inputType: "number" },
        ],
      },
      {
        code: "charisma",
        label: "Charisma",
        inputs: [
          { code: "base", label: "Base", value: 13, inputType: "number" },
          { code: "modifier", label: "Mod", value: 4, inputType: "number" },
          { code: "save", label: "Save", value: 1, inputType: "number" },
        ],
      },
    ],
    savingThrows: [
      {
        code: "base",
        label: "Base",
        table: {
          columns: [
            { code: "name", label: "Name" },
            { code: "proficency", label: "Proficency" },
            { code: "modifier", label: "Mod" },
          ],
          rows: [
            [
              {
                code: "name",
                value: "Strength",
                inputType: "text",
                // Todo: think about moving isDisabled to columns vs row?
                isDisabled: true,
              },
              { code: "proficency", value: "true", inputType: "text" },
              { code: "modifier", value: 2, inputType: "number" },
            ],
            [
              {
                code: "name",
                value: "Dexterity",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
            ],
            [
              {
                code: "name",
                value: "Constitution",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
            ],
            [
              {
                code: "name",
                value: "Intelligence",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
            ],
            [
              {
                code: "name",
                value: "Wisdom",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
            ],
            [
              {
                code: "name",
                value: "Charisma",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
            ],
          ],
        },
      },
      {
        code: "skills",
        label: "Skills",
        table: {
          columns: [
            { code: "name", label: "Name" },
            { code: "proficency", label: "Proficency" },
            { code: "modifier", label: "Mod" },
            { code: "type", label: "Type" },
          ],
          rows: [
            [
              {
                code: "name",
                value: "Acrobatics",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "true", inputType: "text" },
              { code: "modifier", value: 2, inputType: "number" },
              { code: "type", value: "Dexterity", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "Animal Handling",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
              { code: "type", value: "Wisdom", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "Arcane",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
              { code: "type", value: "Intelligence", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "Athletics",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
              { code: "type", value: "Strength", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "Deception",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
              { code: "type", value: "Charisma", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "History",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
              { code: "type", value: "Intelligence", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "Insight",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
              { code: "type", value: "Wisdom", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "Intimidation",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
              { code: "type", value: "Charisma", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "Investigation",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
              { code: "type", value: "Intelligence", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "Medicine",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
              { code: "type", value: "Wisdom", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "Nature",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
              { code: "type", value: "Intelligence", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "Perception",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
              { code: "type", value: "Wisdom", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "Performance",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
              { code: "type", value: "Charisma", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "Persuasion",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
              { code: "type", value: "Charisma", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "Religion",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
              { code: "type", value: "Intelligence", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "Sleight of Hand",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
              { code: "type", value: "Dexterity", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "Stealth",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
              { code: "type", value: "Dexterity", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "Survival",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
              { code: "type", value: "Wisdom", inputType: "text" },
            ],
            [
              {
                code: "name",
                value: "Tools",
                inputType: "text",
                isDisabled: true,
              },
              { code: "proficency", value: "false", inputType: "text" },
              { code: "modifier", value: 0, inputType: "number" },
              { code: "type", value: "None", inputType: "text" },
            ],
          ],
        },
      },
    ],
    // left of on converting everything to new data structure.
    resistances: [
      {
        code: "resistances",
        label: "Resistances",
        table: {
          options: {
            canAddRows: true,
            canRemoveRows: true,
          },
          columns: [
            { code: "title", label: "Title" },
            { code: "details", label: "Details" },
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
        inputs: [
          { code: "max", label: "Max", value: 31, inputType: "number" },
          { code: "current", label: "Current", value: 2, inputType: "number" },
          { code: "temporary", label: "Temp", value: 4, inputType: "number" },
        ],
      },
      {
        code: "armorClass",
        label: "Armor Class",
        inputs: [
          { code: "base", label: "Base", value: 13, inputType: "number" },
          { code: "temporary", label: "Temp", value: 4, inputType: "number" },
        ],
      },
      {
        code: "proficiency",
        label: "Profienciency",
        inputs: [
          { code: "base", label: "Base", value: 13, inputType: "number" },
        ],
      },
      {
        code: "initiative",
        label: "Initiative",
        inputs: [
          { code: "base", label: "Base", value: 1, inputType: "number" },
        ],
      },
      {
        code: "deathSaves",
        label: "Death Saves",
        inputs: [
          {
            code: "successes",
            label: "Successes",
            value: 1,
            inputType: "number",
          },
          {
            code: "failures",
            label: "Failures",
            value: 1,
            inputType: "number",
          },
        ],
      },
      {
        code: "hitDice",
        label: "Hit Dice",
        table: {
          options: {
            canAddRows: true,
            canRemoveRows: true,
          },
          columns: [
            { code: "level", label: "Level" },
            { code: "used", label: "Used" },
            { code: "die", label: "Die" },
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
        inputs: [
          { code: "base", label: "Base", value: 1, inputType: "number" },
          {
            code: "encombered",
            label: "Encombered",
            value: 44,
            inputType: "number",
          },
        ],
      },
    ],
    features: [
      {
        code: "limited",
        label: "Limited",
        table: {
          options: {
            canAddRows: true,
            canRemoveRows: true,
          },
          columns: [
            { code: "name", label: "Name" },
            { code: "description", label: "Description" },
            { code: "max", label: "Max" },
            { code: "used", label: "Used" },
            { code: "recovery", label: "Recovery" },
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
          options: {
            canAddRows: true,
            canRemoveRows: true,
          },
          columns: [
            { code: "name", label: "Name" },
            { code: "description", label: "Description" },
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
          options: {
            canAddRows: true,
            canRemoveRows: true,
          },
          columns: [
            { code: "name", label: "Name" },
            { code: "description", label: "Description" },
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
          options: {
            canAddRows: true,
            canRemoveRows: true,
          },
          columns: [{ code: "name", label: "Name" }],
          rows: [[{ code: "name", value: "Orcish", inputType: "text" }]],
        },
      },
      {
        code: "proficiencies",
        label: "Proficiencies",
        table: {
          options: {
            canAddRows: true,
            canRemoveRows: true,
          },
          columns: [{ code: "name", label: "Name" }],
          rows: [[{ code: "name", value: "Axes", inputType: "text" }]],
        },
      },
    ],
    items: [
      {
        code: "weapons",
        label: "Weapons",
        table: {
          options: {
            canAddRows: true,
            canRemoveRows: true,
          },
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
          options: {
            canAddRows: true,
            canRemoveRows: true,
          },
          columns: [
            { code: "name", label: "Name" },
            { code: "description", label: "Description" },
            { code: "armorClassContribution", label: "Armor Class +" },
            { code: "isEquipt", label: "Equipt" },
            { code: "isMagic", label: "Magical" },
            { code: "value", label: "Value" },
            { code: "weight", label: "Weight" },
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
          options: {
            canAddRows: true,
            canRemoveRows: true,
          },
          columns: [
            { code: "name", label: "Name" },
            { code: "description", label: "Description" },
            { code: "armorClassContribution", label: "Armor Class +" },
            { code: "isEquipt", label: "Equipt" },
            { code: "isMagic", label: "Magical" },
            { code: "value", label: "Value" },
            { code: "weight", label: "Weight" },
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
          options: {
            canAddRows: true,
            canRemoveRows: true,
          },
          columns: [
            { code: "name", label: "Name" },
            { code: "description", label: "Description" },
            { code: "quantity", label: "Quantity" },
            { code: "damageModifier", label: "Damage Mod" },
            { code: "isMagic", label: "Magical" },
            { code: "value", label: "Value" },
            { code: "weight", label: "Weight" },
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
