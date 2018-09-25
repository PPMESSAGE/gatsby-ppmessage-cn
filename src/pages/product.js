import React from "react";
import EnterYourMobile from "../components/enteryourmobile";
import styles from "./about-css-modules.module.css";
import FeatherModal from "../components/feathermodal"



export default () => (
    <div className={styles.heiti}>
        <div style={{height:`72px`}}></div>
        <div className={styles.container__narrower}>
            <div className={styles.g__row}>
                <div className={styles.g__c6}>
                    <h1>智能客服</h1>
                    <div className={styles.sp__5}>
                        <h2 style={{margin:'5rem 0rem 0rem 0rem'}}>批量管理与访客和客户的在线对话
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


        <section>
            <div className={styles.container}>
                <div className={styles.g__row}>
                    <div className={styles.g__c3}>
                        <div className={styles.chuangjian} style={{marginLeft:"2em"}}>
                            <a href="#qudao" className={styles.lianjie}>
                                <div>                
                                </div>
                                <div style={{height:'5em'}}></div>                           
                                <div className={styles.t__h3}>
                                    <font >多渠道
                                    </font>
                                </div>
                                <div style={{height:'5px'}}></div>
                                <div className={styles.t__small_s}>
                                    <font className={styles.t__small_s}>网页、移动端、社交媒体、电话、邮件等多渠道接入客户对话
                                    </font>                  
                                </div>
                                <div className={styles.product__learn_more}>
                                    <div style={{height:'2em'}}></div>
                                    <span>
                                        <font className={styles.smallerbiaoti}>了解更多</font>
                                    </span>                  
                                </div>
                                
                            </a>
                        </div>

                        <div className={styles.chuangjian} >
                            <a href="#jiemian" className={styles.lianjie}>
                                <div>                
                                </div>
                                <div style={{height:'5em'}}></div>                           
                                <div className={styles.t__h3}>
                                    <font >单一界面
                                    </font>
                                </div>
                                <div style={{height:'5px'}}></div>
                                <div className={styles.t__small_s}>
                                    <font className={styles.t__small_s}>为团队配备统一的全渠道桌面，提供所有背景信息以及相关知识
                                    </font>
                                </div>

                                <div className={styles.product__learn_more}>
                                    <div style={{height:'2em'}}></div>
                                    <span>
                                        <font className={styles.smallerbiaoti}>了解更多</font>
                                    </span>                  
                                </div>                
                            </a>
                        </div>

                        <div className={styles.chuangjian} >
                            <a href="#gongzuoliucheng" className={styles.lianjie}>
                                <div>                
                                </div>
                                <div style={{height:'5em'}}></div>                           
                                <div className={styles.t__h3}>
                                    <font >多渠道自动化工作流程
                                    </font>
                                </div>
                                <div style={{height:'5px'}}></div>
                                <div className={styles.t__small_s}>
                                    <font className={styles.t__small_s}>减少重复性工作花费的时间
                                    </font>
                                </div>

                                <div className={styles.product__learn_more}>
                                    <div style={{height:'2em'}}></div>
                                    <span>
                                        <font className={styles.smallerbiaoti}>了解更多</font>
                                    </span>                  
                                </div>                
                            </a>
                        </div>


                        <div className={styles.chuangjian} style={{paddingRight:"0em"}}>
                            <a href="#jixiaopinggu" className={styles.lianjie}>
                                <div>                
                                </div>
                                <div style={{height:'5em'}}></div>                           
                                <div className={styles.t__h3}>
                                    <font >实时绩效评估
                                    </font>
                                </div>
                                <div style={{height:'5px'}}></div>
                                <div className={styles.t__small_s}>
                                    <font >实时了解团队绩效并提前采取行动
                                    </font>
                                </div>

                                <div className={styles.product__learn_more}>
                                    <div style={{height:'2em'}}></div>
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




        
        <section   className={styles.section}>
            <a name="qudao">
                <div className={styles.container__narrower}>
                    <hr style={{height:"1px"}} />
                </div>
            </a>
        </section>

        <section>      
            <div className={styles.container__narrower}>
                <div className={styles.g__row}>

                    <div className={styles.g__c3}>
                        <h3><font className={styles.huise}>多渠道</font></h3>
                        <div className={styles.huisesmaller}>
                            <font>网页、移动端、社交媒体、邮件、电话等多渠道接入客户对话</font>
                        </div>
                    </div>
                    <div className={styles.g__c8}>
                        <div className={styles.g__row}>

                            <div className={styles.g__c6}>
                                <div className={styles.features__block}>
                                    <FeatherModal abstract={{title: "聊天组件", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "与您网站、移动设备和应用内的人实时文字聊天和语音对话"}}>
                                        <div>
                                            <div className={styles.g__row}>
                                                <div className="g__c3 g__c12--md">
                                                    <h2 className="t__h3 f__center--md u__reset"></h2>
                                                    <div className="sp__1"></div>
                                                    <div>
                                                        <div className="c__black f__bold f__center--md"></div>
                                                        <div className="sp__05"></div>
                                                        <div className="t__small f__center--sm f__center--md"></div>
                                                        <div className="sp__3--md sp__3--sm"></div>
                                                    </div>
                                                </div>
                                                <div className="g__c9 g__c12--md f__center u__static">
                                                    <div className="browser device__shadow">
                                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FeatherModal>

                                </div>
                            </div>

                            <div className={styles.g__c6}>
                                <div className={styles.features__block}>

                                    <FeatherModal abstract={{title: "呼叫中心", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "可以通过座席工作台直接接打客户电话，发送查收短信，查看客户资料和录音信息"}}>
                                        <div>
                                            <div className={styles.g__row}>
                                                <div className="g__c3 g__c12--md">
                                                    <h2 className="t__h3 f__center--md u__reset">{/*图片标题*/}</h2>
                                                    <div className="sp__1"></div>
                                                    <div>
                                                        <div className="c__black f__bold f__center--md">{/* 图片内容介绍*/}</div>
                                                        <div className="sp__05"></div>
                                                        <div className="t__small f__center--sm f__center--md"></div>
                                                        <div className="sp__3--md sp__3--sm"></div>
                                                    </div>
                                                </div>
                                                <div className="g__c9 g__c12--md f__center u__static">
                                                    <div className="browser device__shadow">
                                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FeatherModal>


                                    
                                </div>
                            </div>

                            <div className={styles.g__c6}>
                                <div className={styles.features__block}>

                                    <FeatherModal abstract={{title: "微信小程序和公众号", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "通过座席工作台应答微信访客咨询"}}>
                                        <div>
                                            <div className={styles.g__row}>
                                                <div className="g__c3 g__c12--md">
                                                    <h2 className="t__h3 f__center--md u__reset"></h2>
                                                    <div className="sp__1"></div>
                                                    <div>
                                                        <div className="c__black f__bold f__center--md"></div>
                                                        <div className="sp__05"></div>
                                                        <div className="t__small f__center--sm f__center--md"></div>
                                                        <div className="sp__3--md sp__3--sm"></div>
                                                    </div>
                                                </div>
                                                <div className="g__c9 g__c12--md f__center u__static">
                                                    <div className="browser device__shadow">
                                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FeatherModal>

                                    
                                </div>
                            </div>

                            <div className={styles.g__c6}>
                                <div className={styles.features__block}>

                                    <FeatherModal abstract={{title: "邮件转发", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "将电子邮件从任何地址转发至座席工作台"}}>
                                        <div>
                                            <div className={styles.g__row}>
                                                <div className="g__c3 g__c12--md">
                                                    <h2 className="t__h3 f__center--md u__reset"></h2>
                                                    <div className="sp__1"></div>
                                                    <div>
                                                        <div className="c__black f__bold f__center--md"></div>
                                                        <div className="sp__05"></div>
                                                        <div className="t__small f__center--sm f__center--md"></div>
                                                        <div className="sp__3--md sp__3--sm"></div>
                                                    </div>
                                                </div>
                                                <div className="g__c9 g__c12--md f__center u__static">
                                                    <div className="browser device__shadow">
                                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FeatherModal>

                                    
                                </div>
                            </div>              
                        </div>            
                    </div>
                    
                </div>        
            </div>              
        </section>
        


        <section  className={styles.section}>
            <a name="jiemian">   
                <div className={styles.container__narrower}>
                    <hr style={{height:"1px"}}/>
                </div>
            </a>
        </section>

        <section>      
            <div className={styles.container__narrower}>
                <div className={styles.g__row}>

                    <div className={styles.g__c3}>
                        <h3><font className={styles.huise}>唯一界面</font></h3>
                        <div className={styles.huisesmaller}>
                            <font>为团队配备统一的全渠道桌面，提供所有背景信息及相关知识，单一界面管理所有客户互动</font>
                        </div>
                    </div>
                    <div className={styles.g__c8}>
                        <div className={styles.g__row}>

                            <div className={styles.g__c6}>
                                <div className={styles.features__block}>
                                    <FeatherModal abstract={{title: "消息汇聚", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "将网页、移动端、社交媒体、邮件、电话等渠道的会话转入统一座席工作台"}}>
                                        <div>
                                            <div className={styles.g__row}>
                                                <div className="g__c3 g__c12--md">
                                                    <h2 className="t__h3 f__center--md u__reset"></h2>
                                                    <div className="sp__1"></div>
                                                    <div>
                                                        <div className="c__black f__bold f__center--md"></div>
                                                        <div className="sp__05"></div>
                                                        <div className="t__small f__center--sm f__center--md"></div>
                                                        <div className="sp__3--md sp__3--sm"></div>
                                                    </div>
                                                </div>
                                                <div className="g__c9 g__c12--md f__center u__static">
                                                    <div className="browser device__shadow">
                                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FeatherModal>

                                </div>
                            </div>

                            <div className={styles.g__c6}>
                                <div className={styles.features__block}>
                                    <FeatherModal abstract={{title: "客户信息", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "同步展示客户的基本信息，并可实时更新，支持字段自定义及检索排序"}}>
                                        <div>
                                            <div className={styles.g__row}>
                                                <div className="g__c3 g__c12--md">
                                                    <h2 className="t__h3 f__center--md u__reset"></h2>
                                                    <div className="sp__1"></div>
                                                    <div>
                                                        <div className="c__black f__bold f__center--md"></div>
                                                        <div className="sp__05"></div>
                                                        <div className="t__small f__center--sm f__center--md"></div>
                                                        <div className="sp__3--md sp__3--sm"></div>
                                                    </div>
                                                </div>
                                                <div className="g__c9 g__c12--md f__center u__static">
                                                    <div className="browser device__shadow">
                                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FeatherModal>

                                </div>
                            </div>

                            <div className={styles.g__c6}>
                                <div className={styles.features__block}>
                                    <FeatherModal abstract={{title: "用户轨迹", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "用户历史访问记录，实时查询"}}>
                                        <div>
                                            <div className={styles.g__row}>
                                                <div className="g__c3 g__c12--md">
                                                    <h2 className="t__h3 f__center--md u__reset"></h2>
                                                    <div className="sp__1"></div>
                                                    <div>
                                                        <div className="c__black f__bold f__center--md"></div>
                                                        <div className="sp__05"></div>
                                                        <div className="t__small f__center--sm f__center--md"></div>
                                                        <div className="sp__3--md sp__3--sm"></div>
                                                    </div>
                                                </div>
                                                <div className="g__c9 g__c12--md f__center u__static">
                                                    <div className="browser device__shadow">
                                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FeatherModal>

                                </div>
                            </div>

                            <div className={styles.g__c6}>
                                <div className={styles.features__block}>
                                    <FeatherModal abstract={{title: "团队协作", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "直接从团队成员处获取相关信息，而不干扰用户"}}>
                                        <div>
                                            <div className={styles.g__row}>
                                                <div className="g__c3 g__c12--md">
                                                    <h2 className="t__h3 f__center--md u__reset"></h2>
                                                    <div className="sp__1"></div>
                                                    <div>
                                                        <div className="c__black f__bold f__center--md"></div>
                                                        <div className="sp__05"></div>
                                                        <div className="t__small f__center--sm f__center--md"></div>
                                                        <div className="sp__3--md sp__3--sm"></div>
                                                    </div>
                                                </div>
                                                <div className="g__c9 g__c12--md f__center u__static">
                                                    <div className="browser device__shadow">
                                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FeatherModal>

                                </div>
                            </div>              
                        </div>            
                    </div>
                    
                </div>        
            </div>              
        </section>




        

        

        



        <section  className={styles.section}>
            <a name="gongzuoliucheng">   
                <div className={styles.container__narrower}>
                    <hr style={{height:"1px"}}/>
                </div>
            </a>
        </section>

        <section>      
            <div className={styles.container__narrower}>
                <div className={styles.g__row}>

                    <div className={styles.g__c3}>
                        <h3><font className={styles.huise}>自动化工作流程</font></h3>
                        <div className={styles.huisesmaller}>
                            <font>减少重复性工作花费的时间</font>
                        </div>
                    </div>
                    <div className={styles.g__c8}>
                        <div className={styles.g__row}>

                            <div className={styles.g__c6}>
                                <div className={styles.features__block}>

                                    <FeatherModal abstract={{title: "会话分配流程", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "根据访客的属性和行为将会话根据随机、循环等分配策略分配给对应客服或客服组"}}>
                                        <div>
                                            <div className={styles.g__row}>
                                                <div className="g__c3 g__c12--md">
                                                    <h2 className="t__h3 f__center--md u__reset"></h2>
                                                    <div className="sp__1"></div>
                                                    <div>
                                                        <div className="c__black f__bold f__center--md"></div>
                                                        <div className="sp__05"></div>
                                                        <div className="t__small f__center--sm f__center--md"></div>
                                                        <div className="sp__3--md sp__3--sm"></div>
                                                    </div>
                                                </div>
                                                <div className="g__c9 g__c12--md f__center u__static">
                                                    <div className="browser device__shadow">
                                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FeatherModal>
                                    
                                </div>
                            </div>

                            <div className={styles.g__c6}>
                                <div className={styles.features__block}>


                                    <FeatherModal abstract={{title: "预置话术", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "预置的回答常见问题的标准答案"}}>
                                        <div>
                                            <div className={styles.g__row}>
                                                <div className="g__c3 g__c12--md">
                                                    <h2 className="t__h3 f__center--md u__reset"></h2>
                                                    <div className="sp__1"></div>
                                                    <div>
                                                        <div className="c__black f__bold f__center--md"></div>
                                                        <div className="sp__05"></div>
                                                        <div className="t__small f__center--sm f__center--md"></div>
                                                        <div className="sp__3--md sp__3--sm"></div>
                                                    </div>
                                                </div>
                                                <div className="g__c9 g__c12--md f__center u__static">
                                                    <div className="browser device__shadow">
                                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FeatherModal>
                                    
                                </div>
                            </div>

                            <div className={styles.g__c6}>
                                <div className={styles.features__block}>

                                    <FeatherModal abstract={{title: "智能提示", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "根据历史谈话记录，智能建议问题答案"}}>
                                        <div>
                                            <div className={styles.g__row}>
                                                <div className="g__c3 g__c12--md">
                                                    <h2 className="t__h3 f__center--md u__reset"></h2>
                                                    <div className="sp__1"></div>
                                                    <div>
                                                        <div className="c__black f__bold f__center--md"></div>
                                                        <div className="sp__05"></div>
                                                        <div className="t__small f__center--sm f__center--md"></div>
                                                        <div className="sp__3--md sp__3--sm"></div>
                                                    </div>
                                                </div>
                                                <div className="g__c9 g__c12--md f__center u__static">
                                                    <div className="browser device__shadow">
                                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FeatherModal>
                                    
                                </div>
                            </div>

                            <div className={styles.g__c6}>
                                <div className={styles.features__block}>

                                    <FeatherModal abstract={{title: "会话评级", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "自动收集客户满意度打分"}}>
                                        <div>
                                            <div className={styles.g__row}>
                                                <div className="g__c3 g__c12--md">
                                                    <h2 className="t__h3 f__center--md u__reset"></h2>
                                                    <div className="sp__1"></div>
                                                    <div>
                                                        <div className="c__black f__bold f__center--md"></div>
                                                        <div className="sp__05"></div>
                                                        <div className="t__small f__center--sm f__center--md"></div>
                                                        <div className="sp__3--md sp__3--sm"></div>
                                                    </div>
                                                </div>
                                                <div className="g__c9 g__c12--md f__center u__static">
                                                    <div className="browser device__shadow">
                                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FeatherModal>
                                    
                                </div>
                            </div>


                            

                            
                            
                        </div>            
                    </div>
                    
                </div>        
            </div>              
        </section>


        <section  className={styles.section}>
            <a name="jixiaopinggu">   
                <div className={styles.container__narrower}>
                    <hr style={{height:"1px"}}/>
                </div>
            </a>
        </section>

        <section>      
            <div className={styles.container__narrower}>
                <div className={styles.g__row}>

                    <div className={styles.g__c3}>
                        <h3><font className={styles.huise}>切实可行的绩效评估</font></h3>
                        <div className={styles.huisesmaller}>
                            <font>实时了解团队绩效并提前采取行动</font>
                        </div>
                    </div>
                    <div className={styles.g__c8}>
                        <div className={styles.g__row}>

                            <div className={styles.g__c6}>
                                <div className={styles.features__block}>
                                    <FeatherModal abstract={{title: "响应时间", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "统计座席对客户咨询的平均响应时间"}}>
                                        <div>
                                            <div className={styles.g__row}>
                                                <div className="g__c3 g__c12--md">
                                                    <h2 className="t__h3 f__center--md u__reset"></h2>
                                                    <div className="sp__1"></div>
                                                    <div>
                                                        <div className="c__black f__bold f__center--md"></div>
                                                        <div className="sp__05"></div>
                                                        <div className="t__small f__center--sm f__center--md"></div>
                                                        <div className="sp__3--md sp__3--sm"></div>
                                                    </div>
                                                </div>
                                                <div className="g__c9 g__c12--md f__center u__static">
                                                    <div className="browser device__shadow">
                                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FeatherModal>
                                </div>
                            </div>

                            <div className={styles.g__c6}>
                                <div className={styles.features__block}>
                                    <FeatherModal abstract={{title: "会话量", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "统计一段时间的线上及电话会话量"}}>
                                        <div>
                                            <div className={styles.g__row}>
                                                <div className="g__c3 g__c12--md">
                                                    <h2 className="t__h3 f__center--md u__reset"></h2>
                                                    <div className="sp__1"></div>
                                                    <div>
                                                        <div className="c__black f__bold f__center--md"></div>
                                                        <div className="sp__05"></div>
                                                        <div className="t__small f__center--sm f__center--md"></div>
                                                        <div className="sp__3--md sp__3--sm"></div>
                                                    </div>
                                                </div>
                                                <div className="g__c9 g__c12--md f__center u__static">
                                                    <div className="browser device__shadow">
                                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FeatherModal>
                                </div>
                            </div>

                            <div className={styles.g__c6}>
                                <div className={styles.features__block}>
                                    <FeatherModal abstract={{title: "客服工作量", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "统计客服组或客服在一段时间的工作量"}}>
                                        <div>
                                            <div className={styles.g__row}>
                                                <div className="g__c3 g__c12--md">
                                                    <h2 className="t__h3 f__center--md u__reset"></h2>
                                                    <div className="sp__1"></div>
                                                    <div>
                                                        <div className="c__black f__bold f__center--md"></div>
                                                        <div className="sp__05"></div>
                                                        <div className="t__small f__center--sm f__center--md"></div>
                                                        <div className="sp__3--md sp__3--sm"></div>
                                                    </div>
                                                </div>
                                                <div className="g__c9 g__c12--md f__center u__static">
                                                    <div className="browser device__shadow">
                                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FeatherModal>
                                </div>
                            </div>

                            <div className={styles.g__c6}>
                                <div className={styles.features__block}>
                                    <FeatherModal abstract={{title: "商机数", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "统计一段时间生成的商机数"}}>
                                        <div>
                                            <div className={styles.g__row}>
                                                <div className="g__c3 g__c12--md">
                                                    <h2 className="t__h3 f__center--md u__reset"></h2>
                                                    <div className="sp__1"></div>
                                                    <div>
                                                        <div className="c__black f__bold f__center--md"></div>
                                                        <div className="sp__05"></div>
                                                        <div className="t__small f__center--sm f__center--md"></div>
                                                        <div className="sp__3--md sp__3--sm"></div>
                                                    </div>
                                                </div>
                                                <div className="g__c9 g__c12--md f__center u__static">
                                                    <div className="browser device__shadow">
                                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FeatherModal>
                                </div>
                            </div>


                            <div className={styles.g__c6}>
                                <div className={styles.features__block}>
                                    <FeatherModal abstract={{title: "访客转化率", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "网站访客转化为付费客户的比例和ROI"}}>
                                        <div>
                                            <div className={styles.g__row}>
                                                <div className="g__c3 g__c12--md">
                                                    <h2 className="t__h3 f__center--md u__reset"></h2>
                                                    <div className="sp__1"></div>
                                                    <div>
                                                        <div className="c__black f__bold f__center--md"></div>
                                                        <div className="sp__05"></div>
                                                        <div className="t__small f__center--sm f__center--md"></div>
                                                        <div className="sp__3--md sp__3--sm"></div>
                                                    </div>
                                                </div>
                                                <div className="g__c9 g__c12--md f__center u__static">
                                                    <div className="browser device__shadow">
                                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FeatherModal>
                                </div>
                            </div>   

                            <div className={styles.g__c6}>
                                <div className={styles.features__block}>
                                    <FeatherModal abstract={{title: "客户满意度", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "满意客户占受访客户比率"}}>
                                        <div>
                                            <div className={styles.g__row}>
                                                <div className="g__c3 g__c12--md">
                                                    <h2 className="t__h3 f__center--md u__reset"></h2>
                                                    <div className="sp__1"></div>
                                                    <div>
                                                        <div className="c__black f__bold f__center--md"></div>
                                                        <div className="sp__05"></div>
                                                        <div className="t__small f__center--sm f__center--md"></div>
                                                        <div className="sp__3--md sp__3--sm"></div>
                                                    </div>
                                                </div>
                                                <div className="g__c9 g__c12--md f__center u__static">
                                                    <div className="browser device__shadow">
                                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FeatherModal>
                                </div>
                            </div>              
                        </div>            
                    </div>          
                </div>        
            </div>              
        </section> 
        <div style={{height:"5em"}}></div>    
    </div>
);
