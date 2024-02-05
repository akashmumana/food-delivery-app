
import { useState, useEffect } from "react"

import hero from "../images/hero.png"
import Helmet from '../Component/Helmet'
import Category from '../Component/category'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import serviceimg1 from '../images/service-01.png'
import serviceimg2 from '../images/service-02.png'
import serviceimg3 from '../images/service-03.png'

import categoryimg1 from "../images/hamburger.png"
import categoryimg2 from "../images/pizza.png"
import categoryimg3 from "../images/bread.png"

import products from '../API/products'
import Productcard from './productcard'
import Networkingimg from "../images/network.png"



import loctionimg from "../images/location.png"






const featureData = [
  {
    title: 'Quick delivery',
    imgUrl: serviceimg1,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,doloremque.'
  },
  {
    title: 'Super Dine In',
    imgUrl: serviceimg2,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,doloremque.'
  },
  {
    title: 'Easy Pick Up',
    imgUrl: serviceimg3,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,doloremque.'
  }
]

export default function Home() {
  const [hotPizza, setHotpizza] = useState([]); useEffect(() => {
    const filterPizza = products.filter(item => item.category === 'Pizza');
    const slicePizza = filterPizza.slice(0, 4)
    setHotpizza(slicePizza);
  }, [])
  return (
    <div>
      <Helmet title="Home">
        {/* ========section-1 ================== */}
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className='section_contentn'>
                  <h5 className="mb-3">Easy order & fast delivery</h5>
                  <h1 className="mb-4 contentn_title">
                    <span>Enjoy</span> your favorite Pizza
                  </h1>
                  <p className=' mb-4'>The smart 365-days-per-year food subscription that will make you eat </p>
                  <div className=' d-flex  '>
                    <button className="order__btn d-flex align-items-center justify-content-between m-2">
                      Order Now <i className="ri-arrow-right-s-line"></i>
                    </button>
                    <button className="order__btn d-flex align-items-center justify-content-between m-2">
                      See all foods <i className="ri-arrow-right-s-line"></i>
                    </button>
                  </div>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className='hero__img' >
                  <img src={hero} alt="" className='w-100' />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* ===section2=================================== */}

        <section className='pt-0'>
          <Category></Category>
        </section>


        <section className=' pt-5'>

          <Container>
            <Row>
              <Col lg="12" className=' text-center'>
                <h5 className='subtitle mb-4' > What we Server</h5>
                <h2> Just sit back at Home</h2>
                <h2 > We will <sapn className='h_title'>take care </sapn></h2>
                <p className='mb-1 mt-4 feature_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quae?</p>
                <p className='feature_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quae?</p>
              </Col>

              {
                featureData.map((item, index) => (
                  <Col llg="4 " md="4" sm="6 " key={index} className='mt-5'>
                    <div className='section_fourdiv  text-center'>
                      <img src={item.imgUrl} alt="catgoryimg" className='w-50 mb-3 px-5 py-3' />
                      <h5 className=' fw-bold mb-3'>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </Col>
                ))
              }
            </Row>
          </Container>
        </section>
        {/* ========================section3=================================== */}
        <section className='mb-5'>
          <Container>
            <Row>
              <Col lg="12" className="text-center mt-5">
                <h2>Popular Foods</h2>
              </Col>
              <Col lg="12" className='mb-5'>

                <div className='foode_caetagory d-flex  align-items-center  justify-content-center gap-4'>
                  <button className='all_btn foodbtnactive'>all</button>
                  <button className=' d-flex  align-items-center gap-2'>  <img src={categoryimg1} alt="burgerimg" />burger</button>
                  <button className=' d-flex  align-items-center gap-2'> <img src={categoryimg2} alt="pizaa"></img>Pizaa</button>
                  <button className=' d-flex  align-items-center gap-2'> <img src={categoryimg3} alt="bread"></img>Bread</button>

                </div>
              </Col>

              {
                products.map((item) => {
                  return (
                    <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                      <Productcard item={item}></Productcard>
                    </Col>
                  )
                })
              }

            </Row>
          </Container>
        </section>
        {/* ==========section4======================================= */}
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <img src={loctionimg} alt="" className='w-100' />
              </Col>
              <Col lg="6" md="6">
                <div className='why__tasty-treat'>
                  <h2 className='tasty__treat-title mb-4'>Why Tasty Treat?</h2>
                  <p className='tasty__treat-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus. Tempora reprehenderit a corporis velit, laboriosam vitae ullam, repellat illo sequi odio esse iste fugiat dolor, optio incidunt eligendi deleniti!</p>
                  <ListGroup className='mt-5'>
                    <ListGroupItem className='border-0 ps-0'>
                      <p className='choose__us-title d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line">
                        </i>Fresh and tasty foods</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 ps-0'>
                      <p className='choose__us-title d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line">
                        </i>Quality support</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 ps-0'>
                      <p className='choose__us-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line">
                      </i>Order from any location</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* ========section5================================== */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className=' text-center mb-5 '>
                <h2>Hot pizaa</h2>
              </Col>
              {
                hotPizza.map((item) => {
                  return (
                    <Col lg="3" md="4" className="mb-5" key={item.id}>
                      <Productcard item={item}></Productcard>
                    </Col>
                  )
                })
              }
            </Row>
          </Container>

        </section>

        {/* ========section6================= */}
        <section>
          <Container>
            <Row>
              <Container></Container>
              <Col lg="6" md="6" className="mt-5">
                <div className="testimonial">
                  <h5 className="testimonial_subtitle mb-4"> Testimonial</h5>
                  <h2 className='testimonial_title mb-4'>What our <span>customers</span> are saying</h2>
                  <p className='testimonial_desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio 
                  quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!</p>
                 
                </div>
              </Col>
              <Col lg="6" md="6">
                <img src={Networkingimg} alt="" className="w-100" />
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>

    </div>
  )
}
