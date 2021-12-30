import React, {useContext, useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {FavContext} from '../components/allContext';
import * as all_constants from '../utilities/constants';
export default function FavoritePage(){
    const [favmovie, setFavMovies] = useContext(FavContext);
    return(
        <>
            <Container style={{paddingTop:"90px"}}>
                <Row>
                    {favmovie.map((item, i)=>(
                        <>
                        {typeof item.favitem != 'undefined' ?
                        <Col lg={3} key={i}>
                            <Card style={{ width: '14rem' }} className="h-card">
                                {console.log(item)}
                                <Card.Img variant="top" src={`${all_constants.IMG_PATH.BASE_URL}${item.favitem.poster_path}`} />
                                <Card.Body>
                                    <Card.Title>{item.favitem.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col> : null }
                        </>
                    ))}
                    
                </Row>
            </Container>
        </>
    )
}
