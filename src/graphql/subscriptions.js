/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const newOnCreateGame = /* GraphQL */ `
  subscription NewOnCreateGame {
    newOnCreateGame {
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
export const newOnDeleteGame = /* GraphQL */ `
  subscription NewOnDeleteGame {
    newOnDeleteGame {
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
export const newOnUpdateGame = /* GraphQL */ `
  subscription NewOnUpdateGame {
    newOnUpdateGame {
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
export const newOnUpdateUser = /* GraphQL */ `
  subscription NewOnUpdateUser {
    newOnUpdateUser {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCharacter = /* GraphQL */ `
  subscription OnCreateCharacter {
    onCreateCharacter {
      id
      abilityScores {
        id
        character {
          id
          content
          createdAt
          updatedAt
        }
        strength {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        dexterity {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        constitution {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        intelligence {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        wisdom {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        charisma {
          id
          value
          modifier
          createdAt
          updatedAt
        }
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
export const onUpdateCharacter = /* GraphQL */ `
  subscription OnUpdateCharacter {
    onUpdateCharacter {
      id
      abilityScores {
        id
        character {
          id
          content
          createdAt
          updatedAt
        }
        strength {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        dexterity {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        constitution {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        intelligence {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        wisdom {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        charisma {
          id
          value
          modifier
          createdAt
          updatedAt
        }
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
export const onDeleteCharacter = /* GraphQL */ `
  subscription OnDeleteCharacter {
    onDeleteCharacter {
      id
      abilityScores {
        id
        character {
          id
          content
          createdAt
          updatedAt
        }
        strength {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        dexterity {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        constitution {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        intelligence {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        wisdom {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        charisma {
          id
          value
          modifier
          createdAt
          updatedAt
        }
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
export const onCreateDetail = /* GraphQL */ `
  subscription OnCreateDetail {
    onCreateDetail {
      id
      character {
        id
        abilityScores {
          id
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
export const onUpdateDetail = /* GraphQL */ `
  subscription OnUpdateDetail {
    onUpdateDetail {
      id
      character {
        id
        abilityScores {
          id
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
export const onDeleteDetail = /* GraphQL */ `
  subscription OnDeleteDetail {
    onDeleteDetail {
      id
      character {
        id
        abilityScores {
          id
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
export const onCreateAbility = /* GraphQL */ `
  subscription OnCreateAbility {
    onCreateAbility {
      id
      abilityScore {
        id
        character {
          id
          content
          createdAt
          updatedAt
        }
        strength {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        dexterity {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        constitution {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        intelligence {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        wisdom {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        charisma {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      value
      modifier
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAbility = /* GraphQL */ `
  subscription OnUpdateAbility {
    onUpdateAbility {
      id
      abilityScore {
        id
        character {
          id
          content
          createdAt
          updatedAt
        }
        strength {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        dexterity {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        constitution {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        intelligence {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        wisdom {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        charisma {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      value
      modifier
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAbility = /* GraphQL */ `
  subscription OnDeleteAbility {
    onDeleteAbility {
      id
      abilityScore {
        id
        character {
          id
          content
          createdAt
          updatedAt
        }
        strength {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        dexterity {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        constitution {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        intelligence {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        wisdom {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        charisma {
          id
          value
          modifier
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      value
      modifier
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAbilityScore = /* GraphQL */ `
  subscription OnCreateAbilityScore {
    onCreateAbilityScore {
      id
      character {
        id
        abilityScores {
          id
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
      strength {
        id
        abilityScore {
          id
          createdAt
          updatedAt
        }
        value
        modifier
        createdAt
        updatedAt
      }
      dexterity {
        id
        abilityScore {
          id
          createdAt
          updatedAt
        }
        value
        modifier
        createdAt
        updatedAt
      }
      constitution {
        id
        abilityScore {
          id
          createdAt
          updatedAt
        }
        value
        modifier
        createdAt
        updatedAt
      }
      intelligence {
        id
        abilityScore {
          id
          createdAt
          updatedAt
        }
        value
        modifier
        createdAt
        updatedAt
      }
      wisdom {
        id
        abilityScore {
          id
          createdAt
          updatedAt
        }
        value
        modifier
        createdAt
        updatedAt
      }
      charisma {
        id
        abilityScore {
          id
          createdAt
          updatedAt
        }
        value
        modifier
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAbilityScore = /* GraphQL */ `
  subscription OnUpdateAbilityScore {
    onUpdateAbilityScore {
      id
      character {
        id
        abilityScores {
          id
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
      strength {
        id
        abilityScore {
          id
          createdAt
          updatedAt
        }
        value
        modifier
        createdAt
        updatedAt
      }
      dexterity {
        id
        abilityScore {
          id
          createdAt
          updatedAt
        }
        value
        modifier
        createdAt
        updatedAt
      }
      constitution {
        id
        abilityScore {
          id
          createdAt
          updatedAt
        }
        value
        modifier
        createdAt
        updatedAt
      }
      intelligence {
        id
        abilityScore {
          id
          createdAt
          updatedAt
        }
        value
        modifier
        createdAt
        updatedAt
      }
      wisdom {
        id
        abilityScore {
          id
          createdAt
          updatedAt
        }
        value
        modifier
        createdAt
        updatedAt
      }
      charisma {
        id
        abilityScore {
          id
          createdAt
          updatedAt
        }
        value
        modifier
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAbilityScore = /* GraphQL */ `
  subscription OnDeleteAbilityScore {
    onDeleteAbilityScore {
      id
      character {
        id
        abilityScores {
          id
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
      strength {
        id
        abilityScore {
          id
          createdAt
          updatedAt
        }
        value
        modifier
        createdAt
        updatedAt
      }
      dexterity {
        id
        abilityScore {
          id
          createdAt
          updatedAt
        }
        value
        modifier
        createdAt
        updatedAt
      }
      constitution {
        id
        abilityScore {
          id
          createdAt
          updatedAt
        }
        value
        modifier
        createdAt
        updatedAt
      }
      intelligence {
        id
        abilityScore {
          id
          createdAt
          updatedAt
        }
        value
        modifier
        createdAt
        updatedAt
      }
      wisdom {
        id
        abilityScore {
          id
          createdAt
          updatedAt
        }
        value
        modifier
        createdAt
        updatedAt
      }
      charisma {
        id
        abilityScore {
          id
          createdAt
          updatedAt
        }
        value
        modifier
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
