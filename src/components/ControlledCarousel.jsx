import React, { useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";


function ControlledCarousel () {
  
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  

  const handleSelect1 = (selectedIndex) => {
    setIndex1(selectedIndex);
  };

  const handleSelect2 = (selectedIndex) => {
    setIndex2(selectedIndex);
  };

  const handleSelect3 = (selectedIndex) => {
    setIndex3(selectedIndex);
  };


  return (
    <Row xs={1} md={3} lg={3} className="justify-content-center py-4 Carousel">
      <Col lg={3}>
        <Carousel activeIndex={index1} onSelect={handleSelect1} >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../img/abrigos/01.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 >First slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/abrigos/02.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/abrigos/03.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col lg={3}>
        <Carousel activeIndex={index3} onSelect={handleSelect3}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/remeras/01.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/remeras/02.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/remeras/03.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col lg={3}>
        <Carousel activeIndex={index2} onSelect={handleSelect2}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/pantalones/01.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/pantalones/02.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/pantalones/03.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}

export default ControlledCarousel;