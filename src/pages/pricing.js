import React from "react";
import styles from "./pricing.module.css";



export default () => (
    <div>
        <div style={{height:"72px"}}></div>
        <section className={styles.js__pricing_page}>
            <div classNam={styles.container}>
                <div style={{height:"50px"}}></div>
                <div className={styles.t__h1}>
                    <font>只为您需要的东西付费</font>
                </div>
                <div className={styles.t__h3_center}>
                    <font>我们的三种产品在一个地方协同工作。</font>
                    <font>从一个或多个开始。</font>
                </div>
                <div style={{height:"50px"}}></div>
                <div className={styles.g__row_h_center}>
                    <div className={styles.g__c4}>
                        <a  href=""  className={styles.c__black}>
                            <div className={styles.t__h3}>
                                <font>
                                    消息
                                </font>
                            </div>
                            <div className={styles.t__small}>
                                <font>
                                    每月49美元起
                                </font>
                            </div>
                            <div style={{height:"20px"}}></div>
                            <div>
                                <font>
                                    向潜在客户和客户发送有针对性的电子邮件，应用内消息和推送消息 
                                </font>
                            </div>
                            <div className={styles.u__inline_block}>
                                <span className={styles.link__arrow}>
                                    <font>学到更多</font>
                                    
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
);

