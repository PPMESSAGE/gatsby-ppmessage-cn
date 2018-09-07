import React from "react";
import styles from "./pricing.module.css";
import EnterYourMobile from "../components/enteryourmobile";
import TabsControl from "../components/tabscontrol";
import ReactTooltip from 'react-tooltip';

export default () => (
    <div>
        <div style={{height:"72px"}}></div>

        
        <section className={styles.js__pricing_page}>
            <div className={styles.container_q}>
                <div style={{height:"50px"}}></div>
                <div className={styles.t__h1}>
                    <font>只为您需要的东西付费</font>
                </div>
                <div className={styles.t__h3_center}>
                    <font>我们的三种产品在一个地方协同工作。</font>
                    <font>从一个或多个开始。</font>
                </div>
                <div style={{height:"50px"}}></div>
                <div className={styles.g__row_h_center}>
                    <div className={styles.g__c4}>
                        <a  href="#xiaoxi"  className={styles.c__black}>
                            <div className={styles.t__h3}>
                                <font>
                                    消息
                                </font>
                            </div>
                            <div className={styles.t__small}>
                                <font>
                                    每月49美元起
                                </font>
                            </div>
                            <div style={{height:"20px"}}></div>
                            <div>
                                <font>
                                    向潜在客户和客户发送有针对性的电子邮件，应用内消息和推送消息 
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

                    <div className={styles.g__c4}>
                        <a  href="#shoujianxiang"  className={styles.c__black}>
                            <div className={styles.t__h3}>
                                <font>
                                    收件箱
                                </font>
                            </div>
                            <div className={styles.t__small}>
                                <font>
                                    每月49美元起
                                </font>
                            </div>
                            <div style={{height:"20px"}}></div>
                            <div>
                                <font>
                                    以团队形式管理，回复和解决与潜在客户和客户的对话 
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


                    <div className={styles.g__c4}>
                        <a  href="#yongpin"  className={styles.c__black}>
                            <div className={styles.t__h3}>
                                <font>
                                    用品
                                </font>
                            </div>
                            <div className={styles.t__small}>
                                <font>
                                    每月49美元的固定价格
                                </font>
                            </div>
                            <div style={{height:"20px"}}></div>
                            <div>
                                <font>
                                    创建帮助内容并将其发布到公共知识库
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
                    
                </div>
                <div style={{height:"80px"}}></div>
                <div className={styles.g__row_h_center}>
                    <div className={styles.t__h3}>
                        <font>使用所有内部通信产品开始免费试用
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
                                    <span ><font>消息</font>
                                    </span>
                                </div>
                                <div className={styles.g__c12}>
                                    <font>向潜在客户和客户发送有针对性的电子邮件，应用内消息和推送消息</font>
                                </div>
                                <div className={styles.g__c12}>
                                    <div className={styles.t__p3}>
                                        <font>在开始</font>
                                    </div>
                                    <span className={styles.t__h2}>
                                        <font>$ 49
                                        </font>
                                    </span>
                                    <font className={styles.vertical}>/月
                                    </font>
                                </div>
                            </div>
                        </div>



                        <div className={styles.g__c6}>


                            <TabsControl>
                                <div name = "价格">                                                              <table className={styles.pricing__table}>
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
                                    <tbody>
                                        <tr>
                                            <td style={{borderBottom:"none"}}><font>最多200人</font>
                                            </td>
                                            <td style={{borderBottom:"none"}}><font>$ 49 /月</font>
                                            </td>
                                            <td style={{borderBottom:"none"}}><font>$ 75 /月</font>
                                            </td>
                                        </tr>

                                        <tr>
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
                                            
                                        </tr>                                            
                                    </tbody>
                                </table>
                                </div>
                                <div name = "查看功能">

                                    <table className={styles.pricing__table}>
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
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <font>自动和手动信息
                                                    </font>

                                                    <a data-tip data-for='happyFace'>1</a>
                                                    <ReactTooltip place="right" id='happyFace' type='error' type ="light" effect ="solid">
                                                        
                                                    </ReactTooltip>

                                                    
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-5d3b6fe78815da25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-5d3b6fe78815da25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <font>受众群体定位
                                                    </font>
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-5d3b6fe78815da25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-c4bc854e9fa9638b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <font>消息调度
                                                    </font>
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-5d3b6fe78815da25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-c4bc854e9fa9638b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <font>触发时间
                                                    </font>
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-5d3b6fe78815da25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}}  />
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-c4bc854e9fa9638b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                            </tr>

                                            
                                            
                                        </tbody>
                                    </table>
                                </div>
                                
                            </TabsControl>

                            
                        </div>

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
                        
                    </div>
                </div>



                <a name="shoujianxiang"></a>
                <div style={{height:"80px"}}></div>
                <div className={styles.pricing__product_box}>
                    <div className={styles.g__row}>
                        <div className={styles.g__c3} style={{padding:"40px"}}>
                            <div className={styles.g__row}>
                                <div className={styles.t__h3}>
                                    <span ><font>收件箱</font>
                                    </span>
                                </div>
                                <div className={styles.g__c12}>
                                    <font>以团队形式管理，回复和解决与潜在客户和客户的对话</font>
                                </div>
                                <div className={styles.g__c12}>
                                    <div className={styles.t__p3}>
                                        <font>每个座位的价格</font>
                                    </div>
                                    <span className={styles.t__h2}>
                                        <font>$ 19
                                        </font>
                                    </span>
                                    <font className={styles.vertical}>/月
                                    </font>
                                </div>
                            </div>
                        </div>



                        <div className={styles.g__c6}>


                            <TabsControl>
                                <div name = "价格">                                                              <table className={styles.pricing__table}>
                                    <thead>
                                        <tr>
                                            <th style={{borderBottom:"none"}}><font>座席价格</font>
                                            </th>
                                            <th style={{borderBottom:"none"}}><font>必要</font>
                                            </th>
                                            <th style={{borderBottom:"none"}}><font>临</font>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{borderBottom:"none"}}><font>2个座席</font>
                                            </td>
                                            <td style={{borderBottom:"none"}}><font>$ 38 /月</font>
                                            </td>
                                            <td style={{borderBottom:"none"}}><font>$ 78 /月</font>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style={{borderBottom:"none"}}><font>每增加一个席位</font>
                                            </td>
                                            <td style={{borderBottom:"none"}}><font>$ 19 /月</font>
                                            </td>
                                            <td style={{borderBottom:"none"}}><font>$ 39 /月</font>
                                            </td>
                                        </tr>

                                        

                                        <tr>
                                            <td style={{borderBottom:"none"}}><font>超过15个座席</font>
                                            </td>
                                            <td style={{borderBottom:"none"}}><a href="#" style={{textDecoration:"none" }}> 请与销售人员联系</a>
                                            </td>
                                            
                                        </tr>                                            
                                    </tbody>
                                </table>
                                </div>
                                <div name = "查看功能">

                                    <table className={styles.pricing__table}>
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
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <font>自动和手动信息
                                                    </font>
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-5d3b6fe78815da25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-5d3b6fe78815da25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <font>受众群体定位
                                                    </font>
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-5d3b6fe78815da25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-c4bc854e9fa9638b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <font>消息调度
                                                    </font>
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-5d3b6fe78815da25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-c4bc854e9fa9638b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <font>触发时间
                                                    </font>
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-5d3b6fe78815da25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}}  />
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-c4bc854e9fa9638b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                            </tr>

                                            
                                            
                                        </tbody>
                                    </table>
                                </div>
                                
                            </TabsControl>

                            
                        </div>

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
                        
                    </div>
                </div>
                <a name="yongpin"></a>
                <div style={{height:"80px"}}></div>
                <div className={styles.pricing__product_box}>
                    <div className={styles.g__row}>
                        <div className={styles.g__c3} style={{padding:"40px"}}>
                            <div className={styles.g__row}>
                                <div className={styles.t__h3}>
                                    <span ><font>用品</font>
                                    </span>
                                </div>
                                <div className={styles.g__c12}>
                                    <font>创建帮助内容并将其发布到公共知识库</font>
                                </div>
                                <div className={styles.g__c12}>
                                    <div className={styles.t__p3}>
                                        <font>固定价格</font>
                                    </div>
                                    <span className={styles.t__h2}>
                                        <font>$ 49
                                        </font>
                                    </span>
                                    <font className={styles.vertical}>/月
                                    </font>
                                </div>
                            </div>
                        </div>



                        <div className={styles.g__c6}>


                            <TabsControl>
                                <div name = "价格">                                                              <table className={styles.pricing__table}>
                                    <thead>
                                        <tr>
                                            <th style={{borderBottom:"none"}}><font>固定每月价格</font>
                                            </th>
                                            {/*<th style={{borderBottom:"none"}}><font>必要</font>
                                                </th>
                                                <th style={{borderBottom:"none"}}><font>临</font>
                                                </th>*/}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{borderBottom:"none"}}><font>包括无限的文章</font>
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
                                <div name = "查看功能">

                                    <table className={styles.pricing__table}>
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
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <font>自动和手动信息
                                                    </font>
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-5d3b6fe78815da25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-5d3b6fe78815da25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <font>受众群体定位
                                                    </font>
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-5d3b6fe78815da25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-c4bc854e9fa9638b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <font>消息调度
                                                    </font>
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-5d3b6fe78815da25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-c4bc854e9fa9638b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <font>触发时间
                                                    </font>
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-5d3b6fe78815da25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}}  />
                                                </td>
                                                <td>
                                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-c4bc854e9fa9638b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" style={{marginBottom:"0"}} />
                                                </td>
                                            </tr>

                                            
                                            
                                        </tbody>
                                    </table>
                                </div>
                                
                            </TabsControl>

                            
                        </div>

                        <div className={styles.g__c3} style={{padding:"40px"}}>
                            <div style={{height:"20px"}}></div>
                            <div className={styles.f__center}>
                                <a href="#" >
                                    <botton className={styles.btn}> 
                                        <font>免费试用文章
                                        </font>
                                    </botton>
                                </a>
                            </div>
                            <div className={styles.t__small}>
                                <div className={styles.list__bulletinline}>
                                    <font>免费试用14天 </font>
                                </div>
                            </div>
                            {/*<div style={{height:"20px"}}></div>
                                <div className={styles.f__bold}>
                                <font>
                                什么是活跃的人? 
                                </font>
                                </div>
                                <div style={{height:"10px"}}></div>
                                <p className={styles.pricing__metric}>
                                <font>在过去90天内收到您的消息，向您发送消息或已登录您的应用或网站的潜在客户和客户
                                </font>
                                </p>*/}
                        </div>
                        
                    </div>
                    
                </div>
                <div style={{height:"100px"}}></div>
                <div className={styles.g__row_h_center} style={{textAlign:"center"}}>
                    <a href="#" className={styles.device__box}>
                        <div className={styles.t__h4}>
                            <font>早期公司？
                            </font>
                        </div>
                        <div className={styles.c__blue}>
                            <font>符合条件的申请人每月仅需49美元即可获得我们的所有产品。今天申请
                            </font>
                        </div>
                    </a>
                </div>
                <div style={{height:"100px"}}></div>
                <div className={styles.t__h2} style={{textAlign:"center"}}>
                    <font>推荐用例
                    </font>
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
            <p className={styles.t__h3_grey}>
                <font>为全球发展最快的企业每月提供500,000,000次对话
                </font>
            </p>
            <div style={{height:"40px"}}></div>
            <div className={styles.g__row_center3}>
                <img src="https://upload-images.jianshu.io/upload_images/12406336-5fd5bc8dcbc3b852.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
            </div>
        </section>

        <section>
            <div className={styles.container__narrower}>
                <div style={{height:"150px"}}></div>
                <div className={styles.g__row_center3}>
                    <p className={styles.t__h2}><font style={{fontWeight:"300"}}>经常问的问题</font>
                    </p>
                </div>
                <div style={{height:"40px"}}></div>
                <div className={styles.g__row}>
                    <div className={styles.g__c4}>
                        <div className={styles.f__bold}>
                            <font style={{color:"black",fontWeight:"400",fontSize:"18px"}}>我可以免费试用对讲吗？</font>
                        </div>
                        <div style={{height:"10px"}}></div>
                        <div>
                            <font style={{fontWeight:"100",fontSize:"18px"}}>您可以免费试用任何产品14天。您可以随时购买，升级或取消。
                            </font>
                        </div>
                    </div>
                    
                    <div className={styles.g__c4}>
                        <div className={styles.f__bold}>
                            <font style={{color:"black",fontWeight:"400",fontSize:"18px"}}>我可以免费试用对讲吗？</font>
                        </div>
                        <div style={{height:"10px"}}></div>
                        <div>
                            <font style={{fontWeight:"100",fontSize:"18px"}}>您可以免费试用任何产品14天。您可以随时购买，升级或取消。
                            </font>
                        </div>
                    </div>


                    <div className={styles.g__c4}>
                        <div className={styles.f__bold}>
                            <font style={{color:"black",fontWeight:"400",fontSize:"18px"}}>我可以免费试用对讲吗？</font>
                        </div>
                        <div style={{height:"10px"}}></div>
                        <div>
                            <font style={{fontWeight:"100",fontSize:"18px"}}>您可以免费试用任何产品14天。您可以随时购买，升级或取消。
                            </font>
                        </div>
                    </div>


                    <div className={styles.g__c4}>
                        <div className={styles.f__bold}>
                            <font style={{color:"black",fontWeight:"400",fontSize:"18px"}}>我可以免费试用对讲吗？</font>
                        </div>
                        <div style={{height:"10px"}}></div>
                        <div>
                            <font style={{fontWeight:"100",fontSize:"18px"}}>您可以免费试用任何产品14天。您可以随时购买，升级或取消。
                            </font>
                        </div>
                    </div>




                    {/*在此处添加常见问题*/}
                    
                </div>
            </div>
        </section>
        
        {/*做完网站删除*/}
        <div style={{height:"60px"}}></div> 
        {/*做完网站删除*/}
        
    </div>
);

