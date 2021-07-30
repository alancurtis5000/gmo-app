export const deleteCharacter = /* GraphQL */ `
  mutation DeleteCharacter(
    $input: DeleteCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    deleteCharacter(input: $input, condition: $condition) {
      id
    }
  }
`;

export const updateCharacter = /* GraphQL */ `
  mutation UpdateCharacter(
    $input: UpdateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    updateCharacter(input: $input, condition: $condition) {
      id
      user {
        id
        userSub
        name
        game {
          id
          name
          description
          hasStarted
          createdAt
          updatedAt
        }
        playerName
        characters {
          nextToken
        }
        selectedCharacter {
          id
          createdAt
          updatedAt
        }
        isReady
        createdAt
        updatedAt
      }
      details {
        name
        background
        description {
          eyes
          hair
          skin
          size
          age
        }
        level
        alignment
        race
        classes {
          id
          level
          type
        }
        experience
      }
      abilityScores {
        strength {
          value
          modifier
        }
        dexterity {
          value
          modifier
        }
        constitution {
          value
          modifier
        }
        intelligence {
          value
          modifier
        }
        wisdom {
          value
          modifier
        }
        charisma {
          value
          modifier
        }
      }
      savingThrows {
        base {
          code
          title
          value
        }
        skills {
          code
          title
          value
          type
        }
        resistances {
          id
          title
          details
        }
      }
      stats {
        hitPoints {
          title
          max
          current
          temporary
        }
        armorClass {
          title
          value
          temporary
        }
        proficiency {
          title
          value
        }
        initiative {
          title
          value
        }
        deathSaves {
          title
          successes
          failures
        }
        hitDice {
          id
          level
          die
          used
        }
        speed {
          title
          base
          encombered
        }
      }
      features {
        limited {
          id
          type
          title
          max
          recovery
          used
          description
        }
        constants {
          id
          type
          title
          description
        }
      }
      money {
        platinum
        gold
        electrum
        silver
        copper
      }
      items {
        id
        quantity
        type
        damageDice
        title
        code
        advantageToHit
        damageModifier
        damageType
        isTwoHanded
        isEquipt
        isMagic
        range {
          type
          distance {
            min
            max
            disadvantage
          }
        }
        value
        description
        weight
        armorClassContribution
      }
      createdAt
      updatedAt
    }
  }
`;
