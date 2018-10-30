import React from "react";
import EnterYourMobile from "../components/enteryourmobile";
import styles from "./about-css-modules.module.css";
import StackGallery from "../components/stackgallery";
import Media from "react-media";
import {Helmet} from "react-helmet";
import Layout from "./layout";
export default () => {
    let _images = [
        {
            src: require("../images/84.png")
        },
        

        {
            src: "https://marketing.intercomassets.com/assets/live-chat2/measure/2-2x-1a540b52b4e709dc66972441bfadd74e0d57fdb5308809dfb166f116136cafcc.png#508"
        },

        {
            src: "https://marketing.intercomassets.com/assets/live-chat2/measure/3-2x-85eab7b666ae6632cfb1e20ce20642799c081b0edb29d3dac13179e4eb924ae0.png#508"
        },
        

    ]

    return (
	    <Layout>
            <Helmet>
                <title>获取和转化销售线索</title>
                <meta name="description" content="Obtain conversion leads 获取和转化销售线索" />
            </Helmet>
            <div className={styles.heiti}>
                <div style={{height:"144px"}}></div>
                <div className={styles.container}>
                    <div style={{height:"20px",display:"block"}}></div>
                    <div className={styles.g__row}>
                        <div className={styles.g__c6}>
                            <span className={styles.f__medium}>
                                <div className={styles.transform_200px} style={{width:"300px"}}>
                                    <h2>获取和转化销售线索</h2>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.bg__light}>
                        <div className={styles.u__hidden}>
                            <img width="528" src={require("../images/153.png")} />
                        </div>
                        <div className={styles.u__hidden1}>
                            <img width="462" src={require("../images/154.png")} />
                        </div>
                        <div className={styles.u__zfix}>

                            <div className={styles.transform_1317px}></div>
                            <h1 className={styles.t__h1_s}>
                                获取更多商机并达成更多交易
                            </h1>
                            <div style={{height:"10px"}}></div>
                            <h2 className={styles.t__h3_d}>
                                <font>
                                    通过网页主动消息、在线聊天、应用内消息推送、邮件、短信和智能语音外呼快速获取更多商机；通过机器学习实时评估商机质量并自动分配，提升商机转化率
                                </font>
                            </h2>
                            <div style={{height:"20px"}}></div>
                            <div className={styles.u__inline_transform}>     
                                <EnterYourMobile size="middle"/> 
                            </div>
                            <div style={{height:"10px"}}></div>
                            <div className={styles.t__small}>
                                免费试用14天 易于安装 
                            </div>          
                        </div>        
                    </div>
                </div>

                <div style={{height:'200px'}}></div>
                <section className={styles.section_transform1}>
                    <div className={styles.container}>
                        <div className={styles.g__row}>

                            <div>

                                <div className={styles.chuangjian_tranform1}>
                                    <a href="#huode" className={styles.lianjie}>
                                        <div className={styles.product__breakdown__image}>
                                            <img src={require("../images/155.png")} width="91px" /></div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.t__h3}>
                                                <font>获取</font>
                                            </div>
                                            <div className={styles.t__small_s}>
                                                <font>通过主动对话、应用内消息互动、邮件营销、短信营销、微信 营销和智能外呼获取更多商机</font>
                                            </div>
                                            <div className={styles.product__learn_more} style={{margin:"80px"}}>
                                                <span>
                                                    <font className={styles.smallerbiaoti}>了解更多</font>
                                                </span>                  
                                            </div>                
                                    </a>
                                </div>

                                <div className={styles.chuangjian_tranform2}>
                                    <a href="#xiushi" className={styles.lianjie}>
                                        <div className={styles.product__breakdown__image}>
                                            <img src={require("../images/156.png")} width="91px" /></div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.t__h3}>
                                                <font>评价</font>
                                            </div>
                                            <div className={styles.t__small_s}>
                                                <font>通过机器学习自动评估商机质量，并将合适的商机转给合适的销售人员，安排销售会议或与您的CRM系统同步信息
                                                </font>
                                            </div>
                                            <div className={styles.product__learn_more} style={{margin:"80px"}}>
                                                <span>
                                                    <font className={styles.smallerbiaoti}>了解更多</font>
                                                </span>                  
                                            </div>                
                                    </a>
                                </div>
                                

                                <div className={styles.chuangjian_tranform3}>
                                    <a href="#duihuan" className={styles.lianjie}>
                                        <div className={styles.product__breakdown__image}>
                                            <img src={require("../images/157.png")} width="91px" /></div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.t__h3}>
                                                <font>转化</font>
                                            </div>
                                            <div className={styles.t__small_s}>
                                                <font>通过实时聊天和消息互动完成商机转化
                                                </font>
                                            </div>
                                            <div className={styles.product__learn_more} style={{margin:"80px"}}>
                                                <span>
                                                    <font className={styles.smallerbiaoti}>了解更多</font>
                                                </span>                  
                                            </div>                
                                    </a>
                                </div>



                                <div className={styles.chuangjian_tranform4}>
                                    <a href="#celiang" className={styles.lianjie}>
                                        <div className={styles.product__breakdown__image}>
                                            <img src={require("../images/158.png")} width="91px" /></div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.t__h3}>
                                                <font>测量</font>
                                            </div>
                                            <div className={styles.t__small_s}>
                                                <font>实时了解商机转化数量，商机来源等信息，评估营销质量</font>
                                            </div>
                                            <a name="huode"></a>
                                            <div className={styles.product__learn_more} style={{margin:"80px"}}>
                                                <span>
                                                    <font className={styles.smallerbiaoti}>了解更多</font>
                                                </span>                  
                                            </div>                
                                    </a>
                                </div>
                                
                            </div>                        
                        </div>
                    </div>
                </section>

                <section >
                    
                    <div className={styles.container_z}>
                        <div className={styles.g__row}>
                            <div className={styles.g__c6}>
                                <div className={styles.u__inline}>
                                    <div className={styles.g__row}>
                                        <div className={styles.g__c}>
                                            <a href="" className={styles.f__no_und_always}>
                                                <font className={styles.hezuo1}>
                                                    获取
                                                </font>
                                            </a>
                                        </div>

                                        <div className={styles.g__c}>
                                            <a href="#xiushi" className={styles.f__no_und_always}>
                                                <font className={styles.zidonghua}>
                                                    评价
                                                </font>
                                            </a>
                                        </div>

                                        <div className={styles.g__c}>
                                            <a href="#duihuan" className={styles.f__no_und_always}>
                                                <font className={styles.guimo}>
                                                    转换
                                                </font>
                                            </a>
                                        </div>

                                        <div className={styles.g__c}>
                                            <a href="#zeliang" className={styles.f__no_und_always}>
                                                <font className={styles.tigao}>
                                                    测量
                                                </font>
                                            </a>
                                        </div>                
                                    </div>
                                </div>
                                <div style={{height:"20px"}}></div>
                                <h3 className={styles.t__h2}>
                                    <font>
                                        通过定制化的自动消息转化更多网页访客
                                    </font>
                                </h3>
                                <div style={{height:"10px"}}></div>
                                <div className={styles.max__600}>
                                    <font>通过访客在线时与其实时互动而不是冗长的表单转化客户

                                    </font>
                                </div>
                            </div>
                            
                            <div className={styles.g__c6}>
                                <div className={styles.js__gallery}>
                                    <div className={styles.u__inline}>
                                        <div className={styles.gallery}>
                                            <div className={styles.gallery__img}>
                                                <img width="587" src={require("../images/75.png")} />
                                            </div>                    
                                        </div>
                                    </div>
                                </div>
                            </div>            
                        </div>
                        <div style={{display:"block"}}></div>       
                        <div className={styles.g__row}>
                            <div className={styles.g__c1}></div>
                            <div className={styles.g__c9}>
                                <div className={styles.g__row}>
                                    <div className={styles.g__c12}></div>

                                    <div className={styles.g__c6_transform}>
                                        <div className={styles.f__left}>
                                            <div className={styles.product__feature_icon}>
                                                <img src="https://upload-images.jianshu.io/upload_images/12406336-acd7309f5cf61fa5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                            </div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.sp__left_4}>
                                                <div className={[styles.t__small,styles.f__bold]}>
                                                    <font>针对目标客群</font>
                                                </div>
                                                <div className={styles.t__small}>
                                                    <font>
                                                        通过访客的行为和推荐网址定位目标客户
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.g__c6_transform}>
                                        <div className={styles.f__left}>
                                            <div className={styles.product__feature_icon}>
                                                <img src="https://upload-images.jianshu.io/upload_images/12406336-acd7309f5cf61fa5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                            </div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.sp__left_4}>
                                                <div className={[styles.t__small,styles.f__bold]}>
                                                    <font>定制化聊天组件</font>
                                                </div>
                                                <div className={styles.t__small}>
                                                    <font>
                                                        可以针对不同的访客，不同的时间在网页不同的位置显示定制化聊天组件
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*<div className={styles.g__c6}>
                                        <div className={styles.f__left}>
                                        <div className={styles.product__feature_icon}>
                                        <img src="https://upload-images.jianshu.io/upload_images/12406336-acd7309f5cf61fa5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                        </div>
                                        <div style={{height:"10px"}}></div>
                                        <div className={styles.sp__left_4}>
                                        <div className={[styles.t__small,styles.f__bold]}>
                                        <font>数据丰富</font>
                                        </div>
                                        <div className={styles.t__small}>
                                        <font>使用Clearbit Reveal等数据集成仅针对最佳潜在客户
                                        </font>
                                        </div>
                                        </div>
                                        </div>
                                        </div>*/}

                                    <div className={styles.g__c6}>
                                        <div className={styles.f__left}>
                                            <div className={styles.product__feature_icon}>
                                                <img src="https://upload-images.jianshu.io/upload_images/12406336-acd7309f5cf61fa5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                            </div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.sp__left_4}>
                                                <div className={[styles.t__small,styles.f__bold]}>
                                                    <font>A / B测试</font>
                                                </div>
                                                <div className={styles.t__small}>
                                                    <font>通过变量测试提高自动消息的效果
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>           
                </section>
                

                <section className={styles.section}>
                    <a name="xiushi"></a>
                    <div className={styles.container_z} style={{maxWidth:"1300px"}}>
                        <div className={styles.support_automate}>
                            <div className={styles.g__c7}>  
                                <div className={styles.g__c6_s}>
                                    <div className={styles.u__inline}>
                                        <div className={styles.g__row}>
                                            <div className={styles.g__c}>
                                                <a href="#huode" className={styles.f__no_und_always}>
                                                    <font className={styles.hezuo}>
                                                        获取
                                                    </font>
                                                </a>
                                            </div>

                                            <div className={styles.g__c}>
                                                <a href="#xiushi" className={styles.f__no_und_always}>
                                                    <font className={styles.zidonghua1}>
                                                        评价
                                                    </font>
                                                </a>
                                            </div>

                                            <div className={styles.g__c}>
                                                <a href="#duihuan" className={styles.f__no_und_always}>
                                                    <font className={styles.guimo}>
                                                        转换
                                                    </font>
                                                </a>
                                            </div>

                                            <div className={styles.g__c}>
                                                <a href="#celiang" className={styles.f__no_und_always}>
                                                    <font className={styles.tigao}>
                                                        测量
                                                    </font>
                                                </a>
                                            </div>                
                                        </div>
                                    </div>
                                    <div style={{height:"20px"}}></div>
                                    <h3 className={styles.t__h2}>
                                        <font>
                                            自动评估商机价值和分配
                                        </font>
                                    </h3>
                                    <div style={{height:"10px"}}></div>
                                    <div className={styles.max__600}>
                                        <font>
                                            自动评估商机质量，将其分配给合适的处理部门，自动安排与商机的销售会议，并与CRM系统同步

                                        </font>
                                        
                                    </div>                            
                                </div>                        
                            </div>
                            <div className={styles.live_chat__qualify_content}>
                                <div style={{height:"30px"}}></div>
                                <div className={styles.live_chat__qualify__inner}>
                                    <div className={styles.g__row_center}>
                                        <div className={styles.g__c4__relative}>
                                            <div className={styles.live_chat__label}>
                                                <font>评估商机
                                                </font>
                                            </div>
                                            <div style={{height:"20px"}}></div>
                                            <img width="340" src="https://marketing.intercomassets.com/assets/live-chat2/qualify/1-2x-330b08ec645de23f33fc29a9cfbadf9c7d01ce9a3107b93479f917e08403fdbd.png#340" />
                                            <img width="19" className={styles.live_chat__qualify__arrow} src="https://marketing.intercomassets.com/assets/live-chat/v2/arrow-b3f28513f982707e60f53c893ea5248a10b14927b952e715d3b757c195685b1b.svg" />
                                        </div>
                                        
                                        <div className={styles.g__c4__relative}>
                                            <div className={styles.live_chat__label}>
                                                <font>
                                                    安排会议
                                                </font>
                                            </div>
                                            <div style={{height:"20px"}}></div>
                                            <img width="340" src="https://marketing.intercomassets.com/assets/live-chat2/qualify/2-7332e317e8d00da67cb4a9afab4459539660fc0b841dc6cff2682e4a9af77092.png#340" />
                                            <img width="19" className={styles.live_chat__qualify__arrow} src="https://marketing.intercomassets.com/assets/live-chat/v2/arrow-b3f28513f982707e60f53c893ea5248a10b14927b952e715d3b757c195685b1b.svg" />
                                        </div>
                                        
                                        <div className={styles.g__c4__relative}>
                                            <div className={styles.live_chat__label}>
                                                <font>使Salesforce保持同步{/*需要改一下*/}
                                                </font>
                                            </div>
                                            <div style={{height:"20px"}}></div>
                                            
                                            <img width="340" src="https://marketing.intercomassets.com/assets/live-chat2/qualify/3-2x-6027ed1a6f09fc3ab366754757377c9c1309f85bbce4e6c54c003e655b5a992b.png#341" />                                                             </div>                                   
                                    </div>

                                    
                                </div>
                            </div>
                        </div>                                             
                    </div>                  
                </section>
                <div style={{height:"150px"}}></div>
                <a name="duihuan"></a>
                <div style={{height:"50px"}}></div>
                
                <section className={styles.section}>
                    
                    <div className={styles.container_z} style={{maxWidth:"1404px"}}>
                        <div className={styles.g__row_z}>
                            <div className={styles.g__c6}>
                                <img width="650" src="https://marketing.intercomassets.com/assets/live-chat2/convert/inbox-f3242d03ffdfe35804feb05268e6757426815c8cb1501c48f7f7a6d2523d50f0.png" />
                            </div>
                            <div className={styles.g__c5_z}>

                                
                                <div className={styles.u__inline}>
                                    <div className={styles.g__row}>
                                        <div className={styles.g__c}>
                                            <a href="#huode" className={styles.f__no_und_always}>
                                                <font className={styles.hezuo}>
                                                    获取
                                                </font>
                                            </a>
                                        </div>

                                        <div className={styles.g__c}>
                                            <a href="#xiushi" className={styles.f__no_und_always}>
                                                <font className={styles.zidonghua}>
                                                    评价
                                                </font>
                                            </a>
                                        </div>

                                        <div className={styles.g__c}>
                                            <a href="#duihuan" className={styles.f__no_und_always}>
                                                <font className={styles.guimo1}>
                                                    转换
                                                </font>
                                            </a>
                                        </div>

                                        <div className={styles.g__c}>
                                            <a href="#celiang" className={styles.f__no_und_always}>
                                                <font className={styles.tigao}>
                                                    测量
                                                </font>
                                            </a>
                                        </div>                
                                    </div>
                                </div>
                                <div style={{height:"20px"}}></div>
                                <h3 className={styles.t__h2}>
                                    <font>
                                        通过与最好的商机快速建立联系实现商机转化

                                    </font>
                                </h3>
                                <div style={{height:"10px"}}></div>
                                <div className={styles.max__550}>
                                    <font className={styles.tigongzhichi}>
                                        机器人将评估合格的商机自动分配给合适的销售人员或销售团队

                                    </font>
                                </div>
                                
                                
                            </div>          
                        </div>
                        <div className={styles.g__row} style={{display:"block"}}>
                            <div className={styles.g__c2}></div>
                            <div className={styles.g__c7}>
                                <div className={styles.g__row} >
                                    {/* 添加区域 ，下方卡片文字都要改*/}

                                    <div className={styles.g__c6_transform}>
                                        <div className={styles.f__left}>
                                            <div className={styles.product__feature_icon}>
                                                <img src="https://upload-images.jianshu.io/upload_images/12406336-acd7309f5cf61fa5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                            </div>
                                            
                                            <div className={styles.sp__left_4}>
                                                <div className={[styles.t__small,styles.f__bold]}>
                                                    <font>分配策略</font>
                                                </div>
                                                <div className={styles.t__small}>
                                                    <font>
                                                        访客的属性和行为和业务特性生成灵活多变的分配策略
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.g__c6_transform}>
                                        <div className={styles.f__left}>
                                            <div className={styles.product__feature_icon}>
                                                <img src="https://upload-images.jianshu.io/upload_images/12406336-acd7309f5cf61fa5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                            </div>
                                            
                                            <div className={styles.sp__left_4}>
                                                <div className={[styles.t__small,styles.f__bold]}>
                                                    <font>呼叫中心APP</font>
                                                </div>
                                                <div className={styles.t__small}>
                                                    <font>
                                                        通过PPMessage 呼叫中心APP可与潜在用户快速通话并完成交易
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.g__c6_transform}>
                                        <div className={styles.f__left}>
                                            <div className={styles.product__feature_icon}>
                                                <img src="https://upload-images.jianshu.io/upload_images/12406336-acd7309f5cf61fa5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                            </div>
                                            
                                            <div className={styles.sp__left_4}>
                                                <div className={[styles.t__small,styles.f__bold]}>
                                                    <font>促销应用程序</font>
                                                </div>
                                                <div className={styles.t__small}>
                                                    <font>
                                                        通过促销应用程序可以轻松给访客发送个性化定价优惠并通过聊天完成客户转化
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className={styles.g__c6_transform}>
                                        <div className={styles.f__left}>
                                            <div className={styles.product__feature_icon}>
                                                <img src="https://upload-images.jianshu.io/upload_images/12406336-acd7309f5cf61fa5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                            </div>
                                            
                                            <div className={styles.sp__left_4}>
                                                <div className={[styles.t__small,styles.f__bold]}>
                                                    <font>移动端</font>
                                                </div>
                                                <div className={styles.t__small}>
                                                    <font>
                                                        通过iOS和Android客户端可以随时随地获取提醒并回复客户咨询
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div className={styles.container__narrower} style={{maxWidth:"1200px"}}>
                            <div style={{height:"150px"}}></div>
                            <div className={styles.g__row}>
                                <div className={styles.g__c6}>
                                    <h3 className={styles.t__h2}>
                                        <font>通过在一段时间内向目标客户发送一系列定制化消息转化更多客户
                                        </font>
                                    </h3>
                                    <div style={{height:"20px"}}></div>
                                    <div className={styles.u__inline}>
                                        <ul className={styles.list__bullet}>
                                            <li><font>将目标客户添加了一个细流营销计划中

                                            </font>
                                            </li>
                                            <li><font>微信、短信、电话、邮件、网站全渠道联动营销 

                                            </font>
                                            </li>
                                            <li><font>使用A / B测试测量和优化营销效果
                                            </font>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className={styles.g__c6}>
                                    <img width="500" src={require("../images/159.png")} />
                                </div>
                            </div>
                            <a name="celiang"></a>
                        </div>
                        
                    </div>
                </section>
                

                <section className={styles.section}>
                    
                    <div className={styles.container_s}>
                        <div className={styles.g__row_z}>
                            <div className={styles.g__c6}>
                                <StackGallery images={_images}>
                                </StackGallery>
                            </div>
                            <div className={styles.g__c5_z}>
                                <div className={styles.u__inline}>
                                    <div className={styles.g__row}>
                                        <div className={styles.g__c}>
                                            <a href="#huode" className={styles.f__no_und_always}>
                                                <font className={styles.hezuo}>
                                                    获取
                                                </font>
                                            </a>
                                        </div>

                                        <div className={styles.g__c}>
                                            <a href="#xiushi" className={styles.f__no_und_always}>
                                                <font className={styles.zidonghua}>
                                                    评价
                                                </font>
                                            </a>
                                        </div>

                                        <div className={styles.g__c}>
                                            <a href="#duihuan" className={styles.f__no_und_always}>
                                                <font className={styles.guimo}>
                                                    转换
                                                </font>
                                            </a>
                                        </div>

                                        <div className={styles.g__c}>
                                            <a href="#" className={styles.f__no_und_always}>
                                                <font className={styles.tigao1}>
                                                    测量
                                                </font>
                                            </a>
                                        </div>                
                                    </div>
                                </div>
                                <div style={{height:"20px"}}></div>
                                <h3 className={styles.t__h2}>
                                    <font>
                                        评估商机转化效果 
                                    </font>
                                </h3>
                                <div style={{height:"10px"}}></div>
                                <div className={styles.max__550}>
                                    <ul className={styles.list__bullet}>
                                        <li><font>查看单位时间捕获的商机数量
                                        </font>
                                        </li>
                                        <li><font>了解您的响应时间
                                        </font>
                                        </li>
                                        <li><font>了解哪些消息产生了最多商机
                                        </font>
                                        </li>
                                        <li><font>查看向CRM系统发送了多少合格商机
                                        </font>
                                        </li>
                                    </ul>
                                </div>
                                
                                
                            </div>



                            
                        </div>
                    </div>
                </section>



                


                
            </div>
	    </Layout>
    )
}

