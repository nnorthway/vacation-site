import { useState, useEffect } from "react"
import classes from "./Hero.module.css"
export default function Hero({image, alt, children}) {
  const [scroll,setScroll] = useState("0%")
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {window.removeEventListener('scroll', handleScroll)}
  })
  function handleScroll(e) {
    let height = window.innerHeight
    let scrolled = window.scrollY
    let ratio = (scrolled / height) * 100 * 6
    setScroll(`${ratio}%`)
  }
  return (
    <div className={classes.hero} style={{backgroundImage: `url(${image})`, backgroundPosition: `center calc(50% + ${scroll})`}} onScroll={handleScroll}>
      <img className={classes.bg_image} alt={alt} src={image}/>
      <div className={classes.hero_content}>
        {children}
      </div>
    </div>
  )
}