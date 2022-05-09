import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Card } from 'react-bootstrap';
import '../Nearbyresturant/Nearbyresturant.css'
import img from '../../Image/FC3.jpg'
import img1 from '../../Image/FC2.jpg'
import img2 from '../../Image/FC4.jpg'
import img3 from '../../Image/FC1.jpg'
import img4 from '../../Image/Fc5.jpg'
import img5 from '../../Image/Fc6.jpg'
import StarIcon from '@mui/icons-material/Star';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';

const Nearbyresturant = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div>

            <div style={{ padding: '3rem' }}>
                <div className='container'>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
                        <Grid item xs={6}>
                            <div>
                                <div className='popular'>
                                    <h3>Popular Resturant Nearby</h3>
                                    <Button className='viewallbutton'>View all</Button>
                                </div>
                                <div className='cardpopular'>
                                    <img style={{ width: '150px' }} src={img} alt="" />
                                    <div className='populartext'>
                                        <h6>Mini kebab</h6>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span> <br />
                                        <span>Adress: house:00,Road:00,Streed:00, Test city</span>
                                    </div>
                                </div>
                                <div className='cardpopular'>
                                    <img style={{ width: '150px' }} src={img1} alt="" />
                                    <div className='populartext'>
                                        <h6>The capital Gril</h6>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span> <br />
                                        <span>Adress: house:00,Road:00,Streed:00, Test city</span>
                                    </div>
                                </div>
                                <div className='cardpopular'>
                                    <img style={{ width: '150px' }} src={img3} alt="" />
                                    <div className='populartext'>
                                        <h6>Tasty lunch</h6>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span> <br />
                                        <span>Adress: house:00,Road:00,Streed:00, Test city</span>
                                    </div>
                                </div>
                                <div className='cardpopular'>
                                    <img style={{ width: '150px' }} src={img3} alt="" />
                                    <div className='populartext'>
                                        <h6>The Great Impasta</h6>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span> <br />
                                        <span>Adress: house:00,Road:00,Streed:00, Test city</span>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div>
                                <div className='popular'>
                                    <h3>New on StackFood</h3>
                                    <Button className='viewallbutton'>View all</Button>
                                </div>
                                <div className='cardpopular'>
                                    <img style={{ width: '150px' }} src={img4} alt="" />
                                    <div className='populartext'>
                                        <h6>Mini kebab</h6>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span> <br />
                                        <span>Adress: house:00,Road:00,Streed:00, Test city</span>
                                    </div>
                                </div>
                                <div className='cardpopular'>
                                    <img style={{ width: '150px' }} src={img5} alt="" />
                                    <div className='populartext'>
                                        <h6>The capital Gril</h6>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span> <br />
                                        <span>Adress: house:00,Road:00,Streed:00, Test city</span>
                                    </div>
                                </div>
                                <div className='cardpopular'>
                                    <img style={{ width: '150px' }} src={img3} alt="" />
                                    <div className='populartext'>
                                        <h6>Tasty lunch</h6>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span> <br />
                                        <span>Adress: house:00,Road:00,Streed:00, Test city</span>
                                    </div>
                                </div>
                                <div className='cardpopular'>
                                    <img style={{ width: '150px' }} src={img3} alt="" />
                                    <div className='populartext'>
                                        <h6>The Great Impasta</h6>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span> <br />
                                        <span>Adress: house:00,Road:00,Streed:00, Test city</span>
                                    </div>
                                </div>
                            </div>
                        </Grid>

                        <div className='foodscard'>
                            <div>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        '& > :not(style)': {
                                            marginRight: '1rem',
                                            width: 400,
                                            height: 415,
                                        },
                                    }}
                                >
                                    <Paper elevation={0} sx={{ backgroundColor: 'rgb(230,233,239)' }}>
                                        <div

                                        ><img class="img-fluid" src={img1} alt="" /></div>
                                    </Paper>

                                </Box>
                            </div>

                            <div className='foodcard'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" style={{ height: '190px' }} src={img5} />
                                    <Card.Body>
                                        <Card.Title>Salmon Avocado Sushi  With Extra Cheese</Card.Title>
                                        <Card.Text>
                                            Hungry Puppets <br />
                                            <span style={{ fontWeight: 'bold' }} >4.5<StarIcon sx={{ color: 'orange' }} /> </span>
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
                                    <Card.Img style={{ height: '190px' }} variant="top" src={img3} />
                                    <Card.Body>
                                        <Card.Title>Crispy Beef Burger With Extra Cheese</Card.Title>
                                        <Card.Text>
                                            Hungry Puppets <br />
                                            <span style={{ fontWeight: 'bold' }} >4.5<StarIcon sx={{ color: 'orange' }} /> </span>
                                        </Card.Text>
                                        <div className='cardamount'>
                                            <div>
                                                <span style={{ fontWeight: 'bold' }}>$ 34.00</span>
                                            </div>
                                            <Button style={{ backgroundColor: 'rgb(239,120,34', border: 'none' }}><KeyboardTabIcon /> </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        '& > :not(style)': {

                                            width: 300,
                                            height: 415,
                                        },
                                    }}
                                >
                                    <Paper elevation={0} sx={{ backgroundColor: 'rgb(230,233,239)' }}>
                                        <div
                                            className='viewsmember'

                                        >
                                            <h3>+10</h3>
                                            <h5>View</h5>
                                        </div>
                                    </Paper>

                                </Box>
                            </div>
                        </div>

                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Nearbyresturant;