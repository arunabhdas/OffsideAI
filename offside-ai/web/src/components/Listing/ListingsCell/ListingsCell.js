import { Link, routes } from '@redwoodjs/router'

import Listings from 'src/components/Listing/Listings'

export const QUERY = gql`
  query FindListings {
    listings {
      id
      title
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No listings yet. '}
      <Link to={routes.newListing()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ listings }) => {
  return <Listings listings={listings} />
}
