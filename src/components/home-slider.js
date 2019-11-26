import React, {useState, useEffect} from 'react';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import Axios from 'axios';

function HomeSlider(){
    const [homeSlider, setHomeSlider] = useState([]);
    
    useEffect(() => {
        Axios.get('https://backoffice.aodour.tk/api/landing').then(function(res){
            setHomeSlider(res.data.data.main_banners);
        });
    }, []);
    
    const carouselOptions = {
        loop: true,
        margin: 10, 
        nav: true,
        responsive: {
            0: {
                items:1
            },
            600: {
                items:1
            },
            1000: {
                items:1
            }
        }
    }
    
    console.log(homeSlider);

    return(
        <div className="banner-section">
            <div id="main-slider" className="owl-carousel owl-theme">
                {
                    homeSlider.map((slider) => {
                        return (
                            <OwlCarousel className="owl-theme" options={carouselOptions}>
                                <div className="item">
                                    <div className="carousel-img">
                                        <a href="#"><img src="assets/images/banner1.jpg" alt="banner1" /></a>
                                    </div>
                                </div>    
                            </OwlCarousel>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default HomeSlider;