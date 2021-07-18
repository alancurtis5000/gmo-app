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
      gameMaster {
        id
        userSub
        name
        createdAt
        updatedAt
      }
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
      gameMaster {
        id
        userSub
        name
        createdAt
        updatedAt
      }
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
      gameMaster {
        id
        userSub
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPlayers = /* GraphQL */ `
  mutation CreatePlayers(
    $input: CreatePlayersInput!
    $condition: ModelPlayersConditionInput
  ) {
    createPlayers(input: $input, condition: $condition) {
      id
      userSub
      name
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayers = /* GraphQL */ `
  mutation UpdatePlayers(
    $input: UpdatePlayersInput!
    $condition: ModelPlayersConditionInput
  ) {
    updatePlayers(input: $input, condition: $condition) {
      id
      userSub
      name
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayers = /* GraphQL */ `
  mutation DeletePlayers(
    $input: DeletePlayersInput!
    $condition: ModelPlayersConditionInput
  ) {
    deletePlayers(input: $input, condition: $condition) {
      id
      userSub
      name
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
      createdAt
      updatedAt
    }
  }
`;
