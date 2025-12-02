import React from 'react';
import Slider from '../Components/Slider';
import PopularSection from '../Components/PopularSection';
import MeetOurVets from '../Components/MeetOurVets';
import WinterCareTips from '../Components/WinterCareTips';
import ArrowAnimated from '../Components/ArrowAnimated';

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Slider></Slider>
            <ArrowAnimated></ArrowAnimated>
            <PopularSection></PopularSection>
            <MeetOurVets></MeetOurVets>
            <WinterCareTips></WinterCareTips>

        </div>
    );
};

export default Home;