import React from 'react';
import { Popover, Button,Tooltip } from 'antd';
import styles from './Popover-modules.module.css'


import 'antd/dist/antd.css';

const content = (
  <div>
    <a>
      <div className={styles.heise}>
        <div>
          <font style={{color:"black"}}>获取和转化商机</font>
        </div>
        <div>获取更多商机并达成更多交易</div>
      </div>
    </a>

    <div style={{height:"10px"}}></div>

    <a>
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>引导和吸引客户</font></div>
        <div>将更多注册用户转化为活跃的消费客户</div>
      </div>
    </a>

    
    <div style={{height:"10px"}}></div>

    <a>
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>客户支持并提高客户满意度</font></div>
        <div>通过集成多个渠道，自助服务和强大自动化的现代服务台提高客户满意度并提高效率</div>
      </div>
    </a>


    
    



    
  </div>
);



const AntdPopover1 = () => (
  <Popover placement="bottom" content={content} >
    <Button type="primary">应用场景</Button>
  </Popover>
)


export default AntdPopover1;

