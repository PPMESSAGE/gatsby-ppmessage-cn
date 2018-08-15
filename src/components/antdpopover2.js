import React from 'react';
import { Popover, Button,Tooltip } from 'antd';
import styles from './Popover-modules.module.css'


import 'antd/dist/antd.css';

const content = (
  <div>
    <a>
      <div className={styles.heise}>
        <div>
          <font style={{color:"black"}}>电商行业解决方案</font>
        </div>
        <div>一个界面解决商家与客户从商品、订单到售后的所有沟通问题</div>
      </div>
    </a>

    <div style={{height:"10px"}}></div>

    <a>
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>教育培训解决方案</font></div>
        <div>商机获取、流转及营销的自动化和精细化，提高访客转化率和客户满意度</div>
      </div>
    </a>

    
    <div style={{height:"10px"}}></div>

    <a>
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>金融保险解决方案</font></div>
        <div>线索到成单一步到位的智能外呼和客服机器人解决方案，大幅降低人工成本</div>
      </div>
    </a>


    <div style={{height:"10px"}}></div>

    <a>
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>医疗健康解决方案</font></div>
        <div>集“全渠道客服系统、患者管理系统、数据分析系统”为一体的对话预约管理系统</div>
      </div>
    </a>

    <div style={{height:"10px"}}></div>
    <a>
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>旅游行业解决方案</font></div>
        <div>从产品、订单到客户支持的大容量、全渠道呼叫中心解决方案</div>
      </div>
    </a>
    
    <div style={{height:"10px"}}></div>
    <a>
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>汽车服务解决方案</font></div>
        <div>可定制可私有部署的全渠道智能云客服和营销自动化系统，提供客户粘性</div>
      </div>
    </a>

    <div style={{height:"10px"}}></div>
    <a>
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>餐饮连锁解决方案</font></div>
        <div>全渠道智能云客服和营销自动化系统，根据客户消费习惯推荐产品和提供促销方案</div>
      </div>
    </a>


    <div style={{height:"10px"}}></div>
    <a>
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>快销品解决方案</font></div>
        <div>跨地域的全渠道云客服和自动营销平台，新产品发布和促销的通道 </div>
      </div>
    </a>

    <div style={{height:"10px"}}></div>
    <a>
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>制造业解决方案</font></div>
        <div>可定制的跨时区、跨地域、多语言的全球客服支持系统</div>
      </div>
    </a>

    <div style={{height:"10px"}}></div>
    <a>
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>本地生活解决方案</font></div>
        <div>通过邮件、短信、应用内自动消息和智能外呼提升成单率和客单价</div>
      </div>
    </a>
    
    
  </div>
);



const AntdPopover2 = () => (
  <Popover placement="bottom" content={content} >
    <Button type="primary">行业解决方案</Button>
  </Popover>
)


export default AntdPopover2;

