import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../css/HomeAbout.css'
import ROOT_API from '../../config/Aip_Url'
import Cookies from 'universal-cookie';

const cookies = new Cookies();
export default class HomeAbout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }

    componentDidMount = () => {

        fetch(ROOT_API + "/api/company?name_company=about")
            .then(res => res.json())
            .then(
                (result) => {
                    if (cookies.get('language') === undefined || cookies.get('language') === 'EN') {
                        this.setState({
                            value: result[0].value_company_en
                        })
                    } else {
                        this.setState({
                            value: result[0].value_company_th
                        })
                    }
                },(error) => {}
            )
    }

    render() {
        return (
            <div style={{ marginBottom: '1.5rem' }}>
                <Container>
                    <div className="boxtext"> </div>
                    <div className="He1">  <h1 className="htext">ABOUT </h1><h1 className="textlast">8-PLAN</h1></div>
                    <Row>
                        <Col>
                            <h6 style={{ marginLeft: '3rem', marginBottom: '0.4rem', fontFamily: 'CaviarDreams' }}>
                                {this.state.value}
                            </h6>

                            <Link style={{ marginLeft: '3rem', fontWeight: 'bold', color: '#000' }} to="/About">Read more about us...</Link>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}
