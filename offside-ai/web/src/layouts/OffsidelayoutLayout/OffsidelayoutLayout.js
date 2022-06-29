import { Link, routes } from '@redwoodjs/router'

const OffsidelayoutLayout = ({ children }) => {
  return (<>
  <header>
        <h1>Welcome to Offside AI</h1>
        <nav>
          <ul>
          <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
    <main>{children}</main>
  </>)
}

export default OffsidelayoutLayout
