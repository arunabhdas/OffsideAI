export const schema = gql`
  type Listing {
    id: Int!
    title: String!
    description: String!
    createdAt: DateTime!
  }

  type Query {
    listings: [Listing!]! @requireAuth
    listing(id: Int!): Listing @requireAuth
  }

  input CreateListingInput {
    title: String!
    description: String!
  }

  input UpdateListingInput {
    title: String
    description: String
  }

  type Mutation {
    createListing(input: CreateListingInput!): Listing! @requireAuth
    updateListing(id: Int!, input: UpdateListingInput!): Listing! @requireAuth
    deleteListing(id: Int!): Listing! @requireAuth
  }
`
