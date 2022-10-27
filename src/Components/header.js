import React , {Component} from "react";
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from './Studi222.png';
import {BrowserRouter as Router , Route ,Routes } from "react-router-dom";
import  Home  from "../pages/Home.js";
import  About  from "../pages/About.js";
import  Contact  from "../pages/Contact.js";
import  Blog  from "../pages/Blog.js";

export default class Header extends Component{

    render(){
        return(
            <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                         src={logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav" className="">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Головна</Nav.Link>
                                <Nav.Link href="/about">Про нас</Nav.Link>
                                <Nav.Link href="/contacts">Контакти</Nav.Link>
                                <Nav.Link href="/blog">Блог</Nav.Link>
                            </Nav>
                            <Form inline className="d-flex justify-content-end">
                                <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                                />
                                <Button variant="outline-info" style={{marginLeft:'15px'}}>Search</Button>
                            
                            </Form>
                        </Navbar.Collapse>
                 
                </Container>
            </Navbar>

            <Router>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contacts" element={<Contact/>}/>
          <Route exact path="/blog" element={<Blog/>}/>
        </Routes>
    </Router>




            {/* <Router>
            <Route exact path='/' element={<Home/>} />
            </Router>  */}
            </> 
        )
    }
}