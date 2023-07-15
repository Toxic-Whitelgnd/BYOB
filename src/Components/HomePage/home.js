import React from 'react';
import "./home.css";

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import img1 from "../../Assets/Homepage/hz_4.jpg"
import img2 from "../../Assets/Homepage/hz_2.jpg"
import img3 from "../../Assets/Homepage/hz_3.jpg"
import img4 from "../../Assets/Homepage/hz_5.jpg"


import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import 'react-awesome-slider/dist/styles.css';
import Materials from '../MiddleSection/materials';
import ShoesHome from '../MiddleSection/shoes';
import WatchesHome from '../MiddleSection/watches';
import TshirtsHome from '../MiddleSection/tshirts';


const AutoplaySlider = withAutoplay(AwesomeSlider);
const Home = () => {
    return (
        <div>
            
            <AwesomeSlider 
            animation="fallAnimation"
            >
            {/* <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={6000}
            > */}
                
                    <div data-src={img1} className='img-control' />
                    <div data-src={img2} />
                    <div data-src={img3} />
                    <div data-src={img4} />
                
                

            {/* </AutoplaySlider> */}
            </AwesomeSlider>
            <Materials />
            <ShoesHome />
            <WatchesHome />
            <TshirtsHome />
        </div>
    );
}

export default Home;
