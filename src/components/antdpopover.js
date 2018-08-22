import React from 'react';
import { Popover, Button,Tooltip } from 'antd';
import styles from './Popover-modules.module.css'
import Link from "gatsby-link";

import 'antd/dist/antd.css';

const content = (
  <div>
    <a href="/product">
      <div className={styles.heise}>      
        <div>
         <font style={{color:"black"}}>智能化客服</font>
        </div>
        <div>一个界面管理来自网页，邮件，电话和社交媒体的所有客户消息</div>
      </div>
    </a>

    <div style={{height:"10px"}}></div>

    <a href="marketing">
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>营销自动化</font></div>
        <div>根据用户属性和行为在特定时间发送有针对性的邮件、短信和应用内消息，并评估效果</div>
      </div>
    </a>

    
    <div style={{height:"10px"}}></div>

    <a>
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>工单系统</font></div>
        <div>打通售前售后环节，工单分配、转派、变更、提醒、业务流和SLA随心定制</div>
      </div>
    </a>


    
    <div style={{height:"10px"}}></div>

    <a>
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>云呼叫中心</font></div>
        <div>支持跨时区、跨地域、多语言分布式组网，真正All-in-One的客户体验与联络中心</div>
      </div>
    </a>

    <div style={{height:"10px"}}></div>

    <a>
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>智能客服机器人</font></div>
        <div>自主学习、人机无缝协作，提高客服满意度</div>
      </div>
    </a>

    
    <div style={{height:"10px"}}></div>

    <a>
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>智能语音机器人</font></div>
        <div>基于智能语音交互的人机融合平台，替代人工销售，延伸售后服务</div>
      </div>
    </a>
    
    <div style={{height:"10px"}}></div>

    <a>
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>业务定制</font></div>
        <div>独有的流程生成器与APP Store结合，快速满足企业业务定制需求</div>
      </div>
    </a>




    
  </div>
);



const AntdPopover = () => (
  <Popover placement="bottom" content={content} >
    <Button type="primary">产品</Button>
  </Popover>
)


export default AntdPopover;
