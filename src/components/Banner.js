import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import banner from '../assests/banner/bannerImage.jpg';

const Styles = styled.div`
    .banner {
        background-size : cover;
        color: #efefef;
        height: 200px;
        position: relative;
        z-index: -2;
    }
`;

export const Banner = () => (
    <Styles>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner"
                    src={banner}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    </Styles>
);