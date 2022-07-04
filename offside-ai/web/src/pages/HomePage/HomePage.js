import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PropertiesCell from 'src/components/PropertiesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <><PropertiesCell/></>
    </>
  )
}

export default HomePage
