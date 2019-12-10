import React, {Fragment, useState, useEffect} from 'react';
import Axios from 'axios';
import Header from './home/header';


function BrandListing(props){
    const baseUrl = props.baseUrl;
    // const sectionBanners = props.sectionBanners;
    const [brandListing, setBrandListing] = useState();
    useEffect(() => {
        Axios.get().then((res) => {
            setBrandListing(res.data.data);
        })
    });
    console.log(brandListing);
    return(
        <Fragment>
            <Header />
        <div className="outer-container">
            <div className="header-brand-page row">
                <div className="col-4">
                    <select>
                      <option value="">Sort</option>
                      <option value="">Popularity</option>
                      <option value="">Low to hight</option>
                      <option value="">Hight to Low</option>
                    </select>
                </div>
                <div className="col-4">
                    <label className="checkbox-container"><input type="checkbox" name="color" />
                        <span className="checkmark"></span>
                    </label>
                    <p>Discount</p>
                </div>
                <div className="col-4 filter-content">
                    <span className="sprite11"></span>
                    <p>Filters</p>
                </div>
            </div>
            <div className="outer-section-brand row">
                <div className="brand-section-left collapse col-md-2">
                    <p className="return-to-cart">Home<span>/</span>Brand<span>/</span>Art Deco</p>
                    <div className="brand-best-seller row">
                        <h4>BEST SELLER</h4>
                        <div className="col-md-12">
                            <img src="assets/images/best-seller.jpg" alt="best-seller" />
                            <div className="best-seller-des">
                                <h5>Art Deco Long Wear Concealer (18 Soft Peach)</h5>
                                <span>Rs.1899</span>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <img src="assets/images/best-seller.jpg" alt="best-seller" />
                            <div className="best-seller-des">
                                <h5>Art Deco Long Wear Concealer (18 Soft Peach)</h5>
                                <span>Rs.1899</span>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <img src="assets/images/best-seller.jpg" alt="best-seller" />
                            <div className="best-seller-des">
                                <h5>Art Deco Long Wear Concealer (18 Soft Peach)</h5>
                                <span>Rs.1899</span>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <img src="assets/images/best-seller.jpg" alt="best-seller" />
                            <div className="best-seller-des">
                                <h5>Art Deco Long Wear Concealer (18 Soft Peach)</h5>
                                <span>Rs.1899</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brand-section-right col-md-10">
                    <div className="brand-slider">
                        <div className="carousel-img"><img src="assets/images/slider-brand.jpg" alt="slider-brand" /></div>
                    </div>
                    <div className="filter-brand-products">
                        <div className="art-title">
                            <h3>ART DECO</h3><span>12 items</span>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-6">
                                <select>
                                  <option value="volvo">View 50</option>
                                  <option value="saab">View All</option>
                                </select>
                            </div>
                            <div className="col-md-4 col-6">
                                <label className="checkbox-container"><input type="checkbox" name="color" />
                                    <span className="checkmark"></span>
                                </label>
                                <p>Discount</p>
                            </div>
                            <div className="col-md-4 sort-filter">
                                <select>
                                  <option value="volvo">Sort By:</option>
                                  <option value="saab">Sort by Rating</option>
                                  <option value="mercedes">Sort by New Arrival</option>
                                  <option value="audi">Sort by Price: low to high</option>
                                  <option value="audi">Sort by Price: high to low</option>
                                </select>
                            </div>
                        </div>    
                    </div>
                    <div className="brand-product-listing row">
                        <div className="col-md-3 col-6">
                            <div className="brand-product-listing-img">
                              <img src="assets/images/brand-product.png" alt="brand-product" />
                            </div>
                            <div className="brd-pdt-des">
                                <div className="both-titles">
                                    <span className="dollar-item">dolor up price down</span>
                                    <h5>Art Deco Liquid Camouflage (38 Summer Honey)</h5>
                                </div>
                                <div className="brd-pdt-des-btm">
                                    <h4>RS.2950</h4>
                                    <div className="brd-pdt-rating">
                                        <div className="brd-pdt-rating-star">
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                        <p>(18 Reviews)</p>
                                    </div>
                                </div>
                                <div className="icons-mobile">
                                    <span className="sprite7"></span>
                                    <span className="sprite9"></span>
                                </div>
                            </div>
                            <div className="brand-product-listing-overlay">
                                <div className="overlay-elements">
                                    <a href=""><span className="sprite14"></span></a>
                                    <a data-toggle="modal" data-target="#Product_quick_detail"><span className="sprite13"></span></a>
                                    <a href=""><span className="sprite15"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination-section">
                       <ul className="pagination">
                        <li><a className="active" href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">...</a></li>
                        <li><a href="#">10</a></li>
                       </ul>
                       <button className="next-page">Next<i className="fa fa-angle-right"></i></button>
                    </div>
                </div>    
            </div>
            <div className="modal fade" id="Product_quick_detail" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body row">
                            <div className="col-md-6 modal-img">
                             <img id="change-shade" src="assets/images/4052136058307.jpg" alt="brand-product" />                          
                            </div>
                            <div className="col-md-6">
                                <h4>Art Deco Liquid Camouflage (38 Summer Honey)</h4>
                                <div className="product-quick-des-left">
                                    <p>Brand:</p>
                                    <p>Product Code:</p>
                                    <p>Volume:</p>
                                    <p>Available Stock:</p>
                                </div>
                                <div className="product-quick-des-right">
                                    <p>Art Deco</p>
                                    <p>DHS9384516238</p>
                                    <p>20ml</p>
                                    <p>25</p>   
                                </div>
                                <p className="det-link"><a href="">See product details</a></p>
                                <div className="model-shade-section">
                                    <h5>Shades</h5>
                                    <label className="container-shade"><input type="radio" name="color" />
                                        <span className="checkmark checkmark1"></span>
                                    </label>
                                    <label className="container-shade"><input type="radio" name="color" />
                                        <span className="checkmark checkmark2"></span>
                                    </label>
                                    <label className="container-shade"><input type="radio" name="color" />
                                        <span className="checkmark checkmark3"></span>
                                    </label>
                                    <label className="container-shade"><input type="radio" name="color" />
                                        <span className="checkmark checkmark4"></span>
                                    </label>
                                    <label className="container-shade"><input type="radio" name="color" />
                                        <span className="checkmark checkmark5"></span>
                                    </label>
                                    <label className="container-shade"><input type="radio" name="color" />
                                      <span className="checkmark checkmark6"></span>
                                    </label>
                                </div>
                                <h3>RS.2950</h3>
                                <div className="product-quantity-box">
                                    <button id="btn-down" onclick=" down('0')">
                                        <span>-</span>
                                    </button>
                                    <input type="text" id="myNumber" value="1" />
                                    <button id="btn-up" onclick="up('100')">
                                        <span>+</span>
                                    </button>
                                </div>
                                <button className="modal-add-to-cart">Add to Cart</button>
                                <div className="modal-add-to-wish">
                                  <span className="sprite8"></span><p>Add to Wishlist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
        </Fragment>
    )
}
export default BrandListing;