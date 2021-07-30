/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      name
      description
      players {
        items {
          id
          userSub
          name
          playerName
          isReady
          createdAt
          updatedAt
        }
        nextToken
      }
      master {
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
      hasStarted
      createdAt
      updatedAt
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      name
      description
      players {
        items {
          id
          userSub
          name
          playerName
          isReady
          createdAt
          updatedAt
        }
        nextToken
      }
      master {
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
      hasStarted
      createdAt
      updatedAt
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      name
      description
      players {
        items {
          id
          userSub
          name
          playerName
          isReady
          createdAt
          updatedAt
        }
        nextToken
      }
      master {
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
      hasStarted
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      userSub
      name
      game {
        id
        name
        description
        players {
          nextToken
        }
        master {
          id
          userSub
          name
          playerName
          isReady
          createdAt
          updatedAt
        }
        hasStarted
        createdAt
        updatedAt
      }
      playerName
      characters {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      selectedCharacter {
        id
        user {
          id
          userSub
          name
          playerName
          isReady
          createdAt
          updatedAt
        }
        details {
          name
          background
          level
          alignment
          race
          experience
        }
        createdAt
        updatedAt
      }
      isReady
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      userSub
      name
      game {
        id
        name
        description
        players {
          nextToken
        }
        master {
          id
          userSub
          name
          playerName
          isReady
          createdAt
          updatedAt
        }
        hasStarted
        createdAt
        updatedAt
      }
      playerName
      characters {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      selectedCharacter {
        id
        user {
          id
          userSub
          name
          playerName
          isReady
          createdAt
          updatedAt
        }
        details {
          name
          background
          level
          alignment
          race
          experience
        }
        createdAt
        updatedAt
      }
      isReady
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      userSub
      name
      game {
        id
        name
        description
        players {
          nextToken
        }
        master {
          id
          userSub
          name
          playerName
          isReady
          createdAt
          updatedAt
        }
        hasStarted
        createdAt
        updatedAt
      }
      playerName
      characters {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      selectedCharacter {
        id
        user {
          id
          userSub
          name
          playerName
          isReady
          createdAt
          updatedAt
        }
        details {
          name
          background
          level
          alignment
          race
          experience
        }
        createdAt
        updatedAt
      }
      isReady
      createdAt
      updatedAt
    }
  }
`;
export const createCharacter = /* GraphQL */ `
  mutation CreateCharacter(
    $input: CreateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    createCharacter(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteCharacter = /* GraphQL */ `
  mutation DeleteCharacter(
    $input: DeleteCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    deleteCharacter(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
