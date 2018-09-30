import React from "react";
import styles from "./pricing.module.css";
import EnterYourMobile from "../components/enteryourmobile";
import TabsControl from "../components/tabscontrol";
import ReactTooltip from 'react-tooltip';
import WorthCompany from "../components/worthcompany"
import {Helmet} from "react-helmet";
import Layout from "./layout";
export default () => (
	<Layout>
        <Helmet>
            <title>价格</title>
            <meta name="description" content="pricing 价格" />
        </Helmet>
        <div className={styles.heiti}>
            <div style={{height:"72px"}}></div>

            
            <section className={styles.js__pricing_page}>
                <div className={styles.container_q}>
                    <div style={{height:"50px"}}></div>
                    <div className={styles.t__h1}>
                        <font>满足企业不同需求的客服解决方案</font>
                    </div>
                    <div className={styles.t__h3_center}>
                        <font>无需下载部署，注册即用，</font>
                        <font>满足您的个性化需求</font>
                    </div>
                    <div style={{height:"50px"}}></div>
                    <div className={styles.g__row_h_center}>
                        <div className={styles.g__c4_pring}>
                            <a  href="#xiaoxi"  className={styles.c__black}>
                                <div className={styles.t__h3}>
                                    <font>
                                        标准版
                                    </font>
                                </div>
                                <div className={styles.t__small}>
                                    <font>
                                        5,000元/年
                                    </font>
                                </div>
                                <div style={{height:"20px"}}></div>
                                <div>
                                    <font>
                                        满足客服10人以下中小企业基本需求
                                    </font>
                                </div>
                                <div style={{height:"20px"}}></div>
                                <div className={styles.u__inline_block}>
                                    <span className={styles.link__arrow_c_blue}>
                                        <font>了解更多</font>
                                        
                                    </span>
                                </div>
                            </a>
                        </div>

                        <div className={styles.g__c4_pring}>
                            <a  href="#shoujianxiang"  className={styles.c__black}>
                                <div className={styles.t__h3}>
                                    <font>
                                        增强版
                                    </font>
                                </div>
                                <div className={styles.t__small}>
                                    <font>
                                        10,000元/年
                                    </font>
                                </div>
                                <div style={{height:"20px"}}></div>
                                <div>
                                    <font>
                                        满足10人以下中小企业的复杂的线上业务需求。
                                    </font>
                                </div>
                                <div style={{height:"20px"}}></div>
                                <div className={styles.u__inline_block}>
                                    <span className={styles.link__arrow_c_blue}>
                                        <font>了解更多</font>
                                        
                                    </span>
                                </div>
                            </a>
                        </div>


                        <div className={styles.g__c4_pring}>
                            <a  href="#yongpin"  className={styles.c__black}>
                                <div className={styles.t__h3}>
                                    <font>
                                        企业版
                                    </font>
                                </div>
                                <div className={styles.t__small}>
                                    <font>
                                        15,000元/年
                                    </font>
                                </div>
                                <div style={{height:"20px"}}></div>
                                <div>
                                    <font>
                                        满足20人以下中型企业的复杂的线上业务需求。
                                    </font>
                                </div>
                                <div style={{height:"20px"}}></div>
                                <div className={styles.u__inline_block}>
                                    <span className={styles.link__arrow_c_blue}>
                                        <font>了解更多</font>
                                        
                                    </span>
                                </div>
                            </a>
                        </div>

                        <div className={styles.g__c4_pring}>
                            <a  href="#yongpin"  className={styles.c__black}>
                                <div className={styles.t__h3}>
                                    <font>
                                        私有部署
                                    </font>
                                </div>
                                <div className={styles.t__small}>
                                    <font>
                                        
                                    </font>
                                </div>
                                <div style={{height:"20px"}}></div>
                                <div>
                                    <font>
                                        支持SaaS标准化需求基础上的定制开发，提供云呼叫中心、销售机器人等多种增值业务
                                    </font>
                                </div>
                                <div style={{height:"20px"}}></div>
                                <div className={styles.u__inline_block}>
                                    <span className={styles.link__arrow_c_blue}>
                                        <font>联系客服</font>
                                        
                                    </span>
                                </div>
                            </a>
                        </div>
                        
                        
                    </div>
                    <div style={{height:"80px"}}></div>
                    <div className={styles.g__row_h_center}>
                        <div className={styles.t__h3}>
                            <font>
                                开始免费试用
                            </font>
                        </div>
                    </div>
                    <div style={{height:"60px"}}></div>
                    <div className={styles.g__row_h_center}>
                        <EnterYourMobile size="middle"/> 

                    </div>
                    <div style={{height:"40px"}}></div>
                    <div className={styles.g__row_h_center}>
                        
                        <div className={styles.t__small}>
                            <div className={styles.list__bulletinline}>
                                <font style={{color:'#888'}}>免费试用 · 易于安装 
                                </font>        
                            </div>
                        </div>
                    </div>
                    <a name="xiaoxi"></a>
                    <div style={{height:"80px"}}></div>
                    <div className={styles.pricing__product_box}>
                        <div className={styles.g__row}>
                            <div className={styles.g__c3} style={{padding:"40px"}}>
                                <div className={styles.g__row}>
                                    <div className={styles.t__h3}>
                                        <span ><font>标准版</font>
                                        </span>
                                    </div>
                                    <div className={styles.g__c12}>
                                        <font>满足客服10人以下中小企业基本需求</font>
                                    </div>
                                    <div className={styles.g__c12}>
                                        <div className={styles.t__p3}>
                                            <font></font>
                                        </div>
                                        <span className={styles.t__h2}>
                                            <font>¥ 5,000元
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
                                        {/*
                                            <thead>
                                            <tr>
                                            <th style={{borderBottom:"none"}}><font>积极的人</font>
                                            </th>
                                            <th style={{borderBottom:"none"}}><font>必要</font>
                                            </th>
                                            <th style={{borderBottom:"none"}}><font>临</font>
                                            </th>
                                            </tr>
                                            </thead>
                                          */}
                                        <tbody>
                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>在线客服（座席）</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>&lt;10人</font>
                                                </td>
                                                
                                            </tr>

                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>应用内消息</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>&lt;10,000条/年</font>
                                                </td>
                                                {/*
                                                    <td style={{borderBottom:"none"}}><font>$ 95 /月</font>
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <td style={{borderBottom:"none"}}><font>501-2,000人</font>
                                                    </td>
                                                    <td style={{borderBottom:"none"}}><font>$ 89 /月</font>
                                                    </td>
                                                    <td style={{borderBottom:"none"}}><font>$ 120 /月</font>
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <td style={{borderBottom:"none"}}><font>2,001-5,000人</font>
                                                    </td>
                                                    <td style={{borderBottom:"none"}}><font>$ 120 /月</font>
                                                    </td>
                                                    <td style={{borderBottom:"none"}}><font>$ 150 /月</font>
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <td style={{borderBottom:"none"}}><font>5,001-10,000人</font>
                                                    </td>
                                                    <td style={{borderBottom:"none"}}><font>$ 170 /月</font>
                                                    </td>
                                                    <td style={{borderBottom:"none"}}><font>$ 270 /月</font>
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <td style={{borderBottom:"none"}}><font>10,001-20,000人</font>
                                                    </td>
                                                    <td style={{borderBottom:"none"}}><font>$ 290 /月</font>
                                                    </td>
                                                    <td style={{borderBottom:"none"}}><font>$ 450 /月</font>
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <td style={{borderBottom:"none"}}><font>超过20,000人？</font>
                                                    </td>
                                                    <td style={{borderBottom:"none"}}><a href="#" style={{textDecoration:"none" }}> 请与销售人员联系</a>
                                                    </td>
                                                  */}
                                                    </tr>                                            
                                        </tbody>
                                    </table>
                                    </div>
                                    <div name = "套餐功能">

                                        <table className={styles.pricing__table}>
                                            {/*
                                                <thead>
                                                <tr>
                                                <th><font>特征</font>
                                                </th>
                                                <th><font>必要</font>
                                                </th>
                                                <th><font>临</font>
                                                </th>
                                                </tr>
                                                </thead>
                                              */}
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
                                                    
                                                    <td>
                                                        {/*图片区小对号*/}
                                                    </td>
                                                    <td>
                                                        {/*图片区小对号*/}
                                                    </td>
                                                    
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <font>
                                                            无限访客并发
                                                        </font>
                                                    </td>
                                                    <td>
                                                        {/*图片区小对号*/}
                                                    </td>
                                                    <td>
                                                        {/*图片区小对号*/}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <font>
                                                            自定义对话分配 
                                                        </font>
                                                    </td>
                                                    <td>
                                                        {/*图片区小对号*/}
                                                    </td>
                                                    <td>
                                                        {/*图片区小对号*/}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <font>
                                                            主动消息
                                                        </font>
                                                    </td>
                                                    <td>
                                                        {/*图片区小对号*/}
                                                    </td>
                                                    <td>
                                                        {/*图片区小对号*/}
                                                    </td>
                                                </tr>

                                                
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                </TabsControl>

                                
                            </div>
                            {/*
                                <div className={styles.g__c3} style={{padding:"40px"}}>
                                <div style={{height:"20px"}}></div>
                                <div className={styles.f__center}>
                                <a href="#" >
                                <botton className={styles.btn}> 
                                <font>免费试用消息
                                </font>
                                </botton>
                                </a>
                                </div>
                                <div className={styles.t__small}>
                                <div className={styles.list__bulletinline}>
                                <font>免费试用14天 </font>
                                </div>
                                </div>
                                <div style={{height:"20px"}}></div>
                                <div className={styles.f__bold}>
                                <font>
                                什么是活跃的人? 
                                </font>
                                </div>
                                <div style={{height:"10px"}}></div>
                                <p className={styles.pricing__metric}>
                                <font>在过去90天内收到您的消息，向您发送消息或已登录您的应用或网站的潜在客户和客户
                                </font>
                                </p>
                                </div>
                              */}  
                        </div>
                    </div>



                    <a name="shoujianxiang"></a>
                    <div style={{height:"80px"}}></div>
                    <div className={styles.pricing__product_box}>
                        <div className={styles.g__row}>
                            <div className={styles.g__c3} style={{padding:"40px"}}>
                                <div className={styles.g__row}>
                                    <div className={styles.t__h3}>
                                        <span >
                                            <font>
                                                增强版
                                            </font>
                                        </span>
                                    </div>
                                    <div className={styles.g__c12}>
                                        <font>
                                            满足10人以下中小企业的复杂的线上业务需求
                                        </font>
                                    </div>
                                    <div className={styles.g__c12}>
                                        <div className={styles.t__p3}>
                                            <font></font>
                                        </div>
                                        <span className={styles.t__h2}>
                                            <font>¥ 10,000元
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
                                        {/*
                                            <thead>
                                            <tr>
                                            <th style={{borderBottom:"none"}}><font>座席价格</font>
                                            </th>
                                            <th style={{borderBottom:"none"}}><font>必要</f⁯nt>
                                            </th>
                                            <th style={{borderBottom:"none"}}><font>临</font>
                                            </th>
                                            </tr>
                                            </thead>
                                          */}
                                        <tbody>
                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>在线客服（座席）</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>&lt;10人</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font> </font>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>应用内消息</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>&lt;10,000条/年</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font> </font>
                                                </td>
                                            </tr>

                                            

                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>工单系统</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>&lt;10,000条/年</font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>邮件、短信消息</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>&lt;10,000条/年</font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>客服机器人</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>不限消息数</font>
                                                </td>
                                            </tr> 
                                            
                                        </tbody>
                                    </table>
                                    </div>
                                    <div name = "套餐功能">

                                        <table className={styles.pricing__table}>
                                            {/*
                                                <thead>
                                                <tr>
                                                <th><font>特征</font>
                                                </th>
                                                <th><font>必要</font>
                                                </th>
                                                <th><font>临</font>
                                                </th>
                                                </tr>
                                                </thead>
                                              */}
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <font>
                                                            对话记录永久保存
                                                        </font>
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <font>
                                                            无限访客并发
                                                        </font>
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <font>
                                                            自定义对话分配
                                                        </font>
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <font>
                                                            应用内主动消息
                                                        </font>
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <font>
                                                            业务触发的邮件、短信消息
                                                        </font>
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <font>
                                                            工单系统
                                                        </font>
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr><tr>
                                                    <td>
                                                        <font>
                                                            客服机器人
                                                        </font>
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr>
                                                
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                </TabsControl>

                                
                            </div>
                            {/*
                                <div className={styles.g__c3} style={{padding:"40px"}}>
                                <div style={{height:"20px"}}></div>
                                <div className={styles.f__center}>
                                <a href="#" >
                                <botton className={styles.btn}> 
                                <font>免费试用消息
                                </font>
                                </botton>
                                </a>
                                </div>
                                <div className={styles.t__small}>
                                <div className={styles.list__bulletinline}>
                                <font>免费试用14天</font>
                                </div>
                                </div>
                                <div style={{height:"20px"}}></div>
                                <div className={styles.f__bold}>
                                <font>
                                什么是收件箱座位？
                                </font>
                                </div>
                                <div style={{height:"10px"}}></div>
                                <p className={styles.pricing__metric}>
                                <font>收件箱席位使Teammate可以访问Inbox产品。一个队友是谁在你的公司配备了对讲机帐户。您可以免费获得无限的队友，并选择其中哪一个拥有付费的收件箱座位。
                                </font>
                                </p>
                                </div>
                              */}
                        </div>
                    </div>
                    <a name="yongpin"></a>
                    <div style={{height:"80px"}}></div>
                    <div className={styles.pricing__product_box}>
                        <div className={styles.g__row}>
                            <div className={styles.g__c3} style={{padding:"40px"}}>
                                <div className={styles.g__row}>
                                    <div className={styles.t__h3}>
                                        <span ><font>企业版</font>
                                        </span>
                                    </div>
                                    <div className={styles.g__c12}>
                                        <font>满足20人以下中小企业的复杂的线上业务需求</font>
                                    </div>
                                    <div className={styles.g__c12}>
                                        <div className={styles.t__p3}>
                                            <font></font>
                                        </div>
                                        <span className={styles.t__h2}>
                                            <font>¥ 15,000元
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
                                        {/*
                                            <thead>
                                            <tr>
                                            <th style={{borderBottom:"none"}}><font></font>
                                            </th>
                                            <th style={{borderBottom:"none"}}><font>必要</font>
                                            </th>
                                            <th style={{borderBottom:"none"}}><font>临</font>
                                            </th>
                                            </tr>
                                            </thead>
                                          */}
                                        <tbody>
                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>在线客服（座席）</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>&lt;20人</font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>应用内消息</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>&lt;10,000条/年</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font></font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>工单系统</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>&lt;10,000条/年</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font></font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>邮件、短信消息</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>&lt;10,000条/年</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font></font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{borderBottom:"none"}}><font>客服机器人</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>不限消息数</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font></font>
                                                </td>
                                            </tr>

                                            {/*<tr>
                                                <td style={{borderBottom:"none"}}><font>201-500人</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>$ 65 /月</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>$ 95 /月</font>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td style={{borderBottom:"none"}}><font>501-2,000人</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>$ 89 /月</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>$ 120 /月</font>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td style={{borderBottom:"none"}}><font>2,001-5,000人</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>$ 120 /月</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>$ 150 /月</font>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td style={{borderBottom:"none"}}><font>5,001-10,000人</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>$ 170 /月</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>$ 270 /月</font>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td style={{borderBottom:"none"}}><font>10,001-20,000人</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>$ 290 /月</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><font>$ 450 /月</font>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td style={{borderBottom:"none"}}><font>超过20,000人？</font>
                                                </td>
                                                <td style={{borderBottom:"none"}}><a href="#" style={{textDecoration:"none" }}> 请与销售人员联系</a>
                                                </td>
                                                
                                                </tr>*/}                                            
                                        </tbody>
                                    </table>
                                    </div>
                                    <div name = "套餐功能">

                                        <table className={styles.pricing__table}>
                                            {/*
                                                <thead>
                                                <tr>
                                                <th><font>特征</font>
                                                </th>
                                                <th><font>必要</font>
                                                </th>
                                                <th><font>临</font>
                                                </th>
                                                </tr>
                                                </thead>
                                              */}
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <font>
                                                            对话记录永久保存
                                                        </font>
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <font>
                                                            无限访客并发
                                                        </font>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <font>自定义对话分配
                                                        </font>
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <font>应用内主动消息
                                                        </font>
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <font>业务触发的邮件、短信消息
                                                        </font>
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <font>
                                                            工单系统
                                                        </font>
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <font>
                                                            客服机器人
                                                        </font>
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr>

                                                
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                </TabsControl>

                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    
                    <div style={{height:"20px"}}></div>
                    <p className={styles.t__h3_center} style={{fontWeight:"100"}}>
                        <font>为您的企业选择一个用例，我们将推荐您需要的产品
                        </font>
                    </p>
                </div>


                <div className={styles.container_q}>
                    <div className={styles.g__row3}>
                        <div className={styles.g__row}>
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
                            <div className={styles.g__c4}>
                                <div className={styles.u__flex}>
                                    <div className={styles.main1}>
                                        <div className={styles.sp__2}></div>
                                        <div className={styles.label}>
                                            <h3>客户支持并提高客户满意度
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
                </div>
                <div style={{height:"140px"}}></div>
            </section>

            <section><WorthCompany /></section>
            
            <div style={{height:"60px"}}></div> 
        </div>
	</Layout>
);
