import React from "react";
import Link from "gatsby-link";
import styles from "../pages/about-css-modules.module.css";
import Footer from "../components/footer.js";
import NavDropdown  from "../components/navdropdown.js";
import EnterYourMobile from "../components/enteryourmobile";

export default ({ children }) =>
  <div>
<div className={styles.nav}>
<div className={styles.container}>
<a href="/" className={styles.brand__logo} ><img src="https://upload-images.jianshu.io/upload_images/12406336-2715eb7d8701e9c1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />   
</a>
<div className={styles.nav__content}>
<div className={styles.nav__link}>

<NavDropdown title="产品">
<div>
<a href="/product" style={{textDecoration:"none"}}>
<div className={styles.heise}>      
<div>
<font style={{color:"black"}}>智能化客服</font>
</div>
<div>一个界面管理来自网页，邮件，电话和社交媒体的所有客户消息</div>
</div>
</a>

<div style={{height:"10px"}}></div>

<a href="marketing" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>营销自动化</font></div>
<div>根据用户属性和行为在特定时间发送有针对性的邮件、短信和应用内消息，并评估效果</div>
</div>
</a>


<div style={{height:"10px"}}></div>

<a href="work-order" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>工单系统</font></div>
<div>打通售前售后环节，工单分配、转派、变更、提醒、业务流和SLA随心定制</div>
</div>
</a>



<div style={{height:"10px"}}></div>

<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>云呼叫中心</font></div>
<div>支持跨时区、跨地域、多语言分布式组网，真正All-in-One的客户体验与联络中心</div>
</div>
</a>

<div style={{height:"10px"}}></div>

<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>智能客服机器人</font></div>
<div>自主学习、人机无缝协作，提高客服满意度</div>
</div>
</a>


<div style={{height:"10px"}}></div>

<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>智能语音机器人</font></div>
<div>基于智能语音交互的人机融合平台，替代人工销售，延伸售后服务</div>
</div>
</a>

<div style={{height:"10px"}}></div>

<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>业务定制</font></div>
<div>独有的流程生成器与APP Store结合，快速满足企业业务定制需求</div>
</div>
</a>
</div>

</NavDropdown>

</div>
<div className={styles.nav__link}>

<NavDropdown title="应用场景">
<div>
<a href="/conversion-businese" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div>
<font style={{color:"black"}}>获取和转化商机</font>
</div>
<div>获取更多商机并达成更多交易</div>
</div>
</a>

<div style={{height:"10px"}}></div>

<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>引导和吸引客户</font></div>
<div>将更多注册用户转化为活跃的消费客户</div>
</div>
</a>


<div style={{height:"10px"}}></div>

<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>客户支持并提高客户满意度</font></div>
<div>通过集成多个渠道，自助服务和强大自动化的现代服务台提高客户满意度并提高效率</div>
</div>
</a>
</div>
</NavDropdown>

</div>

<div className={styles.nav__link}>
<NavDropdown title="行业解决方案">

<div>
<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div>
<font style={{color:"black"}}>电商行业解决方案</font>
</div>
<div>一个界面解决商家与客户从商品、订单到售后的所有沟通问题</div>
</div>
</a>

<div style={{height:"10px"}}></div>

<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>教育培训解决方案</font></div>
<div>商机获取、流转及营销的自动化和精细化，提高访客转化率和客户满意度</div>
</div>
</a>


<div style={{height:"10px"}}></div>

<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>金融保险解决方案</font></div>
<div>线索到成单一步到位的智能外呼和客服机器人解决方案，大幅降低人工成本</div>
</div>
</a>


<div style={{height:"10px"}}></div>

<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>医疗健康解决方案</font></div>
<div>集“全渠道客服系统、患者管理系统、数据分析系统”为一体的对话预约管理系统</div>
</div>
</a>

<div style={{height:"10px"}}></div>
<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>旅游行业解决方案</font></div>
<div>从产品、订单到客户支持的大容量、全渠道呼叫中心解决方案</div>
</div>
</a>

<div style={{height:"10px"}}></div>
<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>汽车服务解决方案</font></div>
<div>可定制可私有部署的全渠道智能云客服和营销自动化系统，提供客户粘性</div>
</div>
</a>

<div style={{height:"10px"}}></div>
<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>餐饮连锁解决方案</font></div>
<div>全渠道智能云客服和营销自动化系统，根据客户消费习惯推荐产品和提供促销方案</div>
</div>
</a>


<div style={{height:"10px"}}></div>
<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>快销品解决方案</font></div>
<div>跨地域的全渠道云客服和自动营销平台，新产品发布和促销的通道 </div>
</div>
</a>

<div style={{height:"10px"}}></div>
<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>制造业解决方案</font></div>
<div>可定制的跨时区、跨地域、多语言的全球客服支持系统</div>
</div>
</a>

<div style={{height:"10px"}}></div>
<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>本地生活解决方案</font></div>
<div>通过邮件、短信、应用内自动消息和智能外呼提升成单率和客单价</div>
</div>
</a>


</div>

</NavDropdown>
</div>

<div className={styles.nav__link}>

<NavDropdown title="产品资源">

<div>
<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div>
<font style={{color:"black"}}>产品之旅</font>
</div>
<div>xxx</div>
</div>
</a>

<div style={{height:"10px"}}></div>

<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>产品文档</font></div>
<div>xxx</div>
</div>
</a>


<div style={{height:"10px"}}></div>

<a href="#" style={{textDecoration:"none"}}>
<div className={styles.heise}>
<div><font style={{color:"black"}}>开发者文档</font></div>
<div>xxx</div>
</div>
</a>    
</div>

</NavDropdown>


</div>
<a href="#" className={styles.nav__link}><font className={styles.zizi}>定价</font>
</a>
<a href="#" className={styles.nav__link}><font className={styles.zizi}>登陆</font>
</a>
<div className={styles.nav__cta}>
<div style={{margin:"20px 0px 0px 0px"}}>
<EnterYourMobile size="small"/>
</div>
</div>
</div>
</div>
</div>
{children()}
<Footer />
</div>



