import React from 'react';
import styles from '../pages/footer-modules.module.css';
import Link from "gatsby-link";
import EnterYourMobile from "./enteryourmobile";



const Footer = props => (
  <footer className={styles.footer__wrap}>
    <div style={{height:"72px"}}></div>
    <div className={styles.container}>
      <div className={styles.cta__footer}>        
        <div className={styles.container}>
          <div className={styles.g__row}>
            <div className={styles.g__c6}>
              <h2 className={styles.t__h2}><font>开始免费使用</font></h2>
              <div className={styles.t__small}>
                <div className={styles.max__470}>
                  <font className={styles.zihao}>符合条件的申请人每月仅需49美元即可获得我们的所有产品   
                    <a href="#" style={{textDecoration:"none"}}>了解更多信息</a></font>
                </div>
              </div>
            </div>


            
            <div className={styles.g__c6} style={{textAlign:"right"}}>
              <div className={styles.u__inline}>
                <EnterYourMobile size="middle"/>
              </div>
              <div className={styles.u__inline}>
                <div style={{height:'10px'}}></div>
                <div className={styles.t__small}>
                  <font className={styles.zihao}>
                    免费试用14天 易于安装 随时取消</font>
                </div>
                <div className={styles.zihao}>已是客户?<a href="#" >登录</a></div>
              </div>
            </div>            
          </div>
        </div>        
      </div>
    </div>


    <div style={{height:"70px"}}></div>    

    
    <div className={styles.container}>
      <div className={styles.footer__row}>
        <div className={styles.footer__links}>
          <h4 className={styles.footer__heading}>
            <font color="#888">产品</font>
          </h4>
          <div className={styles.footer__link}>
            <a href="/product" className={styles.lianjie}>
              <font>智能客服</font>
            </a>
          </div>

          <div className={styles.footer__link}>
            <a href="/marketing" className={styles.lianjie}>
              <font>营销自动化</font>
            </a>
          </div>

          <div className={styles.footer__link}>
            <a href="/work-order" className={styles.lianjie}>
              <font>工单系统</font>
            </a>
          </div>

          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>云呼叫中心</font>
            </a>
          </div>

          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>智能客服机器人</font>
            </a>
          </div>

          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>智能语音机器人</font>
            </a>
          </div>

          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>业务定制</font>
            </a>
          </div>          
        </div>
        
        
        <div className={styles.footer__links}>
          <h4 className={styles.footer__heading}>
            <font color="#888">应用场景</font>
          </h4>
          <div className={styles.footer__link}>
            <a href="/conversion-businese" className={styles.lianjie}>
              <font>获取和转化商机</font>
            </a>
          </div>

          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>引导和吸引用户</font>
            </a>
          </div>

          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>客户支持并提高满意度</font>
            </a>
          </div>

        </div>
        
        <div className={styles.footer__links}>
          <h4 className={styles.footer__heading}>
            <font color="#888">解决方案</font>
          </h4>
          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>电商行业解决方案</font>
            </a>
          </div>

          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>教育培训解决方案</font>
            </a>
          </div>

          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>金融保险解决方案</font>
            </a>
          </div>

          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>医疗健康解决方案</font>
            </a>
          </div>

          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>旅游行业解决方案</font>
            </a>
          </div>

          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>汽车服务行业解决方案</font>
            </a>
          </div>
          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>餐饮连锁解决方案</font>
            </a>
          </div>
          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>快销品解决方案</font>
            </a>
          </div>
          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie} >
              <font >制造业解决方案</font>
            </a>
          </div>
          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>本地生活解决方案</font>
            </a>
          </div>          
        </div>
        <div className={styles.footer__links}>
          <h4 className={styles.footer__heading}>
            <font color="#888">产品资源</font>
          </h4>
          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>产品之旅</font>
            </a>
          </div>
          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>产品文档</font>
            </a>
          </div>
          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>开发者文档</font>
            </a>
          </div>
        </div>



        <div className={styles.footer__links}>
          <h4 className={styles.footer__heading}>
            <font color="#888">公司介绍</font>
          </h4>
          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>关于我们</font>
            </a>
          </div>
          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>我们的客户</font>
            </a>
          </div>
          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>联系我们</font>
            </a>
          </div>
          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>加入我们</font>
            </a>
          </div>
        </div>        
      </div>      
    </div>    
  </footer>
);
export default Footer;
