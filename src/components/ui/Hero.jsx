import classes from "./Hero.module.css"
export default function Hero({image, alt, children}) {
  return (
    <div className={classes.hero} style={{backgroundImage: `url(${image})`}}>
      <img className={classes.bg_image} alt={alt} src={image}/>
      <div className={classes.hero_content}>
        {children}
      </div>
    </div>
  )
}