import React from "react";
import s from "./nav.module.css"
import shoppingbag from "../images_header/shopping-bag.png"
import search from "../images_header/magnifying-glass.png"
import phonebag from "../images_header/call.png"
import mailbag from "../images_header/envelope.png"
import locationbag from "../images_header/maps-and-flags.png"

function Nav() {
    return (
        <>
                <li className={s.name}>Pomato</li>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Sitemap</li>
                    <li>Brand</li>
                    <li>Specials</li>
                    <li>Contact Us</li>
                    <li>Login</li>
                    <img src={shoppingbag} alt="shoppingbag" />
                    <img src={search} alt="search" />

                </ul>
                <div className={s.nav}>
                    <li className={s.text1}> <img  src={phonebag} alt="phonebag" /> (+71) 7522369417 <img className={s.mailbag} src={mailbag} alt="mailbag" /> <li className={s.mail}>avalan@gmail.com</li>  <img className={s.locationbag} src={locationbag} alt="locationbag" /> <li className={s.location}>Location</li></li>
                    



                </div>
            </nav>
        </>
    );
}

export default Nav;