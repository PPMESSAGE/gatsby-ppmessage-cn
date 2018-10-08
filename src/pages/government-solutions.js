import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";
import KeyFeatures from "../components/keyfeatures";
import {Helmet} from "react-helmet";
import Layout from "./layout";
export default () =>{

    let _features = [
        {
            title: "群体细分",
            desc: "基于市民属性和行为实时细分市民组群",
            image: require("../images/92.png")
        },
        {
            title: "外发消息",
            desc: "自动或手动向市民发送应用内消息、邮件、短信、微信、语音，或自动提醒业务人员通过电话或视频与客户联系",
            image: require("../images/88.png")
        },

        {
            title: "测试和优化",
            desc: "A/B测试发送的消息内容，获取最佳发送效果，提高客户转化率",
            image: require("../images/测试和优化.png")
        },

    ]

    let _features2 = [
        {
            title: "全渠道",
            desc: "网页、电话、邮件、社交媒体的各种客户对话消息集中接入",
            image: require("../images/呼叫中心的图.jpg")
        },
        {
            title: "可定制化，可私有部署",
            desc: "根据业务需求快速定制并私有部署，保障信息安全",
            image: require("../images/82.png")
        },

        {
            title: "智能客服机器人",
            desc: "7X24小时无间断服务，回答准确率最高可达97%;强大的知识库体系；基于NLP的智能语音应答系统",
            image: require("../images/64.png")
        },

        {
            title: "通过工单实现自动化办公",
            desc: "根据SLA和业务规则的工单自动流转和进度自动提醒、督办和催办，整体提升服务质量",
            image:require("../images/86.png")
        },
        {
            title: "在线质检",
            desc: "分设质检标准和禁忌项，分类考核客服，提高市民满意度",
            image:require("../images/90.png")
        },
        
        

    ]

    return(
	    <Layout>
            <Helmet>
                <title>政府与事业单位解决方案</title>
                <meta name="description" content="Government and public sector solutions 政府与事业单位解决方案" />
            </Helmet>
            <div className={styles.heiti}>
                <div style={{height:'72px'}}></div>
                <div className={styles.container__narrower}>
                    <div className={styles.g__row}>
                        
                        <div className={styles.g__c6}>
                            <div style={{height:"100px"}}></div>
                            <h1>政府与事业单位解决方案</h1>
                            <div className={styles.sp__5}>
                                <h2 style={{fontSize:"36px",fontWeight:"150"}}>
                                    个性化批量处理人民群众的各类咨询
                                </h2>
                                <div style={{height:"10px"}}>
                                </div>
                                <h3 style={{color:'#888',fontWeight:"100"}}>
                                    可定制可私有部署的全渠道智能云客服和内部沟通解决方案，保护政务机关数据安全，为市民提供方便快捷的市民服务
                                </h3>
                                <div style={{height:"20px"}}>            
                                </div>
                                <EnterYourMobile size="middle"/>
                                <div style={{height:"15px"}}></div>
                                <div className={styles.t__small}>
                                    <div className={styles.list__bulletinline}>
                                        <font style={{color:'#888'}}>
                                            免费试用 · 易于安装 · 
                                        </font>        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.g__c6}>
                            <div>
                                <img src={require("../images/121.png")} />
                            </div>
                        </div>
                    </div>  
                </div>

                <section>
                    <div className={styles.container__narrower}>
                        <h3 className={styles.f__center}>
                            <font>通过各种渠道与市民互动</font>
                        </h3>
                        <div style={{height:"30px"}}></div>
                        <div className={styles.container__narrower}>
                            <h5 className={styles.f__center1}><font>
                                根据市民渠道偏好，通过应用内消息、智能语音、邮件、短信、微信等各种渠道向市民发送各类提示性消息，提高市民满意度
                            </font></h5>
                        </div>
                        <div style={{height:'80px'}}></div>
                        <div className={styles.tupian}>
                            <KeyFeatures features={_features}>
                            </KeyFeatures>
                        </div>
                    </div>      
                </section>

                
                <section>
                    <div style={{height:"10em"}}></div>
                    <div className={styles.container__narrower}>
                        <h3 className={styles.f__center}>
                            <font>基于人工智能的全渠道智能客服解决方案</font>
                        </h3>
                        <div style={{height:"30px"}}></div>
                        <div className={styles.container__narrower}>
                            <h5 className={styles.f__center1}>
                                <font>
                                    全面融合传统呼叫中心、微信公众平台、微博、邮件、App等新媒体，让公共服务更加便捷地直达用户
                                </font>
                            </h5>
                        </div>
                        <div style={{height:"80px"}}></div>
                        <div className={styles.tupian}>
                            <KeyFeatures rtl="false" features={_features2}>
                            </KeyFeatures>
                        </div>
                    </div>      
                </section>
                <div style={{height:"120px"}}></div>

            </div>
	    </Layout>
    )
}
