// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ListingsLayout from 'src/layouts/ListingsLayout'
import OffsidelayoutLayout from './layouts/OffsidelayoutLayout/OffsidelayoutLayout'
import AboutPage from './pages/AboutPage/AboutPage'
import HomePage from './pages/HomePage/HomePage'
import PropertyPage from './pages/PropertyPage/PropertyPage'

const Routes = () => {
  return (
    <Router>
      <Route path="/property" page={PropertyPage} name="property" />
      <Route path="/property/{id}" page={PropertyPage} name="property" />
      <Set wrap={ListingsLayout}>
        <Route path="/listings/new" page={ListingNewListingPage} name="newListing" />
        <Route path="/listings/{id:Int}/edit" page={ListingEditListingPage} name="editListing" />
        <Route path="/listings/{id:Int}" page={ListingListingPage} name="listing" />
        <Route path="/listings" page={ListingListingsPage} name="listings" />
      </Set>
      <Route path="/team" page={TeamPage} name="team" />
      <Set wrap={OffsidelayoutLayout}>
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
