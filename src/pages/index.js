import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";
import KeyFeatures from "../components/keyfeatures";
import WorthCompany from "../components/worthcompany";
import Layout from "./layout";
import {Helmet} from "react-helmet";

export default () =>{

    let _features = [
        {
            title: "全渠道",
            desc: "网页、电话、邮件、社交媒体的各种客户对话消息集中接入",
            image: require("../images/呼叫中心的图.jpg") 
        },
        {
            title: "单一工作台界面",
            desc: "单一工作台界面统一处理，各种渠道交互无缝切换",
            image: require("../images/75.png")
        },

        

        {
            title: "可定制化工单系统",
            desc: "打通售前售后环节，工单分配、转派、变更、提醒、业务流和SLA随心定制",
            image: require("../images/86.png")
        },
        {
            title: "强大统计报表，完善数据分析",
            desc: "跨渠道通用报表机制，支持销售转化率，客户满意度、客户工作量、会话来源等多种报表类型，各项业务数据完美呈现",
            image: require("../images/50.png")
        },      
    ]
    
    let _features1 = [
        {
            title: "客户细分",
            desc: "基于客户属性和行为实施细分目标客户",
            image: require("../images/客户细分.png")
        },
        {
            title: "外发消息",
            desc: "自动或手动向目标客户发送应用内消息、邮件、短信、微信、语音，或自动提醒业务人员通过电话或视频与客户联系",
            image: require("../images/外发消息.png")
        },

        {
            title: "测试和优化",
            desc: "A/B测试发送的消息内容，获取最佳发送效果，提高客户转化率",
            image: require("../images/测试和优化.png")
        },

        {
            title: "APP 商店",
            desc: "提供与Salesforce，Google Meeting等第三方业务整合，扩展您的营销工具箱",
            image: require("../images/74.jpeg")
        },        
    ]

    let _features2 = [
        {
            title: "销售机器人",
            desc: "24/7随时获取、评估网站上的商机，无需代码定制，加快销售周期，提供超越人类极限的业务增长机会",
            image:require("../images/80.jpeg")
        },
        {
            title: "语音机器人",
            desc: "基于智能语音交互的人机融合平台，替代人工销售，延伸售后服务",
            image: require("../images/80.jpeg")
        },

        {
            title: "客服机器人",
            desc: "基于NLP， 365天不间断服务，高效率解决重复性问题，大幅降低人工客服成本",
            image: require("../images/79.png")
        },

        {
            title: "可定制化",
            desc: "快速设计生成满足您业务需要的机器人组群",
            image: require("../images/82.png")
        },
        
        

    ]

    let _features3 = [
        {
            title: "PPMessage流程生成器",
            desc: "业内独有的拖拽式流程设计器，为每一个客户快速生成适应其业务特点的消息流程",
            image: require("../images/82.png")
        },
        {
            title: "丰富的APP商店",
            desc: "根据业务需要随时增减功能模块，定制客户交互界面",
            image:require("../images/74.jpeg")
        },

        {
            title: "自定义字段和视图",
            desc: "根据业务特点随时自定义可检索可排序的数据字段及强大的自定义视图功能，迅速满足客户最低层面的定制化需求",
            image: require("../images/83.png")
        },

        {
            title: "功能强大的API接口",
            desc: "提供灵活的API接口和Webhooks，快速满足客户定制需求",
            image: require("../images/82.png")
        },
        
        

    ]

    

    return(
	    <Layout>
            <Helmet>
                <title>首页</title>
                <meta name="description" content="Index 首页" />
            </Helmet>
            
            <div className={styles.heiti}>
                <div style={{height:'72px'}}></div>
                <div className={styles.container__narrower}>
                    <div className={styles.g__row}>
                        
                        <div className={styles.g__c6}>
                            <div style={{height:"100px"}}></div>
                            <div className={styles.sp__5}>
                                <h2 style={{fontSize:"36px",fontWeight:"150"}}>获取，转化和留存客户的新方法
                                </h2>
                                <div style={{height:"10px"}}>
                                </div>
                                <h3 style={{color:'#888',fontWeight:"100"}}>跨数字化及语音渠道，将网页、电话、邮件、社交媒体和应用内对话转化为标准消息，并通过消息进行销售、营销和客户支持，打造卓越客户历程，促进企业成长
                                </h3>
                                <div style={{height:"20px"}}>            
                                </div>
                                
                                
                                
                                <EnterYourMobile size="middle" />
                                

                                <div style={{height:"20px"}}>            
                                </div>
                                <div className={styles.t__small}>
                                    <div className={styles.list__bulletinline}>
                                        <font style={{color:'#888'}}>免费试用 、 易于安装
                                        </font>        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.g__c6}>
                            <div>
                                <img src={require("../images/index.jpeg")} />
                            </div>
                        </div>
                    </div>  
                </div>
                <section>
                    <WorthCompany />
                </section>
                <section>
                    <div className={styles.index_200px}></div>
                    <div className={styles.container__narrower}>
                        <h3 className={styles.f__center}>
                            <font>完美的销售，营销和客服工具</font>
                        </h3>
                        <div style={{height:"30px"}}>
                        </div>
                        <div className={styles.g__row3}>
                            <div className={styles.g__row} style={{"justifyContent": "center"}}>
                                <div className={styles.g__c4}>            
                                    <div className={styles.u__flex}>
                                        <div className={styles.main1}>
                                            <div className={styles.sp__2}></div>
                                            <div className={styles.label}>
                                                <h3>获取和转化线索
                                                </h3>
                                                <font className={styles.ziti}> 通过与网站访客实时互动获取销售线索，通过AI工具评估和分配线索，通过全渠道自动化营销工具将线索转化为商机
                                                </font>
                                                <div style={{height:"15px"}}></div>
                                                <div>
                                                    <font>智能客服·营销自动化·语音机器人</font></div>
                                                <div style={{height:"10px"}}></div>
                                                <a href="/transform-customs" className={styles.ziti1}>了解更多
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
                                                <h3>培育和吸引客户
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
                                <div className={styles.g__c4}>
                                    <div className={styles.u__flex}>
                                        <div className={styles.main1}>                                                   <div className={styles.label}>
                                            <h3>支持并提高客户满意度
                                            </h3>
                                            <font className={styles.ziti}>云呼叫中心，客服机器人及与业务无缝集成的工单系统，在有效降低成本的同时更快的解决客户问题
                                            </font>
                                            <div style={{height:"15px"}}></div>
                                            <div><font>云呼叫中心·工单·客服机器人</font></div>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/conversion-businese" className={styles.ziti1}>了解更多
                                            </a>  
                                        </div>                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{height:"180px"}}></div>
                        
                    </div>
                </section>

                <section>
                    <div className={styles.container__narrower}>
                        <h3 className={styles.f__center}>
                            <font>单一页面管理所有客户互动，提高跨渠道的无缝客户体验</font>
                        </h3>
                        <div style={{height:"30px"}}></div>
                        <div className={styles.container__narrower}>
                            <h5 className={styles.f__center1}><font>网页、电话、邮件、社交媒体的客户对话集中到一个工作台界面处理，精准把握客户特征
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
                            <font>基于客户属性和行为发送实时个性化消息，驱动业务增长</font>
                        </h3>
                        <div style={{height:"30px"}}></div>
                        <div className={styles.container__narrower}>
                            <h5 className={styles.f__center1}>
                                <font>
                                    支持应用内消息、短信、邮件、微信、呼叫中心等多种营销渠道，实现多触点集中、交互管理
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
                            <font>从销售到客服的全业务链人工智能解决方案</font>
                        </h3>
                        <div style={{height:"30px"}}></div>
                        <div className={styles.container__narrower}>
                            <h5 className={styles.f__center1}>
                                <font>
                                    与业务深度整合的销售机器人、语音机器人和客服机器人，提高销售转化率和客户满意度
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


                

                <section>
                    <div style={{height:"10em"}}></div>
                    <div className={styles.container__narrower}>
                        <h3 className={styles.f__center}>
                            <font>独有的拖拽式流程设计器和APP Store,实现业务快速定制</font>
                        </h3>
                        <div style={{height:"30px"}}></div>
                        <div className={styles.container__narrower}>
                            <h5 className={styles.f__center1}><font>
                                PPMessage流程生成器、工具丰富的APP商店、自定义字段和视图和功能强大的API接口，可按客户要求快速生成符合客户业务特点的定制化解决方案
                            </font></h5>
                        </div>

                        <div style={{height:"80px"}}></div>
                        <div className={styles.tupian}>
                            <KeyFeatures rtl="true" features={_features3}>
                            </KeyFeatures>
                        </div>
                    </div>
                    <div className={styles.index_100px}></div>
                </section>
                
                <div className={styles.index_5em}></div>
            </div>
	    </Layout>
    )

}
