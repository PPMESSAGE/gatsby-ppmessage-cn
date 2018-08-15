import React from 'react';
import { Popover, Button,Tooltip } from 'antd';
import styles from './Popover-modules.module.css'
import 'antd/dist/antd.css';

const content = (
  <div>
    <a>
      <div className={styles.heise}>
        <div>
          <font style={{color:"black"}}>产品之旅</font>
        </div>
        <div>xxx</div>
      </div>
    </a>

    <div style={{height:"10px"}}></div>

    <a>
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>产品文档</font></div>
        <div>xxx</div>
      </div>
    </a>

    
    <div style={{height:"10px"}}></div>

    <a>
      <div className={styles.heise}>
        <div><font style={{color:"black"}}>开发者文档</font></div>
        <div>xxx</div>
      </div>
    </a>    
  </div>
);

const AntdPopover3 = () => (
  <Popover placement="bottom" content={content} >
    <Button type="primary">产品资源</Button>
  </Popover>
)

export default AntdPopover3;

