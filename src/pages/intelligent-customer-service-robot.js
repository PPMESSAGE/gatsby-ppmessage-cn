import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";


export default () => (

    <div>
        <div style={{height:"72px"}}></div>
        <div className={styles.container}>
            
        </div>
        <div className={styles.container}>
            <div className={styles.bg__light} style={{backgroundColor:"white"}}>
                
                
                <div className={styles.u__zfix}>
                    <h1 className={styles.t__h1}>
                        人机融合，助力客户服务创新升级
                    </h1>
                    <div style={{height:"10px"}}></div>
                    <h2 className={styles.t__h3}>
                        <font>
                            人机融合，助力客户服务创新升级
                        </font>
                    </h2>                    
                    <div className={styles.t__small}>
                        免费试用14天 易于安装
                    </div>
                    <div style={{height:"20px"}}></div>
                    <div>
                        <img src={require("../images/robot.jpg") } />
                    </div>
                </div>                
            </div>
        </div>

        <section >
            
            <div className={styles.container_z} style={{textAlign:"center"}}>
                <div className={styles.g__row}>
                    <div className={styles.g__c6}>
                        <div style={{height:"50px"}}></div>
                        <h3 className={styles.t__h2}>
                            <font>
                                客户意图预判

                            </font>
                        </h3>
                        <div style={{height:"10px"}}></div>
                        <div className={styles.max__600}>
                            <font className={styles.tigongzhichi}>
                                全面抓取并分析客户行为数据（浏览轨迹、历史订单、会话记录、身份信息等），基于客户画像、行业知识构建以及精准的语义分析，让机器人迅速准确理解客户意图，为后续的会话交互提供支撑
                            </font>
                        </div>
                    </div>
                    
                    <div className={styles.g__c6}>
                        <div className={styles.js__gallery}>
                            <div className={styles.u__inline}>
                                <div className={styles.gallery}>
                                    <div className={styles.gallery__img}>
                                        <img width="300" src={require("../images/robot.jpg")} />
                                        
                                    </div>                    
                                </div>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>           
        </section>

        <section className={styles.section}>
            
            <div className={styles.container_z}>
                <div className={styles.g__row_center}>
                    <div className={styles.g__c6}>
                        <img width="280" src={require("../images/robot.jpg")}  />
                        
                    </div>
                    <div className={styles.g__c5_z}>

                        
                        <h3 className={styles.t__h2}>
                            <font>
                                多轮会话
                            </font>
                        </h3>
                        <div style={{height:"10px"}}></div>
                        
                        <div>
                            <font className={styles.tigongzhichi}>
                                机器人基于上下文理解与客户进行分步式的自然语言交互沟通，可以通过主动发问、关键信息理解并提取，一步步聚焦客户的实际需求，并最终推动或完成业务任务的执行操作
                            </font>
                            
                        </div>
                        
                    </div>          
                </div>
                
            </div>
        </section>

        
    </div>
);


