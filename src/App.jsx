import { RouterProvider, createBrowserRouter } from "react-router"

import "normalize.css"

import {DATA} from "./components/data/Data.js"
import HomePage from "./components/pages/HomePage.jsx"

/*
need: 
- {data}: the schedule, in json format ✅ shape figured out
- <header>: menu container on all pages that contains <nav>
✅ <hero>: layout/ui component on every page
✅ <homePage>: layout page that contains a hero, intro, & summary of days with links. 
✅ <calendarOverview>: container that wraps calendar items for each day
✅ <calendarItem>: shows where we're coming from & going to
- <calendarPage>: layout page that contains a hero & overview of daily schedule
- <day>: layout page that contains a given day's detailed schedule (as <schedule>) and links to previous/following day
- <schedule>: layout/ui component that presents a list of activities & times
*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
