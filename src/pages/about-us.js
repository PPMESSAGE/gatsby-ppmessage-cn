import React from "react";
import styles from "./about-us.module.css";

import Layout from "./layout";

export default () => (
	<Layout>
    <div className={styles.heiti}>        
        <div className={styles.banner}>            
        </div>
        <div className={styles.menu}>
            <ul className={styles.ul}>
                <li className={styles.active}>
                    <a href="" className={styles.a}>关于我们
                    </a>
                </li>
                <li className={styles.li}><a href="#lianxiwomen" className={styles.a}>
                    联系我们</a>
                </li>
                <li className={styles.li}>
                    <a href="/join-us" className={styles.a}>加入我们</a>
                </li>
                <li className={styles.li}><a href="/partners" className={styles.a}>合作伙伴</a>
                </li>
            </ul>
        </div>
        <div className={styles.m1}>
            <div style={{height:"80px"}}></div>
            <div className={styles.title}>
                <p className={styles.p1} style={{marginBottom:"0px"}}>公司简介
                </p>
                <p className={styles.p2}>Company profile
                </p>
            </div>
            <div style={{height:"255px"}}>
                <div className={styles.img}>
                    <img src="http://www.slodon.com/templates/default/images/about/4.jpg" />
                </div>
                <div className={styles.text}>
                    <p className={styles.text1}>北京优锐科技成立于2010年，是一家基于消息会话提供全新智能客服和自动化营销服务的云服务厂商。目前拥有2项国家发明专利，5项软件著作权。

                        公司的宗旨是为全球各类企业提供可扩展的、可私有部署的消息会话系统，既满足多变的业务需求，又充分保障数据隐私。

                        公司核心管理层来自于清华大学、大连理工大学、北京邮电大学等国内著名高校，在呼叫中心、即时通讯、机器学习、操作系统等相关领域有20年经验积累。同时我们也是一支充满激情和创造力的团队。技术领导层均来自云计算、SaaS、大数据等领域的知名技术公司。

                    </p>
                    <a name="lianxiwomen"></a>
                    <p className={styles.text1}>公司团队主持开发的产品拥有中国农业银行总行95599、中国人民银行总行、中国光大银行信用卡电销中心、天津渤海银行、中国石化、中国烟草、国家电网95598、商务部12312、中央国债总局、上海世博会、北京人民广播电台、搜狐网、联想、澳柯玛、东方般若保险电销中心、慧聪国际、四维图新导航地图、李宁服装、第一汽车等众多客户，行业涉及电信、烟草、银行、证券、保险、电力、工商、税务、社保、公安、邮政、交通、医疗、媒体、旅游以及政府、科研机构和公共事业等众多行业，在亚洲市场赢得了用户和业界的广泛肯定。

                    </p>
                </div>
            </div>
        </div>
        <div className={styles.m1}>
            <div style={{height:"80px"}}></div>
            <div className={styles.title}>
                
                <p className={styles.p1} style={{marginBottom:"0px"}}>联系我们
                </p>
                <p className={styles.p2}>Contact us
                </p>
            </div>
            <div style={{width:"1060px",margin:"0 auto" }} className={styles.text_s}>
                <div className={styles.float}>
                    <ul className={styles.m2_ul}>
                        <li className={styles.m2_li}>
                            <img src="http://www.slodon.com/templates/default/images/about/1.png" style={{marginRight:"10px",marginTop:"-3px",marginBottom:"-5px"}} />
                            <div style={{display:"inline-block"}}><font style={{fontWeight:"bold",fontSize:"15px"}}>联系电话：</font><font>010-64188187</font>
                            </div>
                            
                            
                        </li>
                        
                        <li className={styles.m2_li}>
                            <img src="http://www.slodon.com/templates/default/images/about/6.png" style={{marginRight:"10px",marginTop:"-3px",marginBottom:"-5px"}} />
                            <div style={{display:"inline-block"}}><font style={{fontWeight:"bold",fontSize:"15px"}}>邮箱联系：</font><font>support@mg.ppmessage.cn</font>
                            </div>
                            
                            
                        </li>
                    </ul>
                </div>

                <div className={styles.float} style={{marginRight:"85px"}}>

                    <ul className={styles.m2_ul}>
                        <li className={styles.m2_li}>
                            <img src="http://www.slodon.com/templates/default/images/about/2.png" style={{marginRight:"10px",marginTop:"-3px",marginBottom:"-5px"}} />
                            <div style={{display:"inline-block"}}><font style={{fontWeight:"bold",fontSize:"15px"}}>销售和客户支持中心：</font><font>北京市朝阳区锦芳路1号院1号楼2单元2003
                            </font>
                            </div>
                            
                            
                        </li>
                        <li className={styles.m2_li}>
                            <img src="http://www.slodon.com/templates/default/images/about/2.png" style={{marginRight:"10px",marginTop:"-3px",marginBottom:"-5px"}} />
                            <div style={{display:"inline-block"}}><font style={{fontWeight:"bold",fontSize:"15px"}}>研发中心：</font><font>北京市海淀区中关村东升科技园B-2楼一层
                            </font>
                            </div>                                                                   </li>                        
                    </ul>                   
                </div>

                
                <div className={styles.float} >
                    <img src="https://ppmessage.cn/images/qrcode_wechat_offical-pp-message.jpg" width="92px"  style={{marginBottom:"0"}} />
                    <p>微信公众号
                    </p>
                </div>
            </div>
        </div>
    </div>
	</Layout>

);
