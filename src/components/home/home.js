import React, {Fragment, useState, useEffect} from 'react';
import Axios from 'axios';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from './header'
import HomeSlider from './home-slider';
import MainBanners from './main-banners';
import NewArrivalsHomeTab from './new-arrivals-tab-home';
import TrendingProductsHomeTab from './trending-products-home-tab';
import TopSellerBanners from './top-seller-banners';
import TopBrandSlider from './brand-slider';
import SectionBanners from './section-banners';
import InstaFeed from './instagram-feed';

function Home() {
  const baseUrl = 'https://backoffice.aodour.tk/';
  const [mainSliders, setMainSlider] = useState([]);
  const [mainBanners, setMainBanners] = useState([]);
  const [topBrandSlider, setBrandSlider] = useState([]);
  const [newArrivalsTab, setNewArrivalsTab] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [topSellerBanners, setTopSellerBanners] = useState([]);
  const [sectionBanners, setSectionBanners] = useState([]);
    
  useEffect(() => {
      Axios.get('https://backoffice.aodour.tk/api/landing').then(function(res){
          setMainSlider(res.data.data.sliders);
          setMainBanners(res.data.data.main_banners);
          setBrandSlider(res.data.data.brands_slider);
          setNewArrivalsTab(res.data.data.new_arrival_products);
          setTrendingProducts(res.data.data.trending_products);
          setTopSellerBanners(res.data.data.top_seller_banners);
          setSectionBanners(res.data.data.section_banner);
      });
  }, []);

  const instaFeed = [
      {
          "id": 1,
          "image" : 'assets/images/aodour-cos-1.png',
          "name" : "image 1"
      },
      {
        "id": 2,
        "image" : 'assets/images/aodour-cos-2.png',
        "name" : "image 1"
    },
    {
        "id": 3,
        "image" : 'assets/images/aodour-cos-3.png',
        "name" : "image 1"
    },
    {
        "id": 4,
        "image" : 'assets/images/aodour-cos-4.png',
        "name" : "image 1"
    },
    {
        "id": 5,
        "image" : 'assets/images/aodour-cos-1.png',
        "name" : "image 1"
    },
    {
        "id": 6,
        "image" : 'assets/images/aodour-cos-2.png',
        "name" : "image 1"
    },
    {
        "id": 7,
        "image" : 'assets/images/aodour-cos-3.png',
        "name" : "image 1"
    },
    {
        "id": 8,
        "image" : 'assets/images/aodour-cos-4.png',
        "name" : "image 1"
    },
    {
        "id": 9,
        "image" : 'assets/images/aodour-cos-1.png',
        "name" : "image 1"
    },
    {
        "id": 10,
        "image" : 'assets/images/aodour-cos-2.png',
        "name" : "image 1"
    },
    {
        "id": 11,
        "image" : 'assets/images/aodour-cos-3.png',
        "name" : "image 1"
    },
    {
        "id": 12,
        "image" : 'assets/images/aodour-cos-4.png',
        "name" : "image 1"
    },
  ]

  return (
    <Fragment>
      <Header />
      <HomeSlider mainSliders= {mainSliders} baseUrl={baseUrl} />
        <div className="outer-container">
            <nav className="navbar navbar-inverse after-banner-menu">
                <ul className="nav navbar-nav">
                  <li><a href="#"><i className="fa fa-angle-right"></i> BEST SELLER</a></li>
                  <li><a href="#"><i className="fa fa-angle-right"></i> NEW ARRIVAL</a></li>
                  <li><a href="#"><i className="fa fa-angle-right"></i> ROYAL BAZAAR</a></li>
                  <li><a href="#"><i className="fa fa-angle-right"></i> UNDER 999</a></li>
                </ul>
            </nav>
            <MainBanners bannerData={mainBanners} baseUrl= {baseUrl} />
            <Tabs>
                <TabList>
                    <Tab>New Arrivals</Tab>
                    <Tab>Trending Goodies</Tab>
                </TabList>
                <TabPanel>
                    <NewArrivalsHomeTab newArrivalsTab= {newArrivalsTab} baseUrl={baseUrl} />
                </TabPanel>
                <TabPanel>
                    <TrendingProductsHomeTab trendingProducts= {trendingProducts} baseUrl={baseUrl} />
                </TabPanel>
            </Tabs>
            <TopSellerBanners topSellerBanners={topSellerBanners} baseUrl={baseUrl} />
            <TopBrandSlider topBrandSlider={topBrandSlider} baseUrl={baseUrl} />
        </div>
        <SectionBanners sectionBanners={sectionBanners} baseUrl={baseUrl} />
        <div className="blog-section">
            <h2>Latest Blog</h2>
            <p className="blog-text">Browse the collection of our best selling and trending products</p> 
            <div className="blog-post1">
                <a className="blog-img" href=""><img src="assets/images/blog-1.jpg" alt="blog-1" /></a>
                <div className="post-detail">
                    <div className="post-detail-top">
                        <p className="post-date">19 Apr, 2019</p>
                        <p className="post-title">Banana and honey Face Pack</p>
                        <p className="post-des">Ingredients Mashed Ripe Banana 2tsp Raw honey or manuka honey 1tsp Lemon juice 2 or 3 drops Directions Pe …</p>  
                    </div>
                    <div className="post-detail-bottom">
                        <p className="post-comment">0 Comment</p>
                        <p className="readmore"><i className="fa fa-angle-right"></i> <a href="#">Read more</a></p>
                    </div>
                </div>
            </div>
            <div className="blog-post2">
                <a className="blog-img" href=""><img src="assets/images/blog-2.jpg" alt="blog-2" /></a>
                <div className="post-detail">
                    <div className="post-detail-top">
                        <p className="post-date">19 Apr, 2019</p>
                        <p className="post-title">Banana and honey Face Pack</p>
                        <p className="post-des">Ingredients Mashed Ripe Banana 2tsp Raw honey or manuka honey 1tsp Lemon juice 2 or 3 drops Directions Pe …</p>  
                    </div>
                    <div className="post-detail-bottom">
                        <p className="post-comment">0 Comment</p>
                        <p className="readmore"><i className="fa fa-angle-right"></i> <a href="#">Read more</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="outer-container">
            <InstaFeed instaFeed={instaFeed} baseUrl={baseUrl} />
            <div className="footer-section-fixed">
                <ul>
                    <li className="sprite1"><p>Home</p></li>
                    <li className="sprite2"><p>Store</p></li>
                    <li className="sprite3"><p>Derma</p></li>
                    <li className="sprite4"><p>Sale</p></li>
                    <li className="sprite5"><p>Account</p></li>
                </ul>
            </div>
        </div>
        
    </Fragment>
  );
}

export default Home;
