import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, useParams, useRouteMatch, Switch, Route} from 'react-router-dom';
import Axios from 'axios';
import Header from './home/header';
import About from "./about";
import Home from "./home/home";

function BrandListing(props){
    const baseUrl = props.baseUrl;
    // const sectionBanners = props.sectionBanners;
    const { brandID }  = useParams();
    let { path, url } = useRouteMatch();
    const [brandListing, setBrandListing] = useState();
    let brandUrl = baseUrl+'api/brand/'+brandID;
    console.log(brandUrl);
    useEffect(() => {
        Axios.get(brandUrl).then((res) => {
            setBrandListing(res.data.data.products);
        })
    }, []);
    // console.log(brandID, path, url);
    console.log(brandListing);
    return(
        <Fragment>
            <Header />
        </Fragment>
    )
}
export default BrandListing;
