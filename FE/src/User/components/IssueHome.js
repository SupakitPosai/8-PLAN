import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
export default class IssueHome extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#ff6600', padding: '15px 0' }}>
                <Container>
                    <Row>
                        <Col><h2 style={{ color: '#ffe713', fontWeight: 'bold' }}>News issue</h2>
                            <p style={{ color: '#fff', fontWeight: 'bold' }}>Keep following issue on..</p>
                            <p style={{ color: '#fff', fontWeight: 'bold' }}>Architecture design. technology, and environtment</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
