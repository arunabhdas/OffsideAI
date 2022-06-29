import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <>About</>
      <Link to={routes.home()}>Home</Link>
    </>
  )
}

export default AboutPage
