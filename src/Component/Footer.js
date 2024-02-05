import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from '../images/res-logo.png'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer >
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className='footer__logo text-start'>
              <img src={logo} alt='logo'></img>
              <h5>Tasty Treat</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.</p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5>Delivery Time</h5>
            <ListGroup>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>off Day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer_title'>Contact</h5>
            <ListGroup className='delivery__time-item'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <p>Location: kholvad, kamrej-394190, Surat.</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Phone: 7648936497</span>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: demo.xyz@gmai.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer_title'>Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className='newsletter'>
              <input type='email' placeholder='Enter your email'></input>
              <span><i className="ri-send-plane-line"></i></span>
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg='6' md='6' className='copyright__text'>
            <p>Copyright - 2022, website made by Muhibur Rahman. All Rights
              Reserved.</p>
          </Col>
          <Col lg='6' md='6'>
            <div className='social__links d-flex align-items-center gap-4 justifycontent-end'>
              <p className='m-0'>Follow: </p>
              <span>
                <Link to="" className='text-decoration-none'><i class="ri-facebook-circle-fill"></i></Link>
              </span>
              <span>
                <Link to="" className='text-decoration-none'><i class="ri-youtube-fill"></i></Link>
              </span>
              <span>
                <Link to="" className='text-decoration-none'> <i class="ri-twitter-fill"></i></Link>
              </span>
              <span>
                <Link to="" className='text-decoration-none'><i class="ri-instagram-fill"></i></Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
