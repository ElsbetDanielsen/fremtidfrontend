import Navigation from "./components/navigation/Navigation"
import Header from "./components/header/Header"
import Sections from "./components/sections/Sections"
import KimK from "./components/kimK/KimK"
import TørDu from "./components/tørDuGåVidere/TørDu"
import Ai from "./components/læsHvordan/Ai"
import Footer from "./components/footer/Footer"

import { useState } from 'react'


function App() {
    const [showNextSection, setShowNextSection] = useState(false)

    const handleNextSection = () => {
      setShowNextSection(true) // Show the next section when "Ja" is clicked
    }

  return (
    <div className="body">

        <Navigation />
      
        <Header />

        <Sections id="section1" />

        <KimK id="section2" />

        {!showNextSection && <TørDu id="section3" onNextSection={handleNextSection} />}

        {showNextSection && (
          <Ai id="section4" /> // Display the next section conditionally
        )}

        <Footer />

    </div>
  )
}

export default App