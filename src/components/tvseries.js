import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import * as all_constants from '../utilities/constants';
export default function TVList(props){
    return(
        <>
            <Container>
                <br />
                <h4>TV series</h4>
                <Row className="custom-row">
                    {props.TVSeries.map((tv, i) => (
                        <Col className={`${i}`} key={i}>
                             <Button className="fav-button">
                                Add to fav
                                </Button>
                            <Link to={`/details/tv/${tv.id}`}>
                            <Card style={{ width: '14rem' }} className="h-card">
                                <Card.Img variant="top" src={`${all_constants.IMG_PATH.BASE_URL}${tv.poster_path}`} />
                               
                                <Card.Body>
                                    <Card.Title>{tv.name}</Card.Title>
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