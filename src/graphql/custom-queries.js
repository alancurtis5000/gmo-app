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
