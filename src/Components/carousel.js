import React, {Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from '../assets/img/img1.jpg'
import img2 from '../assets/img/img2.jpg'

export default class CarouselMain extends  Component{
    render(){
        return(
           <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={img1}
                        alt="image"
                    />
                    <Carousel.Caption>
                        <h2>test</h2>
                        <p>test text</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={img2}
                        alt="image"
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