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
        }
        abilityScores {
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
      }
      abilityScores {
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
      }
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
        }
        abilityScores {
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
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
