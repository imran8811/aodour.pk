import React from 'react';
import ReactOwlCarousel from 'react-owl-carousel';

function NewArrivalsHomeTab(props){
    const baseUrl = props.baseUrl;
    const newArrivalsTab = props.newArrivalsTab;
    const responsive = {
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }

    return(
        <div id="caratab1" className="caracontent">
            { newArrivalsTab.length > 0 &&
                <ReactOwlCarousel loop nav margin={10} responsive={responsive}>
                    { newArrivalsTab.map((product) => {
                        return(
                            <div className="item" key={product.id}>
                                <div className="carousel-img">
                                    <a href="#">
                                        <img src={baseUrl+'assets/images/variation_images/product_1.jpg'} alt={product.product.name} />
                                    </a>
                                </div>
                                <div className="carousel-text">
                                    <div className="both-titles">
                                        <p className="cap-title"><a href="#">{product.product.name}</a></p>
                                        <p className="acc-detail"><a href="#">{product.product.name}</a></p>
                                    </div>
                                    <div className="price-section">
                                        <p className="cap-price1">RS. {product.product.price}</p><p className="cap-price2">RS. {product.price}</p>
                                    </div>
                                    <div className="icons-mobile">
                                        <span className="sprite7"></span>
                                        <span className="sprite9"></span>
                                    </div>
                                    <div className="brd-pdt-rating">
                                        <div className="brd-pdt-rating-star">
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                        <p className="home-page-review">(18 Reviews)</p>
                                    </div>
                                    <a href="#">
                                        <button className="add-cart">
                                            <img src="assets/images/shopping-bag.png" alt="shopping-bag" />Add To Cart
                                        </button>
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
export default NewArrivalsHomeTab;