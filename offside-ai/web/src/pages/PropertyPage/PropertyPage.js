import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PropertyPage = () => {
  return (
    <>
      <MetaTags title="Property" description="Property page" />

      <h1>PropertyPage</h1>
      <p>
        Find me in <code>./web/src/pages/PropertyPage/PropertyPage.js</code>
      </p>
      <p>
        My default route is named <code>property</code>, link to me with `
        <Link to={routes.property()}>Property</Link>`
      </p>
    </>
  )
}

export default PropertyPage
