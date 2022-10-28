import React, { Component } from "react";
import  { Container,Nav,Tab,Row,Col } from 'react-bootstrap';


import imgTab1 from '../assets/img/imgTab1.jpg';
import imgTab2 from '../assets/img/imgTab2.jpg';
import imgTab3 from '../assets/img/imgTab3.jpg';
import imgTab4 from '../assets/img/imgTab4.jpg';
import imgTab5 from '../assets/img/imgTab5.jpg';


export default class About extends  Component{
    render(){
        const tabMain = {
            width: "100%",
        }

        const conteinerMain = {
            marginTop: '100px',
        }

        const styleFont = {
            fontFamily: 'cursive',
            borderBottom: 'solid',
            paddingBottom: '4px',
        }


        


        return(
            <Container style={conteinerMain}>
                <Tab.Container id="ledt-tabs-exampe" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav.Item style={styleFont}>
                                <Nav.Link eventKey="first">DESING</Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={styleFont}>
                                <Nav.Link eventKey="second">TEAM</Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={styleFont}>
                                <Nav.Link eventKey="third">PROG</Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={styleFont}>
                                <Nav.Link eventKey="fourth">LIB</Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={styleFont}>
                                <Nav.Link eventKey="fifth">TEXT</Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img src={imgTab1} style={tabMain}/>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
                                        at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                        as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
                                        packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum
                                        ' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                                            accident, sometimes on purpose injected humour and the like.
                                            </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src={imgTab2} style={tabMain}/>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
                                        at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                        as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
                                        packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum
                                        ' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                                            accident, sometimes on purpose injected humour and the like.
                                            </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src={imgTab3} style={tabMain}/>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
                                        at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                        as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
                                        packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum
                                        ' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                                            accident, sometimes on purpose injected humour and the like.
                                            </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src={imgTab4} style={tabMain}/>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
                                        at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                        as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
                                        packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum
                                        ' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                                            accident, sometimes on purpose injected humour and the like.
                                            </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src={imgTab5} style={tabMain}/>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
                                        at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                        as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
                                        packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum
                                        ' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                                            accident, sometimes on purpose injected humour and the like.
                                            </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}