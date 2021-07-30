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
          level
          alignment
          race
          experience
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
          level
          alignment
          race
          experience
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
          level
          alignment
          race
          experience
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
          level
          alignment
          race
          experience
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
export const onCreateCharacter = /* GraphQL */ `
  subscription OnCreateCharacter {
    onCreateCharacter {
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
        description {
          eyes
          hair
          skin
          size
          age
        }
        level
        alignment
        race
        classes {
          id
          level
          type
        }
        experience
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
      savingThrows {
        base {
          code
          title
          value
        }
        skills {
          code
          title
          value
          type
        }
        resistances {
          id
          title
          details
        }
      }
      stats {
        hitPoints {
          title
          max
          current
          temporary
        }
        armorClass {
          title
          value
          temporary
        }
        proficiency {
          title
          value
        }
        initiative {
          title
          value
        }
        deathSaves {
          title
          successes
          failures
        }
        hitDice {
          id
          level
          die
          used
        }
        speed {
          title
          base
          encombered
        }
      }
      features {
        limited {
          id
          type
          title
          max
          recovery
          used
          description
        }
        constants {
          id
          type
          title
          description
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCharacter = /* GraphQL */ `
  subscription OnUpdateCharacter {
    onUpdateCharacter {
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
        description {
          eyes
          hair
          skin
          size
          age
        }
        level
        alignment
        race
        classes {
          id
          level
          type
        }
        experience
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
      savingThrows {
        base {
          code
          title
          value
        }
        skills {
          code
          title
          value
          type
        }
        resistances {
          id
          title
          details
        }
      }
      stats {
        hitPoints {
          title
          max
          current
          temporary
        }
        armorClass {
          title
          value
          temporary
        }
        proficiency {
          title
          value
        }
        initiative {
          title
          value
        }
        deathSaves {
          title
          successes
          failures
        }
        hitDice {
          id
          level
          die
          used
        }
        speed {
          title
          base
          encombered
        }
      }
      features {
        limited {
          id
          type
          title
          max
          recovery
          used
          description
        }
        constants {
          id
          type
          title
          description
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCharacter = /* GraphQL */ `
  subscription OnDeleteCharacter {
    onDeleteCharacter {
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
        description {
          eyes
          hair
          skin
          size
          age
        }
        level
        alignment
        race
        classes {
          id
          level
          type
        }
        experience
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
      savingThrows {
        base {
          code
          title
          value
        }
        skills {
          code
          title
          value
          type
        }
        resistances {
          id
          title
          details
        }
      }
      stats {
        hitPoints {
          title
          max
          current
          temporary
        }
        armorClass {
          title
          value
          temporary
        }
        proficiency {
          title
          value
        }
        initiative {
          title
          value
        }
        deathSaves {
          title
          successes
          failures
        }
        hitDice {
          id
          level
          die
          used
        }
        speed {
          title
          base
          encombered
        }
      }
      features {
        limited {
          id
          type
          title
          max
          recovery
          used
          description
        }
        constants {
          id
          type
          title
          description
        }
      }
      createdAt
      updatedAt
    }
  }
`;
