import mouth from '../assets/scream_image.svg'
import hearUs from '../assets/Hear us.svg'
import out from '../assets/OUT!!!.svg'
import tape from '../assets/tape.svg'
import ourStory from '../assets/our_story.svg'
import menghong from '../assets/Por Menghong.svg'
import chandyna from '../assets/hak chandyna.svg'
import david from '../assets/Sun David.svg'
import toast from '../assets/nutella.svg'
import notes from '../assets/TosTrip_notes.svg'
import '../styles/aboutus.css'
function AboutPage() {
  return (
    <div className='body'>
      <div className='intro'>
        <img src={mouth} alt="mouth" />
        <img src={hearUs} alt="hearUs" />
        <img src={out} alt="out" />
      </div>

      <div className='about_us'>
        <img src={tape} alt="tape" />
        <h6>about us</h6>
        <p>Our platform was created to make travel planning easier and more inspiring. We wanted to build a space where travelers can discover destinations across Cambodia and organize their ideas in a simple and visual way. By combining exploration and planning, we hope to help people experience the beauty, culture, and hidden gems of the country.</p>
      </div>

      <div className='ourStory'>
        <img src={ourStory} alt="ourStory" />
      </div>

      <div className='meet_our_team'>
        <div className='hong_card'>
          <img src={menghong} alt="menghong" />
          <h6>Por Menghong</h6>
          <p>Project Developer</p>
        </div>
        <div className='dyna_card'>
          <img src={chandyna} alt="chandyna" />
          <h6>hak chandyna</h6>
          <p>UI/UX Designer</p>
        </div>
        <div className='david_card'>
          <img src={david} alt="david" />
          <h6>Sun David</h6>
          <p>Content Researcher</p>
        </div>
      </div>

      <div className='our_notes'>
        <img src={toast} alt="toast" />
        <img src={notes} alt="notes" />
      </div>

    </div>
  );


}

export default AboutPage;
