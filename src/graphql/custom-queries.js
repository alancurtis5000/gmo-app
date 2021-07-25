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
        details {
          name
        }
      }
      characters {
        items {
          id
          details {
            name
            background
          }
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

export const getUserCharactersByUserId = /* GraphQL */ `
  query GetUserCharactersByUserId($id: ID!) {
    getUser(id: $id) {
      characters {
        items {
          id
          details {
            name
            background
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
        }
      }
    }
  }
`;

export const getCharacterById = /* GraphQL */ `
  query GetCharacterById($id: ID!) {
    getCharacter(id: $id) {
      id
      details {
        name
        background
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
      createdAt
      updatedAt
    }
  }
`;
