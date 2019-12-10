import React, {useState, useEffect} from 'react';
import axios from 'axios';

function MainMenu(){
    const [mainMenu, setMainMenu] = useState([]);
    
    useEffect(() => {
        axios.get('https://backoffice.aodour.tk/api/menu').then((res) => {
            setMainMenu(res.data.data);
        });
    }, []);
    // console.log(mainMenu);
    return(
        <nav id="header-sticky" className="navbar navbar-inverse main-menu">
            <div className="toggle-section">
                <button type="button"><i className="fa fa-bars"></i></button>
            </div>           
            <div className='main-menu-new'>
                <ul>
                    <li className="product-dropdown">
                        <a href='#'>Products<i className="fa fa-angle-right"></i></a>
                        <div className='dropdown'>
                            <ul>
                                { mainMenu.categories &&
                                    mainMenu.categories.map((category) => {
                                        return (
                                            <li key={category.id}>
                                                <div className='left-cat'>
                                                    <a href='#'>{category.name}<i className="fa fa-angle-right"></i></a>
                                                </div>
                                                <div className='sub-dropdown'>
                                                    <div className='inner-wrap'>
                                                        <a href='#'>
                                                            <strong>Product sub Category - 1</strong>
                                                            <span className="span-plus">+</span>
                                                            <span className="span-minus">-</span>
                                                        </a>
                                                        <ul>
                                                            <li><a href='#'>Product sub-sub Category</a></li>
                                                            <li><a href='#'>Product sub-sub Category</a></li>                                   
                                                        </ul>
                                                    </div>
                                                    <div className='inner-wrap'>
                                                        <a href='#'>
                                                            <strong>Product sub Category - 1</strong>
                                                            <span className="span-plus">+</span>
                                                            <span className="span-minus">-</span>
                                                        </a>
                                                        <ul>
                                                            <li><a href='#'>Product sub-sub Category</a></li>
                                                            <li><a href='#'>Product sub-sub Category</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className='inner-wrap'>
                                                        <a href='#'>
                                                            <strong>Product sub Category - 1</strong>
                                                            <span className="span-plus">+</span>
                                                            <span className="span-minus">-</span>
                                                        </a>
                                                        <ul>
                                                            <li><a href='#'>Product sub-sub Category</a></li>
                                                            <li><a href='#'>Product sub-sub Category</a></li>
                                                            <li><a href='#'>Product sub-sub Category</a></li>
                                                            <li><a href='#'>Product sub-sub Category</a></li>
                                                            <li><a href='#'>Product sub-sub Category</a></li>
                                                            <li><a href='#'>Product sub-sub Category</a></li>
                                                            <li><a href='#'>Product sub-sub Category</a></li>
                                                            <li><a href='#'>Product sub-sub Category</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </li>
                    <li className="brand-dropdown">
                        <a href='#'>Brands<i className="fa fa-angle-right"></i></a>
                    </li>
                    <li>
                        <a href='#'>New Arivals</a>
                    </li>
                    <li>
                        <a href='#'>Beauty Blog</a>   
                    </li>
                    <li>
                        <a href='#'>Sale</a>
                    </li>                        
                </ul>
            </div>
            <div className="slide-in from-left">
                <div id="divToHide"></div>
                <div className="responsive-header">
                    <div className="moveleft-product">
                        <i className="fa fa-angle-left btn-left1"></i>
                        <i className="fa fa-angle-left btn-left2"></i>
                        <span id="product-mobile-title">Product</span>
                    </div>
                    <div className="moveleft-brand">
                        <i className="fa fa-angle-left btn-left1"></i>
                        <span id="brand-mobile-title">Brand</span>
                    </div>
                </div>               
                <div className='main-menu-new-mobile slide-in-content'>
                    <ul className="main-menu-first-items">
                        <li className="slideInLeft animated faster">
                            <a href='#'>Products<i className="fa fa-angle-right"></i></a>
                        </li>
                        <li className="slideInLeft animated faster">
                            <a href='#'>Brands<i className="fa fa-angle-right"></i></a>
                        </li>  
                        <li className="slideInLeft animated faster">
                            <a href='#'>New Arivals</a>
                        </li>  
                        <li className="slideInLeft animated faster">
                            <a href='#'>Beauty Blog</a>
                        </li>  
                        <li className="slideInLeft animated faster">
                            <a href='#'>Sale</a>
                        </li>  
                    </ul>       
                    <div className="product-dropdown">
                        <div className='dropdown'>
                            <ul>
                                <li>
                                    <div className='left-cat slideInLeft animated faster'>
                                        <a href='#'>Product cat.name - 1<i className="fa fa-angle-right"></i></a>
                                    </div>
                                    <div className='sub-dropdown'>
                                        <div className='inner-wrap'>
                                            <a className="slideInLeft animated faster" href='#'>
                                                <strong>Product sub Category - 1</strong>
                                                <span className="span-plus">+</span>
                                                <span className="span-minus">-</span>
                                            </a>
                                            <ul className="slideInLeft animated faster">
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>                                   
                                            </ul>
                                        </div>
                                        <div className='inner-wrap'>
                                            <a className="slideInLeft animated faster" href='#'>
                                                <strong>Product sub Category - 1</strong>
                                                <span className="span-plus">+</span>
                                                <span className="span-minus">-</span>
                                            </a>
                                            <ul className="slideInLeft animated faster">
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                            </ul>
                                        </div>
                                        <div className='inner-wrap'>
                                            <a className="slideInLeft animated faster" href='#'>
                                                <strong>Product sub Category - 1</strong>
                                                <span className="span-plus">+</span>
                                                <span className="span-minus">-</span>
                                            </a>
                                            <ul className="slideInLeft animated faster">
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='left-cat slideInLeft animated faster'>
                                        <a href='#'>Product cat.name - 2<i className="fa fa-angle-right"></i></a>
                                    </div>
                                    <div className='sub-dropdown'>
                                        <div className='inner-wrap'>
                                            <a className="slideInLeft animated faster" href='#'>
                                                <strong>Product sub Category - 2</strong>
                                                <span className="span-plus">+</span>
                                                <span className="span-minus">-</span>
                                            </a>
                                            <ul className="slideInLeft animated faster">
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='left-cat slideInLeft animated faster'>
                                        <a href='#'>Product cat.name - 3<i className="fa fa-angle-right"></i></a>
                                    </div>
                                    <div className='sub-dropdown'>
                                        <div className='inner-wrap'>
                                            <a className="slideInLeft animated faster" href='#'>
                                                <strong>Product sub Category - 3</strong>
                                                <span className="span-plus">+</span>
                                                <span className="span-minus">-</span>
                                            </a>
                                            <ul className="slideInLeft animated faster">
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='left-cat slideInLeft animated faster'>
                                        <a href='#'>Product cat.name - 4<i className="fa fa-angle-right"></i></a>
                                    </div>
                                    <div className='sub-dropdown'>
                                        <div className='inner-wrap'>
                                            <a className="slideInLeft animated faster" href='#'>
                                                <strong>Product sub Category - 4</strong>
                                                <span className="span-plus">+</span>
                                                <span className="span-minus">-</span>
                                            </a>
                                            <ul className="slideInLeft animated faster">
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                                <li><a href='#'>Product sub-sub Category</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="brand-dropdown">
                        <div className='dropdown'>
                            <ul>
                                <li>
                                    <div className='left-cat slideInLeft animated faster'>
                                        <a href='#'>Brand A-Z
                                            <span className="span-plus">+</span>
                                            <span className="span-minus">-</span>
                                        </a>
                                    </div>
                                    <div className='sub-dropdown'>
                                        <div className='inner-wrap'>
                                            <ul>
                                                <div className="scrollcolumn">
                                                    <span>A</span>
                                                    <li><a id="Element-A" href="#">Anastasia (4)</a></li>  
                                                    <li><a href="#">Aodour (6)</a></li> 
                                                    <li><a href="#">Art Deco (70)</a></li> 
                                                    <li><a href="#">A.H.C (2) </a></li>  
                                                    <li><a href="#">Aztec Secret (2) </a></li>
                                                    <li><a id="Element-B" href="#">Beauty Uk (102)</a></li>  
                                                    <span>B</span> 
                                                    <li><a href="#">Benefit (20)</a></li>   
                                                    <li><a href="#">Bourjois (152)</a></li>    
                                                    <li><a href="#">Beauclair (1) </a></li>  
                                                    <li><a href="#">Beauty Buffet (8) </a></li>  
                                                    <li><a href="#">Benton (8) </a></li>  
                                                    <li><a href="#">Bio-Oil (1) </a></li>  
                                                    <li><a href="#">Biore (1) </a></li>  
                                                    <li><a href="#">Blackmores (1) </a></li>  
                                                    <li><a href="#">Boots (2) </a></li>  
                                                    <li><a href="#">Burts Bees (1) </a></li> 
                                                    <li id="Element-C"><a href="#">CIBIO'2 (1) </a></li> 
                                                    <span>C</span> 
                                                    <li><a href="#">COSRX (14) </a></li>  
                                                    <li><a href="#">Cailyn (18) </a></li> 
                                                    <li><a href="#">Cetaphil (6) </a></li>  
                                                    <li><a href="#">Clarins (1) </a></li>  
                                                    <li><a href="#">Clinique (1) </a></li>  
                                                    <li><a href="#">Cailyn (412)</a></li> 
                                                    <li><a href="#">City Color (29)</a></li>   
                                                    <li><a href="#">Colourpop (12)</a></li>
                                                    <li><a id="Element-D" href="#">Daiso (3) </a></li>  
                                                    <span>D</span>
                                                    <li><a href="#">Dermatix (1) </a></li>  
                                                    <li><a href="#">Dr. Jart+ (3) </a></li>  
                                                    <li><a href="#">Dermacol (17)</a></li>   
                                                    <li><a href="#">Dr. Jart+ (1)</a></li>
                                                    <li><a id="Element-E" href="#">E.L.F (12) </a></li>
                                                    <span>E</span>  
                                                    <li><a href="#">Estee Lauder (5) </a></li>
                                                    <li><a href="#">E.L.F (129)</a></li>
                                                    <li><a href="#">Essence (57)</a></li>   
                                                    <li><a href="#">Estee Lauder (1)</a></li> 
                                                    <li><a href="#">Etude House (7)</a></li>  
                                                    <li><a id="Element-F" href="#">Fenty Beauty (3)</a></li> 
                                                    <span>F</span> 
                                                    <li><a href="#">Farsali (2) </a></li>  
                                                    <li><a href="#">First Aid Beauty (6) </a></li> 
                                                    <li><a id="Element-G" href="#">G & M Cosmetics (2) </a></li>
                                                    <span>G</span>  
                                                    <li><a href="#">Glam Glow (1) </a></li>   
                                                    <li><a id="Element-H" href="#">Huda Beauty (33)</a></li>
                                                    <span>H</span>
                                                    <li><a id="Element-I" href="#">IT's SKIN (2) </a></li>
                                                    <span>I</span>  
                                                    <li><a href="#">Innisfree (16) </a></li>  
                                                    <li><a href="#">Innisfree (1)</a></li>
                                                    <li><a id="Element-J" href="#">J.Cat (91)</a></li> 
                                                    <span>J</span>
                                                    <li><a href="#">Jayjun (10) </a></li>
                                                    <li><a href="#">John Frieda (9) </a></li> 
                                                    <li><a id="Element-K" href="#">Klairs (2) </a></li>
                                                    <span>K</span>  
                                                    <li><a href="#">Kat Von D (1)</a></li> 
                                                    <li><a id="Element-L" href="#">L.A Girl (15)</a></li> 
                                                    <span>L</span>  
                                                    <li><a href="#">Lakme (75)</a></li>
                                                    <li><a href="#">Lakme (1) </a></li>  
                                                    <li><a href="#">Lamer (1) </a></li>  
                                                    <li><a href="#">Laneige (7)</a></li>  
                                                    <li><a href="#">Leegeehaam (13) </a></li>  
                                                    <li><a id="Element-M" href="#">MAC (16) </a></li>  
                                                    <span>M</span>
                                                    <li><a href="#">Marc Jacobs (1) </a></li>  
                                                    <li><a href="#">Max Factor (189) </a></li>  
                                                    <li><a href="#">Milani (46) </a></li>
                                                    <li><a href="#">Milk Makeup (4) </a></li>  
                                                    <li><a href="#">Missha (3) </a></li>  
                                                    <li><a href="#">Misslyn (127) </a></li>  
                                                    <li><a href="#">Mistine (98) </a></li>  
                                                    <li><a href="#">Morphe (31) </a></li> 
                                                    <li><a href="#">MT (1) </a></li>  
                                                    <li><a href="#">Mario Badescu (14) </a></li>  
                                                    <li><a href="#">Mediheal (5) </a></li>  
                                                    <li><a href="#">Milani (3) </a></li>  
                                                    <li><a href="#">Mise En Scene (2) </a></li>  
                                                    <li><a href="#">Mistine (16) </a></li>  
                                                    <li><a href="#">Mizon (9) </a></li> 
                                                    <li><a id="Element-N" href="#">NYX (24) </a></li>
                                                    <span>N</span> 
                                                    <li><a id="Element-O" href="#">OGX (4) </a></li> 
                                                    <span>O</span> 
                                                    <li><a href="#">OROGOLD (2) </a></li>
                                                    <li><a href="#">Origins (2) </a></li>  
                                                    <li><a id="Element-P" href="#">Pair Lion (1) </a></li>  
                                                    <span>P</span>
                                                    <li><a href="#">Papa Recipe (4) </a></li>  
                                                    <li><a href="#">Paula's Choice (1) </a></li>
                                                    <li><a href="#">Pixi (3) </a></li>  
                                                    <li><a id="Element-R" href="#">ROHTO (2) </a></li>
                                                    <span>R</span>  
                                                    <li><a href="#">Rimmel London (1) </a></li>  
                                                    <li><a href="#">Ryo (2) </a></li> 
                                                    <li><a id="Element-S" href="#">SPA IN A BOTTLE (20) </a></li>  
                                                    <span>S</span>
                                                    <li><a href="#">Sa.Ad.Na (1) </a></li>  
                                                    <li><a href="#">Sephora (2) </a></li>  
                                                    <li><a href="#">Real Techniques (1) </a></li>  
                                                    <li><a href="#">Revlon (59) </a></li>  
                                                    <li><a href="#">Rimmel London (146) </a></li>  
                                                    <li><a href="#">Sephora (40) </a></li>  
                                                    <li><a href="#">Soap & Glory (1) </a></li> 
                                                    <li><a href="#">Shangpree (3) </a></li> 
                                                    <li><a href="#">Shiseido (6) </a></li>  
                                                    <li><a href="#">Skin Nature (1) </a></li>  
                                                    <li><a href="#">Some By MI (1) </a></li>   
                                                    <li><a href="#">Stila (7) </a></li>  
                                                    <li><a id="Element-T" href="#">Tarte (24) </a></li> 
                                                    <span>T</span>
                                                    <li><a href="#">The Body Shop (4) </a></li> 
                                                    <li><a href="#">The Face Shop (1) </a></li>  
                                                    <li><a href="#">Too Faced (47) </a></li> 
                                                    <li><a href="#">Tarte (1) </a></li>  
                                                    <li><a href="#">The Body Shop (18) </a></li>  
                                                    <li><a href="#">The Face Shop (24) </a></li>  
                                                    <li><a href="#">The Ordinary (22) </a></li>  
                                                    <li><a href="#">Timeless (3) </a></li>  
                                                    <li><a href="#">Too Faced (1) </a></li>  
                                                    <li><a href="#">Trilogy (1) </a></li>   
                                                    <li><a id="Element-U" href="#">Urban Decay (11) </a></li>
                                                    <span>U</span>  
                                                    <li><a id="Element-V" href="#">VIVRE (23) </a></li> 
                                                    <li><a href="#">Vaseline (2) </a></li>  
                                                    <li><a href="#">Victoria's Secret (8) </a></li>   
                                                    <li><a id="Element-W" href="#">Wet & Wild (50) </a></li>
                                                    <span>W</span>
                                                    <li><a href="#">White (2) </a></li>  
                                                    <li><a id="Element-X" href="#">Xhekpon (1) </a></li>
                                                    <span>X</span>  
                                                    <li><a id="Element-Z" href="#">Zymogen (1) </a></li> 
                                                    <span>Z</span>
                                                </div>   
                                                <div className="alphabet-tabs">
                                                    <div id="myNavbar">
                                                        <ul>
                                                          <li><a className="alpha" href="#Element-A">A</a></li>
                                                          <li><a className="alpha" href="#Element-B">B</a></li>
                                                          <li><a className="alpha" href="#Element-C">C</a></li>
                                                          <li><a className="alpha" href="#Element-D">D</a></li>
                                                          <li><a className="alpha" href="#Element-E">E</a></li>
                                                          <li><a className="alpha" href="#Element-F">F</a></li>
                                                          <li><a className="alpha" href="#Element-G">G</a></li>
                                                          <li><a className="alpha" href="#Element-H">H</a></li>
                                                          <li><a className="alpha" href="#Element-I">I</a></li>
                                                          <li><a className="alpha" href="#Element-J">J</a></li>
                                                          <li><a className="alpha" href="#Element-K">K</a></li>
                                                          <li><a className="alpha" href="#Element-L">L</a></li>
                                                          <li><a className="alpha" href="#Element-M">M</a></li>
                                                          <li><a className="alpha" href="#Element-N">N</a></li>
                                                          <li><a className="alpha" href="#Element-O">O</a></li>
                                                          <li><a className="alpha" href="#Element-P">P</a></li>
                                                          <li><a className="alpha" href="#Element-R">R</a></li>
                                                          <li><a className="alpha" href="#Element-S">S</a></li>
                                                          <li><a className="alpha" href="#Element-T">T</a></li>
                                                          <li><a className="alpha" href="#Element-U">U</a></li>
                                                          <li><a className="alpha" href="#Element-V">V</a></li>
                                                          <li><a className="alpha" href="#Element-W">W</a></li>
                                                          <li><a className="alpha" href="#Element-X">X</a></li>
                                                          <li><a className="alpha" href="#Element-Z">Z</a></li>
                                                        </ul>
                                                    </div>
                                                </div>  
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='left-cat slideInLeft animated faster'>
                                        <a href='#'>Top Brand
                                            <span className="span-plus">+</span>
                                            <span className="span-minus">-</span>
                                        </a>
                                    </div>
                                    <div className='sub-dropdown'>
                                        <div className='inner-wrap'>
                                            <ul className="slideInLeft animated faster">
                                                <li><a href='#'>Brand sub-sub Category</a></li>
                                                <li><a href='#'>Brand sub-sub Category</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='left-cat slideInLeft animated faster'>
                                        <a href='#'>Popular Brand
                                            <span className="span-plus">+</span>
                                            <span className="span-minus">-</span>
                                        </a>
                                    </div>
                                    <div className='sub-dropdown'>
                                        <div className='inner-wrap'>
                                            <ul>
                                                <li><a href='#'>Brand sub-sub Category</a></li>
                                                <li><a href='#'>Brand sub-sub Category</a></li>
                                                <li><a href='#'>Brand sub-sub Category</a></li>
                                                <li><a href='#'>Brand sub-sub Category</a></li>
                                                <li><a href='#'>Brand sub-sub Category</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>                      
                </div>
            </div>
            <div className="navbar-header">
                <a className="navbar-brand" href="index.html">
                   <img className="desktop-logo" src="assets/images/logo-main.png" alt="logo-main" />
                   <img className="mobile-logo" src="assets/images/logo-main-mobile.png" alt="logo-main-mobile" />
                </a>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li className="sprite6"><a href="#"><div className="cart-count"><p>0</p></div></a></li>
                <li className="sprite5-1"><a className="user_profile" href="#"></a></li>
                <li><a className="search-bar" href="#"><i className="fa fa-search"></i></a></li>
                <li><a className="der" href="dermatology.html">DERMATOLOGY</a></li>
            </ul>
        </nav>
    )
}

export default MainMenu;