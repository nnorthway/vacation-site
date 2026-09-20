import { Link } from "react-router"

import classes from "./CalendarItem.module.css"
export default function CalendarItem({item}) {
  console.log(item)
  return (
    <div className={classes.calendar_item}>
      <div className={classes.date}>
        {item.date}
      </div>
      <div className={classes.content}>
        <h3>Day {item.id}: {item.title}</h3>
        <p>
          {item.arrive && `Arrive ${item.arrive.location_name} at ${item.arrive.time}`}
          {item.depart && `Depart ${item.depart.location_name} at ${item.depart.time}`}
          <Link to={`/day/${item.id}`}>Read More</Link>
        </p>
      </div>
    </div>
  )
}