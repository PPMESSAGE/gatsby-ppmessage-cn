import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";

import Layout from "./layout";

export default () => (

	<Layout>
    <div className={styles.heiti}>
        <div style={{height:"144px"}}></div>
        <div className={styles.container__narrower}>
            <div className={styles.g__row}>
                <div className={styles.g__c6}>
                    <h1>智能客服机器人</h1>
                    <div className={styles.sp__5}>
                        <h2 style={{margin:'5rem 0rem 0rem 0rem'}}>
                            人机融合，助力客户服务创新升级
                        </h2>
                        <div style={{height:"10px"}}>
                        </div>
                        <h3 style={{color:'#888'}}><font className={styles.biaoti}>在您的网站，移动应用，电子邮件和社交网络中分配，回复和关闭对话</font>
                        </h3>
                        <div style={{height:"20px"}}>            
                        </div>
                        <div>
                            <EnterYourMobile size="middle"/>                            
                        </div>
                        <div className={styles.t__small}>
                            <div className={styles.list__bulletinline}>
                                <font style={{color:'#888'}}>免费试用 · 易于安装 · 
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


        
        <div className={styles.detail_new}>
            <div className={styles.detail_new_s}>
                <h2 className={styles.h2_s}>
                    以问题解决为向导，服务任务一站直达 
                </h2>
                <div className={styles.clear}>
                    <div className={styles.detail_info}>
                        <div className={styles.triangle_right}></div>
                        <div className={styles.robot_logo}></div>
                        <h6 className={styles.h6_s}>
                            <b className={styles.b}>
                                意图预判 
                            </b>
                        </h6>
                        <ul className={styles.robot_ul}>
                            <li className={styles.active_li}>                                                 客户信息全面获取
                                <div className={styles.detail_right}>
                                    全面抓取并分析客户行为数据(浏览轨迹、历史订单、会话记录、身份信息等),让客服机器人第一时间了解客户
                                </div>
                            </li>
                            <li className={styles.active_li}>                                                 客户意图快速预判
                                <div className={styles.detail_right}>
                                    基于客户画像、行业知识构建以及精准的语义分析，让机器人迅速准确理解客户意图，为后续的会话交互提供支撑
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.detail_info}>

                        <div className={styles.triangle_right}></div>
                        <div className={styles.robot_logo_1}></div>
                        <h6 className={styles.h6_s}>
                            <b className={styles.b}>
                                多轮会话
                            </b>
                        </h6>
                        <ul className={styles.robot_ul}>
                            <li className={styles.active_li}>                                                 精准的上下文理解能力
                                <div className={styles.detail_right}>
                                    准确的关键信息识别并提取
                                    <br/>
                                    上下文逻辑理解
                                    <br/>
                                    企业动态业务知识库信息的提取／管理／反馈
                                    <br/>
                                    行业知识图谱，预构建行业业务场景
                                </div>
                            </li>
                            <li className={styles.active_li}>                                                 敏捷的主动发问机制
                                <div className={styles.detail_right}>
                                    实体提取深层意图理解<br/>
                                    主动分步式发问
                                </div>
                            </li>
                        </ul>
                        
                    </div>
                    <div className={styles.detail_info}>

                        <div className={styles.robot_logo_2}></div>
                        <h6 className={styles.h6_s}>
                            <b className={styles.b}>
                                任务直达
                            </b>
                        </h6>
                        <ul className={styles.robot_ul}>
                            <li className={styles.active_li}>                                                 完成客户信息查询／采集
                                <div className={styles.detail_right}>
                                    提取企业业务动态知识库信息，提供基于客户身份或其他企业自定义核心要素的查询反馈、信息采集、营销推荐
                                </div>
                            </li>
                            <li className={styles.active_li}>                                                 业务执行操作
                                <div className={styles.detail_right}>
                                    全面覆盖咨询、推荐、查询等各类任务指令场景，在自然会话中跨场景完成任务，根据业务需求提供针对性的解决方案
                                </div>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            
        </div>


        
    </div>
	</Layout>
);


