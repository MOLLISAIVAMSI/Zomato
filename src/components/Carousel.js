import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

const CustomCarousel = () => {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="https://images.unsplash.com/photo-1481671703460-040cb8a2d909?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/800x400"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Raspberry</h3>
          <p>Raspberry with cherry.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="https://images.unsplash.com/photo-1606471191009-63994c53433b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9uJTIwdmVnJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D/800x400"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Chicken Tikka</h3>
          <p>Chicken Tikka with yoghurt.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bm9uJTIwdmVnJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D/800x400"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Salmon</h3>
          <p>Contentinental Salmon curry.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
