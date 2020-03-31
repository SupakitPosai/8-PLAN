import React, { Component } from 'react'
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import icon6 from '../../img/icon6.jpg'
import icon7 from '../../img/icon7.jpg'
import icon8 from '../../img/icon8.jpg'
import icon9 from '../../img/icon9.jpg'
import '../css/outs.css'
export default class OutServices extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center', margin: '40px 0' }}>
                <Container>
                    <Row>
                        <Col><h1 style={{ textAlign: 'center', fontWeight: 'bold', color: '#F25C05' }}>
                            OUT SERVICES
                            </h1></Col>
                    </Row>
                    <Row>
                        <Col>
                            <a className="aa" href="/#">
                                <Card className="oc">
                                    <Image src={icon6} width="70%" />
                                    <h4 style={{ fontWeight: 'bold' }} >Meeting with </h4>
                                    <h4 style={{ fontWeight: 'bold' }}>out architect</h4>
                                </Card>
                            </a>
                        </Col>

                        <Col>
                            <a className="aa" href="/#">
                                <Card className="oc">
                                    <Image src={icon8} width="70%" />
                                    <h4 style={{ fontWeight: 'bold' }}>Payment </h4>
                                    <h4 style={{ fontWeight: 'bold' }} >Assustance</h4>
                                </Card>
                            </a>
                        </Col>
                        <Col>
                            <a className="aa" href="https://www.youtube.com/">
                                <Card className="oc">
                                    <Image src={icon7} width="70%" />
                                    <h4 style={{ fontWeight: 'bold' }}>Sharing</h4>
                                    <h4 style={{ fontWeight: 'bold' }}>Knowledae</h4>
                                </Card>
                            </a>
                        </Col>
                        <Col>
                            <a className="aa" href="/Howtoorder">
                                <Card className="oc">
                                    <Image src={icon9} width="70%" />
                                    <h4 style={{ fontWeight: 'bold' }}>How to order</h4>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
