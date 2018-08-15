import React from "react";
import styles from "./about-css-modules.module.css";



export default () => (
  <div>

    <div style={{height:`72px`}}></div>
    <div className={styles.container__narrower}>
      <div className={styles.g__row}>
        <div className={styles.g__c6}>
          <h1>工单系统</h1>
          <div className={styles.sp__5}>
            <h2 style={{margin:'5rem 0rem 0rem 0rem'}}>新一代全渠道工单系统
            </h2>
            <div style={{height:"10px"}}>
            </div>
            <h3 style={{color:'#888'}}><font className={styles.biaoti}>打通售前售后环节，根据网页、邮件、电话和社交媒体等各种渠道的客户咨询消息创建工单，工单可自动分配、转派、变更、提醒和归档，业务流程和SLA随心定制</font>
            </h3>
            <div style={{height:"20px"}}>            
            </div>
            <form>
              <div className={styles.cta__large}>
                <input type="email" placeholder="输入邮箱" className={styles.inoupbig} />
                <div className={styles.cta__btn}>
                  <botton type="submit" className={styles.butttonbig} ><font color="white">进入</font>
                  </botton>
                </div>
              </div>
            </form>
            <div>
            </div>
            <div className={styles.t__small}>
              <div className={styles.list__bulletinline}>
                <font style={{color:'#888'}}>免费试用 · 易于安装 · 随时取消
                </font>        
              </div>
            </div>
          </div>
        </div>
        <div className={styles.g__c6}>
          <div>
            <img src="https://upload-images.jianshu.io/upload_images/12406336-f98ec2e24df43eb4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
          </div>
        </div>
      </div>  
    </div>




    
  </div>
);
