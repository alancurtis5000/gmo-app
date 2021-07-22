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
          createdAt
          updatedAt
        }
        playerName
        characters {
          nextToken
        }
        selectedCharacter {
          id
          name
          content
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      playerName
      characters {
        items {
          id
          name
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      selectedCharacter {
        id
        name
        user {
          id
          userSub
          name
          playerName
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
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
          createdAt
          updatedAt
        }
        playerName
        characters {
          nextToken
        }
        selectedCharacter {
          id
          name
          content
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
export const getCharacter = /* GraphQL */ `
  query GetCharacter($id: ID!) {
    getCharacter(id: $id) {
      id
      name
      user {
        id
        userSub
        name
        game {
          id
          name
          description
          createdAt
          updatedAt
        }
        playerName
        characters {
          nextToken
        }
        selectedCharacter {
          id
          name
          content
          createdAt
          updatedAt
        }
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
        name
        user {
          id
          userSub
          name
          playerName
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
