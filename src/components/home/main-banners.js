import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import ReactOwlCarousel from 'react-owl-carousel';

function MainBanners(props){
    const baseUrl = props.baseUrl;
    const mainBanners = props.brandSliders;

    return(
        <div className="tab-button row">
            { mainBanners && 
                mainBanners.map((banner) => {
                    return(
                        <div className="tab-button-1 col-md-6" key={banner.id}>
                            <a href={banner.href}><img src={baseUrl+banner.image} alt={banner.name} /></a>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default MainBanners;


