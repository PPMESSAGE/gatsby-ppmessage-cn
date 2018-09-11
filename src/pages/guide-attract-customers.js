import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";

export default () => (
    <div className={styles.heiti}>
        <div style={{height:"72px"}}></div>
        <div className={styles.container}>
            <div style={{height:"20px",display:"block"}}></div>
            <div className={styles.g__row}>
                <div className={styles.g__c6}>
                    <span className={styles.f__medium}>
                        <div style={{width:"200px" }}><h2>引导和吸引客户</h2></div>
                    </span>
                </div>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.bg__light}>
                <div className={styles.u__hidden}>
                    <img src="https://marketing.intercomassets.com/assets/customer-engagement/v2/hero-left-53e26fada124e332358e97f71e491e13df22da4c0f62e0476629e25fc4166a1c.png" />
                </div>
                <div className={styles.u__hidden1}>
                    <img src="https://marketing.intercomassets.com/assets/customer-engagement/v2/hero-right-95b0063500935f9e1adbb1802599f40066273dc2a492bdd35e2913b12b8bbd7f.png" />
                </div>
                <div className={styles.u__zfix}>
                    <h1 className={styles.t__h1}>
                        将更多注册用户转变为活跃的付费客户
                    </h1>
                    <div style={{height:"10px"}}></div>
                    <h2 className={styles.t__h3}><font>根据用户渠道偏好，通过应用内消息、智能语音、邮件、短信、微信等各种渠道向目标用户发送有针对性的消息，培育和激活用户，提高用户参与度，宣布新功能等
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
                            超过25,000家公司使用 PPMESSAGE 进行客户互动
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
                                        “通过内部通信，我们可以获得所需的见解，不断改善客户体验，并在最佳时刻向人们发送消息。”
                                    </font>
                                </div>
                            </div>
                            <div className={styles.g__c12}>  
                                <img src="https://marketing.intercomassets.com/assets/live-chat/v2/copper-baa5534d2b8fd524250ad341d620708271059a3cab6ec2ff9e87d3e76fed8240.svg" />
                                <div>
                                    <font>
                                        在短短一个月内，Copper使用对讲机为ARR带来了36,000美元ARR的19个新机会
                                    </font>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.g__c8}>
                        <div className={styles.max__400}>
                            <font>“Intercom推动40％的销售演示预订，比之前的实时聊天工具提高了8倍”</font>            
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

                    <div className={styles.g__c3}>

                        <div className={styles.chuangjian} style={{margin:"22px",width:"300px" }}>
                            <a href="#xifen" className={styles.lianjie}>
                                <div className={styles.product__breakdown__image}>
                                    <img src="https://marketing.intercomassets.com/assets/customer-engagement/v2/breakdown/target-f96c9064c98b54c0e9fe298d0baa639663cdbadb32a0b6913867e73fb666a56d.png" width="91px" /></div>
                                    <div style={{height:"10px"}}></div>
                                    <div className={styles.t__h3}>
                                        <font>细分</font>
                                    </div>
                                    <div className={styles.t__small_s}>
                                        <font>根据行为和时间细分客户</font>
                                    </div>
                                    <div className={styles.product__learn_more}>
                                        <span>
                                            <font className={styles.smallerbiaoti}>了解更多</font>
                                        </span>                  
                                    </div>                
                            </a>
                        </div>

                        <div className={styles.chuangjian} style={{margin:"22px",width:"300px"}}>
                            <a href="#yindao" className={styles.lianjie}>
                                <div className={styles.product__breakdown__image}>
                                    <img src="https://marketing.intercomassets.com/assets/customer-engagement/v2/breakdown/onboard-f0e494daf9532d50b086cc327af36a81f0dff11aaa8a9fc0bdf157f84e7664be.png" width="91px" /></div>
                                    <div style={{height:"10px"}}></div>
                                    <div className={styles.t__h3}>
                                        <font>培育</font>
                                    </div>
                                    <div className={styles.t__small_s}>
                                        <font>发送一系列定制化自动消息引导客户使用产品</font>
                                    </div>
                                    <div className={styles.product__learn_more}>
                                        <span>
                                            <font className={styles.smallerbiaoti}>了解更多</font>
                                        </span>                  
                                    </div>                
                            </a>
                        </div>
                        

                        <div className={styles.chuangjian} style={{margin:"22px",width:"300px"}}>
                            <a href="#fabu" className={styles.lianjie}>
                                <div className={styles.product__breakdown__image}>
                                    <img src="https://marketing.intercomassets.com/assets/customer-engagement/v2/breakdown/announce-67630a5d3bc4b21498f87c58fa4b82d55c99ae042c3014b7acd30872e4d3cb28.png" width="91px" /></div>
                                    <div style={{height:"10px"}}></div>
                                    <div className={styles.t__h3}>
                                        <font>发布</font>
                                    </div>
                                    <div className={styles.t__small_s}>
                                        <font>发布产品新特性，提高产品使用率，增加营业额
                                        </font>
                                    </div>
                                    <div className={styles.product__learn_more}>
                                        <span>
                                            <font className={styles.smallerbiaoti}>了解更多</font>
                                        </span>                  
                                    </div>                
                            </a>
                        </div>



                        <div className={styles.chuangjian} style={{margin:"22px",width:"300px"}}>
                            <a href="#pinggu" className={styles.lianjie}>
                                <div className={styles.product__breakdown__image}>
                                    <img src="https://marketing.intercomassets.com/assets/customer-engagement/v2/breakdown/measure-313c6beda960cad1dcc4f55802724d75a03219e22aebcea5f8390c7c7188e1e7.png" width="91px" /></div>
                                    <div style={{height:"10px"}}></div>
                                    <div className={styles.t__h3}>
                                        <font>评估</font>
                                    </div>
                                    <div className={styles.t__small_s}>
                                        <font>评估自动消息营销效果，提升营销质量</font>
                                    </div>
                                    <div className={styles.product__learn_more}>
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
            <a name="xifen"></a>
            <div className={styles.container_z}>
                <div className={styles.g__row}>
                    <div className={styles.g__c6}>
                        <div className={styles.u__inline}>
                            <div className={styles.g__row}>
                                <div className={styles.g__c}>
                                    <a href=" " className={styles.f__no_und_always}>
                                        <font className={styles.hezuo1}>
                                            细分
                                        </font>
                                    </a>
                                </div>

                                <div className={styles.g__c}>
                                    <a href="#yindao" className={styles.f__no_und_always}>
                                        <font className={styles.zidonghua}>
                                            培育
                                        </font>
                                    </a>
                                </div>

                                <div className={styles.g__c}>
                                    <a href="#fabu" className={styles.f__no_und_always}>
                                        <font className={styles.guimo}>
                                            发布        
                                        </font>
                                    </a>
                                </div>

                                <div className={styles.g__c}>
                                    <a href="#pinggu" className={styles.f__no_und_always}>
                                        <font className={styles.tigao}>
                                            评估
                                        </font>
                                    </a>
                                </div>                
                            </div>
                        </div>
                        <div style={{height:"20px"}}></div>
                        <h3 className={styles.t__h2}>
                            <font>
                                打造全景用户画像，精确细分客群，发送个性化消息
                            </font>
                        </h3>
                        <div style={{height:"10px"}}></div>
                        <div className={styles.max__600}>
                            <font>
                                全方位获取用户基本信息，追踪用户在网站、邮件、短信、微信内的行为，多条件组合筛选确定目标客群，根据用户的渠道偏好通过合适的渠道向目标客户推送个性化的应用内消息、邮件、短信、微信或智能语音
                            </font>
                        </div>
                    </div>
                    
                    <div className={styles.g__c6}>
                        <div className={styles.js__gallery}>
                            <div className={styles.u__inline}>
                                <div className={styles.gallery}>
                                    <div className={styles.gallery__img}>
                                        <img width="682" src="https://marketing.intercomassets.com/assets/customer-engagement/v2/target-88f67720f921661ae7c3aa1324ba39ff26abc181e177f0ab9670455673ccac49.png" />
                                    </div>                    
                                </div>
                            </div>
                        </div>
                    </div>            
                </div>
                <div style={{height:"80px"}}></div>       
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
                                    
                                    <div className={styles.sp__left_4}>
                                        <div className={[styles.t__small,styles.f__bold]}>
                                            <font>客户细分</font>
                                        </div>
                                        
                                        <div className={styles.t__small}>
                                            <font>
                                                根据客户属性、行为和CRM里的数据定位和细分客户
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
                                            <font>全渠道</font>
                                        </div>
                                        <div className={styles.t__small}>
                                            <font>
                                                通过应用内消息、邮件、电话、社交软件与客户随时沟通
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
                                            <font>消息编写器</font>
                                        </div>
                                        <div className={styles.t__small}>
                                            <font>
                                                通过应用内消息、邮件、电话、社交软件与客户随时沟通
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
                                            <font>发送时间调度器</font>
                                        </div>
                                        <div className={styles.t__small}>
                                            <font>
                                                保证自动消息在最适合您和您的客户的时间节点发送
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

        <div style={{height:"100px"}}></div>

        <section className={styles.section}>
            <a name="yindao"></a>
            <div className={styles.container_z}>
                <div className={styles.g__row_center}>
                    <div className={styles.g__c6}>
                        <img width="472" src="https://marketing.intercomassets.com/assets/live-chat/v2/convert-ill-7a3e7f136e8dc31a226803d418e2d20d3e4fce8a373a93e95f7983e878179c96.png" />
                    </div>
                    <div className={styles.g__c5_z}>

                        
                        <div className={styles.u__inline}>
                            <div className={styles.g__row}>
                                <div className={styles.g__c}>
                                    <a href="#xifen" className={styles.f__no_und_always}>
                                        <font className={styles.hezuo}>
                                            细分
                                        </font>
                                    </a>
                                </div>

                                <div className={styles.g__c}>
                                    <a href="#yindao" className={styles.f__no_und_always}>
                                        <font className={styles.zidonghua}>
                                            培育
                                        </font>
                                    </a>
                                </div>

                                <div className={styles.g__c}>
                                    <a href="#fabu" className={styles.f__no_und_always}>
                                        <font className={styles.guimo1}>
                                            发布
                                        </font>
                                    </a>
                                </div>

                                <div className={styles.g__c}>
                                    <a href="#pinggu" className={styles.f__no_und_always}>
                                        <font className={styles.tigao}>
                                            评估
                                        </font>
                                    </a>
                                </div>                
                            </div>
                        </div>
                        <div style={{height:"20px"}}></div>
                        <h3 className={styles.t__h2}>
                            <font>
                                将新注册用户转换为长期付费客户
                            </font>
                        </h3>
                        <div style={{height:"10px"}}></div>
                        <div className={styles.max__550}>
                            <font className={styles.tigongzhichi}>发送有针对性和个性化的系列应用内消息、邮件、短信、微信和智能语音，以激活，引导和转化每个新客户
                            </font>
                        </div>                                    
                    </div>          
                </div>
                
            </div>
        </section>
        <div style={{height:"100px"}}></div>


        <section className={styles.section}>
            <a name="fabu"></a>
            <div className={styles.container_z}>
                <div className={styles.support_automate}>
                    <div className={styles.g__c7}>  
                        <div className={styles.g__c6_s}>
                            <div className={styles.u__inline}>
                                <div className={styles.g__row}>
                                    <div className={styles.g__c}>
                                        <a href="#xifen" className={styles.f__no_und_always}>
                                            <font className={styles.hezuo}>
                                                细分
                                            </font>
                                        </a>
                                    </div>

                                    <div className={styles.g__c}>
                                        <a href="#yindao" className={styles.f__no_und_always}>
                                            <font className={styles.zidonghua1}>
                                                培育
                                            </font>
                                        </a>
                                    </div>

                                    <div className={styles.g__c}>
                                        <a href="#fabu" className={styles.f__no_und_always}>
                                            <font className={styles.guimo}>
                                                发布
                                            </font>
                                        </a>
                                    </div>

                                    <div className={styles.g__c}>
                                        <a href="#pinggu" className={styles.f__no_und_always}>
                                            <font className={styles.tigao}>
                                                评估
                                            </font>
                                        </a>
                                    </div>                
                                </div>
                            </div>
                            <div style={{height:"20px"}}></div>
                            <h3 className={styles.t__h2}>
                                <font>
                                    向目标客群发布产品新特性

                                </font>
                            </h3>
                            <div style={{height:"10px"}}></div>
                            <div className={styles.max__600}>
                                <font>
                                    通过电子邮件或短信分享有产品特性和新功能，引导客户使用和购买产品
                                </font>                                
                            </div>                            
                        </div>                        
                    </div>
                    <div className={styles.g__row}>
                        <div className={styles.g__c6_s}>
                            <img width="548" src="https://marketing.intercomassets.com/assets/customer-engagement/v2/announce-email-57a51d326b9b3e252068907c99a05853331e6503ecbe353ce8d4f241263120ad.png" />
                        </div>
                        <div className={styles.g__c6_s}>
                            <img width="546" src="https://marketing.intercomassets.com/assets/customer-engagement/v2/announce-inapp-8ec39c1163b97052f8a573884b28ff352e9193a734fdfbcdc4b5e2f2323d26b0.png" />
                        </div>
                        <div>
                        </div>
                    </div>
                </div>                                             
            </div>                  
        </section>


        

        <section className={styles.section}>
            <a name="pinggu"></a>
            <div className={styles.container_z}>
                <div className={styles.g__row_z}>
                    <div className={styles.g__c6}>

                        <div className={styles.g__c12}>
                            <div className={styles.f__left}>
                                <div className={styles.product__feature_icon}>
                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-755c516f8b532641.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                </div>                          
                                <div className={styles.sp__left_4}>
                                    <div className={styles.t__smallfont}>
                                        <font>消息目标</font>
                                    </div>
                                    <div className={styles.t__small_s}>
                                        <font>
                                            衡量客户收到消息后采取的行动是否达到预期
                                        </font>
                                    </div>
                                </div>
                            </div>
                            <div style={{height:"20px"}}></div>
                        </div>

                        <div className={styles.g__c12}>
                            <div className={styles.f__left}>
                                <div className={styles.product__feature_icon}>
                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-755c516f8b532641.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                </div>                          
                                <div className={styles.sp__left_4}>
                                    <div className={styles.t__smallfont}>
                                        <font>
                                            A/B测试
                                        </font>
                                    </div>
                                    <div className={styles.t__small_s}>
                                        <font>
                                            测试消息变量以提高消息性能
                                        </font>
                                    </div>
                                </div>
                            </div>
                            <div style={{height:"20px"}}></div>
                        </div>

                        <div className={styles.g__c12}>
                            <div className={styles.f__left}>
                                <div className={styles.product__feature_icon}>
                                    <img src="https://upload-images.jianshu.io/upload_images/12406336-755c516f8b532641.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
                                </div>                          
                                <div className={styles.sp__left_4}>
                                    <div className={styles.t__smallfont}>
                                        <font>统计报告</font>
                                    </div>
                                    <div className={styles.t__small_s}>
                                        <font>
                                            整套的消息的效能分析报告
                                        </font>
                                    </div>
                                </div>
                            </div>
                            <div style={{height:"20px"}}></div>
                        </div>

                        

                        
                        
                    </div>
                    <div className={styles.g__c5_z}>

                        
                        <div className={styles.u__inline}>
                            <div className={styles.g__row}>
                                <div className={styles.g__c}>
                                    <a href="#xifen" className={styles.f__no_und_always}>
                                        <font className={styles.hezuo}>
                                            细分
                                        </font>
                                    </a>
                                </div>

                                <div className={styles.g__c}>
                                    <a href="#yindao" className={styles.f__no_und_always}>
                                        <font className={styles.zidonghua}>
                                            培育
                                        </font>
                                    </a>
                                </div>

                                <div className={styles.g__c}>
                                    <a href="#fabu" className={styles.f__no_und_always}>
                                        <font className={styles.guimo1}>
                                            发布
                                        </font>
                                    </a>
                                </div>

                                <div className={styles.g__c}>
                                    <a href="#pinggu" className={styles.f__no_und_always}>
                                        <font className={styles.tigao}>
                                            评估
                                        </font>
                                    </a>
                                </div>                
                            </div>
                        </div>
                        <div style={{height:"20px"}}></div>
                        <h3 className={styles.t__h2}>
                            <font>
                                衡量并优化您的消息和广告系列
                            </font>
                        </h3>
                        <div style={{height:"10px"}}></div>
                        <div className={styles.max__550}>
                            <font className={styles.tigongzhichi}>检查结果并测试新想法以不断提高性能。
                            </font>
                        </div>
                        
                        <div style={{height:"30px"}}></div>
                        <div className={styles.customer_engagement_a}>
                            <img width="469" className={styles.device__shadow} src="https://marketing.intercomassets.com/assets/customer-engagement/v2/measure-test-a-a0f4592065182cf83249aa8e9fd75b422fccd207d1ceb27d9e1d19a983504e06.png" />
                        </div>
                        <div className={styles.customer_engagement_b}>
                            <img width="469" className={styles.device__shadow} src="https://marketing.intercomassets.com/assets/customer-engagement/v2/measure-test-b-ccb3063c074859f382ef59c8684e9a64d65f48ee85b8a5246519bf00059b749e.png" />
                        </div>
                    </div>          
                </div>
                
            </div>
        </section>



        
        
        
        <div style={{height:"180px"}}></div>
        <section className={styles.section}>
            <div className={styles.container__center}>
                <div className={styles.u__relative__inline_block}>
                    <img className={styles.customer_support__integrations_bg_1} src="https://marketing.intercomassets.com/assets/support/v2/bg-1-87efd2c9bc1c6f275f77ecd4cf38bd93d8ae8d05a5890710a6a84104057b0866.png" />
                    <h2 className={styles.t__h2__center}>
                        <font>
                            通过定制化与您的业务流程无缝集成
                        </font>
                    </h2>
                    <p className={styles.u__center__f__center}>
                        <font>我们的集成库和灵活的API意味着您可以轻松地将PPmessage融入您的工作方式。</font>
                    </p>
                </div>                 
            </div>
            <div className={styles.container__integrations_container}>
                <div className={styles.u__hidden__md}>
                    <img width="277" className={styles.tu} src="https://marketing.intercomassets.com/assets/support/v2/bg-2-2x-b6cf2b23a95a0aa54636f6920c0ccdcec04bba262f018fae481e72f3ac0089db.png" />
                    <img width="290" className={styles.tu1} src="https://marketing.intercomassets.com/assets/support/v2/bg-3-2x-e4d3b8ca63fcdb8a79662a8be7c51500e6c42844b1e4b4e71a5302f22ae2c7d0.png" />
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
                                    <font>Salesforce</font>
                                </div>
                                <div style={{height:"5px"}}></div>
                                <div className={styles.f__light_7}>
                                    <font>
                                        向Salesforce推送合格商机和聊天记录，并在PPMessage中使用
                                    </font>
                                </div>
                            </a>
                        </div>
                        <div className={styles.g__c4_z}>
                            <a className={styles.integration_card} href="#">
                                <div className={styles.intergration__card__logo}>
                                    <img src="https://marketing.intercomassets.com/demand-generation/direct-response/1510274724-_segment.svg" />
                                </div>
                                
                                <div className={styles.f__bold_7}>
                                    <font>Get a Demo APP</font>
                                </div>
                                <div style={{height:"5px"}}></div>
                                <div className={styles.f__light_7}>
                                    <font>
                                        获取和转化需要产品演示的客户
                                    </font>
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
                    <a href="#" ><font>查看更多应用</font></a>
                    <div className={styles.f__center}>
                        
                    </div>
                </div>
            </div>
        </section>   
    </div>
);
