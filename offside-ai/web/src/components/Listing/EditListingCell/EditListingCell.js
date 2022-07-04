import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ListingForm from 'src/components/Listing/ListingForm'

export const QUERY = gql`
  query EditListingById($id: Int!) {
    listing: listing(id: $id) {
      id
      title
      description
      createdAt
    }
  }
`
const UPDATE_LISTING_MUTATION = gql`
  mutation UpdateListingMutation($id: Int!, $input: UpdateListingInput!) {
    updateListing(id: $id, input: $input) {
      id
      title
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ listing }) => {
  const [updateListing, { loading, error }] = useMutation(
    UPDATE_LISTING_MUTATION,
    {
      onCompleted: () => {
        toast.success('Listing updated')
        navigate(routes.listings())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateListing({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Listing {listing.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ListingForm
          listing={listing}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
