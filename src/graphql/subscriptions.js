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
        createdAt
        updatedAt
      }
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
        createdAt
        updatedAt
      }
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
        createdAt
        updatedAt
      }
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
        createdAt
        updatedAt
      }
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
        createdAt
        updatedAt
      }
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
        createdAt
        updatedAt
      }
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCharacter = /* GraphQL */ `
  subscription OnCreateCharacter {
    onCreateCharacter {
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
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
