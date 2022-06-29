import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Offside AI CRM</h1>
      <p>
        <Link to={routes.home()}>Welcome to Offside AI</Link>
      </p>
    </>
  )
}

export default HomePage
