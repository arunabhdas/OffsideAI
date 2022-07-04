import Listing from 'src/components/Listing/Listing'

export const QUERY = gql`
  query FindListingById($id: Int!) {
    listing: listing(id: $id) {
      id
      title
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Listing not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ listing }) => {
  return <Listing listing={listing} />
}
