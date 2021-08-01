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
            details {
              name
            }
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

export const getGameByIdForMaster = /* GraphQL */ `
  query GetGameByIdForMaster($id: ID!) {
    getGame(id: $id) {
      players {
        items {
          selectedCharacter {
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
                distance {
                  min
                  max
                  disadvantage
                }
              }
              value
              description
              weight
              armorClassContribution
            }
            createdAt
            updatedAt
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

export const getSelectedCharacterByUserId = /* GraphQL */ `
  query GetCharactersByUserId($id: ID!) {
    getUser(id: $id) {
      selectedCharacter {
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
            distance {
              min
              max
              disadvantage
            }
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
  }
`;

export const getCharacterById = /* GraphQL */ `
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
          distance {
            min
            max
            disadvantage
          }
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
