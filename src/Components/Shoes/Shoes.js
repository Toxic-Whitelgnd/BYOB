import React from 'react';
import "./shoes.css"
import img1 from "../../Assets/Homepage/hz_2.jpg"
import img2 from "../../Assets/shoes/sustainable.jpg"
import img3 from "../../Assets/shoes/shipping.jpg"
import img4 from "../../Assets/shoes/sizes.jpg"

import img5 from "../../Assets/shoes/model-boot.jpg"
import img6 from "../../Assets/shoes/model-chelsea.jpg"
import img7 from "../../Assets/shoes/model-jada.jpg"
import img8 from "../../Assets/shoes/model-kuman.jpg"
import img9 from "../../Assets/shoes/model-slip.jpg"
import img10 from "../../Assets/shoes/model-sneaker.jpg"
import img11 from "../../Assets/shoes/model-sport.jpg"
import img12 from "../../Assets/shoes/model-touch.jpg"

const Shoes = () => {
    return (
        <div>
            <section class="ban_sec">
                <div class="container-shoe">
                    <div class="ban_img">
                        <img src={img1} alt="banner" />
                        <div class="ban_text">
                            <strong>
                                <span>WANNA OWN SHOES?</span><br></br> start here
                            </strong>
                            <p>You can be your own boss in our own style, <br></br>
                                noone can stop you </p>
                            
                            <button className='button1'>
                            <a href="#">Customize now</a>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
            <div className='feature-shoe'>
                <div class="features">
                    <div class="body_container">
                        <ul>
                            <li class="step1">
                                <img src={img2} loading="lazy" alt=".." class="lazyload" />
                                <span>SUSTAINABLE MATERIALS</span>
                            </li>
                            <li class="step2">
                                <img src={img3} loading="lazy" alt=".." class="lazyload" />
                                <span>MADE & DELIVERED <br></br>IN 10 DAYS</span>
                            </li>
                            <li class="step3">
                                <img src={img4} loading="lazy" alt=".." class="lazyload" />
                                <span>SIZES FROM <br></br> 3 TO 17</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* chossing a product */}
            <div class="product_selector " id="product_selector">
                <p class="subtitle">START DESIGNING</p>
                <p class="title">CHOOSE A MODEL</p>
                <div class="track">
                    <ul class="list">
                        <li class="slide">
                            <a href="/en/custom-sneakers">
                                <img src={img5} loading="lazy" alt=".." class="lazyload" />
                                <p class="name">Sneakers</p>
                            </a>
                        </li>
                        <li class="slide">
                            <a href="/en/custom-chelseas">
                                <img src={img6} loading="lazy" alt=".." class="lazyload" />
                                <p class="name">Chelseas</p>
                            </a>
                        </li>
                        <li class="slide">
                            <a href="/en/custom-high-tops">
                                <img src={img7} loading="lazy" alt=".." class="lazyload" />
                                <p class="name">High tops</p>
                            </a>
                        </li>
                        <li class="slide">
                            <a href="/en/custom-slip-on">
                                <img src={img8} loading="lazy" alt=".." class="lazyload" />
                                <p class="name">Slip-on</p>
                            </a>
                        </li>
                        <li class="slide">
                            <a href="/en/custom-sport-shoes">
                                <img src={img9} loading="lazy" alt=".." class="lazyload" />
                                <p class="name">Jogging</p>
                            </a>
                        </li>
                        <li class="slide">
                            <a href="/en/custom-jada-high-tops">
                                <img src={img10} loading="lazy" alt=".." class="lazyload" />
                                <p class="name">Jada</p>
                            </a>
                        </li>
                        <li class="slide">
                            <a href="/en/custom-touch-sneaker">
                                <img src={img11} loading="lazy" alt=".." class="lazyload" />
                                <p class="name">Touch</p>
                            </a>
                        </li>
                        <li class="slide">
                            <a href="/en/custom-kuman-sneakers">
                                <img src={img12} loading="lazy" alt=".." class="lazyload" />
                                <p class="name">Kuman</p>
                            </a>
                        </li>
                    </ul>
                    <div class="ps__rail-x" style={{ width: '1062px', left: '0px', bottom: '0px' }}>
                        <div class="ps__thumb-x" tabindex="0" style={{ left: '0px', width: '374px' }}>

                        </div>
                    </div>
                    <div class="ps__rail-y" style={{ top: '0px', right: '-164px' }}>
                        <div class="ps__thumb-y" tabindex="0" style={{ top: '0px', height: '0px' }}>
                        </div>
                    </div>
                </div>
            </div>
            {/* unique design chooesen by yuo */}
            <div>
                <div class="why">
                    <div class="body_container">
                        <h3>Unique shoes designed by you</h3>
                        <div class="text">
                            <p>At Bullfeet there's room for all tastes and styles, as we offer you a huge variety of fabrics and materials to choose from, allowing you to create your sneakers as you wish, right from scratch.</p>
                            <p>You decide the colours, combinations, textures and everything you wish your sneakers to convey. You'll definitely find your style, among the thousands of possible combinations you'll see, as you go along.</p>
                            <p>On top of all these, our shoes are made through an eco-friendly process, using vegan sustainable materials, solely on demand and entirely handmade in Spain, don't you think is the perfect mixture?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shoes;
