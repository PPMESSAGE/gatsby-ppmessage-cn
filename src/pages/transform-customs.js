import React from "react";
import EnterYourMobile from "../components/enteryourmobile";
import styles from "./about-css-modules.module.css";
import StackGallery from "../components/stackgallery";


export default () => {
    let _images = [
        {
            src: "https://marketing.intercomassets.com/assets/live-chat2/measure/1-2x-d6fa79bcfeb9a3b928a80a2c0360e1c2e4e9158bd18a0edcdbd290aa2c6b8ad5.png#508"
        },
        

        {
            src: "https://marketing.intercomassets.com/assets/live-chat2/measure/2-2x-1a540b52b4e709dc66972441bfadd74e0d57fdb5308809dfb166f116136cafcc.png#508"
        },

        {
            src: "https://marketing.intercomassets.com/assets/live-chat2/measure/3-2x-85eab7b666ae6632cfb1e20ce20642799c081b0edb29d3dac13179e4eb924ae0.png#508"
        },
        

    ]

    return (
        <div>
            <div style={{height:"72px"}}></div>

            <div style={{height:"72px"}}></div>
            <div className={styles.container}>
                <div style={{height:"20px",display:"block"}}></div>
                <div className={styles.g__row}>
                    <div className={styles.g__c6}>
                        <span className={styles.f__medium}>
                            <div style={{width:"200px" }}><h2>获取和转化销售线索</h2></div>
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.bg__light}>
                    
                    <div className={styles.u__hidden}>
                        <img width="528" src="https://marketing.intercomassets.com/assets/support/v2/hero-left-2x-dbbbedb76aea9680a1b13a83ebd770c988978b78dde5e37c913abf9e84faafc4.png" />
                    </div>
                    <div className={styles.u__hidden1}>
                        <img width="462" src="https://marketing.intercomassets.com/assets/support/v2/hero-right-638326fa13fee86eda086cc9ff795ac97eac110533c727b14aece7b88acb4daa.png" />
                    </div>
                    <div className={styles.u__zfix}>

                        <div style={{width:"1317px"}}></div>
                        <h1 className={styles.t__h1_s}>
                            获取更多商机并达成更多交易
                        </h1>
                        <div style={{height:"10px"}}></div>
                        <h2 className={styles.t__h3_d}>
                            <font>通过网页主动消息、在线聊天、策略性的推送应用内消息、邮件、短信和智能语音外呼快速获取更多商机；通过机器学习实时评估商机质量并自动分配，提升商机转化率
                            </font>
                        </h2>
                        <div style={{height:"20px"}}></div>
                        <div className={styles.u__inline}>
                            <EnterYourMobile size="middle" />
                        </div>
                        <div style={{height:"10px"}}></div>
                        <div className={styles.t__small}>
                            免费试用14天 易于安装 
                        </div>          
                    </div>        
                </div>
            </div>

            <div style={{height:'20px'}}></div>
            <div className={styles.section}>
                <div className={styles.contain8}>
                    <div className={styles.u__hidden__md}>
                        <div className={styles.f__center}>
                            <font className={styles.fangwen}>
                                如果访问者在网站上使用 PPMESSAGE 的实时聊天功能，他们转换的可能性将增加82％
                            </font>
                        </div>
                    </div>
                </div>

                <div className={styles.contain8} style={{maxWidth:"750px",marginTop:"80px"}}>
                    <div className={styles.g__row}>
                        <div className={styles.g__c4}>
                            <div className={styles.g__row_o__tight__large}>
                                <div className={styles.g__c12}>
                                    <img src="https://marketing.intercomassets.com/assets/live-chat/v2/tradeshift-df891c67ad1a6cf837436c487908dbadfd60b9511b5794a39534495b1852c6ac.png" width="145px" />
                                    <div style={{height:'10px'}}></div>
                                    <div>
                                        <font>
                                            合格销售额增加32％，销售周期缩短18天
                                        </font>
                                    </div>
                                </div>
                                <div className={styles.g__c12}>  
                                    <img src="https://marketing.intercomassets.com/assets/live-chat/v2/copper-baa5534d2b8fd524250ad341d620708271059a3cab6ec2ff9e87d3e76fed8240.svg" />
                                    <div>
                                        <font>
                                            在短短一个月内，使用PPMESSAGE带来了36,000美元
                                        </font>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.g__c8}>
                            <div className={styles.max__400}>
                                <font>“PPMESSAGE推动40％的销售演示预订，比之前的实时聊天工具提高了8倍”</font>            
                                <div style={{height:"30px"}}></div>
                                <img src="https://marketing.intercomassets.com/assets/live-chat/v2/salesloft-51a4dfb4c79281ea3282851c2f29333de9ff5c9d2c7f8720f6068a3d0d9b149d.png" width="149px" />
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
            <section className={styles.section_o__no_bottom}>
                <div className={styles.container}>
                    <div className={styles.g__row}>

                        <div>

                            <div className={styles.chuangjian} style={{margin:"22px",paddingRight:"0"}}>
                                <a href="#huode" className={styles.lianjie}>
                                    <div className={styles.product__breakdown__image}>
                                        <img src="https://marketing.intercomassets.com/assets/live-chat/v2/capture-6cd1e65484e3cc8bc579ae4ba69db31ad254a0db01313b47191f131567fbc2b6.png" width="91px" /></div>
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

                            <div className={styles.chuangjian} style={{margin:"22px 50px",paddingRight:"0"}}>
                                <a href="#xiushi" className={styles.lianjie}>
                                    <div className={styles.product__breakdown__image}>
                                        <img src="https://marketing.intercomassets.com/assets/live-chat/v2/qualify-2cde0bea6a097ea7de52c892e75dd0e311360680497721521d05eb12d9622994.png" width="91px" /></div>
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
                            

                            <div className={styles.chuangjian} style={{margin:"22px 50px",paddingRight:"0"}}>
                                <a href="#duihuan" className={styles.lianjie}>
                                    <div className={styles.product__breakdown__image}>
                                        <img src="https://marketing.intercomassets.com/assets/live-chat/v2/convert-2f21b347ebaf5cdd5454fbcbb817658899487f69a088d9d06f5bef68dcf0c7cf.png" width="91px" /></div>
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



                            <div className={styles.chuangjian} style={{margin:"0px",paddingRight:"0"}}>
                                <a href="#celiang" className={styles.lianjie}>
                                    <div className={styles.product__breakdown__image}>
                                        <img src="https://marketing.intercomassets.com/assets/live-chat/v2/measure-2fc6b218e130f27b61f8bd2868fe6585d790bb542c307358a4c160933a3c661b.png" width="91px" /></div>
                                        <div style={{height:"10px"}}></div>
                                        <div className={styles.t__h3}>
                                            <font>测量</font>
                                        </div>
                                        <div className={styles.t__small_s}>
                                            <font>实时了解商机转化数量，商机来源等信息，评估营销质量</font>
                                        </div>
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
                <a name="huode"></a>
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
                                            <img width="587" src="https://marketing.intercomassets.com/assets/support/v2/collaborate-1-1ae4aeb5eb197541c758ca5a610e6d8a87e1eef46d3916b6392803dff9ada9c2.png" />
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

                                <div className={styles.g__c6}>
                                    <div className={styles.f__left}>
                                        <div className={styles.product__feature_icon}>
                                            <img src="https://upload-images.jianshu.io/upload_images/12406336-acd7309f5cf61fa5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                        </div>
                                        <div style={{height:"10px"}}></div>
                                        <div className={styles.sp__left_4}>
                                            <div className={[styles.t__small,styles.f__bold]}>
                                                <font>针对目标</font>
                                            </div>
                                            <div className={styles.t__small}>
                                                <font>通过访客的行为和推荐网址定位目标客户
                                                </font>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
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

                                {/* <div className={styles.u__center}>
                                    <div className={styles.g__row_fill_pink}>
                                    <div className={styles.g__c4_5}>
                                    <div className={styles.f__left}>
                                    <div className={styles.product__feature_icon}>
                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-acd7309f5cf61fa5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                    </div>
                                    
                                    <div className={styles.sp__left_4}>
                                    <div className={[styles.t__small,styles.f__bold]}>
                                    <font>资格和路线</font>
                                    </div>
                                    <div className={styles.t__small}>
                                    <font>运营商对潜在用户</font>
                                    </div>
                                    </div>
                                    </div>
                                    </div>

                                    <div className={styles.g__c4_5}>
                                    <div className={styles.f__left}>
                                    <div className={styles.product__feature_icon}>
                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-acd7309f5cf61fa5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                    </div>
                                    
                                    <div className={styles.sp__left_4}>
                                    <div className={[styles.t__small,styles.f__bold]}>
                                    <font>会议安排</font>
                                    </div>
                                    <div className={styles.t__small}>
                                    <font>操作员自动安排销售会议与最佳潜在客户，24 // 7</font>
                                    </div>
                                    </div>
                                    </div>
                                    </div>


                                    <div className={styles.g__c4_5}>
                                    <div className={styles.f__left}>
                                    <div className={styles.product__feature_icon}>
                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-acd7309f5cf61fa5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                    </div>
                                    
                                    <div className={styles.sp__left_4}>
                                    <div className={[styles.t__small,styles.f__bold]}>
                                    <font>CRM整合</font>
                                    </div>
                                    <div className={styles.t__small}>
                                    <font>集成并自动将数据同步到Salesforce，Hubspot等</font>
                                    </div>
                                    </div>
                                    </div>
                                    </div>                                                                   </div>
                                    </div>*/}
                            </div>
                        </div>
                    </div>                                             
                </div>                  
            </section>

            <div style={{height:"200px"}}></div>
            
            <section className={styles.section}>
                <a name="duihuan"></a>
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

                                <div className={styles.g__c6}>
                                    <div className={styles.f__left}>
                                        <div className={styles.product__feature_icon}>
                                            <img src="https://upload-images.jianshu.io/upload_images/12406336-acd7309f5cf61fa5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                        </div>
                                        
                                        <div className={styles.sp__left_4}>
                                            <div className={[styles.t__small,styles.f__bold]}>
                                                <font>引导路由</font>
                                            </div>
                                            <div className={styles.t__small}>
                                                <font>根据帐户所有者，位置等自动分配潜在客户或通过循环自动分配潜在客户</font>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.f__left}>
                                        <div className={styles.product__feature_icon}>
                                            <img src="https://upload-images.jianshu.io/upload_images/12406336-acd7309f5cf61fa5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                        </div>
                                        
                                        <div className={styles.sp__left_4}>
                                            <div className={[styles.t__small,styles.f__bold]}>
                                                <font>Aircall和Google Meet Apps</font>
                                            </div>
                                            <div className={styles.t__small}>
                                                <font>使用我们的Aircall和Google Meet应用程序通过热门潜在客户开始通话，以便更快地关闭它们</font>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.f__left}>
                                        <div className={styles.product__feature_icon}>
                                            <img src="https://upload-images.jianshu.io/upload_images/12406336-acd7309f5cf61fa5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                        </div>
                                        
                                        <div className={styles.sp__left_4}>
                                            <div className={[styles.t__small,styles.f__bold]}>
                                                <font> 条纹应用程序</font>
                                            </div>
                                            <div className={styles.t__small}>
                                                <font> 轻松发送个性化定价优惠给潜在客户在聊天时转换它们</font>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className={styles.g__c6}>
                                    <div className={styles.f__left}>
                                        <div className={styles.product__feature_icon}>
                                            <img src="https://upload-images.jianshu.io/upload_images/12406336-acd7309f5cf61fa5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                        </div>
                                        
                                        <div className={styles.sp__left_4}>
                                            <div className={[styles.t__small,styles.f__bold]}>
                                                <font>移动应用</font>
                                            </div>
                                            <div className={styles.t__small}>
                                                <font>使用我们的iOS和Android应用随时随地获取提醒并回复热门潜在客户</font>
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
                                <img width="472" src="https://marketing.intercomassets.com/assets/live-chat/v2/convert-ill-7a3e7f136e8dc31a226803d418e2d20d3e4fce8a373a93e95f7983e878179c96.png" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            

            <section className={styles.section}>
                <a name="celiang"></a>
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



            <section className={styles.section}>
                <div className={styles.container__center}>
                    <div className={styles.u__relative__inline_block}>
                        <img style={{width:"145px",position:"absolute",top:"-100px",left:"-200px"}} src="https://marketing.intercomassets.com/assets/live-chat/v2/bg-1-93e7e5736917bfdd8b5d2bdd444277fc1cb96447db40b5b2870219c6cb8b5d14.png" />
                        <h2 className={styles.t__h2__center}>
                            <font>通过定制化与您的业务流程无缝集成
                            </font>
                        </h2>
                        <p className={styles.u__center__f__center}>
                            <font>我们的集成库和灵活的API意味着您可以轻松地将PPmessage融入您的业务流程
                            </font>
                        </p>
                    </div>                 
                </div>
                <div className={styles.container__integrations_container}>
                    <div className={styles.u__hidden__md}>
                        <img  style={{width:"355px",position:"absolute",bottom:"-220px",left:"-80px"}} src="https://marketing.intercomassets.com/assets/live-chat/v2/bg-3-2x-2fd827c15719c6c837caf516bb8156b5007cea46609a59ae6c92b5ca394789db.png" />
                        <img style={{width:"276px",top:"-80px",right:"-150px",position:"absolute" }} src="https://marketing.intercomassets.com/assets/live-chat/v2/bg-2-2x-54dd0a9df45cb920f34c3aa2853fe39321c572e6e558058f893c969141f9777c.png" />
                    </div>
                    <div className={styles.u__zfix}>
                        <div style={{height:"40px"}}></div>          
                        <div className={styles.g__row_9}>
                            
                            <div className={styles.g__c4_z}>
                                <a className={styles.integration_card} href="#">
                                    <div className={styles.intergration__card__logo}>
                                        <img src="https://marketing.intercomassets.com/demand-generation/direct-response/1510274705-_salesforce.svg" />
                                    </div>
                                    
                                    <div className={styles.f__bold_7}>
                                        <font>销售队伍</font>
                                    </div>
                                    <div style={{height:"5px"}}></div>
                                    <div className={styles.f__light_7}>
                                        <font>创建潜在客户并将对话发送到Salesforce，并在Intercom中使用Salesforce数据。</font>
                                    </div>
                                </a>
                            </div>
                            <div className={styles.g__c4_z}>
                                <a className={styles.integration_card} href="#">
                                    <div className={styles.intergration__card__logo}>
                                        <img src="https://marketing.intercomassets.com/demand-generation/direct-response/1510274724-_segment.svg" />
                                    </div>
                                    
                                    <div className={styles.f__bold_7}>
                                        <font>分割</font>
                                    </div>
                                    <div style={{height:"5px"}}></div>
                                    <div className={styles.f__light_7}>
                                        <font>将来自任何Web，移动和服务器应用程序的用户数据同步到内部通信。</font>
                                    </div>
                                </a>
                            </div>
                            <div className={styles.g__c4_z}>
                                <a className={styles.integration_card} href="#">
                                    <div className={styles.intergration__card__logo}>
                                        <img src="https://marketing.intercomassets.com/demand-generation/direct-response/1510274623-_mailchimp.svg" />
                                    </div>
                                    
                                    <div className={styles.f__bold_7}>
                                        <font>MailChimp</font>
                                    </div>
                                    <div style={{height:"5px"}}></div>
                                    <div className={styles.f__light_7}>
                                        <font>从Messenger捕获和同步订阅者</font>
                                    </div>
                                </a>
                            </div>            
                        </div>
                        <div style={{height:"30px"}}></div>
                        <a href=" " ><font>查看更多应用</font></a>
                        <div className={styles.f__center}>
                            
                        </div>
                    </div>
                </div>
                <div style={{height:"70px"}}></div>
            </section>


            
        </div>
    )
}

