import React from 'react';
import '../catagories/Catagories.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../../Image/FC1.jpg'
import img2 from '../../Image/FC2.jpg'
import img3 from '../../Image/FC3.jpg'
import img4 from '../../Image/FC4.jpg'
import img5 from '../../Image/Fc5.jpg'
import img6 from '../../Image/Fc6.jpg'
import img from '../../Image/FC2-r.png'
import imgr from '../../Image/Fc6-r.png'
import StarIcon from '@mui/icons-material/Star';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';



const Catagories = () => {
    return (
        <div className='Catagoriesection'>
            <div className='container'>
                <div className='Featureshead'>
                    <h4>Features Catagories</h4>
                    <div>
                        <button className='btnarrow'> <ArrowBackIosNewIcon sx={{ width: '16px', color: 'white' }} /></button>
                        <button className='btnarrow'><ArrowForwardIosIcon sx={{ width: '16px' }} /></button>
                    </div>
                </div>
                <div className='foodname'>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: 145,
                                height: 180,
                            },
                        }}
                    >
                        <Paper elevation={0} sx={{ backgroundColor: 'rgb(246,217,195)' }} >
                            <div>
                                <img style={{ width: '100px', padding: '10px`' }} src={imgr} alt="" />
                            </div>
                            <h6>Chinese Food</h6>
                            <span>(25 Items)</span>
                        </Paper>
                        <Paper elevation={0} sx={{ backgroundColor: 'rgb(255,250,222)' }} >
                            <div>
                                <img style={{ width: '100px', padding: '10px`' }} src={imgr} alt="" />
                            </div>
                            <h6>Chinese Food</h6>
                            <span>(25 Items)</span>
                        </Paper>
                        <Paper elevation={0} sx={{ backgroundColor: 'rgb(255,217,217)' }} >
                            <div>
                                <img style={{ width: '100px', padding: '10px`' }} src={imgr} alt="" />
                            </div>
                            <h6>Chinese Food</h6>
                            <span>(25 Items)</span>
                        </Paper>
                        <Paper elevation={0} sx={{ backgroundColor: 'rgb(255,245,207)' }} >
                            <div>
                                <img style={{ width: '100px', padding: '10px`' }} src={imgr} alt="" />
                            </div>
                            <h6>Chinese Food</h6>
                            <span>(25 Items)</span>
                        </Paper>
                        <Paper elevation={0} sx={{ backgroundColor: 'rgb(246,217,195)' }} >
                            <div>
                                <img style={{ width: '100px', padding: '10px`' }} src={imgr} alt="" />
                            </div>
                            <h6>Chinese Food</h6>
                            <span>(25 Items)</span>
                        </Paper>
                        <Paper elevation={0} sx={{ backgroundColor: 'rgb(215,148,85)' }} >
                            <div>
                                <img style={{ width: '100px', padding: '10px`' }} src={imgr} alt="" />
                            </div>
                            <h6>Chinese Food</h6>
                            <span>(25 Items)</span>
                        </Paper>
                        <Paper elevation={0} sx={{ backgroundColor: 'rgb(246,217,195)' }} >
                            <div>
                                <img style={{ width: '100px', padding: '10px`' }} src={imgr} alt="" />
                            </div>
                            <h6>Chinese Food</h6>
                            <span>(25 Items)</span>
                        </Paper>
                        <Paper elevation={0} sx={{ backgroundColor: 'rgb(246,217,195)' }} >
                            <div>
                                <img style={{ width: '100px', padding: '10px`' }} src={imgr} alt="" />
                            </div>
                            <h6>Chinese Food</h6>
                            <span>(25 Items)</span>
                        </Paper>

                    </Box>

                </div>
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

                                ><img class="img-fluid" src={img} alt="" /></div>
                            </Paper>

                        </Box>
                    </div>

                    <div className='foodcard'>
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
                                    <span style={{ fontWeight: 'bold' }} >4.5<StarIcon sx={{ fontSize: '16px', color: 'orange' }} /> </span>
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
            </div>
        </div >
    );
};

export default Catagories;