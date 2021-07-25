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
          content
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
          content
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
          content
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
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      selectedCharacter {
        id
        abilityScores {
          id
          strength
          strengthModifier
          dexterity
          dexterityModifier
          constitution
          constitutionModifier
          intelligence
          intelligenceModifier
          wisdom
          wisdomModifier
          charisma
          charismaModifier
          createdAt
          updatedAt
        }
        details {
          id
          name
          createdAt
          updatedAt
        }
        user {
          id
          userSub
          name
          playerName
          isReady
          createdAt
          updatedAt
        }
        content
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
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      selectedCharacter {
        id
        abilityScores {
          id
          strength
          strengthModifier
          dexterity
          dexterityModifier
          constitution
          constitutionModifier
          intelligence
          intelligenceModifier
          wisdom
          wisdomModifier
          charisma
          charismaModifier
          createdAt
          updatedAt
        }
        details {
          id
          name
          createdAt
          updatedAt
        }
        user {
          id
          userSub
          name
          playerName
          isReady
          createdAt
          updatedAt
        }
        content
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
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      selectedCharacter {
        id
        abilityScores {
          id
          strength
          strengthModifier
          dexterity
          dexterityModifier
          constitution
          constitutionModifier
          intelligence
          intelligenceModifier
          wisdom
          wisdomModifier
          charisma
          charismaModifier
          createdAt
          updatedAt
        }
        details {
          id
          name
          createdAt
          updatedAt
        }
        user {
          id
          userSub
          name
          playerName
          isReady
          createdAt
          updatedAt
        }
        content
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
      abilityScores {
        id
        character {
          id
          content
          createdAt
          updatedAt
        }
        strength
        strengthModifier
        dexterity
        dexterityModifier
        constitution
        constitutionModifier
        intelligence
        intelligenceModifier
        wisdom
        wisdomModifier
        charisma
        charismaModifier
        createdAt
        updatedAt
      }
      details {
        id
        character {
          id
          content
          createdAt
          updatedAt
        }
        name
        createdAt
        updatedAt
      }
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
          content
          createdAt
          updatedAt
        }
        isReady
        createdAt
        updatedAt
      }
      content
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
      abilityScores {
        id
        character {
          id
          content
          createdAt
          updatedAt
        }
        strength
        strengthModifier
        dexterity
        dexterityModifier
        constitution
        constitutionModifier
        intelligence
        intelligenceModifier
        wisdom
        wisdomModifier
        charisma
        charismaModifier
        createdAt
        updatedAt
      }
      details {
        id
        character {
          id
          content
          createdAt
          updatedAt
        }
        name
        createdAt
        updatedAt
      }
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
          content
          createdAt
          updatedAt
        }
        isReady
        createdAt
        updatedAt
      }
      content
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
      abilityScores {
        id
        character {
          id
          content
          createdAt
          updatedAt
        }
        strength
        strengthModifier
        dexterity
        dexterityModifier
        constitution
        constitutionModifier
        intelligence
        intelligenceModifier
        wisdom
        wisdomModifier
        charisma
        charismaModifier
        createdAt
        updatedAt
      }
      details {
        id
        character {
          id
          content
          createdAt
          updatedAt
        }
        name
        createdAt
        updatedAt
      }
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
          content
          createdAt
          updatedAt
        }
        isReady
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const createDetail = /* GraphQL */ `
  mutation CreateDetail(
    $input: CreateDetailInput!
    $condition: ModelDetailConditionInput
  ) {
    createDetail(input: $input, condition: $condition) {
      id
      character {
        id
        abilityScores {
          id
          strength
          strengthModifier
          dexterity
          dexterityModifier
          constitution
          constitutionModifier
          intelligence
          intelligenceModifier
          wisdom
          wisdomModifier
          charisma
          charismaModifier
          createdAt
          updatedAt
        }
        details {
          id
          name
          createdAt
          updatedAt
        }
        user {
          id
          userSub
          name
          playerName
          isReady
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateDetail = /* GraphQL */ `
  mutation UpdateDetail(
    $input: UpdateDetailInput!
    $condition: ModelDetailConditionInput
  ) {
    updateDetail(input: $input, condition: $condition) {
      id
      character {
        id
        abilityScores {
          id
          strength
          strengthModifier
          dexterity
          dexterityModifier
          constitution
          constitutionModifier
          intelligence
          intelligenceModifier
          wisdom
          wisdomModifier
          charisma
          charismaModifier
          createdAt
          updatedAt
        }
        details {
          id
          name
          createdAt
          updatedAt
        }
        user {
          id
          userSub
          name
          playerName
          isReady
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteDetail = /* GraphQL */ `
  mutation DeleteDetail(
    $input: DeleteDetailInput!
    $condition: ModelDetailConditionInput
  ) {
    deleteDetail(input: $input, condition: $condition) {
      id
      character {
        id
        abilityScores {
          id
          strength
          strengthModifier
          dexterity
          dexterityModifier
          constitution
          constitutionModifier
          intelligence
          intelligenceModifier
          wisdom
          wisdomModifier
          charisma
          charismaModifier
          createdAt
          updatedAt
        }
        details {
          id
          name
          createdAt
          updatedAt
        }
        user {
          id
          userSub
          name
          playerName
          isReady
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      name
      createdAt
      updatedAt
    }
  }
`;
export const createAbilityScore = /* GraphQL */ `
  mutation CreateAbilityScore(
    $input: CreateAbilityScoreInput!
    $condition: ModelAbilityScoreConditionInput
  ) {
    createAbilityScore(input: $input, condition: $condition) {
      id
      character {
        id
        abilityScores {
          id
          strength
          strengthModifier
          dexterity
          dexterityModifier
          constitution
          constitutionModifier
          intelligence
          intelligenceModifier
          wisdom
          wisdomModifier
          charisma
          charismaModifier
          createdAt
          updatedAt
        }
        details {
          id
          name
          createdAt
          updatedAt
        }
        user {
          id
          userSub
          name
          playerName
          isReady
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      strength
      strengthModifier
      dexterity
      dexterityModifier
      constitution
      constitutionModifier
      intelligence
      intelligenceModifier
      wisdom
      wisdomModifier
      charisma
      charismaModifier
      createdAt
      updatedAt
    }
  }
`;
export const updateAbilityScore = /* GraphQL */ `
  mutation UpdateAbilityScore(
    $input: UpdateAbilityScoreInput!
    $condition: ModelAbilityScoreConditionInput
  ) {
    updateAbilityScore(input: $input, condition: $condition) {
      id
      character {
        id
        abilityScores {
          id
          strength
          strengthModifier
          dexterity
          dexterityModifier
          constitution
          constitutionModifier
          intelligence
          intelligenceModifier
          wisdom
          wisdomModifier
          charisma
          charismaModifier
          createdAt
          updatedAt
        }
        details {
          id
          name
          createdAt
          updatedAt
        }
        user {
          id
          userSub
          name
          playerName
          isReady
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      strength
      strengthModifier
      dexterity
      dexterityModifier
      constitution
      constitutionModifier
      intelligence
      intelligenceModifier
      wisdom
      wisdomModifier
      charisma
      charismaModifier
      createdAt
      updatedAt
    }
  }
`;
export const deleteAbilityScore = /* GraphQL */ `
  mutation DeleteAbilityScore(
    $input: DeleteAbilityScoreInput!
    $condition: ModelAbilityScoreConditionInput
  ) {
    deleteAbilityScore(input: $input, condition: $condition) {
      id
      character {
        id
        abilityScores {
          id
          strength
          strengthModifier
          dexterity
          dexterityModifier
          constitution
          constitutionModifier
          intelligence
          intelligenceModifier
          wisdom
          wisdomModifier
          charisma
          charismaModifier
          createdAt
          updatedAt
        }
        details {
          id
          name
          createdAt
          updatedAt
        }
        user {
          id
          userSub
          name
          playerName
          isReady
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      strength
      strengthModifier
      dexterity
      dexterityModifier
      constitution
      constitutionModifier
      intelligence
      intelligenceModifier
      wisdom
      wisdomModifier
      charisma
      charismaModifier
      createdAt
      updatedAt
    }
  }
`;
