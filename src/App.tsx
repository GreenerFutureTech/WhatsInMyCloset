import './App.css'
import appScreenshot from './assets/banner.png' // replace this with your image path
import featureShot from './assets/features.png'
import outfitShot from './assets/flow-screen-revised1.png'
import socialShot from './assets/social-screen-revised2.png'
import wardrobeShot from './assets/wardrobe-screen-revised2.png'
import creatorShot from './assets/creators-screen-revised1.png'



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
            <img src={creatorShot} alt="Developer Info" />
          </div>
      </div>

    </div>
  )
}

export default App
