import React from 'react'
import CommonSection from '../Component/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import Iframe from 'react-iframe'

export default function Contact() {
  return (
    <div>
      <CommonSection title='Contact'></CommonSection>
      <section className='mt-5 mb-5'>
        <Container>
            <div>
                <div class="col-lg-12 text-center mt-5 container">
                    <h1>Contact <span style={{ color: '#df2020' }}> Us </span></h1>
                </div>

                <div class="col-lg-12 container mx-auto mt-5">
                    <div class="mapouter">
                        <div class="gmap_canvas"><Iframe class="gmap_iframe" width="100%" height='500px' frameborder="0" scrolling="no"
                            marginheight="0" marginwidth="0"
                            src="https://maps.google.com/maps?width=1118&amp;height=573&amp;hl=en&amp;q=vnsgu&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></Iframe></div>

                    </div>
                </div>





                <div class="col-lg-12 container mt-5 ">
                    <h3>Voisen !</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto .Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                        unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>

                </div>
                <div class="row container mx-auto mt-5">
                    <div class="col-lg-4 mx-auto">
                        <h5><i class="fa-solid fa-location-dot"></i> UNITED STATES</h5>
                        <p>5th Avenue, 10019 New York, United States</p>
                        <p>+1 310 666 8888</p>
                        <p>+1 310 666 9999</p>
                        <p>store_1@companyname.com</p>
                    </div>

                    <div class="col-lg-4 mx-auto">
                        <h5><i class="fa-solid fa-location-dot"></i> UNITED STATES</h5>
                        <p>5th Avenue, 10019 New York, United States</p>
                        <p>+1 310 666 8888</p>
                        <p>+1 310 666 9999</p>
                        <p>store_1@companyname.com</p>
                    </div>

                    <div class="col-lg-4 mx-auto">
                        <h5><i class="fa-solid fa-location-dot"></i> UNITED STATES</h5>
                        <p>5th Avenue, 10019 New York, United States</p>
                        <p>+1 310 666 8888</p>
                        <p>+1 310 666 9999</p>
                        <p>store_1@companyname.com</p>
                    </div>

                </div>
                <div class="row container mx-auto mt-5">
                    <div class="col-lg-6">
                        <input type="text" name="name" id="name" placeholder="Name*" class="w-100 input-style" />
                    </div>

                    <div class="col-lg-6">
                        <input type="text" name="name" id="name" placeholder="Email*" class="w-100  input-style" />
                    </div>
                </div>
                <div class="row mt-3 container mx-auto">
                    <div class="col-lg-12 ">
                        <input type="text" name="name" id="name" placeholder="Subject*" class="w-100  input-style" />
                    </div>
                </div>
                <div class="row mt-3 container mx-auto mb-5">
                    <div class="col-lg-12 ">
                        <textarea class="input-style w-100" id="textAreaExample6" rows="5" placeholder="Your Message*"></textarea>
                        <button type="button" class="btn mt-3 " style={{ backgroundColor: '#df2020' ,color:'white' }}>Send
                            Message</button>
                    </div>
                </div>
            </div >
        </Container>
      </section>
    </div>

  )
}
