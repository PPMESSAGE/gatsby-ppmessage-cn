import React from "react";
import styles from "./loading.module.css"
import EnterYourMobile from "../components/enteryourmobile.js"

export default () => (
    <div className={styles.heiti}>
        <div style={{height:"72px"}}></div>
        <div className={styles.l__full__row}>
            <div className={styles.start}>
                <div className={styles.m__login_main_login}>
                    <div className={styles.m__login__page__inner_with}>
                        <div>
                            <h2 className={styles.start__h2}>
                                <font>登录到您的帐户</font>
                            </h2>
                            
                            <div style={{height:"60px"}}></div>
                            <div className={styles.m__login_main_login_ad}>
                                <div style={{height:"20px"}}></div>
                                <h2 className={styles.start__h3}>
                                    <font>什么是新的
                                    </font>
                                </h2>
                                <div style={{height:"10px"}}></div>
                                <div className={styles.layout__media__center}>
                                    <a className={styles.t__em_link} href="">
                                        <h3 className={styles.start__new__design_title}>
                                            <font>使用Custom Bots粉碎您的号码
                                            </font>
                                        </h3>
                                    </a>    
                                </div>
                                
                                <div className={styles.layout__media}>
                                    <p className={styles.start__description_text}>
                                        <font>在几分钟内创建一个机器人，可以为更多的潜在客户提供资格，并为您提供全天候的会议。 </font>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.layout__media__ext}>
                            <div style={{height:"192px",width:"400px"}}></div>
                            
                            <form >
                                <EnterYourMobile size="large"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        
    </div>
    
);
