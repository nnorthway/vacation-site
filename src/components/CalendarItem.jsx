import { Link } from "react-router"
import Card from "./ui/Card.jsx"
import classes from "./CalendarItem.module.css"
export default function CalendarItem({item}) {
  return (
    <Card title={`Day ${item.id}: ${item.title}`} subtitle={item.date}>
      <div className={classes.content}>
        <p class="lead">
          {item.description}
        </p>
        <p>
          {item.arrive && <span>Arrive {item.arrive.location_name} at {item.arrive.time}</span>}
          {item.depart && <span>Depart {item.depart.location_name} at {item.depart.time}</span>}
          <Link to={`calendar/${item.id}`}>Read More</Link>
        </p>
      </div>
    </Card>
  )
}