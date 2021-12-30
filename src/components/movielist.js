import React, { useState, useContext }from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import * as all_constants from '../utilities/constants';
import { FavContext } from './allContext'
export default function MovieList(props){
    const [favmovie, setFavMovies] = useContext(FavContext);
    const addtoFav = (id)=>{
            setFavMovies(prevMovies => [...prevMovies, {favitem : id}]);
    }
    return(
        <>
            <Container>
            <br/>
            <h4>Upcoming</h4>
                <Row className="custom-row">
                    {props.Movies.map((movie, i) => (
                        <Col className={`${i}`} key={i}>
                            <Button className="fav-button" onClick={()=>addtoFav(movie)}>
                                    Add to fav
                           </Button>
                            <Link to={`/details/movie/${movie.id}`}>
                            <Card style={{ width: '14rem' }} className="h-card">
                                <Card.Img variant="top" src={`${all_constants.IMG_PATH.BASE_URL}${movie.poster_path}`} />
                                
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                        
                    ))}
                    
                </Row>
            </Container>
        </>
    )
}