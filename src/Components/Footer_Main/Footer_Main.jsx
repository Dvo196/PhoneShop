import React from "react";
import s from "./Footer_Main.module.css"
import left_quote from "./Images_Footer_Main/left-quote.png"




function Footer_Main() {
    return ( 
            <>
        <div>
            
            
            <div className={s.Footer_Main}>
                <h1>what say our clients</h1>
            </div>
            <div className={s.bg_red}>
                <div className={s.textes}>
                <h3>Due markes</h3>
                <h3 className={s.Rental}>Rental</h3>
                <i className={s.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess</i>
                </div>
                <img className={s.left_quote} src={left_quote} alt="left_quote" />
            </div>
                <div className={s.bg1}>
                    <div className={s.bg2}>

                     <div className={s.bg3}>

                    </div> 
                    </div>
                </div>
                {/* <div className={s.BlockTextes}>
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
                <img className={s.arrowLeft} src={arrowLeft} alt="asd" /> */}
                {/* </div> */}

        </div>
        
            <div className={s.bg}>

                <h1 className={s.info}>Contact Us</h1>
                <div className={s.inp_btn}>
                <div className={s.textesss}>

                <input className={s.inp1} type="text" name="Your Name" id="1" />
                <input className={s.inp2} type="text" name="Email" id="2" />
                <input className={s.inp3} type="text" name="Phone" id="3" />
                <input className={s.inp4} type="text" name="Massage" id="4" />
                <br /><button className={s.btn_send}>Send</button>
                </div>



                {/* <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <input type="text" name="" id="" /> */}
                {/* <button>Send</button> */}
                </div>
            </div>
            </>
            
     );
}

export default Footer_Main;