import React, {Fragment} from 'react';

function SectionBanners(props){
    const baseUrl = props.baseUrl;
    const sectionBanners = props.sectionBanners;
    return(
        <div className="category-item">
            { sectionBanners.length > 0 &&
                <div className="cate-row1 row">
                    { sectionBanners.map((banner) => {
                        return(
                            <div className="cate-item1 col-md-6 col-sm-12 col-12" key={banner.id}>
                                <img src={baseUrl+banner.image} alt={banner.name} />
                                <div className="cate-detail">
                                    <h3 className="cate-detail-left">{banner.name}</h3>
                                    <p className="cate-detail-right"><a href={banner.href}><i className="fa fa-angle-right"></i> Click Now</a></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}
export default SectionBanners;