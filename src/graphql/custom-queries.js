// export const getUserByUserSub = /* GraphQL */ `
//   query GetUserByUserSub($userSub: ID!) {
//     getUser(userSub: $userSub) {
//       id
//       userSub
//       name
//       createdAt
//       updatedAt
//     }
//   }
// `;

export const listUsersCustom = /* GraphQL */ `
  query ListUsersCustom(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
      }
      nextToken
    }
  }
`;

export const getCharactersByUserId = /* GraphQL */ `
  query GetCharactersByUserId($id: ID!) {
    getUser(id: $id) {
      selectedCharacter {
        id
      }
      characters {
        items {
          id
        }
      }
    }
  }
`;

export const getGameLobbyById = /* GraphQL */ `
  query GetGameLobbyById($id: ID!) {
    getGame(id: $id) {
      players {
        items {
          selectedCharacter {
            id
          }
          id
          name
          playerName
          isReady
        }
      }
      description
      id
      master {
        id
        name
        playerName
      }
      name
      hasStarted
    }
  }
`;
