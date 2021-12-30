import React, {useContext} from 'react';
import SearchMovie from '../search';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import {FavContext} from '../allContext';
export default function HeaderBar(){
    const [favmovie] = useContext(FavContext);
    const myFavmovies = favmovie.length - 1;
  return(
      <>
          <Navbar bg="dark" variant="dark" fixed="top">
              <Container>
                  <Navbar.Brand href="/">MOVIE-APP</Navbar.Brand>
                  <Nav className="me-auto">
                      <Link to="/favorite">My Favourite {myFavmovies > 0 ? myFavmovies : null}</Link> 
                  </Nav>
                  
                  <div className="align-right"><SearchMovie /></div>
                  <div className="align-right">
                  <DropdownButton align="end" className="top-dropdown" title="Account">
                    <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">SignUp</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                  </DropdownButton>
                  </div>
              </Container>
          </Navbar>
      </>
  )
}
