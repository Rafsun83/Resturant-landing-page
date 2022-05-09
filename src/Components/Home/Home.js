import React from 'react';
import Catagories from '../catagories/Catagories';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Nearbyresturant from '../Nearbyresturant/Nearbyresturant';
import Resturant from '../Resturant/Resturant';
import Review from '../Rivew/Review';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Slider></Slider>
            <Catagories></Catagories>
            <Review></Review>
            <Nearbyresturant></Nearbyresturant>
            <Resturant></Resturant>
            <Footer></Footer>
        </div>
    );
};

export default Home;