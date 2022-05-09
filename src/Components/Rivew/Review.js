import React from 'react';
import { Button, Card } from 'react-bootstrap';

import img3 from '../../Image/FC3.jpg'

import StarIcon from '@mui/icons-material/Star';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import '../Rivew/Review.css'

const Review = () => {
    return (
        <div>
            <div style={{ padding: '1rem' }}>
                <div className='review container'>
                    <h3>Best Reviewed Foods</h3>
                    <Button className='viewallbutton'>View all</Button>
                </div>
            </div>
            <div className='foodcard container'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>Salmon Avocado Sushi  With Extra Cheese</Card.Title>
                        <Card.Text>
                            Hungry Puppets <br />
                            <span style={{ fontWeight: 'bold' }} >4.5<StarIcon sx={{ color: 'orange', fontSize: '16px' }} /> </span>
                        </Card.Text>
                        <div className='cardamount'>
                            <div>
                                <span style={{ fontWeight: 'bold' }}>$ 34.00</span>
                            </div>
                            <Button style={{ backgroundColor: 'rgb(239,120,34', border: 'none' }}><KeyboardTabIcon /> </Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>Crispy Beef Burger With Extra Cheese</Card.Title>
                        <Card.Text>
                            Hungry Puppets <br />
                            <span style={{ fontWeight: 'bold' }} >4.5<StarIcon sx={{ color: 'orange', fontSize: '16px' }} /> </span>
                        </Card.Text>
                        <div className='cardamount'>
                            <div>
                                <span style={{ fontWeight: 'bold' }}>$ 34.00</span>
                            </div>
                            <Button style={{ backgroundColor: 'rgb(239,120,34', border: 'none' }}><KeyboardTabIcon /> </Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>Crispy Beef Burger With Extra Cheese</Card.Title>
                        <Card.Text>
                            Hungry Puppets <br />
                            <span style={{ fontWeight: 'bold' }} >4.5<StarIcon sx={{ color: 'orange', fontSize: '16px' }} /> </span>
                        </Card.Text>
                        <div className='cardamount'>
                            <div>
                                <span style={{ fontWeight: 'bold' }}>$ 34.00</span>
                            </div>
                            <Button style={{ backgroundColor: 'rgb(239,120,34', border: 'none' }}><KeyboardTabIcon /> </Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Review;