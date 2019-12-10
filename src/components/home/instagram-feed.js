import React from 'react';
import ReactOwlCarousel from 'react-owl-carousel';

function InstaFeed(props){
    const baseUrl = props.baseUrl;
    const instaFeed = props.instaFeed;
    const responsive = {
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }

    return(
        <div className="cosmatic-carousel-section">
            <h2>#Aodourcosmatics</h2>
            <p className="blog-text">Tag a photo on instagram for a chance to be featured in our gallery</p>
            { instaFeed.length > 0 && 
                <ReactOwlCarousel loop nav margin={10} responsive={responsive}>
                    { instaFeed.map((item) => {
                        return (
                            <div className="item" key={item.id}>
                                <div className="carousel-img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                            </div>
                        )
                    })}
                </ReactOwlCarousel>
            }
        </div>
    )
}
export default InstaFeed;