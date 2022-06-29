import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <header>
        <h1>Welcome to Offside AI</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <p>
        <Link to={routes.home()}>Welcome to Offside AI</Link>
      </p>
    </>
  )
}

export default HomePage
