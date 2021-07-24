/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCharacter = /* GraphQL */ `
  query GetCharacter($id: ID!) {
    getCharacter(id: $id) {
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
export const listCharacters = /* GraphQL */ `
  query ListCharacters(
    $filter: ModelCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDetail = /* GraphQL */ `
  query GetDetail($id: ID!) {
    getDetail(id: $id) {
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
export const listDetails = /* GraphQL */ `
  query ListDetails(
    $filter: ModelDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAbility = /* GraphQL */ `
  query GetAbility($id: ID!) {
    getAbility(id: $id) {
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
export const listAbilitys = /* GraphQL */ `
  query ListAbilitys(
    $filter: ModelAbilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAbilitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAbilityScore = /* GraphQL */ `
  query GetAbilityScore($id: ID!) {
    getAbilityScore(id: $id) {
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
export const listAbilityScores = /* GraphQL */ `
  query ListAbilityScores(
    $filter: ModelAbilityScoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAbilityScores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
