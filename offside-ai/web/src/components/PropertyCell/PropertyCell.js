export const QUERY = gql`
  query FindPropertyQuery($id: Int!) {
    property: property(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ property }) => {
  return <div>{JSON.stringify(property)}</div>
}
