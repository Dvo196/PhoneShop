import React from "react";
import s from "./Main.module.css"
import iphonebg from "./Main_Images/iphone-160307.png"
import Ellipse_Grey from "./Main_Images/Ellipse_Grey.png"
import Ellipse_Red from "./Main_Images/Ellipse_Red.png"
import Phones from "./Phones/Phones"



function Main() {
    return ( 
            <>
        <div className={s.full}>
            
            <div className={s.bgc}>
                <img className={s.iphonebg} src={iphonebg} alt="bgimg" />
                <div className={s.Ellipses}>
                <img className={s.Ellipse_Grey} src={Ellipse_Grey} alt="Ellipse_Grey" />
                <img className={s.Ellipse_Red} src={Ellipse_Red} alt="Ellipse_Red" />
                </div>

                <div className={s.textes}>
                <li>Up</li>
                <li>To</li>
                <li className={s.discount}>50%</li>
                <li>Sale</li>
                </div>
                <div className={s.textes2}>
                    <li className={s.text1}>About Us</li>
                    <li className={s.text2}>Our Mobile shop</li>
                    <li className={s.text3}>It is a long established fact that a reader will be distracted by the readable content of a page when <br /> looking at its layout. The point of It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. The point of It is a long established fact that a <br /> reader will be distracted by the </li>
                    <div className={s.buttons}>

                    <button className={s.btn_red}></button>
                    <button className={s.btn_blue}></button>
                    </div>

                </div>
            </div>
              

        </div>
              <Phones/>
            
            </>
            
     );
}

export default Main;