import Header from "../Header.jsx";
import Hero from "../ui/Hero.jsx"
import CalendarOverview from "../CalendarOverview.jsx"

export default function HomePage() {
  const image = "https://images.pexels.com/photos/32609062/pexels-photo-32609062.jpeg"
  return (
    <>
      <Hero image={image} alt="A cruise ship at sea">
        <h1>Abel & Nate Take A Cruise</h1>
        <p>NYC to Halifax and back!<br />10/3/26 - 10/10/26</p>
      </Hero>
      <div className="body-content">
        <h2>Welcome to The Ship</h2>
        <p style={{margin: 0}}>
          This website serves as your guide to our trip. Use it as a reference when you need it. Here are some usage tips: 
        </p>
        <ul>
          <li>The list below shows where we'll be and where we're going each day</li>
          <li>As each day passes, the next day will pop to the top of the list</li>
          <li>You can use the navigation at the top of the page to access previous days if you'd like</li>
          <li>Click on a day in the list below to see the full schedule</li>
          <li>Tech support is travelling with you - let me know if you have any questions :)</li>
        </ul>
        <CalendarOverview />
      </div>
    </>
  )
}