import React from 'react'
import Link from "gatsby-link";


import NavDropdown  from "../components/navdropdown.js";
import EnterYourMobile from "../components/enteryourmobile";
import Hamburger from "../components/hamburger";

import HomeBanner from "./homebanner"

import styles from "../pages/about-css-modules.module.css";
import "./navheader.css"


class NavHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scroll_top: 0
        }

        this.scroll = this.scroll.bind(this);
    }

    scroll() {
        let _scroll_top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        this.setState({scroll_top: _scroll_top});
    }
    
    componentWillUnmount() {       
        window.removeEventListener('scroll', this.scroll);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scroll);
        this.scroll();
    }

    render() {

        let _navClass = "navheader";
        if (this.state.scroll_top > 20) {
            _navClass = "navheader-fixed";
        }
        
        return (
            <div className={styles.heiti} style={{"position": "relative"}}>        
                <div className={_navClass}>
                    <div className={styles.container}>
                        <a href="/" className={styles.brand__logo} >
                            <img src={require("../images/ppmessage-logo-black.png")} />
                        </a> 
                        <div className={styles.nav__content}>
                            <div className={styles.Hamburger_div}>
                                <Hamburger>
                                    <div className={styles.g__row}>
                                        <div className={styles.g__c7_s}>
                                            <div className={styles.t__h4}>
                                                <font>
                                                    产品
                                                </font>
                                            </div>
                                            <div className={styles.hr__grey}></div>
                                            <div style={{height:"10px"}}></div>                                    
                                            <a href="/product" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        智能客服
                                                    </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/marketing" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        营销自动化
                                                    </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/work-order" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        工单系统
                                                    </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/cloud-call-center" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        云呼叫中心
                                                    </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/robot-of-sale" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        智能销售机器人
                                                    </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/intelligent-customer-service-robot" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        智能客服机器人
                                                    </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/intlligent-speech-robot" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        智能语音机器人
                                                    </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/business-custom" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        业务定制
                                                    </font>
                                                </div>
                                            </a>


                                            <div style={{height:"30px"}}></div>
                                            <div className={styles.t__h4}>
                                                <font>
                                                    行业解决方案
                                                </font>
                                            </div>                                                               
                                            <div className={styles.hr__grey}></div>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/quick-sale-product-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        快消品解决方案
                                                    </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/commerce-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        电商行业解决方案  
                                                    </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/manufacturing-sulotions" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        制造业解决方案  
                                                    </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/automotive-service-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        汽车服务解决方案   
                                                    </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/education-training-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        教育培训解决方案
                                                    </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/finacial-insurance-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        金融保险解决方案                                                              </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/medical-health-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        医疗健康解决方案                                                                 </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/restaurant-chain-solution" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        餐饮连锁解决方案                                                           </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/local-living-solution" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        本地生活解决方案                                                           </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/real-estate-proper-solution" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        房产物业解决方案
                                                    </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/tourism-hotel-industry-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        旅游酒店行业解决方案  
                                                    </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/government-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        政府与事业单位解决方案  
                                                    </font>
                                                </div>
                                            </a>
                                        </div>
                                        <div className={styles.g__c5_layouts}>
                                            <div className={styles.t__h4}>
                                                <font>
                                                    产品资源
                                                </font>
                                            </div>
                                            <div className={styles.hr__grey}></div>
                                            <div style={{height:"10px"}}></div>
                                            <a href="#" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        帮助中心  
                                                    </font>
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="#" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                        开发者文档  
                                                    </font>
                                                </div>
                                            </a>
                                            <div style={{height:"30px"}}></div>
                                            <a href="/pricing" className={styles.f__no_und_aways}>
                                                <font style={{color:"black"}}>
                                                    <div className={styles.t__h4}>
                                                        <font>
                                                            定价
                                                        </font>
                                                    </div>
                                                </font>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="#" className={styles.f__no_und_aways}>
                                                <font style={{color:"black"}}>
                                                    <div className={styles.t__h4}>
                                                        <font>
                                                            登录
                                                        </font>
                                                    </div>
                                                </font>
                                            </a>                                                                     </div>
                                    </div>
                                </Hamburger>
                            </div>
                            <div className={styles.nav__link}>
                                <NavDropdown title="产品">
                                    <div className={styles.g__row}>
                                        <div className={styles.g__c6_yetou}>


                                            <a href="/product" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>智能客服</font>
                                                    </div>
                                                    <div className={styles.heise}>
                                                        <font>一个界面管理来自网页、邮件、电话和社交媒体的所有客户消息</font>
                                                    </div>
                                                </div>
                                            </a>

                                            <div style={{width:"720px"}}></div>

                                            <a href="/marketing" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>营销自动化</font>
                                                    </div>
                                                    <div className={styles.heise}>
                                                        <font>根据用户属性和行为在特定时间发送有针对性的邮件、短信和应用内消息，并评估效果</font>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="/work-order" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>工单系统</font>
                                                    </div>
                                                    <div >
                                                        <font>打通售前售后环节，工单分配、转派、变更、提醒、业务流和SLA随心定制</font>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="/cloud-call-center" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>云呼叫中心</font>
                                                    </div>
                                                    <div >
                                                        <font>支持跨时区、跨地域、多语言分布式组网，真正All-in-One的客户体验与联络中心</font>
                                                    </div>
                                                </div>
                                            </a>

                                        </div>
                                        <div className={styles.g__c6_yetou}>


                                            <a href="/robot-of-sale" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>智能销售机器人</font>
                                                    </div>
                                                    <div>
                                                        <font>24/7随时获取、评估网站上的商机，无需代码定制，加快销售周期，提供超越人类极限的业务增长机会</font>
                                                    </div>
                                                </div>
                                            </a>



                                            <a href="/intelligent-customer-service-robot" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>智能客服机器人</font>
                                                    </div>
                                                    <div>
                                                        <font>自主学习、人机无缝协作，提高客服满意度</font>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="/intlligent-speech-robot" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>智能语音机器人</font>
                                                    </div>
                                                    <div >
                                                        <font>基于智能语音交互的人机融合平台，替代人工销售，延伸售后服务</font>
                                                    </div>
                                                </div>
                                            </a>


                                            <a href="/business-custom" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>业务定制</font>
                                                    </div>
                                                    <div>
                                                        <font>独有的流程生成器与APP Store结合，快速满足企业业务定制需求</font>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                </NavDropdown>

                            </div>

                            <div className={styles.nav__link}>

                                <NavDropdown title="应用场景">
                                    <div className={styles.g__row}>
                                        <div style={{marginLeft:"20px"}}>
                                            <a href="/transform-customs" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font style={{color:"black"}}>获取和转化销售线索</font>
                                                    </div>
                                                    <div className={styles.t__small}>获取更多商机并达成更多交易</div>
                                                </div>
                                            </a>

                                            <div style={{height:"10px"}}></div>

                                            <a href="/guide-attract-customers" style={{textDecoration:"none"}}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}><font style={{color:"black"}}>引导和吸引客户</font></div>
                                                    <div>将更多注册用户转化为活跃的消费客户</div>
                                                </div>
                                            </a>


                                            <div style={{height:"10px"}}></div>

                                            <a href="/conversion-businese" style={{textDecoration:"none"}}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}><font style={{color:"black"}}>客户支持并提高客户满意度</font></div>
                                                    <div >通过集成多个渠道，自助服务和自动化的现代服务台提高客户满意度并提高效率</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </NavDropdown>

                            </div>

                            <div className={styles.nav__link}>
                                <NavDropdown title="行业解决方案">
                                    <div className={styles.g__row}>
                                        <div className={styles.g__c6_yetou}>

                                            <a href="/commerce-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>电商行业解决方案</font>
                                                    </div>
                                                    <font>一个界面解决商家与客户从商品、订单到售后的所有沟通问题</font>
                                                </div>
                                            </a>

                                            <div style={{width:"800px"}}></div>

                                            <a href="/education-training-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>教育培训解决方案</font>
                                                    </div>
                                                    <font>商机获取、流转及营销的自动化和精细化，提高访客转化率和客户满意度</font>
                                                </div>
                                            </a>

                                            <a href="/finacial-insurance-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>金融保险解决方案</font>
                                                    </div>
                                                    <font>销售线索到成单一步到位的智能外呼和客服机器人解决方案，大幅降低人工成本</font>
                                                </div>
                                            </a>

                                            <a href="/medical-health-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>医疗健康解决方案</font>
                                                    </div>
                                                    <font>集“全渠道客服系统、患者管理系统、数据分析系统”为一体的新一代医疗、美容解决方案</font>
                                                </div>
                                            </a>

                                            <a href="/tourism-hotel-industry-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>旅游酒店行业解决方案</font>
                                                    </div>
                                                    <font>从产品、订单到客户支持的大容量、全渠道呼叫中心解决方案</font>
                                                </div>
                                            </a>

                                            <a href="/government-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>政府与事业单位解决方案</font>
                                                    </div>
                                                    <font>可定制可私有部署的全渠道智能云客服和内部沟通解决方案，保护政务机关数据安全，为市民提供方便快捷的市民服务</font>
                                                </div>
                                            </a>



                                        </div>
                                        <div className={styles.g__c6_yetou}>

                                            <a href="/automotive-service-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>汽车服务解决方案</font>
                                                    </div>
                                                    <font>可定制可私有部署的全渠道智能云客服和营销自动化系统，提供客户粘性</font>
                                                </div>
                                            </a>

                                            <a href="/restaurant-chain-solution" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>餐饮连锁解决方案</font>
                                                    </div>
                                                    <font>全渠道智能云客服和营销自动化系统，根据客户消费习惯推荐产品和提供促销方案</font>
                                                </div>
                                            </a>

                                            <a href="/quick-sale-product-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>快消品解决方案</font>
                                                    </div>
                                                    <font>跨地域的全渠道云客服和自动营销平台，新产品发布和促销的通道</font>
                                                </div>
                                            </a>

                                            <a href="/manufacturing-sulotions" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>制造业解决方案</font>
                                                    </div>
                                                    <font>可定制的跨时区、跨地域、多语言的全球客服支持系统</font>
                                                </div>
                                            </a>

                                            <a href="/local-living-solution" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>本地生活解决方案</font>
                                                    </div>
                                                    <font>通过邮件、短信、应用内自动消息和智能外呼提升成单率和客单价</font>
                                                </div>
                                            </a>
                                            <a href="/real-estate-proper-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font>房地产物业解决方案</font>
                                                    </div>
                                                    <font>业务营销、业主互动、自动收费和物业报修的专业解决方案</font>
                                                </div>
                                            </a>

                                        </div>
                                    </div>

                                </NavDropdown>




                            </div>

                            <div className={styles.nav__link}>

                                <NavDropdown title="产品资源">
                                    <div className={styles.g__row}>
                                        <div style={{marginLeft:"20px"}}>
                                            <a href="/tutorial/" style={{textDecoration:"none"}}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}>
                                                        <font style={{color:"black"}}>帮助中心</font>
                                                    </div>
                                                    <div>详细介绍如何安装、配置和使用PPMessage 各种产品</div>
                                                </div>
                                            </a>



                                            <div style={{height:"10px"}}></div>

                                            <a href="/manual/" style={{textDecoration:"none"}}>
                                                <div className={styles.holiday}>
                                                    <div className={styles.t__h4}><font style={{color:"black"}}>开发者文档</font></div>
                                                    <div>使用PPMessage API和流程生成工具与第三方服务进行集成</div>
                                                </div>
                                            </a>    
                                        </div>
                                    </div>
                                </NavDropdown>


                            </div>
                            <a href="/pricing" className={styles.nav__link}><font className={styles.zizi}>定价</font>
                            </a>
                            <a href="https://ppmessage.cn/ppkefu/#!/app/signin" className={styles.nav__link}><font className={styles.zizi}>登录</font>
                            </a>
                            <div className={styles.nav__cta}>
                                <div >
                                    <EnterYourMobile size="small"/>
                                </div>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        )
}
}


export default NavHeader

