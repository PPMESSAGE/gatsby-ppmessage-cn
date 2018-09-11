import React from "react";
import styles from "./about-us.module.css";

export default () => (
    <div className={styles.heiti}>
        <div className={styles.m1_s}>
            <div style={{height:"80px"}}></div>
            <div className={styles.h1}>
                <font>教育培训解决方案</font>                                
            </div>
            <div className={styles.small}>
                <font>越来越激烈的教育培训市场竞争，让高额的线上广告投放成为获客关键。然而，高市场投放吸引流量仅仅是第一步，如何不只是被动地等待客户在落地页面留下信息，而是主动地促成注册付费的转化是每个企业都在思考的问题。PPMessage 结合教育培训行业特点，开发了从教育商机获取、客户互动和客户支持的客户全生命周期解决方案，不仅可以让您提升线索转化效率，而且能增强客户粘性，提高客户满意度。

                </font>
            </div>
            <div className={styles.t__h2}>
                <font>商机获取
                </font>
            </div>

            <div className={styles.small}>
                <font>
                    <font style={{fontWeight:"bold"}}>访问统计分析。</font>
                    PPMessage提供全面的用户浏览信息的统计及分析数据，可以跟踪从市场投放关键词到用户发起会话询问的全流程数据，让您实时评估销售转化率和ROI。
                </font>
            </div>

            
            <div className={styles.small}>
                <font>
                    <font style={{fontWeight:"bold"}}>浏览轨迹分析。</font>企业在需要统计的站点加入PPMessage客服的统计代码，PPMessage客服后台就可以抓取到用户的全部浏览轨迹，这些浏览轨迹在客服接待的时候，自动展示给相应的客服，从而让客服提供更加个性化的服务。
                </font>
            </div>


            <div style={{display:"flex"}}>
                <div className={styles.small_s}>
                    <font>
                        <font style={{fontWeight:"bold"}}>自动获取和评估商机。</font>
                        PPMessage销售机器人可以主动与网站访客联系，获取销售团队将潜在客户转化为付费用户所需的详细信息，并评估其是否满足成为合格商机的条件。从而7X24小时为您源源不断的获取合格商机。


                    </font>
                </div>
                <div className={styles.small_s1}>
                    <img src={require("../images/44.png")}  />
                </div>
            </div>
            <div className={styles.small}>
                <font>
                    <font style={{fontWeight:"bold"}}>客服主动邀请。</font>
                    用户在浏览企业的站点时，客服人员可以实时看到用户的访问情况，并且根据用户的浏览情况和行为主动发起会话邀请、主动推荐。通过增加客服主动与用户接触的机会，大大提高营销的转化率。
                </font>
            </div>

            <div className={styles.small}>
                <font>
                    <font style={{fontWeight:"bold"}}>全渠道售前接待。</font>售前客服保存完用户信息之后，会直接流转给销售人员。
                    <br />方式为分两种，方式一：如果企业使用了自己的CRM系统，则创建的客户信息可以通过接口的方式推送到企业的系统中，生成数据之后企业可以自动分配给相关的销售人员；
                    <br />方式二：如果企业没有自己的CRM系统，则PPMessage客服提供功能全面且支持多项自定义设置的客户中心，客户的完整信息可以存在PPMessage的系统中，并可以再自定义规则进行有机分配。

                    
                </font>
            </div>

            <div className={styles.small}>
                <font>
                    <font style={{fontWeight:"bold"}}>邮件、短信、微信营销。</font>
                    直观分析网站客服对话有效率和转化率。网站每日推广成本自定义，智能计算出每日ROI（投入产出比）,方便您快速评估营销的效率和效果。
                </font>
            </div>
            <div>
                <img src={require("../images/45.png")} />
            </div>

            <div className={styles.small}>
                <font>
                    <font style={{fontWeight:"bold"}}>   </font>
                    
                </font>
            </div>

            
        </div>

    </div>
);
