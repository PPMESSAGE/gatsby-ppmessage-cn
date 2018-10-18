import React from "react";
import EnterYourMobile from "../components/enteryourmobile";
import styles from "./pricing.module.css";
import FeatherModal from "../components/feathermodal";
import Layout from "./layout";
import ReactTooltip from 'react-tooltip';
import TabsControl from "../components/tabscontrol";
import {Helmet} from "react-helmet"; 
export default () =>(
	<Layout>
        <Helmet>
            <title>ppmessage-upgrade-notes</title>
            <meta name="description" content="ppmessage-upgrade-notes" />
        </Helmet>
        <div className={styles.heiti}>
            <div style={{height:"72px"}}></div>
            <div className={styles.ppmessage1}>
                <div className={styles.ppmessage2}>
                    <p>尊敬的用户:</p>
                    <p>您好,</p>
                    <div>
                        经过研发团队的艰苦努力，PPMessage 系统已经面目一新，智能客服、工单系统、呼叫中心等多款产品均已跻身国内前列。为了给用户提供更卓越的产品和更可靠的服务，经我司慎重研究决定，PPMessage将终止提供免费产品，现收费版本定价模式将进行重大变更。
                    </div>
                    <div style={{height:"15px"}}></div>
                    <div>
                        自2018年11月1日起，新注册用户及续费的老用户将采取按年收费方式，非定制版分为标准版、增强版和企业版三个版本。其中:                    
                    </div>
                    <div style={{height:"50px"}}></div>
                    <div className={styles.pricing__product_box}>
                        <div className={styles.g__row}>
                            <div className={styles.g__c3} style={{padding:"40px"}}>
                                <div className={styles.g__row}>
                                    <div className={styles.t__h3}>
                                        <span ><font>标准版</font>
                                        </span>
                                    </div>
                                    <div className={styles.g__c12}>
                                        <font>满足客服5人及以下企业的线上基本需求</font>
                                    </div>
                                    <div className={styles.g__c12}>
                                        <div className={styles.t__p3}>
                                            <font></font>
                                        </div>
                                        <span className={styles.t__h2}>
                                            <font>¥ 2,480元
                                            </font>
                                        </span>
                                        <font className={styles.vertical}>/年
                                        </font>
                                    </div>
                                </div>
                            </div>



                            <div className={styles.g__c6}>
                                <TabsControl>
                                    <div name = "套餐内容">                                                              <table className={styles.pricing__table}>
                                        <tbody>
                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>在线客服（座席）</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>&le;5人</font>
                                                </td>
                                                
                                            </tr>

                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>应用内消息</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font></font>
                                                </td>
                                            </tr>                                            
                                        </tbody>
                                    </table>
                                    </div>
                                    <div name = "套餐功能">

                                        <table className={styles.pricing__table}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <font>
                                                            对话记录永久保存
                                                        </font>
                                                        <a data-tip data-for='happyFace'></a>
                                                        <ReactTooltip place="right" id='happyFace' type='error' type ="light" effect ="solid">
                                                            
                                                        </ReactTooltip>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <font>
                                                            自定义对话分配 
                                                        </font>
                                                    </td>                                                    
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <font>
                                                            主动消息
                                                        </font>
                                                    </td>
                                                    
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                </TabsControl>
                            </div>
                        </div>
                    </div>
                    <div style={{height:"50px"}}></div>
                    <div className={styles.pricing__product_box}>
                        <div className={styles.g__row}>
                            <div className={styles.g__c3} style={{padding:"40px"}}>
                                <div className={styles.g__row}>
                                    <div className={styles.t__h3}>
                                        <span ><font>增强版</font>
                                        </span>
                                    </div>
                                    <div className={styles.g__c12}>
                                        <font>满足10人及以下企业的复杂的线上业务需求</font>
                                    </div>
                                    <div className={styles.g__c12}>
                                        <div className={styles.t__p3}>
                                            <font></font>
                                        </div>
                                        <span className={styles.t__h2}>
                                            <font>¥ 7,800元
                                            </font>
                                        </span>
                                        <font className={styles.vertical}>/年
                                        </font>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.g__c6}>
                                <TabsControl>
                                    <div name = "套餐内容">                                                              <table className={styles.pricing__table}>
                                        <tbody>
                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>在线客服（座席）</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>&le;10人</font>
                                                </td>
                                                
                                            </tr>

                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>应用内消息</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font></font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>工单系统</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font></font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>邮件、短信消息</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font></font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>客服机器人</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>
                                                </font>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                    <div name = "套餐功能">

                                        <table className={styles.pricing__table}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <font>
                                                            对话记录永久保存
                                                        </font>

                                                        
                                                        <a data-tip data-for='happyFace'></a>
                                                        <ReactTooltip place="right" id='happyFace' type='error' type ="light" effect ="solid">
                                                            
                                                        </ReactTooltip>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <font>
                                                            自定义对话分配 
                                                        </font>
                                                    </td>                                                    
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <font>
                                                            主动消息
                                                        </font>
                                                    </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <font>
                                                            业务触发的邮件、短信消息
                                                        </font>
                                                    </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <font>
                                                            工单系统
                                                        </font>
                                                    </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <font>
                                                            客服机器人
                                                        </font>
                                                    </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <font>
                                                            无限访客并发
                                                        </font>
                                                    </td>
                                                    
                                                </tr>                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                </TabsControl>
                            </div>
                        </div>
                    </div>
                    <div style={{height:"50px"}}></div>

                    <div className={styles.pricing__product_box}>
                        <div className={styles.g__row}>
                            <div className={styles.g__c3} style={{padding:"40px"}}>
                                <div className={styles.g__row}>
                                    <div className={styles.t__h3}>
                                        <span ><font>企业版</font>
                                        </span>
                                    </div>
                                    <div className={styles.g__c12}>
                                        <font>满足20人及以下企业的复杂的线上业务需求</font>
                                    </div>
                                    <div className={styles.g__c12}>
                                        <div className={styles.t__p3}>
                                            <font></font>
                                        </div>
                                        <span className={styles.t__h2}>
                                            <font>¥ 12,800元
                                            </font>
                                        </span>
                                        <font className={styles.vertical}>/年
                                        </font>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.g__c6}>
                                <TabsControl>
                                    <div name = "套餐内容">                                                              <table className={styles.pricing__table}>
                                        <tbody>
                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>在线客服（座席）</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>&le;20人</font>
                                                </td>
                                                
                                            </tr>

                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>应用内消息</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font></font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>工单系统</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font></font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>邮件、短信消息</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font></font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>客服机器人</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font></font>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                    <div name = "套餐功能">

                                        <table className={styles.pricing__table}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <font>
                                                            对话记录永久保存
                                                        </font>

                                                        
                                                        <a data-tip data-for='happyFace'></a>
                                                        <ReactTooltip place="right" id='happyFace' type='error' type ="light" effect ="solid">
                                                            
                                                        </ReactTooltip>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <font>
                                                            自定义对话分配 
                                                        </font>
                                                    </td>                                                    
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <font>
                                                            应用内主动消息
                                                        </font>
                                                    </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <font>
                                                            业务触发的邮件、短信消息
                                                        </font>
                                                    </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <font>
                                                            工单系统
                                                        </font>
                                                    </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <font>
                                                            客服机器人
                                                        </font>
                                                    </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <font>
                                                            无限访客并发
                                                        </font>
                                                    </td>
                                                    
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                </TabsControl>
                            </div>
                        </div>
                    </div>
                    <div style={{height:"50px"}}></div>                    
                    <p>
                        为答谢广大老客户的厚爱，自2018年11月1日前，PPMessage已注册用户（含免费用户和付费用户）付费的，仍可以按120元/月/座席购买 PPMessage 线上服务，期限不限。自2018年11月1日起，免费版本正式停止使用。
                    </p>
                    <p>
                        感谢您的理解和支持！
                    </p>
                    <div style={{textAlign:"right"}}>
                        PPMessage 全体员工敬上
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

    
