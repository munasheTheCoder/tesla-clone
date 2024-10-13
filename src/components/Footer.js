import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrap>
        <Container>
        <p>
        <sup>1</sup>
        Monthly lease payment excludes taxes and fees, is based on $44,990 Model Y Long Range Rear-Wheel Drive purchase price and is subject to change at any time. Requires $2,999 down with 36 months and 10,000 miles. Subject to credit approval and available in select U.S. states. <a href="/">Terms apply</a>.
        </p>
        <p>
        <sup>2</sup>
        Monthly lease payment excludes taxes and fees, is based on $42,490 Model 3 Long Range Rear-Wheel Drive purchase price and is subject to change at any time. Requires $2,999 down with 36 months and 10,000 miles. Subject to credit approval and available in select U.S. states. <a href="/">Terms apply</a>.

        </p>
        <p>
        <sup>3</sup>
        Price before estimated savings is $81,630, including Destination and Order Fees, but excluding taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings includes $6,500 in <a href="/">gas savings</a> estimated over five years, the $7,500 Federal Tax Credit and state incentives, available to eligible buyers and subject to MSRP caps. Not all vehicles, customers or finance options will be eligible. <a href="/">Terms apply</a>.

        </p>
        <p>
        <sup>4</sup>
        Price before estimated savings is $76,630, including Destination and Order Fees, but excluding taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings includes $6,500 in <a href="/">gas savings</a> estimated over five years and state incentives, available to eligible buyers and subject to MSRP caps. Not all vehicles, customers or finance options will be eligible. <a href="/">Terms apply</a>.
            
        </p>
        <About>
            <li>Tesla &copy; 2024</li>
            <li>Privacy & Legal</li>
            <li>Vehicles Recalls</li>
            <li>Contact</li>
            <li>News</li>
            <li>Get Updates</li>
            <li>Locations</li>

        </About>

    </Container>
    </Wrap>
  )
}

const About = styled.div`
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
    li{
        list-style: none;
        font-size: 13px;
        font-weight: 500;
        font-family: "Universal Sans Text"
        -apple-system
        Arial
        sans-serif;
        color:
        RGB(92, 94, 98);
    }
        @media (max-width: 980px){
           flex-direction: column;
        }
`
const Wrap = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0;
`
const Container = styled.div`

    width: 30vw;
    display: flex;
    flex-direction:column;
    gap: 1rem;
    justify-content: center;
    align-items:center;
    text-align: center;
    p{
        
        font-size: 12px;
        font-family: "Universal Sans Text"
        -apple-system
        Arial
        sans-serif;
        color:
        RGB(92, 94, 98);
    }
        a{
        color:
        RGB(92, 94, 98);
        }

        @media (max-width: 980px){
           width: 93vw;
        }
`

export default Footer