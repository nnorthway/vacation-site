import classes from "./Card.module.css"
export default function Card({title, subtitle, children}) {
  return (
    <div className={classes.card}>
      <span className={classes.subtitle}>{subtitle}</span>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  )
}