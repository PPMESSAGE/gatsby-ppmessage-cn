import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";
import {Helmet} from "react-helmet";
import KeyFeatures_q from "../components/keyfeatures_q"
import Layout from "./layout";

export default () => {

    let _features = [
        {
            title: "完整归档，强力支撑企业决策",
            desc: "工单从最开始创建到已解决已关闭，期间发生的所有操作、变更、转派、提醒事件全纪录方便查询和追责，了解客户服务处理全进展，保证企业业务稳定",
            image: require("../images/101.png")
        },
    ]

    let _features1 = [
        {
            title: "打通售前售后环节，跨部门无缝流转",
            desc: "工单的使用场景不再局限于客服内部，可以一键将工单高效流转到其他部门。企业内其他业务部门也能通过发起工单来进行跨部门的协作沟通",
            image: require("../images/102.png")
        },
    ]

    let _features2 = [
        {
            title: "可定制的工单自动化流程",
            desc: "根据您的企业业务特性快速生成定制化工单流程，支持多种自定义字段和无限层级工单分类，自动将工单分配给指定的部门或员工，让合适的人做合适的事",
            image:require("../images/103.png")
        },
    ]

    let _features3 = [
        {
            title: "多项SLA监控",
            desc: "事有轻重缓急，SLA服务目标为您特定的客户群体或者特定情形的工单设定服务目标，，保障重要的事情优先得到处理，提高企业运营质量，极大程度的提高客户满意度",
            image:require("../images/104.png")
        },
    ]

    let _features4 = [
        {
            title: "海量信息，快速检索和分类",
            desc: "用户能够按照工单标题、工单发起人、工单受理人、工单创建时间等多维度的搜索条件查询工单。支持工单无限层级分类，快速形成知识库。支持数据导出服务，以达到信息价值最大化利用",
            image:require("../images/105.png")
        },
    ]

    
    return(
	    <Layout>
            <Helmet>
                <title>工单系统</title>
                <meta name="description" content="The work order system 工单系统" />
            </Helmet>
            
            <div className={styles.heiti}>
                <div style={{height:`144px`}}></div>
                <div className={styles.container__narrower}>
                    <div className={styles.g__row} >
                        <div className={styles.g__c6}>
                            <h1>工单系统</h1>
                            <div className={styles.sp__5}>
                                <h2 style={{margin:'5rem 0rem 0rem 0rem',fontSize:"36px"}}>新一代全渠道工单系统
                                </h2>
                                <div style={{height:"10px"}}>
                                </div>
                                <h3 style={{color:'#888'}}><font className={styles.biaoti}>打通售前售后环节，根据网页、邮件、电话和社交媒体等各种渠道的客户咨询消息创建工单，工单可自动分配、转派、变更、提醒和归档，业务流程和SLA随心定制</font>
                                </h3>
                                <div style={{height:"20px"}}>            
                                </div>
                                <EnterYourMobile size="middle" />                                            <div className={styles.t__small}>
                                    <div style={{height:"15px"}}></div>
                                    <div className={styles.list__bulletinline}>
                                        <font style={{color:'#888'}}>免费试用 · 易于安装
                                        </font>        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.g__c6}>
                            <div>
                                <img src={require("../images/164.png")} />
                            </div>
                        </div>
                    </div>  
                </div>

                <section className={styles.section}>
                    <div className={styles.container_z}>
                        <KeyFeatures_q rtl="false" features={_features}>
                        </KeyFeatures_q>
                    </div>
                </section>



                <section className={styles.section}>
                    <div className={styles.container_z}>
                        <KeyFeatures_q rtl="true" features={_features1}>
                        </KeyFeatures_q>
                    </div>
                </section>
                <section >            
                    <div className={styles.container_z}>
                        <KeyFeatures_q rtl="false" features={_features2}>
                        </KeyFeatures_q>
                    </div>           
                </section>
 
                <section>                    
                    <div className={styles.container_z} >
                        <KeyFeatures_q rtl="true" features={_features3}>
                        </KeyFeatures_q>
                    </div>           
                </section>               
                <section className={styles.section}>
                    <div className={styles.container_z}>
                        <KeyFeatures_q rtl="false" features={_features4}>
                        </KeyFeatures_q>
                    </div>
                </section>
                
            </div>
	    </Layout>
    );
}
