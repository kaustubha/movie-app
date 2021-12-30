import {React, useState, useEffect} from 'react';
import * as all_constants from '../utilities/constants';
import {useParams} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import GetMovieData from '../services';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom';
export default function DetailPage(){
let {id, type} = useParams();
//Getting details data
const [movie, movieDetails] = useState([]);
const [tv, tvDetails] = useState([]);
const movieInfo = async () =>{
    const url = `${all_constants.API_PARAMS.BASE_URL}/movie/${id}?api_key=${all_constants.API_PARAMS.CLIENT_ID}`;
    let movieData = GetMovieData(url);
    const finalData = await movieData;
    if(finalData){
        movieDetails(finalData)
    }
}
const tvInfo = async () =>{
    const url = `${all_constants.API_PARAMS.BASE_URL}/tv/${id}?api_key=${all_constants.API_PARAMS.CLIENT_ID}`;
    let movieData = GetMovieData(url);
    const finalData = await movieData;
    if(finalData){
        tvDetails(finalData)
    }
}
useEffect(()=>{
    movieInfo();
    tvInfo();
},[id,type])
return(
    <>
    <Container>  
        <Row style={{paddingTop:"90px"}}>
          
            <Col lg="12">
            <Breadcrumb>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>{type === 'movie'? movie.original_title : tv.name}</Breadcrumb.Item>
            </Breadcrumb>
            </Col>
            <Col lg="5">
                <Card className="detail-card">
                    {type==='movie'? <img src={`${all_constants.IMG_PATH.BASE_URL}${movie.poster_path}`} alt="" title=""/>
                    : <img src={`${all_constants.IMG_PATH.BASE_URL}${tv.poster_path}`} alt="" title=""/>
                    }
                
                </Card>
            </Col>
            <Col>
                   <h2> {type==='movie' ? movie.original_title : tv.name}</h2>
                   <h5> {type==='movie' ? `Rating ${movie.vote_average}` : `Rating ${tv.vote_average}`}</h5>
                   <br/>
                   <h5> {type==='movie' ? movie.release_date : tv.last_air_date }</h5>
                   <br/>
                   <br/>
                   <p> {type==='movie' ? movie.overview : tv.overview}</p>
            </Col>
        </Row>
    </Container>
    </>
)
}