import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";
import KeyFeatures from "../components/keyfeatures";
import {Helmet} from "react-helmet";
import Layout from "./layout";
export default () =>{

    let _features = [
        {
            title: "访客信息分析",
            desc: "跟踪从市场投放关键词到用户发起会话询问的全流程数据，实时评估销售转化率和ROI；自动展示访客浏览轨迹，记录客户主要活动",
            image: require("../images/87.png")
        },
        {
            title: "自动获取和评估商机",
            desc: "PPMessage销售机器人主动与网站访客联系，7X24小时根据设定条件获取合格商机",
            image: require("../images/80.jpeg")
        },

        {
            title: "客服主动邀请",
            desc: "客服人员根据用户的浏览情况和行为主动发起会话邀请，通过互动，提高营销的转化率",
            image: require("../images/88.png")
        },

        {
            title: "智能电销、邮件、短信、微信营销",
            desc: "规避轰炸式营销陷阱，根据用户的属性和行为在特定时点向用户发送个性化邮件、短信和微信消息或进行智能电销（自动外呼和语音机器人），保证企业口碑的同时提升销售转化",
            image: require("../images/80.jpeg")
        },
        
        

    ]

    

    let _features1 = [
        {
            title: "客户细分",
            desc: "基于客户属性和行为实施细分目标客户",
            image: require("../images/92.png")
        },
        {
            title: "外发消息",
            desc: "规避轰炸式营销陷阱，自动或手动向目标客户发送应用内消息、邮件、短信、微信、语音，或自动提醒业务人员通过电话或视频与客户联系",
            image: require("../images/88.png")
        },

        {
            title: "测试和优化",
            desc: "A/B测试发送的消息内容，获取最佳发送效果，提高客户转化率",
            image: require("../images/测试和优化.png")
        },

        {
            title: "APP 商店",
            desc: "提供与Salesforce，Google Meeting等第三方业务整合，扩展您的营销工具箱",
            image: "https://marketing.intercomassets.com/assets/messages/integrations-c420a951ff2bb5ce602e9149567455760bea13a8f8246701593b577238096f75.png"
        },        
    ]

    let _features2 = [
        {
            title: "全渠道",
            desc: "网页、电话、邮件、社交媒体的各种客户对话消息集中接入",
            image: require("../images/呼叫中心的图.jpg")
        },
        {
            title: "可定制化挂号系统",
            desc: "打通售前售后环节，病人挂号分配、转派、变更、提醒、业务流和SLA随心定制",
            image: require("../images/63.png")
        },

        {
            title: "智能客服机器人",
            desc: "7X24小时无间断服务，回答准确率最高可达97%;采用自然语言方式添加知识库，知识的添加和维护更加简单便捷",
            image: require("../images/64.png")
        },

        {
            title: "强大统计报表，完善数据分析",
            desc: "跨渠道通用报表机制，支持销售转化率，客户满意度、客户工作量、会话来源等多种报表类型，各项业务数据完美呈现",
            image:require("../images/50.png")
        },
        {
            title: "在线质检",
            desc: "分设质检标准和禁忌项，分类考核客服，提高患者满意度",
            image:require("../images/65.png")
        },
        
        

    ]

    return(
	    <Layout>
            <Helmet>
                <title>医疗健康解决方案</title>
                <meta name="description" content="Medical health solutions 医疗健康解决方案" />
            </Helmet>
            <div className={styles.heiti}>
                <div style={{height:'72px'}}></div>
                <div className={styles.container__narrower}>
                    <div className={styles.g__row}>
                        
                        <div className={styles.g__c6}>
                            <div style={{height:"100px"}}></div>
                            <h1>医疗健康解决方案</h1>
                            <div className={styles.sp__5}>
                                <h2 style={{fontSize:"36px",fontWeight:"150"}}>
                                    商机获取、医患互动和病患支持的多渠道智能分诊和医患管理平台
                                </h2>
                                <div style={{height:"10px"}}>
                                </div>
                                <h3 style={{color:'#888',fontWeight:"100"}}>
                                    提供从商机获取、客户互动和客户支持的客户全生命周期解决方案，大幅降低获客成本和提升客户满意度
                                </h3>
                                <div style={{height:"20px"}}>            
                                </div>
                                <EnterYourMobile size="middle"/>
                                <div style={{height:"15px"}}></div>
                                <div className={styles.mobile_display}>

                                    <div className={styles.t__small}>
                                        <div className={styles.list__bulletinline}>
                                            <font style={{color:'#888'}}>
                                                免费试用 · 易于安装 · 
                                            </font>        
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className={styles.g__c6}>
                                <div>
                                    <img src={require("../images/118.png")}
                                    />
                                </div>
                            </div>
                        </div>  
                    </div>

                    <section>
                        <div className={styles.container__narrower}>
                            <h3 className={styles.f__center}>
                                <font>获取更多商机并达成更多交易</font>
                            </h3>
                            <div style={{height:"30px"}}></div>
                            <div className={styles.container__narrower}>
                                <h5 className={styles.f__center1}>
                                    <font>
                                        通过网页主动消息、在线聊天，智能电销，邮件、短信、微信营销快速获取更多商机；通过销售机器人实时评估商机质量并自动分配，提升商机转化率
                                    </font>
                                </h5>
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
                                <font>将更多注册用户转变为活跃的付费客户</font>
                            </h3>
                            <div style={{height:"30px"}}></div>
                            <div className={styles.container__narrower}>
                                <h5 className={styles.f__center1}>
                                    <font>
                                        根据用户渠道偏好，通过应用内消息、智能语音、邮件、短信、微信等各种渠道向目标用户发送有针对性的消息，培育和激活用户，通过用户重复购买率
                                    </font>
                                </h5>
                            </div>
                            <div style={{height:"80px"}}></div>
                            <div className={styles.tupian}>
                                <KeyFeatures rtl="true" features={_features1}>
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
                                        提供全渠道智能客服解决方案，将可全球分布式组网的大容量呼叫中心与其他客服通道无缝集成，提供灵活的工单和智能机器人系统，快速解决病患问题，提高病患满意度
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

