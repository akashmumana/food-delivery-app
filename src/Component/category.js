import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import category01 from '../images/category-01.png';
import category02 from '../images/category-02.png';
import category03 from '../images/category-03.png';
import category04 from '../images/category-04.png';

const categoryData = [
  {
    display: 'Fast Food',
    imageUrl: category01
  },
  {
    display: 'Pizza',
    imageUrl: category02
  },
  {
    display: 'Asian Food',
    imageUrl: category03
  },
  {
    display: 'Raw Meat',
    imageUrl: category04
  },
];

export default function Category() {
  return (
    <div>
      <Container>
        <Row>
          {categoryData.map((item, index) => (
            <Col lg="3" md="4"   sm="6"  xs="6" className='mt-5' key={index}>
              <div className=' category_item  d-flex  align-items-center gap-3 '>
                <div className='categoy_img'>
                  <img src={item.imageUrl} alt="" />
                </div>
                <h6>{item.display}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
