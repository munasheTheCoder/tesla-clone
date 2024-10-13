import React , {useRef} from 'react'

//COMPONENTS
import Section from './shared/Section'
import DoubleSection from './shared/DoubleSection'
import Header from './Header'
import MainSection from './MainSection'
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
      <MainSection image="Homepage-APR-Promo-Hero-Desktop.avif" image2="Homepage-APR-Promo-Hero-Mobile.avif"/>
      <Section 
        ref={modelS}
        id = {0}
        title = "Model S"
        description = "Order Online for Touchless Delivery"
        image = "model-s.avif"
        lefttext = "Order Now"
        rightext = "Learn More"
        range = "390"
        time = "1.99"
        topSpeed="200"
        peakPower= "1,020"/>
        
        <Section
        ref={model3}
        id={1}
        title="Model 3"
        lefttext = "Order Now"
        rightext = "Learn More"
        description="Order Online for Touchless Delivery"
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
        description="Order Online for Touchless Delivery"
        image="model-x.avif"
        range="350"
        time="1.55"
        lefttext = "Order Now"
        rightext = "Learn More"
        topSpeed="150"
        peakPower="1,130"
        />
        <Section
        id={3}
        ref={modelY}
        title="Model Y"
        description="Order Online for Touchless Delivery"
        image="model-y.avif"
        range="410"
        time="2.05"
        topSpeed="190"
        lefttext = "Order Now"
        rightext = "Learn More"
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
        rightext = "Learn More"
        peakPower="1,040"/>
        <Section
        id={6}
        ref={modelA}
        title="Accessories"
        image="accessories.avif"
        range="410"
        time="2.05"
        topSpeed="190"
        lefttext = "shop now"
        peakPower="1,040"/>
        <Section
        id={7}
        ref={modelA}
        title="We Are Tesla"
        video={true}
        videoText="Join Tesla"
        lefttext = "shop now"
        peakPower="1,040"/>
    </>
    
    
    
  )
}

export default Home