import React, {Component} from "react";
import Carusel from '../Components/carousel'
import  { Container, Button,  Card , Row, Col, CardGroup} from 'react-bootstrap';
import imgTab5 from '../assets/img/imgTab5.jpg';
export default class Home extends  Component{
    render(){
        return(
            <>
            <Carusel/>
            <Container>
            <CardGroup className="mt-4 mb-4">
                    <Col sm={3} className=" text-center m-auto">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={imgTab5} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3} className=" text-center m-auto">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={imgTab5} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3} className=" text-center m-auto">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={imgTab5} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    </CardGroup>
            </Container>
            </>
        )
    }
}