import * as React from 'react';
import { useEffect, useState } from "react";
import * as all_constants from '../utilities/constants';
import MovieList from '../components/movielist';
import PromoCarousel from '../components/carousel';
import GetMovieData from '../services';
import TVList from '../components/tvseries';
export default function MovieHome() {
    const [movies, setMovies] = useState([]);
    const [trending, setTrending] = useState([]);
    const [tv, setTVSeries] = useState([]);
    //For Trending Carousel 
    const allTrending = async () => {
        const url = `${all_constants.API_PARAMS.BASE_URL}trending/all/day?api_key=${all_constants.API_PARAMS.CLIENT_ID}`;
        let allData = GetMovieData(url);
        const finalData = await allData;
        if (finalData.results) {
            setTrending(finalData.results)
        }
    }
    //For Movies 
    const allMovies = async () => {
        const url = `${all_constants.API_PARAMS.BASE_URL}movie/upcoming?api_key=${all_constants.API_PARAMS.CLIENT_ID}`;
        let allData = GetMovieData(url);
        const finalData = await allData;
        if (finalData.results) {
            setMovies(finalData.results);
        }
    }
    //For TV shows
    const allTVseries = async () => {
        const url = `${all_constants.API_PARAMS.BASE_URL}tv/top_rated?api_key=${all_constants.API_PARAMS.CLIENT_ID}`;
        let allData = GetMovieData(url);
        const finalData = await allData;
        if (finalData.results) {
            setTVSeries(finalData.results);
        }
    }
    useEffect(() => {
        allMovies();
        allTrending();
        allTVseries();
    }, [])
    return (
        <>
            <PromoCarousel Trending={trending} />
            <MovieList Movies={movies}/>
            <TVList TVSeries={tv} />
        </>
    )
}