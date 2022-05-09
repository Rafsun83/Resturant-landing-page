import React from 'react';
import '../Navigation/Navigation.css'
import Divider from '@mui/material/Divider';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import RedeemIcon from '@mui/icons-material/Redeem';
import LockIcon from '@mui/icons-material/Lock';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div className='navsection'>
            <div className='navigationpart container'>
                <div>
                    <h6><LocationOnIcon style={{ color: 'orange' }} /> 63 laboratory Rd, Dhaka 1205..</h6>
                </div>
                <div>
                    <PhoneIcon /> +56428925243634
                </div>
            </div>
            <Divider />
            <div className='container'>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">STACK F<samp style={{ color: 'orange' }}>OO</samp>D</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>

                                <NavDropdown title="Catagories" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#">
                                    Resturants
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex formsearch">
                                <SearchIcon />
                                <NotificationsActiveIcon />
                                <RedeemIcon />
                                <Button className='btnlog' variant="outline-success"><LockIcon /> Sign in</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        </div>
    );
};

export default Navigation;