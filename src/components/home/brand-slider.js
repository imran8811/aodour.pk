import React from 'react';
import ReactOwlCarousel from 'react-owl-carousel';

function TopBrandSlider(props){
    const baseUrl = props.baseUrl;
    const topBrandSlider = props.topBrandSlider;
    const responsive = {
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:7
        }
    }

    return(
        <div className="banner-section">
            { topBrandSlider.length > 0 &&
                <ReactOwlCarousel loop nav margin={10} responsive={responsive}>
                    { topBrandSlider.map((slider) => {
                        return(
                            <div className="item" key={slider.id}>
                                <div className="carousel-img">
                                    <a href={slider.href}>
                                        <img src={baseUrl+slider.logo_200} alt={slider.name} />
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </ReactOwlCarousel>
            }
        </div>
    )
}
export default TopBrandSlider;