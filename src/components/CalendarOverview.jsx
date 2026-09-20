import classes from "./CalendarOverview.module.css"
import {DATA} from "./data/Data.js"
import CalendarItem from "./CalendarItem.jsx"

export default function CalendarOverview() {
  return (
    <div className={classes.calendar}>
      {DATA.map((el, i) => {
        return (
          <CalendarItem item={el} key={i} />
        )
      })}
    </div>
  )
}