export const QUERY = gql`
  query PropertiesQuery {
    properties: listings {
      id,
      title,
      description,
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ properties }) => {
  return properties.map((property) => (
        <article key={property.id}>
          <header>
            <h1>{property.title}</h1>
          </header>
          <p>{property.body}</p>
          <div>Posted at: {property.createdAt}</div>
        </article>
    ))
}
