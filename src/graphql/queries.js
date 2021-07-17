/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserByUserSub = /* GraphQL */ `
  query GetUserByUserSub($userSub: ID!) {
    getUserByUserSub(userSub: $userSub) {
      id
      userSub
      name
      createdAt
      updatedAt
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      name
      description
      gameMaster
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
        gameMaster
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayers = /* GraphQL */ `
  query GetPlayers($id: ID!) {
    getPlayers(id: $id) {
      id
      userSub
      name
      createdAt
      updatedAt
    }
  }
`;
export const listPlayerss = /* GraphQL */ `
  query ListPlayerss(
    $filter: ModelPlayersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userSub
        name
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
