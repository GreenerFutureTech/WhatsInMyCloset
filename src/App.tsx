import './App.css'
import appScreenshot from './assets/banner.png' // replace this with your image path
import featureShot from './assets/features.png'
import outfitShot from './assets/flow-screen-revised1.png'
import socialShot from './assets/social-screen-revised2.png'
import wardrobeShot from './assets/wardrobe-screen-revised2.png'

// Import BOTH creator images
import creatorShotMobile from './assets/creators-screen-mobile-revised1.png'; // Mobile version
import creatorShotDesktop from './assets/creators-screen-desktop-revised1.png'; // Desktop version



function App() {
  return (
    <div className="main-container">

        <div className="content-block">
          <div className="image-section">
            <img src={appScreenshot} alt="App screenshot" />
          </div>
        </div>

      <div className="content-block">
        <div className="text-section">
          <h1>Because Fashion Should Be Smart, Social, and Sustainable</h1>
        </div>

        <div className="image-section">
            <img src={featureShot} alt="App Features" />
            <img src={outfitShot} alt="Add Item and Outfit Features" />
        </div>
      </div>

      <div className="content-block">
          <div className="image-section">
            <img src={wardrobeShot} alt="Social screenshot" />
            <img src={socialShot} alt="Social screenshot" />
          </div>
      </div>

      <div className="content-block">
          <div className="image-section">
          <picture>
               {/* Source for Desktop screens (matches your CSS media query) */}
               <source media="(min-width: 991px)" srcSet={creatorShotDesktop} />

               {/* Default/Mobile Image (also the fallback) */}
               {/* The browser uses this if the above media query doesn't match */}
               {/* The <img> tag is REQUIRED inside <picture> */}
               <img src={creatorShotMobile} alt="Developer Info" />
           </picture>
          </div>
      </div>

    </div>
  )
}

export default App
