import React, { Component } from 'react'
import ad from '../../img/ad.jpg'
import { Container, Row, Image } from 'react-bootstrap';
export default class Advertisement extends Component {
    render() {
        return (
            <div style={{ marginBottom: '1.5rem' }}>
                <Container>
                    <Row>
                       <a href="https://www.google.com/webhp?authuser=0"> <Image src={ad} width="100%" /></a>
                    </Row>
                </Container>

            </div>
        )
    }
}
