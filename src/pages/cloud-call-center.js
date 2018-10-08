import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";

import {Helmet} from "react-helmet";
import Layout from "./layout";
export default () => (
	<Layout>
        <Helmet>
            <title>云呼叫中心</title>
            <meta name="description" content="cloud call center 云呼叫中心" />
        </Helmet>
        <div className={styles.heiti}>
            <div style={{height:"144px"}}></div>
            <div className={styles.container__narrower}>
                <div className={styles.g__row}>
                    <div className={styles.g__c6}>
                        <h1>云呼叫中心</h1>
                        <div className={styles.sp__5}>
                            <h2 style={{margin:'5rem 0rem 0rem 0rem'}}>全渠道跨国云呼叫中心解决方案
                            </h2>
                            <div style={{height:"10px"}}>
                            </div>
                            <h3 style={{color:'#888'}}><font className={styles.biaoti}>通过业内独有的流程机制解决全球业务的客服痛点，与人工智能紧密结合</font>
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
                            <img src={require("../images/99.png")} />
                        </div>
                    </div>
                </div>  
            </div>

            

            <section className={styles.section_o__no_bottom}>
                <div className={styles.container}>
                    <div className={styles.g__row}>

                        <div className={styles.cloud_call_center}>

                            <div className={styles.chuangjian} style={{margin:"22px",paddingRight:"0em"}}>
                                <a href="#quanqiuhua" className={styles.lianjie}>
                                    <div className={styles.t__h3}>
                                        <font>全球化</font>
                                    </div>
                                    <div className={styles.t__small_s1}>
                                        <font>跨地域、跨时区、多语言，支持语音通话跨地域转接，保障全球客服24小时在线</font>
                                    </div>
                                    <div className={styles.product__learn_more} style={{margin:"80px"}}>
                                        <span >
                                            <font className={styles.smallerbiaoti}>了解更多</font>
                                        </span>                  
                                    </div>                
                                </a>
                            </div>

                            <div className={styles.chuangjian} style={{margin:"22px 35px",paddingRight:"0em"}}>
                                <a href="#quanqudao" className={styles.lianjie}>
                                    <div style={{height:"10px"}}></div>
                                    <div className={styles.t__h3}>
                                        <font>全渠道</font>
                                    </div>
                                    <div className={styles.t__small_s1}>
                                        <font>电话、网页、应用、邮件、社交媒体通过一个界面统一管理，
                                            客户通过各个渠道的访问信息统一检索</font>
                                    </div>
                                    <div className={styles.product__learn_more}  style={{margin:"80px"}}>
                                        <span>
                                            <font className={styles.smallerbiaoti}>了解更多</font>
                                        </span>                  
                                    </div>                
                                </a>
                            </div>
                            

                            <div className={styles.chuangjian} style={{margin:"22px 50px",paddingRight:"0em"}}>
                                <a href="#kedingzhi" className={styles.lianjie}>
                                    <div className={styles.t__h3}>
                                        <font>可定制</font>
                                    </div>
                                    <div className={styles.t__small_s1}>
                                        <font>电话与其他渠道消息通过统一流程集中处理，不仅仅是IVR
                                            通过流程及开发接口快速实现企业业务定制
                                        </font>
                                    </div>
                                    <div className={styles.product__learn_more}  style={{margin:"80px"}}>
                                        <span>
                                            <font className={styles.smallerbiaoti}>了解更多</font>
                                        </span>                  
                                    </div>                
                                </a>
                            </div>


                            <div className={styles.chuangjian} style={{margin:"22px 50px",paddingRight:"0em"}}>
                                <a href="#darongliang" className={styles.lianjie}>
                                    <div className={styles.t__h3}>
                                        <font>大容量</font>
                                    </div>
                                    <div className={styles.t__small_s1}>
                                        <font>支持万级并发呼叫
                                            系统可用性99.99%
                                            海量录音及实时识别
                                        </font>
                                    </div>
                                    <div className={styles.product__learn_more}  style={{margin:"80px"}}>
                                        <span>
                                            <font className={styles.smallerbiaoti}>了解更多</font>
                                        </span>                  
                                    </div>                
                                </a>
                            </div>



                            <div className={styles.chuangjian} style={{margin:"22px",paddingRight:"0em"}}>
                                <a href="#rengongzhineng" className={styles.lianjie}>
                                    <div className={styles.t__h3}>
                                        <font>人工智能</font>
                                    </div>
                                    <div className={styles.t__small_s1}>
                                        <font>自动语音识别
                                            多轮对话
                                            智能质检</font>
                                    </div>
                                    
                                    <div className={styles.product__learn_more}  style={{margin:"80px"}}>
                                        <span>
                                            <font className={styles.smallerbiaoti}>了解更多</font>
                                        </span>                  
                                    </div>                
                                </a>
                            </div>
                            <a name="quanqiuhua"></a>
                            
                        </div>
                        
                    </div>
                </div>
            </section>


            <section >
                
                <div className={styles.container_z} style={{textAlign:"center"}}>
                    <div className={styles.g__row}>
                        <div className={styles.g__c6}>
                            <div style={{height:"100px"}}></div>
                            <h3 className={styles.t__h2}>
                                <font>
                                    全球化呼叫中心系统
                                </font>
                            </h3>
                            <div style={{height:"10px"}}></div>
                            <div className={styles.max__600}>
                                <font className={styles.tigongzhichi}>
                                    跨地域、跨时区、多语言，支持语音通话跨地域转接，保障全球客服24小时在线

                                </font>
                            </div>
                        </div>
                        
                        <div className={styles.g__c6}>
                            <div className={styles.js__gallery}>
                                <div className={styles.u__inline}>
                                    <div className={styles.gallery}>
                                        <div className={styles.gallery__img}>
                                            <img width="400" src="https://upload-images.jianshu.io/upload_images/12406336-a7a0d2180ad98b4b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                            <a name="quanqudao"></a>
                                        </div>                    
                                    </div>
                                </div>
                            </div>
                        </div>            
                    </div>
                </div>           
            </section>



            <section className={styles.section}>
                
                <div className={styles.container_z}>
                    <div className={styles.g__row_center}>
                        <div className={styles.g__c6}>
                            <img width="500" src={require("../images/呼叫中心的图.jpg")} />
                            
                        </div>
                        <div className={styles.g__c5_z}>

                            
                            <h3 className={styles.t__h2}>
                                <font>
                                    多渠道接入，一站式响应服务
                                </font>
                            </h3>
                            <div style={{height:"10px"}}></div>
                            <a name="kedingzhi"></a>
                            
                            <div>
                                <font className={styles.tigongzhichi}>电话、网页、应用、邮件、社交媒体通过一个界面统一管理，客户通过各个渠道的访问信息统一检索

                                </font>
                                
                            </div>
                            
                        </div>          
                    </div>
                    
                </div>
            </section>


            <section >
                
                <div className={styles.container_z} style={{textAlign:"center"}}>
                    <div className={styles.g__row}>
                        <div className={styles.g__c6}>
                            <div style={{height:"100px"}}></div>
                            <h3 className={styles.t__h2}>
                                <font>
                                    业务快速定制

                                </font>
                            </h3>
                            <div style={{height:"10px"}}></div>
                            <div className={styles.max__600}>
                                <a name="darongliang"></a>
                                <font className={styles.tigongzhichi}>
                                    电话与其他渠道消息通过统一流程集中处理，不仅仅是IVR
                                    通过流程及开发接口快速实现企业业务定制

                                </font>
                            </div>
                        </div>
                        
                        <div className={styles.g__c6}>
                            <div className={styles.js__gallery}>
                                <div className={styles.u__inline}>
                                    <div className={styles.gallery}>
                                        <div className={styles.gallery__img}>
                                            <img width="500" src={require("../images/82.png")} />
                                            
                                        </div>                    
                                    </div>
                                </div>
                            </div>
                        </div>            
                    </div>
                </div>           
            </section>
            

            <section className={styles.section}>
                
                <div className={styles.container_z}>
                    <div className={styles.g__row_center} >{/*有时间修一下配图不能用手截*/}
                        <div className={styles.g__c6} >
                            <img width="100%" src={require("../images/76.png")} />
                        </div>
                        <div className={styles.g__c5_z}>

                            
                            <h3 className={styles.t__h2}>
                                <font>
                                    可扩展、大容量，性能稳定

                                </font>
                            </h3>
                            <div style={{height:"10px"}}></div>
                            <div>
                                <font className={styles.tigongzhichi}>支持万级并发呼叫，系统可用性99.99%
                                    海量录音及实时识别


                                </font>
                            </div>                                    
                        </div>          
                    </div>
                    
                </div>
            </section>
            


            <section className={styles.section}>
                <a name="rengongzhineng"></a>
                <div className={styles.container_z} style={{maxWidth:"1300px"}}>
                    <div className={styles.support_automate} style={{background:"white"}}>
                        <div className={styles.g__c7_q}>  
                            <div className={styles.g__c6_s}>
                                <img width="500" src={require("../images/77.png")} />
                                <div style={{height:"10px"}}></div>
                                <h3 className={styles.t__h2}>
                                    <font>
                                        智能语音交互 ASR语音识别，自然语言处理，智能TTS
                                    </font>
                                </h3>
                            </div>                        
                        </div>
                    </div>                                             
                </div>                  
            </section>

            
        </div>
	</Layout>
);
