import { RouterProvider, createBrowserRouter } from "react-router"

import {DATA} from "./components/data/Data.js"
import Root from "./components/pages/Root.jsx"
import HomePage from "./components/pages/HomePage.jsx"
import CalendarPage from "./components/pages/CalendarPage.jsx"
import DayPage from "./components/pages/DayPage.jsx"

const loader = () => {
  document.body.scrollTo(0,0)
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {index: true, element: <HomePage />, loader: loader},
      {
        path: "calendar", 
        children: [
          {index: true, element: <CalendarPage />},
          {path: ":id", element: <DayPage />}
        ]
      },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
