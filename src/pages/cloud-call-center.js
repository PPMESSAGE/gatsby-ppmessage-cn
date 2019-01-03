import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";
import Helmet from "react-helmet";
import Layout from "./layout";
import KeyFeatures_q from "../components/keyfeatures_q";
import Free from "../components/free_trial";

export default () =>{
    let _features = [
        {
            title: "全球化呼叫中心系统",
            desc: "跨地域、跨时区、多语言，支持语音通话跨地域转接，保障全球客服24小时在线",
            image: require("../images/138.png")
        },
    ]

    let _features1 = [
        {
            title: "多渠道接入，一站式响应服务",
            desc: "电话、网页、应用、邮件、社交媒体通过一个界面统一管理，客户通过各个渠道的访问信息统一检索",
            image: require("../images/127.png")
        },
    ]

    let _features2 = [
        {
            title: "业务快速定制",
            desc: "电话与其他渠道消息通过统一流程集中处理，不仅仅是IVR；通过流程及开发接口快速实现企业业务定制",
            image: require("../images/82.png")
        },
    ]

    let _features3 = [
        {
            title: "可扩展、大容量，性能稳定",
            desc: "支持万级并发呼叫，系统可用性99.99%；支持海量录音",
            image: require("../images/76.png")
        },
    ]
    let _features4 = [
        {
            title: "与人工智能无缝集合",
            desc: "智能语音交互，实时语音识别，自然语言处理，智能TTS，智能质检",
            image: require("../images/77.png")
        },
    ]

return(
	<Layout>
        <Helmet>
            <title>云呼叫中心</title>
            <meta charsets="UTF-8" />
            <meta name="description" content="PPMESSAGE 智能在线客服系统软件，20年行业深耕，为超百万家企业提供互联网客户服务、营销解决方案。与华为、腾讯、阿里巴巴、百度、今日头条达成战略合作。5G、人工智能、大数据、区块链、教育、金融、互联网、医疗、智能制造、旅游餐饮等行业领袖的选择。" />
            <meta name="keywords" content="在线客服，客服系统，在线客服系统，智能客服，云客服，网站在线客服，在线客服系统" />
            <meta name="title" content="云呼叫中心" />
            
        </Helmet>
        <div className={styles.heiti}>
            <div style={{height:"144px"}}></div>
            <div className={styles.container__narrower}>
                <div className={styles.g__row}>
                    <div className={styles.g__c6}>
                        <h1>云呼叫中心</h1>
                        <div className={styles.sp__5}>
                            <h2 style={{margin:'5rem 0rem 0rem 0rem'}}>全渠道跨国云呼叫中心解决方案
                            </h2>
                            <div style={{height:"10px"}}>
                            </div>
                            <h3 style={{color:'#888'}}><font className={styles.biaoti}>基于云计算的新一代呼叫中心，支持跨时区、跨地域、多语言分布式组网，真正All-in-One的客户体验与联络中心，系统安全可靠，部署方式灵活
                            </font>
                            </h3>
                            <div style={{height:"20px"}}>            
                            </div>
                            <div>
                                <EnterYourMobile size="middle"/>                            
                            </div>
                            <div className={styles.t__small}>
                                <div className={styles.list__bulletinline}>
                                    <div style={{height:"10px"}}></div>
                                    <Free />        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.g__c6}>
                        <div>
                            <img src={require("../images/165.png")} />
                        </div>
                    </div>
                </div>  
            </div>

            

            <section className={styles.section_o__no_bottom}>
                <div className={styles.container}>
                    <div className={styles.g__row}>

                        <div className={styles.cloud_call_center}>

                            <div className={styles.chuangjian} style={{margin:"22px",paddingRight:"0em"}}>
                                <a href="#quanqiuhua" className={styles.lianjie}>
                                    <div className={styles.t__h3}>
                                        <font>全球化</font>
                                    </div>
                                    <div className={styles.t__small_s1}>
                                        <font>跨地域、跨时区、多语言，支持语音通话跨地域转接，保障全球客服24小时在线</font>
                                    </div>
                                    <div className={styles.product__learn_more} style={{margin:"80px"}}>
                                        <span >
                                            <font className={styles.smallerbiaoti}>了解更多</font>
                                        </span>                  
                                    </div>                
                                </a>
                            </div>

                            <div className={styles.chuangjian} style={{margin:"22px 35px",paddingRight:"0em"}}>
                                <a href="#quanqudao" className={styles.lianjie}>
                                    <div style={{height:"10px"}}></div>
                                    <div className={styles.t__h3}>
                                        <font>全渠道</font>
                                    </div>
                                    <div className={styles.t__small_s1}>
                                        <font>电话、网页、应用、邮件、社交媒体通过一个界面统一管理，
                                            客户通过各个渠道的访问信息统一检索</font>
                                    </div>
                                    <div className={styles.product__learn_more}  style={{margin:"80px"}}>
                                        <span>
                                            <font className={styles.smallerbiaoti}>了解更多</font>
                                        </span>                  
                                    </div>                
                                </a>
                            </div>
                            <div className={styles.chuangjian} style={{margin:"22px 50px",paddingRight:"0em"}}>
                                <a href="#kedingzhi" className={styles.lianjie}>
                                    <div className={styles.t__h3}>
                                        <font>可定制</font>
                                    </div>
                                    <div className={styles.t__small_s1}>
                                        <font>电话与其他渠道消息通过统一流程集中处理，不仅仅是IVR
                                            通过流程及开发接口快速实现企业业务定制
                                        </font>
                                    </div>
                                    <div className={styles.product__learn_more}  style={{margin:"80px"}}>
                                        <span>
                                            <font className={styles.smallerbiaoti}>了解更多</font>
                                        </span>                  
                                    </div>                
                                </a>
                            </div>


                            <div className={styles.chuangjian} style={{margin:"22px 50px",paddingRight:"0em"}}>
                                <a href="#darongliang" className={styles.lianjie}>
                                    <div className={styles.t__h3}>
                                        <font>大容量</font>
                                    </div>
                                    <div className={styles.t__small_s1}>
                                        <font>支持万级并发呼叫
                                            系统可用性99.99%
                                            海量录音及实时识别
                                        </font>
                                    </div>
                                    <div className={styles.product__learn_more}  style={{margin:"80px"}}>
                                        <span>
                                            <font className={styles.smallerbiaoti}>了解更多</font>
                                        </span>                  
                                    </div>                
                                </a>
                            </div>
                            <div className={styles.chuangjian} style={{margin:"22px",paddingRight:"0em"}}>
                                <a href="#rengongzhineng" className={styles.lianjie}>
                                    <div className={styles.t__h3}>
                                        <font>人工智能</font>
                                    </div>
                                    <div className={styles.t__small_s1}>
                                        <font>自动语音识别
                                            多轮对话
                                            智能质检
                                        </font>
                                    </div>
                                    <div className={styles.product__learn_more}  style={{margin:"80px"}}>
                                        <span>
                                            <font className={styles.smallerbiaoti}>了解更多</font>
                                        </span>                  
                                    </div>                
                                </a>
                            </div>
                            <a name="quanqiuhua"></a>
                        </div>
                    </div>
                </div>
            </section>


            <section >
                <div className={styles.container_z}>
                    <KeyFeatures_q rtl="true" features={_features}>
                    </KeyFeatures_q>
                </div>
                <a name="quanqudao"></a>
            </section>

            <section >
                <div className={styles.container_z}>
                    <KeyFeatures_q rtl="false" features={_features1}>
                    </KeyFeatures_q>
                </div>
                <a name="kedingzhi"></a>
            </section>
            <section >
                <div className={styles.container_z} >
                    <KeyFeatures_q rtl="true" features={_features2}>
                    </KeyFeatures_q>
                </div>
                <a name="darongliang"></a>
            </section>
            

            <section >
                <div className={styles.container_z}>
                    <KeyFeatures_q rtl="false" features={_features3}>
                    </KeyFeatures_q>
                </div>
            </section>

            <section>
                <a name="rengongzhineng"></a>
                <div className={styles.container_z} style={{maxWidth:"1300px"}}>
                    <KeyFeatures_q rtl="true" features={_features4}>
                    </KeyFeatures_q>                        
                </div>                  
            </section>
        </div>
	</Layout>
);
}
