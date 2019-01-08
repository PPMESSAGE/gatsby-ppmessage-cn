import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";
import KeyFeatures from "../components/keyfeatures";
import {Helmet} from "react-helmet";

import Layout from "./layout";

export default () => {

    let _features = [
        {
            title: "分割",
            desc: "根据行为创建实时细分并根据消息定位合适的人员",
            image: "https://marketing.intercomassets.com/assets/messages/segmentation-53f2b095305527a75a4082d62ae823fc29e4a09a3c34e1facc147b2046d1ec49.png"
        },
        {
            title: "出站消息",
            desc: "向用户发送一次性和自动发送的电子邮件，推送和应用内消息",
            image: "https://marketing.intercomassets.com/assets/messages/outbound-dbf7ecfa4c3664f7174deb855194d0061d0f2112ddf8cc0243c6438c6880cb7c.png"
        },

        {
            title: "测量和优化",
            desc: "查看消息和测试转化的性能来改善结果",
            image: "https://marketing.intercomassets.com/assets/messages/measurement-b13614c1ef0feae4aa3509d1fe5ee4b10fc8a489f10fa8ee9a02ca3a1ca93545.png"
        },

        {
            title: "集成",
            desc: "使用其他工具进行连接内部通信",
            image: "https://marketing.intercomassets.com/assets/messages/integrations-c420a951ff2bb5ce602e9149567455760bea13a8f8246701593b577238096f75.png"
        },
        

    ]


    return (
	    <Layout>

            <Helmet>
                <title>获取和转化销售线索-PPMESSAGE-新一代智能全渠道在线客服系统_网站客服系统</title>
                <meta charsets="UTF-8" />
                <meta name="description" content="PPMESSAGE是业界领先的新一代全渠道在线客服系统，通过在适当的时间向合适的人发送有针对性的自动消息或进行自动语音外呼快速获取商机，并通过AI工具评估和分配商机，提高客户转化率" />
                <meta name="keywords" content="营销自动化，获取和转化商机，在线客服系统，网站客服系统" />
                
            </Helmet>

            <div className={styles.heiti}>
                <div style={{height:'72px'}}></div>
                <div className={styles.container__narrower}>
                    <div className={styles.g__row}>
                        <div className={styles.g__c6}>
                            <div className={styles.sp__5}>
                                <h2 style={{fontSize:"36px"}}>在适当的时间向适当的人发送有针对性的消息
                                </h2>
                                <div style={{height:"10px"}}>
                                </div>
                                <h3 style={{color:'#888'}}>鼓励潜在客户和用户针对时间或行为触发的有针对性的电子邮件，推送和应用内消息采取措施
                                </h3>
                                <div style={{height:"20px"}}>            
                                </div>
                                <EnterYourMobile size="middle"/> 
                                
                                <div>
                                </div>
                                <div className={styles.t__small}>
                                    <div className={styles.list__bulletinline}>
                                        <font style={{color:'#888'}}>免费试用 · 易于安装 · 随时取消
                                        </font>        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.g__c6}>
                            <div>
                                <img src="https://marketing.intercomassets.com/assets/messages/hero-2x-bd17b6cb028a4f0ef9e6496477d10216acf42cbf5675488121ad90fc12fe126e.png#735" />
                            </div>
                        </div>
                    </div>  
                </div>
                <section className={styles.section} style={{height:"750px"}}>
                    <div className={styles.container__narrower}>
                        <KeyFeatures features={_features} />
                    </div>
                </section>
                
                <section className={styles.section}>
                    <div className={styles.container__narrower}>
                        <div className={styles.g__row3}>
                            <div className={styles.g__row_s}>
                                <div className={styles.g__c4}>            
                                    <div className={styles.u__flex}>
                                        <div className={styles.main1}>
                                            <div className={styles.sp__2}></div>
                                            <div className={styles.label}>
                                                <h3>获取和转化商机
                                                </h3>
                                                <font className={styles.ziti}> 使用营销自动化工具和智能外呼获取客户，通过AI工具评估和分配商机，提高客户转化率
                                                </font>
                                                <div style={{height:"15px"}}></div>
                                                <div>
                                                    <font>智能客服·营销自动化·语音机器人</font></div>
                                                <div style={{height:"10px"}}></div>
                                                <a href="/conversion-businese" className={styles.ziti1}>了解更多
                                                </a>  
                                            </div>                                
                                        </div>              
                                    </div>  
                                </div>
                                <div className={styles.g__c4}>
                                    <div className={styles.u__flex}>
                                        <div className={styles.main1}>
                                            <div className={styles.sp__2}></div>
                                            <div className={styles.label}>
                                                <h3>引导和吸引客户
                                                </h3>
                                                <font className={styles.ziti}> 发送有针对性的电子邮件，短信，应用内推送消息和智能语音将更多注册用户转化为付费用户
                                                </font>
                                                <div style={{height:"15px"}}></div>
                                                <div><font>营销自动化·智能语音机器人</font></div>
                                                <div style={{height:"10px"}}></div>
                                                <a href="/guide-attract-customers" className={styles.ziti1}>了解更多
                                                </a>  
                                            </div>                                
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.g__c4_s}>
                                    <div className={styles.sp__left_3}>
                                        <div className={styles.t__h2__40}>
                                            <font>消息为这些用例提供支持
                                            </font>
                                        </div>
                                        <div className={styles.c__black}>
                                            <font>
                                                PPMESSAGE 提供3种产品，可以单独使用，也可        以组合在一起，满足您公司的需求。</font>
                                        </div>
                                    </div>
                                </div>
                            </div>                    
                        </div>
                    </div>  
                </section>

                <section className={styles.section}>

                    <div className={styles.container__1300}>
                        <img width="256" src="https://marketing.intercomassets.com/assets/messages/bg-4-2x-7aae9864ce5a7fc7a1acc3e899f505c0012be594f0aa06f754aeefe6b9f9a263.png#256" className={styles.messages__bg_4} />
                        <div className={styles.g__c6}>
                            <img  src="https://marketing.intercomassets.com/assets/messages/bg-3-2x-2ce01a8913ab52f75369e4e6491fc3120f77593e8d0ac4d0f9fa7399ef10408c.png#275"width="374" className={styles.messages__bg_3} />
                            <img src="https://marketing.intercomassets.com/assets/homepage/v2/visual-2-8b19526e56c6b81485f309ad0656821963047f3eeda17b11c2427f508ee2849a.png"   className={styles.homepage__customers__swiggle__top__right} width="156" />
                            <div className={styles.device__grey}>
                                <div className={styles.t__h2}>
                                    <font>"PPMESSAGE 提供了有关如何最好地向客户发送消息并改善其体验的见解。"
                                    </font>
                                    
                                    <div style={{height:'20px'}}></div>
                                    <img src="http://www.yazhoufangchan.cn/wp-content/uploads/2016/06/YaZhou-Property-logo_s1-1.png" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.g__c5}>
                            <div className={styles.g__row}>
                                <div className={styles.t__h3}>
                                    <font>超过25,000家公司使用 PPMESSAGE 来吸引客户
                                    </font>
                                </div>
                                
                                <div className={styles.g__c6}>
                                    <div style={{height:"40px"}}></div>
                                    <img width="180px" src="https://upload-images.jianshu.io/upload_images/12406336-ee059aa29b7ec4f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                    <div style={{height:'1px'}}></div>
                                    <div className={styles.t__small}>
                                        <font color="#888">通过及时的应用内消息实现92％的转化率
                                        </font>
                                    </div>
                                </div>
                                <div className={styles.g__c6}>
                                    <img width="80px" src="https://upload-images.jianshu.io/upload_images/12406336-996dc08a5e38ee72.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                    <div style={{height:'1px'}}></div>
                                    <div className={styles.t__small}>
                                        <font color="#888">消息参与度增加2.5倍
                                        </font>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
	    </Layout>
    );
}
