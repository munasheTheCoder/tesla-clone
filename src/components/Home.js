import React , {useRef} from 'react'

//COMPONENTS
import Section from './shared/Section'
import DoubleSection from './shared/DoubleSection'
import Header from './Header'
import MainSection from './MainSection'
import Footer from './Footer'

function Home() {
  const modelS = useRef(null)
  const model3 = useRef(null)
  const modelX = useRef(null)
  const modelY = useRef(null)
  const modelC = useRef(null)
  const modelN = useRef(null)
  const modelA = useRef(null)
  
  return (
    
    <>
      <Header
        modelSRef={modelS} 
        model3Ref={model3}
        modelXRef={modelX} 
        modelYRef={modelY} 
        modelCRef={modelC} 
        modelNRef={modelN} 
        modelARef={modelA} />
      <MainSection image="Homepage-APR-Promo-Hero-Desktop.avif" image2="Homepage-APR-Promo-Hero-Mobile.avif" secondImage="Homepage-We-Robot-Hero-Desktop.avif" secondImage2="Homepage-We-Robot-Hero-Mobile.avif"/>
      <Section 
        ref={modelS}
        id = {0}
        title = "Model S"
        description = "After Est. Gas Savings $6,500"
        image = "model-s.avif"
        lefttext = "Order Now"
        rightext = "Demo Drive"
        range = "390"
        pricing= "From $68,490"
        time = "1.99"
        topSpeed="200"
        peakPower= "1,020"/>
        
        <Section
        ref={model3}
        id={1}
        title="Model 3"
        lefttext = "Order Now"
        rightext = "Demo Drive"
        description="0% APR With Purchase of FSD (Supervised)"
        pricing="Lease Starting at $299/mo"
        image="model-3.avif"
        range="400"
        time="2.99"
        topSpeed="180"
        peakPower="900"
        />
        <Section
        id={2}
        ref={modelX}
        title="Model X"
        description="After Federal Tax Credit $7,500"
        description2="and Est. Gas Savings $6,500"
        pricing="From $65,990"
        image="model-x.avif"
        range="350"
        time="1.55"
        lefttext = "Order Now"
        rightext = "Demo Drive"
        topSpeed="150"
        peakPower="1,130"
        />
        <Section
        id={3}
        ref={modelY}
        title="Model Y"
        description="0% APR With Purchase of FSD (Supervised)"
        image="model-y.avif"
        range="410"
        pricing= "Lease Starting at $349/mo"
        time="2.05"
        topSpeed="190"
        lefttext = "Order Now"
        rightext = "Demo Drive"
        peakPower="1,040"/>
        <Section
        id={4}
        ref={modelC}
        title="Cyber Truck"
        description="Order Online for Touchless Delivery"
        image="cyber-truck.avif"
        range="410"
        time="2.05"
        topSpeed="190"
        lefttext = "Order Now"
        rightext = "Demo drive"
        peakPower="1,040"/>
        <DoubleSection
        id={5}
        ref={modelN}
        title="Solar Roof"
        title2="Solar Panels"
        description="Produce Clean Energy From Your Roof"
        description2="Schedule A Virtual Consultation"
        image="solar-roof.jpg"
        secondImage="solar-panel.jpg"
        lefttext = "Order Now"
        rightext = "Demo Drive"
        peakPower="1,040"/>
        <Section
        id={6}
        ref={modelA}
        title="Powerwall"
        image="powerwall.avif"
        range="410"
        time="2.05"
        topSpeed="190"
        lefttext = "Order Now"
        rightext = "Learn More"
        peakPower="1,040"/>
        <Section
        id={7}
        ref={modelA}
        title="Accessories"
        image="accessories.avif"
        range="410"
        time="2.05"
        topSpeed="190"
        lefttext = "shop now"
        peakPower="1,040"/>
        <Section
        id={8}
        ref={modelA}
        title="We Are Tesla"
        video={true}
        videoText="Join Tesla"
        lefttext = "Shop Now"
        peakPower="1,040"/>
        <Footer/>
    </>
    
    
    
  )
}

export default Home