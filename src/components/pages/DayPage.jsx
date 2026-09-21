import {DATA} from "../data/Data.js"
import { useParams, Link } from "react-router"
import Hero from "../ui/Hero";
import Card from "../ui/Card.jsx"

import classes from "./DayPage.module.css"

export default function DayPage({id}) {
  const params = useParams()
  const item = DATA[params.id]
  let location = "At Sea"
  if (item.depart) {
    location = item.depart.location_name
  } 
  if (item.arrive) {
    location = item.arrive.location_name
  }
  const prevDay = DATA[parseInt(params.id) - 1]
  const nextDay = DATA[parseInt(params.id) + 1]
  return (
    <>
      <Hero image={item.image} alt={item.title}>
        <h1>Day {params.id}: {item.title}</h1>
        <p>{item.description}</p>
        <p style={{textAlign: "center"}}>
          Date: {item.date} | Location: {location}
        </p>
      </Hero>
      <div className="body-content">
        {item.arrive && <Card title="Arrive" subtitle={item.arrive.time}><p>Location: {item.arrive.location_name}<br />{item.arrive.address}</p></Card>}
        {item.schedule.map((el,i) => {
          const subtitle = `${el.time.start}-${el.time.end}`
          return (
            <Card key={i} title={el.title} subtitle={subtitle}>
              <p>{el.description}</p>
              <p>{el.location_name} | {el.address}</p>
            </Card>
          )
        })}
        {item.depart && <Card title="Depart" subtitle={item.depart.time}><p>Arrive by: {item.depart.arrive_by}<br />{item.depart.address}</p></Card>}
        <div className={classes.day_navigation}>
          {prevDay && <Link className={classes.item} to={`/calendar/${prevDay.id}`}>Previous Day: <span className={classes.title}>{prevDay.title}</span></Link>}
          {nextDay && <Link className={classes.item} to={`/calendar/${nextDay.id}`}>Next Day: <span className={classes.title}>{nextDay.title}</span></Link>}
        </div>
      </div>
    </>
  )
}