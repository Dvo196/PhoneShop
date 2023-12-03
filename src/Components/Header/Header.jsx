import React from "react";
import s from "./Header.module.css"
import Nav from "./nav/nav";
import bgimg from "./images_header/ios-1091302_1920 (1).png"
import arrowRight from ".//images_header/arrow-point-to-right.png"
import arrowLeft from ".//images_header/arrow-point-to-left.png"
import logos from "./images_header/instagram-logo.png"



function Header() {
    return ( 
            <>
        <header>
            <Nav/>
            
            <div className={s.bgc}>
                <img className={s.bgimg} src={bgimg} alt="bgimg" />
            </div>
                <div className={s.BlockTextes}>
                <li className={s.text1}>All New Phones </li>
                <li className={s.text2}>up to 25% Flat Sale</li>
                <li className={s.text3}>It is a long established fact that a reader will be distracted by the readable content of a page when <br /> looking at its layout. The point of using Lorem Ipsum is that</li>
                <button className={s.btnBuy}>BUY NOW</button>
                <img className={s.logos} src={logos} alt="logos" />
                </div>

                <div className={s.arrows}>
                <img className={s.arrowRight} src={arrowRight} alt="arrow" />
                </div>
                <div className={s.nasdnas}>
                <img className={s.arrowLeft} src={arrowLeft} alt="asd" />
                </div>

        </header>
            
            </>
            
     );
}

export default Header;