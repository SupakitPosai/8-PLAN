import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Logo from '../../img/Logo.png'
import { FaFacebookSquare } from 'react-icons/fa'
import { TiSocialInstagram } from 'react-icons/ti'
import { AiFillYoutube } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import '../css/Footer.css'
export default class Footer extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#f7fbfc', padding: '40px 0' }}>
                <Container>
                    <Row>
                        <div style={{ width: '30%' }} className="logofooter" >
                            <Row>
                                <Col>
                                    <Link to="/#">  <Image src={Logo} width="60%" /></Link>
                                    <h5 style={{ fontWeight: 'bold', fontSize: '1rem' }}>Instantly design future</h5>
                                    <h5 style={{ fontWeight: 'bold', fontSize: '1rem' }}>Company ID : xxxxxxxxxx</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5 style={{ fontWeight: 'bold', fontSize: '1rem' }}>Keep update on Our social media</h5>
                                    <a className="aa" href="https://www.instagram.com/?hl=th"><TiSocialInstagram style={{ fontSize: '2.3rem', marginRight: '5px' }} /></a>
                                    <a className="aa" href="https://www.facebook.com/"><FaFacebookSquare style={{ fontSize: '2rem', marginRight: '5px' }} /></a>
                                    <a className="aa" href="https://www.youtube.com/"><AiFillYoutube style={{ fontSize: '2.8rem', marginRight: '5px' }} /></a>
                                </Col>
                            </Row>
                        </div>
                        <Col sm={1}></Col>
                        <div className="navfooter" style={{ margin: '0 8px' }}>
                            <Link to="/About#" className="aa">   <h4 className="a1" style={{ fontWeight: 'bold', fontSize: '1rem' }} >About</h4></Link>
                            <Link to="/About#" className="aa">  <h5 className="a1" style={{ fontSize: '1rem' ,fontFamily:'CaviarDreams'}}>Company Profile</h5></Link>
                            <Link to="/About#" className="aa">  <h5 className="a1" style={{ fontSize: '1rem' ,fontFamily:'CaviarDreams'}}>Team Profile</h5></Link>
                        </div>
                        <div className="navfooter" style={{ margin: '0 8px' }} >
                            <Link to="/Projects#" className="aa">  <h4 className="a1" style={{ fontWeight: 'bold', fontSize: '1rem' }}>Projects</h4></Link>
                            <Link to="/Projects#" className="aa"> <h5 className="a1" style={{ fontSize: '1rem' ,fontFamily:'CaviarDreams'}}>On going</h5></Link>
                            <Link to="/Projects#" className="aa"><h5 className="a1" style={{ fontSize: '1rem' ,fontFamily:'CaviarDreams'}}>Completed</h5></Link>
                        </div>
                        <div className="navfooter" style={{ margin: '0 8px' }} >
                            <Link to="/Updates#" className="aa"> <h4 className="a1" style={{ fontWeight: 'bold', fontSize: '1rem' }}>Updates</h4></Link>
                            <Link to="/Updates#" className="aa"> <h5 className="a1" style={{ fontSize: '1rem' ,fontFamily:'CaviarDreams'}}>News</h5></Link>
                            <Link to="/Updates#" className="aa"> <h5 className="a1" style={{ fontSize: '1rem' ,fontFamily:'CaviarDreams'}}>Event</h5></Link>
                            <Link to="/Updates#" className="aa"> <h5 className="a1" style={{ fontSize: '1rem' ,fontFamily:'CaviarDreams'}}>Video</h5></Link>
                        </div>
                        <div className="navfooter" style={{ margin: '0 8px' }} >
                            <Link to="/ProductGallery/All#" className="aa"> <h4 className="a1" style={{ fontWeight: 'bold', fontSize: '1rem' }}>Product Gallery</h4></Link>
                            <Link to="/ProductGallery/All#" className="aa"><h5 className="a1" style={{ fontSize: '1rem' ,fontFamily:'CaviarDreams'}}>Floor</h5></Link>
                            <Link to="/ProductGallery/All#" className="aa"><h5 className="a1" style={{ fontSize: '1rem' ,fontFamily:'CaviarDreams'}}>Sustainable Design</h5></Link>
                        </div>
                        <div className="navfooter" style={{ margin: '0 8px' }} >
                            <Link to="/Howtoorder#" className="aa"><h4 className="a1" style={{ fontWeight: 'bold', fontSize: '1rem' }}>How to order</h4></Link>
                            <Link to="/Howtoorder#" className="aa"><h5 className="a1" style={{ fontSize: '1rem' ,fontFamily:'CaviarDreams'}}>How to order</h5></Link>
                        </div>
                    </Row>

                </Container>



            </div>
        )
    }
}
