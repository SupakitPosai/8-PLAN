import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Background from '../../img/nav.jpg'

export default class Navigation extends Component {
    render() {
        return (
            <div style={{ backgroundImage: `url(${Background})`, position: 'relative', marginTop: '-7rem', height: '100vh' }} >


                <Container style={{ paddingTop: '7rem' }} >
                    <Row>
                        <Col>
                            <ul className="b">
                                <li className="menuli"><Link className="menua" to="/"><h2>Home</h2></Link></li>
                                <li className="menuli"><Link className="menua" to="/About"><h2>About</h2></Link></li>
                                <li className="menuli"><Link className="menua" to="/Projects"><h2>Projects</h2></Link></li>
                                <li className="menuli"><Link className="menua" to="/Updates"><h2>Updates</h2></Link></li>
                                <li className="menuli"><Link className="menua" to="/ProductGallery/All"><h2>Product Gallery</h2></Link></li>
                                <li className="menuli"><Link className="menua" to="/Howtoorder"><h2>How to order</h2></Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
