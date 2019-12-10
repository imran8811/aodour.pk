import React from 'react';
import ReactOwlCarousel from 'react-owl-carousel';

function HomeSlider(props){
    const baseUrl = props.baseUrl;
    const mainSliders = props.mainSliders;
    const responsive = {
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }

    return(
        <div className="banner-section">
            { mainSliders.length > 0 &&
                <ReactOwlCarousel loop nav margin={10} responsive={responsive}>
                    { mainSliders.map((slider) => {
                        return(
                            <div className="item" key={slider.id}>
                                <div className="carousel-img">
                                    <a href={slider.href}><img src={baseUrl+slider.image} alt={slider.name} /></a>
                                </div>
                            </div>
                        )
                    })}
                </ReactOwlCarousel>
            }
        </div>
    )
}
export default HomeSlider;