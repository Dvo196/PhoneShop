import React from "react";
import s from "./Footer.module.css"
import icon from "./Images_Footer/instagram-logo.png"
function Footer() {
    return ( 
        <>
        <div className={s.footer}>
            <h2 className={s.Adddres}>Address</h2>
            <div className={s.line}>
            </div>
            <div className={s.textes_footer}>

            <h3>Healing Center, 176 W Streetname,New York, NY 10014, US</h3>
            <h3 className={s.number}>(+71) 8522369417</h3>
            <h3 className={s.mail}>pomato@gmail.com</h3>
            <img className={s.icon} src={icon} alt="icon" />
            <div className={s.info_footer}>

            <h3 className={s.home}>Home</h3>
            <h3 className={s.about}>About</h3>
            <h3>Sitemap</h3>
            <h3>Brand</h3>
            <h3 className={s.Specials}>Specials</h3>
            <h3 className={s.Contact}>Contact Us</h3>
            </div>
            </div>
        </div>        
        </>
     );
}

export default Footer;