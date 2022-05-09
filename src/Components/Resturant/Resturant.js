import React from 'react';
import { Dropdown } from 'react-bootstrap';
import FilterListIcon from '@mui/icons-material/FilterList';
import '../Resturant/Resturant.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import img from '../../Image/R1.png'
import img2 from '../../Image/R2.png'
import img3 from '../../Image/R3.png'
import img4 from '../../Image/R4.png'
import img5 from '../../Image/R5.jpg'
import img6 from '../../Image/R6.jpg'
import img7 from '../../Image/R7.jpg'
import img8 from '../../Image/R8.jpg'
import img9 from '../../Image/R9.png'
import img10 from '../../Image/R10.jpg'



const Resturant = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div>
            <div className='container'>
                <div>
                    <div style={{ paddingBottom: '1rem' }}>
                        <div
                            className='resturant'>
                            <h3>Resturants</h3>
                            <Dropdown >
                                <Dropdown.Toggle style={{ background: 'none', color: 'black' }} variant="success" id="dropdown-basic">
                                    <FilterListIcon />  Filter by: All
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                    </div>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
                            <div className='resturantname'>
                                <div>
                                    <img style={{ width: '200px', height: '200px' }} src={img6} alt="" />
                                    <div>
                                        <h5>Chessy Resturant</h5>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span>
                                    </div>
                                </div>
                                <div>
                                    <img style={{ width: '200px', height: '200px' }} src={img8} alt="" />
                                    <div>
                                        <h5>Hungray Puppets</h5>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span>
                                    </div>
                                </div>
                                <div>
                                    <img style={{ width: '200px', height: '200px' }} src={img9} alt="" />
                                    <div>
                                        <h5>Cafe monarch</h5>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span>
                                    </div>
                                </div>
                                <div>
                                    <img style={{ width: '200px', height: '200px' }} src={img8} alt="" />
                                    <div>
                                        <h5>Testy Lunch</h5>
                                        <span>4.5<StarIcon sx={{ width: '16px', color: 'orange' }} /></span>
                                    </div>
                                </div>
                                <div>
                                    <img style={{ width: '200px', height: '200px' }} src={img6} alt="" />
                                    <div>
                                        <h5>The Capital Grill</h5>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span>
                                    </div>
                                </div>
                                <div>
                                    <img style={{ width: '200px', height: '200px' }} src={img8} alt="" />
                                    <div>
                                        <h5>Fryinmg Nemo</h5>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span>
                                    </div>
                                </div>

                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className='resturantname'>
                                <div>
                                    <img style={{ width: '200px', height: '200px' }} src={img7} alt="" />
                                    <div>
                                        <h5>Chessy Resturant</h5>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span>
                                    </div>
                                </div>
                                <div>
                                    <img style={{ width: '200px', height: '200px' }} src={img8} alt="" />
                                    <div>
                                        <h5>The Great Impasta</h5>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span>
                                    </div>
                                </div>
                                <div>
                                    <img style={{ width: '200px', height: '200px' }} src={img9} alt="" />
                                    <div>
                                        <h5>Cafe Monarch</h5>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span>
                                    </div>
                                </div>
                                <div>
                                    <img style={{ width: '200px', height: '200px' }} src={img10} alt="" />
                                    <div>
                                        <h5>Vintage kitchen</h5>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span>
                                    </div>
                                </div>
                                <div>
                                    <img style={{ width: '200px', height: '200px' }} src={img6} alt="" />
                                    <div>
                                        <h5>Chessy Resturant</h5>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span>
                                    </div>
                                </div>
                                <div>
                                    <img style={{ width: '200px', height: '200px' }} src={img5} alt="" />
                                    <div>
                                        <h5>Mini kebab</h5>
                                        <span>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></span>
                                    </div>
                                </div>

                            </div>
                        </Grid>

                    </Grid>


                </div>
            </div>
        </div>
    );
};

export default Resturant;