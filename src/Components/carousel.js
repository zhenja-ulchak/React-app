import React, {Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';


export default class CarouselMain extends  Component{
    render(){

        const styleCarousel = {
            height: "96vh",
             marginTop: "40px",
        };
        return(
           <Carousel>
                <Carousel.Item style={styleCarousel}>
                    <img 
                        className="d-block w-100"
                        src={img1}
                        alt="img"
                    />
                    <Carousel.Caption>
                        <h2>test</h2>
                        <p>test text</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={styleCarousel}>
                    <img 
                        className="d-block w-100"
                        src={img2}
                        alt="img"
                    />
                    <Carousel.Caption>
                        <h2>test</h2>
                        <p>test text</p>
                    </Carousel.Caption>
                </Carousel.Item>
           </Carousel>
        )
    }
}