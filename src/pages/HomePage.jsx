import TosTrip_home_page from '../assets/TosTrip_home_page.svg'
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import starDenim from'../assets/Star.svg'
import apsara from '../assets/image-Photoroom (42) 1.svg'
import take_what_you_need from '../assets/Take_what_you_need.svg'
import ourMsg from '../assets/ripped_paper.svg'
import wonderingFace from '../assets/wondering_face.svg'
import whyTosTrip from '../assets/why_tos_trip.svg'
import easy_save_hidden from '../assets/easy_save_hidden.svg'
import obvSaveMoney from '../assets/obv Save money.svg'
function HomePage() {

  const navigate = useNavigate();
  const goToTrip = () => {
    navigate("/trip");
  }
  return (
    <div className='mainBody'>
      <div className='welcome'>
        <img src={TosTrip_home_page} alt="tostrip_main_image" />
        <button onClick={goToTrip}>Tos try me</button>
      </div>
      
      <div className='ourMission'>
        <div className='label'>
          <img className='star' src={starDenim}alt="Star" />
          <p className='ourMissionText'>OUR MISSION</p>
        </div>
        <div className='paragraph'>
          <p className='p1'>Planning a trip to Cambodia shouldn't feel like homework. We built TOS Trip because we were tired of bouncing between ten different tabs just to figure out what to do in the morning in Siem Reap.</p>
          <p className='p2'> </p>
          <p className='p3'>TOS Trip brings together curated city guides, day planning, and a visual vision board — all in one warm, friendly place. Whether you're a first-timer or a seasoned explorer, we've got you covered.</p>
          <img src={apsara} alt="apsara" />
        </div>
      </div>

      <div className='exploreOurService'>
        <div className='label'>
          <img className='star' src={starDenim}alt="Star" />
          <p className='exploreOurServiceText'>OUR SERVICE</p>
        </div>
        <div className='imgs'>
          <img className='take_what_you_need' src={take_what_you_need} alt="take_what_you_need" />
          <img className='ourMsg' src={ourMsg} alt="ourMsg" />
        </div>
      </div>
      <div className='why_tos_trip'>
        <div className='intro'>
          <img className='wonderingFace' src={wonderingFace} alt="wonderingFace" />
          <img className='whyTosTrip' src={whyTosTrip} alt="whyTosTrip" />
        </div>
        <div className='body'>
          <img src={easy_save_hidden} alt="easy_save_hidden" />
          <img src= {obvSaveMoney} alt="obvSaveMoney" />
        </div>
        
      </div>



    </div>
    
  );
  
}

export default HomePage;
