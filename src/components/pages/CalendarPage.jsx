import { Link } from "react-router"
import {DATA} from "../data/Data.js"
import classes from "./CalendarPage.module.css"
import Hero from "../ui/Hero.jsx"
import Card from "../ui/Card.jsx"
export default function CalendarPage() {
  return (
    <>
      <Hero image="/public/calendar.jpg" alt="October 2026 Calendar">
        <h1>The Calendar</h1>
      </Hero>
      <div className={`${classes.calendar} body-content`}>
        {DATA.map((el, i) => {
          const date = new Date(el.date)
          const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
          const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
          const subtitle = `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}`
          return (
            <Card title={el.title} subtitle={subtitle} key={i}>
              <Link to={`${el.id}`}>Schedule</Link>
            </Card>
          )
        })}
      </div>
    </>
  )
}