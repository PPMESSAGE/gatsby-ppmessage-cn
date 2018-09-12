import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";
import KeyFeatures from "../components/keyfeatures";

export default () =>{

    let _features = [
        {
            title: "访问统计分析",
            desc: "跟踪从市场投放关键词到用户发起会话询问的全流程数据，让您实时评估销售转化率和ROI",
            image: "https://marketing.intercomassets.com/assets/messages/segmentation-53f2b095305527a75a4082d62ae823fc29e4a09a3c34e1facc147b2046d1ec49.png"
        },
        {
            title: "浏览轨迹分析",
            desc: "自动展示访客浏览轨迹，记录客户主要活动",
            image: "https://marketing.intercomassets.com/assets/messages/outbound-dbf7ecfa4c3664f7174deb855194d0061d0f2112ddf8cc0243c6438c6880cb7c.png"
        },

        {
            title: "客户细分",
            desc: "基于客户属性和行为实施细分目标客户",
            image: "https://marketing.intercomassets.com/assets/messages/measurement-b13614c1ef0feae4aa3509d1fe5ee4b10fc8a489f10fa8ee9a02ca3a1ca93545.png"
        },

        {
            title: "客服主动邀请",
            desc: "客服人员根据用户的浏览情况和行为主动发起会话邀请、主动推荐。通过增加客服主动与用户接触的机会，提高营销的转化率",
            image: "https://marketing.intercomassets.com/assets/messages/integrations-c420a951ff2bb5ce602e9149567455760bea13a8f8246701593b577238096f75.png"
        },
        {
            title: "一键发送商品链接",
            desc: "用户针对某件商品进行咨询，只需点击确认键，客服就可以在工作台看到这件商品的具体信息，包括商品页的链接、图片、价格、商品介绍等",
            image: require("../images/50.png")
        },
        
        

    ]

    

    let _features1 = [
        {
            title: "自动获取和评估商机",
            desc: "PPMessage销售机器人可以主动与网站访客联系，获取销售团队将潜在客户转化为付费用户所需的详细信息，并评估其是否满足成为合格商机的条件。从而7X24小时为您源源不断的获取合格商机",
            image: "https://marketing.intercomassets.com/assets/messages/segmentation-53f2b095305527a75a4082d62ae823fc29e4a09a3c34e1facc147b2046d1ec49.png"
        },
        {
            title: "外发消息",
            desc: "自动或手动向目标客户发送应用内消息、邮件、短信、微信、语音，或自动提醒业务人员通过电话或视频与客户联系",
            image: "https://marketing.intercomassets.com/assets/messages/outbound-dbf7ecfa4c3664f7174deb855194d0061d0f2112ddf8cc0243c6438c6880cb7c.png"
        },

        {
            title: "测试和优化",
            desc: "A/B测试发送的消息内容，获取最佳发送效果，提高客户转化率",
            image: "https://marketing.intercomassets.com/assets/messages/measurement-b13614c1ef0feae4aa3509d1fe5ee4b10fc8a489f10fa8ee9a02ca3a1ca93545.png"
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
            image: require("../images/62.png")
        },
        {
            title: "可定制化工单系统",
            desc: "打通售前售后环节，工单分配、转派、变更、提醒、业务流和SLA随心定制",
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
            image:require("../images/65.png")
        },
        
        

    ]

    return(
        <div className={styles.heiti}>
            <div style={{height:'72px'}}></div>
            <div className={styles.container__narrower}>
                <div className={styles.g__row}>
                    
                    <div className={styles.g__c6}>
                        <div style={{height:"100px"}}></div>
                        <h1>电商解决方案</h1>
                        <div className={styles.sp__5}>
                            <h2 style={{fontSize:"36px",fontWeight:"150"}}>降低获客成本，提高客户粘性，促进重复销售
                            </h2>
                            <div style={{height:"10px"}}>
                            </div>
                            <h3 style={{color:'#888',fontWeight:"100"}}>PPMessage 提供从商机获取、客户互动和客户支持的客户全生命周期解决方案，助力您的业务发展
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
                            <img src={require("../images/61.png")} style={{maxWidth:"none"}} />
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
                        <h5 className={styles.f__center1}><font>通过网页主动消息、在线聊天快速获取更多商机；通过销售机器人实时评估商机质量并自动分配，提升商机转化率；通过一键发送商品链接和聊天组件内下单达成更多交易
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
                        <font>跨地域、多时区、多语言的全渠道智能客服解决方案</font>
                    </h3>
                    <div style={{height:"30px"}}></div>
                    <div className={styles.container__narrower}>
                        <h5 className={styles.f__center1}>
                            <font>
                                针对电商企业的用户，地域分散，业务多样的特点，PPMessage提供跨地域、多时区、多语言的全渠道智能客服解决方案，将呼叫中心与其他客服通道无缝集成，同时提供灵活的工单系统和智能客服机器人系统，快速解决客户问题，提高客户满意度
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
    )
}
