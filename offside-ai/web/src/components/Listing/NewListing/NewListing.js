import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ListingForm from 'src/components/Listing/ListingForm'

const CREATE_LISTING_MUTATION = gql`
  mutation CreateListingMutation($input: CreateListingInput!) {
    createListing(input: $input) {
      id
    }
  }
`

const NewListing = () => {
  const [createListing, { loading, error }] = useMutation(
    CREATE_LISTING_MUTATION,
    {
      onCompleted: () => {
        toast.success('Listing created')
        navigate(routes.listings())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createListing({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Listing</h2>
      </header>
      <div className="rw-segment-main">
        <ListingForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewListing
