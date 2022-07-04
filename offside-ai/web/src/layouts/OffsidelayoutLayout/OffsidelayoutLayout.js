import { Link, routes } from '@redwoodjs/router'

const OffsidelayoutLayout = ({ children }) => {
  return (<>
  <header>
        <h1>Welcome to Offside AI</h1>
        <nav>
          <ul>
          <li>
              <Link to={routes.home()}>Home</Link> | 
              <Link to={routes.listings()}>Listings</Link> | 
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              
            </li>
          </ul>
        </nav>
      </header>
    <main>{children}</main>
  </>)
}

export default OffsidelayoutLayout
