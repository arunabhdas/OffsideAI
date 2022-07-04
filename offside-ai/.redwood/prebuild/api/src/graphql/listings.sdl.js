import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvbGlzdGluZ3Muc2RsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgTGlzdGluZyB7XG4gICAgaWQ6IEludCFcbiAgICB0aXRsZTogU3RyaW5nIVxuICAgIGRlc2NyaXB0aW9uOiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBEYXRlVGltZSFcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIGxpc3RpbmdzOiBbTGlzdGluZyFdISBAcmVxdWlyZUF1dGhcbiAgICBsaXN0aW5nKGlkOiBJbnQhKTogTGlzdGluZyBAcmVxdWlyZUF1dGhcbiAgfVxuXG4gIGlucHV0IENyZWF0ZUxpc3RpbmdJbnB1dCB7XG4gICAgdGl0bGU6IFN0cmluZyFcbiAgICBkZXNjcmlwdGlvbjogU3RyaW5nIVxuICB9XG5cbiAgaW5wdXQgVXBkYXRlTGlzdGluZ0lucHV0IHtcbiAgICB0aXRsZTogU3RyaW5nXG4gICAgZGVzY3JpcHRpb246IFN0cmluZ1xuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgY3JlYXRlTGlzdGluZyhpbnB1dDogQ3JlYXRlTGlzdGluZ0lucHV0ISk6IExpc3RpbmchIEByZXF1aXJlQXV0aFxuICAgIHVwZGF0ZUxpc3RpbmcoaWQ6IEludCEsIGlucHV0OiBVcGRhdGVMaXN0aW5nSW5wdXQhKTogTGlzdGluZyEgQHJlcXVpcmVBdXRoXG4gICAgZGVsZXRlTGlzdGluZyhpZDogSW50ISk6IExpc3RpbmchIEByZXF1aXJlQXV0aFxuICB9XG5gXG4iXSwibWFwcGluZ3MiOiJPQUFzQkEsRztBQUF0QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTVCTyJ9