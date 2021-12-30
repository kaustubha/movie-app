import React from 'react';
import Container from 'react-bootstrap/Container';
export default function FooterBar(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    
    return(
        <>
        <Container>
        <footer className="text-center" style={{padding:"80px 25px"}}>
            <hr/>
            Copyright MOVIE-APP {`${year}`}
        </footer>
        </Container>
        </>
    )
}