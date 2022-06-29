import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TeamPage = () => {
  return (
    <>
      <MetaTags title="Team" description="Team page" />

      <h1>TeamPage</h1>
      <p>
        Find me in <code>./web/src/pages/TeamPage/TeamPage.js</code>
      </p>
      <p>
        My default route is named <code>team</code>, link to me with `
        <Link to={routes.team()}>Team</Link>`
      </p>
    </>
  )
}

export default TeamPage
