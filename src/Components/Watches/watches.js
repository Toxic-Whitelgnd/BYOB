import React from 'react';
import "./watches.css";
import img1 from "../../Assets/watches/watch.jpg"

const Watches = () => {
    return (
        <div>
            <section class="ban_sec">
                <div class="container-shoe">
                    <div class="ban_img">
                        <img src={img1} alt="banner" />
                        <div class="ban_text">
                            <strong>
                                <span>WANNA CREATE?</span><br></br> OWN STYLE
                            </strong>
                            <p>You can be your own boss in our own style, <br></br>
                                noone can stop you </p>
                            <button className='button2'>
                                <a href="#">CUSTOMIZE NOW</a>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
            {/* stepss */}
            <div>
                <div class="cat-landing-2">
                    <div class="content-asset">
                        <div class="mytimex-craft-steps">
                            <div class="fixed-width">
                                <ul>
                                    <li>
                                        <i class="craft-steps-number">1</i>
                                        <p class="craft-steps-title">You Design It</p>
                                        <span class="craft-steps-desc">Create and customize your style</span>
                                    </li>
                                    <li>
                                        <i class="craft-steps-number">2</i>
                                        <p class="craft-steps-title">We Craft It</p>
                                        <span class="craft-steps-desc">Quality timekeeping since 1854</span>
                                    </li>
                                    <li>
                                        <i class="craft-steps-number">3</i>
                                        <p class="craft-steps-title">Delivered to You</p>
                                        <span class="craft-steps-desc">Within 2 weeks of your order</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Watches;
