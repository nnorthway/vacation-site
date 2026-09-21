import { Outlet, ScrollRestoration } from "react-router"
import Header from "../Header.jsx"
export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <ScrollRestoration />
      </main>
    </>
  )
}