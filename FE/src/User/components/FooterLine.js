import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Footerl.css'
export default class FooterLine extends Component {
    render() {
        return (
            <div className="footer" style={{ backgroundColor: '#000', height: '4rem' }}>
                <Container style={{ height: '100%' }} >
                    <Row style={{ height: '100%' }}>
                        <Col style={{ alignSelf: 'center' }}>
                            <h5 style={{ color: '#fff', marginBottom: '0' }}>@ 8-Plan Group 2020</h5>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
