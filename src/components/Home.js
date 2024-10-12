import React from 'react'
import Section from './shared/Section'

function Home() {
  return (
    <>
      <Section 
        id = {0}
        title = "Model S"
        description = "Order Online for Touchless Delivery"
        image = "model-s.jpg"
        lefttext = "Custom order"
        rightext = "Existing inventory"
        range = "390"
        time = "1.99"
        topSpeed="200"
        peakPower= "1,020"/>
        
        <Section
        id={1}
        title="Model 3"
        lefttext = "Custom order"
        rightext = "Existing inventory"
        description="Order Online for Touchless Delivery"
        image="model-3.jpg"
        range="400"
        time="2.99"
        topSpeed="180"
        peakPower="900"
        />
        <Section
        id={2}
        title="Model X"
        description="Order Online for Touchless Delivery"
        image="model-x.jpg"
        range="350"
        time="1.55"
        lefttext = "Custom order"
        rightext = "Existing inventory"
        topSpeed="150"
        peakPower="1,130"
        />
        <Section
        id={3}
        title="Model Y"
        description="Order Online for Touchless Delivery"
        image="model-y.jpg"
        range="410"
        time="2.05"
        topSpeed="190"
        lefttext = "Custom order"
        rightext = "Existing inventory"
        peakPower="1,040"/>
        <Section
        id={3}
        title="Cyber Truck"
        description="Order Online for Touchless Delivery"
        image="teslacybertruck.webp"
        range="410"
        time="2.05"
        topSpeed="190"
        lefttext = "Custom order"
        rightext = "Existing inventory"
        peakPower="1,040"/>
        <Section
        id={4}
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
        title="Accessories"
        image="accessories.jpg"
        range="410"
        time="2.05"
        topSpeed="190"
        lefttext = "shop now"
        peakPower="1,040"/>
    </>
    
  )
}

export default Home