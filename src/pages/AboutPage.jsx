import Navbar from '../components/Navbar'
import '../styles/home.css'
import '../styles/aboutpage.css'
import scream_image from "../assets/scream_image.svg"
import tape_image from "../assets/tape.svg"
import our_story from "../assets/our_story.svg"
import sun_david from '../assets/Sun David.svg'
import hak_chandyna from '../assets/hak chandyna.svg'
import por_menghong from '../assets/Por Menghong.svg'
import tos_trip_note from "../assets/TosTrip_notes.svg"
import tos_logo from "../assets/LOGO.svg"
import nutella from "../assets/nutella.svg"
function AboutPage() {
    return (
    <>
    <main>
        <div className='first-page'>
            <img src={scream_image} className='scream-img'/>
            <div className='first-text'>
                <div>Hear us</div>
                <div>OUT!!!</div>
            </div>
        </div>
        <div className='second-page'>
            <img src={tape_image} className='tape-image'/>
            <div className='second-text'>
                <h2>About Us</h2>
                <p>Our platform was created to make travel planning easier and 
                more inspiring. We wanted to build a space where travelers can 
                discover destinations across Cambodia and organize their ideas 
                in a simple and visual way...</p>
            </div>
        </div>
        <div className='third-image'>
            <img src={our_story} className='story-image'/>
        </div>
        <div className='fourth-page'>
            <h2 className='meet-title'>MEET OUR TEAM</h2>

            <div className='team-cards'>
                <div className='team-card'>
                    <img src={por_menghong} className='character-img'/>
                    <p className='member-name'>Por Menghong</p>
                    <p className='member-role'>Project Developer</p>
                </div>

                <div className='team-card'>
                    <img src={hak_chandyna} className='character-img'/>
                    <p className='member-name'>Hak Chandyna</p>
                    <p className='member-role'>UI/UX Designer</p>
                </div>

                <div className='team-card'>
                    <img src={sun_david} className='character-img'/>
                    <p className='member-name'>Sun David</p>
                    <p className='member-role'>Content Researcher</p>
                </div>
            </div>
        </div>
        <div className='fifth-page'>
            <img src={nutella} className='bread'></img>
            <img src={tos_trip_note} className='tos-trip-note'/>
        </div>
    </main>
    </>
        
    )
}

export default AboutPage