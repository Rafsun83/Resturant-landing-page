import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../Image/food1.jpg'
import img2 from '../../Image/food2.jpg'
import img3 from '../../Image/food3.jpg'
import '../Slider/Slide.css'

const Slider = () => {
    return (
        <div className='container'>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: '400px', borderRadius: '10px' }}
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '400px', borderRadius: '10px' }}
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '400px', borderRadius: '10px' }}
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;