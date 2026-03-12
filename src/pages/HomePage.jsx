import logo from '../assets/LOGO.svg'

import '../styles/home.css'

function Home() {

  return (
    <>
        <div className='nav_box'>
          <img src={logo} className="logo" alt="tosTrip logo" />
          <ul className='nav_items'>
            <li><a href="HomePage.jsx">Home</a></li>
            <li><a href="AboutPage.jsx">About us</a></li>
          </ul>
        </div>
    </>
  )
}

export default Home