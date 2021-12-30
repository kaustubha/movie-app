import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as all_constants from '../utilities/constants';
export default function PromoCarousel(props){
    return(
        <>
            <Container className="clear-padd" fluid>
                <Row>
                    <Col>
                        <Carousel className="custom-height">
                            { props.Trending.map((trend, index)=>(
                                <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={`${all_constants.IMG_PATH.BASE_URL}${trend.backdrop_path}`}
                                    alt={index}
                                />
                                <Carousel.Caption>
                                    <h1>{trend.title}</h1>
                                    <h3>{`Average Vote ${trend.vote_average}`}</h3>
                                    <p>{trend.overview}</p>
                                </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </>
    )
}