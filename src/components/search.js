import React, {useState, useEffect} from 'react';
import * as all_constants from '../utilities/constants';
import GetMovieData from '../services';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
export default function SearchMovie(){
    const [searchterm, setSearchterm] = useState('');
    const [searchresult, setSearchresult] = useState([]);
    // getting serach results for typeahead
    const getserachResult = async () =>{
        const url = `${all_constants.API_PARAMS.BASE_URL}search/multi?api_key=${all_constants.API_PARAMS.CLIENT_ID}&query=${searchterm}`;
        let getData = GetMovieData(url);
        const finalData = await getData;
        //console.log('s-result', finalData);
        setSearchresult(finalData);
    }
    const closeTypeahed = () =>{
        setSearchterm([]);
    }
    useEffect(()=>{
        if (searchterm.length >= 3) {
            getserachResult();
        }
    },[searchterm])
    return (
        <>
            <input type="text" value={searchterm} className="form-control" onChange={(e) => setSearchterm(e.target.value)} placeholder='Search Movies' />
            {searchterm.length >= 3 ?
                <div className="typehead">
                    <Container>
                        <Row>
                            {typeof searchresult.results != 'undefined' ?
                                searchresult.results.map((item, index) => (
                                    
                                    <Col lg={2} className="d-flex t-col">
                                        <Link to={`/details/${item.media_type}/${item.id}`}>
                                        <Card className="bg-dark text-white t-card" style={{ width: '160px' }} onClick={()=>closeTypeahed()}>
                                        <Card.Img src={item.poster_path != undefined ? `${all_constants.IMG_PATH.BASE_URL}${item.poster_path}` : `${all_constants.IMG_PATH.BASE_64}`} alt="Card image" />
                                            <Card.Title>{item.original_title}</Card.Title>
                                        </Card>
                                        </Link>
                                    </Col>
                                    
                                ))
                                : null}
                        </Row>
                    </Container>
                </div>
                : null}
        </>
    )
}