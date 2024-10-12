import React , {useRef} from 'react'
import Section from './shared/Section'
import Header from './Header'
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
      <Section 
        ref={modelS}
        id = {0}
        title = "Model S"
        description = "Order Online for Touchless Delivery"
        image = "model-s.avif"
        lefttext = "Custom order"
        rightext = "Existing inventory"
        range = "390"
        time = "1.99"
        topSpeed="200"
        peakPower= "1,020"/>
        
        <Section
        ref={model3}
        id={1}
        title="Model 3"
        lefttext = "Custom order"
        rightext = "Existing inventory"
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
        lefttext = "Custom order"
        rightext = "Existing inventory"
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
        lefttext = "Custom order"
        rightext = "Existing inventory"
        peakPower="1,040"/>
        <Section
        id={3}
        ref={modelC}
        title="Cyber Truck"
        description="Order Online for Touchless Delivery"
        image="cyber-truck.avif"
        range="410"
        time="2.05"
        topSpeed="190"
        lefttext = "Custom order"
        rightext = "Existing inventory"
        peakPower="1,040"/>
        <Section
        id={4}
        ref={modelN}
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        image="solar-roof.jpg"
        range="410"
        time="2.05"
        topSpeed="190"
        lefttext = "Custom order"
        rightext = "Existing inventory"
        peakPower="1,040"/>
        <Section
        id={5}
        ref={modelA}
        title="Accessories"
        image="accessories.avif"
        range="410"
        time="2.05"
        topSpeed="190"
        lefttext = "shop now"
        peakPower="1,040"/>
    </>
    
    
    
  )
}

export default Home