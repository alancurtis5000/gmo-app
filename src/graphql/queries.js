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
          level
          alignment
          race
          experience
        }
        money {
          platinum
          gold
          electrum
          silver
          copper
        }
        items {
          id
          quantity
          type
          damageDice
          title
          code
          advantageToHit
          damageModifier
          damageType
          isTwoHanded
          isEquipt
          isMagic
          value
          description
          weight
          armorClassContribution
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
      money {
        platinum
        gold
        electrum
        silver
        copper
      }
      items {
        id
        quantity
        type
        damageDice
        title
        code
        advantageToHit
        damageModifier
        damageType
        isTwoHanded
        isEquipt
        isMagic
        range {
          type
        }
        value
        description
        weight
        armorClassContribution
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
          level
          alignment
          race
          experience
        }
        money {
          platinum
          gold
          electrum
          silver
          copper
        }
        items {
          id
          quantity
          type
          damageDice
          title
          code
          advantageToHit
          damageModifier
          damageType
          isTwoHanded
          isEquipt
          isMagic
          value
          description
          weight
          armorClassContribution
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
