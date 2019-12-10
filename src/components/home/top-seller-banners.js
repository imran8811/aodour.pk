import React from 'react';

function TopSellerBanners(props){
    const baseUrl = props.baseUrl;
    const topSellerBanners = props.topSellerBanners;
    return (
        <div className="top-seller">
            { topSellerBanners.length > 0 &&
                <div className="seller-img-section">
                    <h2>TOP SELLER</h2>
                    <p>Browse the collection of our best selling and trending products</p>
                    <div className="row">
                    { topSellerBanners.map((banner) => {
                        return (
                            <div className="col-md-6" key={banner.id}>
                                <a href={banner.href}>
                                    <img src={baseUrl+banner.image} alt={banner.name} />
                                </a>
                            </div>
                        )})
                    }
                    </div>
                </div>
            }
        </div>
    )
}
export default TopSellerBanners;