import React from 'react';
import styles from '../pages/footer-modules.module.css'
import Link from "gatsby-link";

const Footer = props => (
  <footer className={styles.footer__wrap}>                      
    <div className={styles.container}>
      <div className={styles.footer__row}>
        <div className={styles.footer__links}>
          <h4 className={styles.footer__heading}>
            <font color="#888">产品</font>
          </h4>
          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>智能客服</font>
            </a>
          </div>

          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
              <font>营销自动化</font>
            </a>
          </div>

          <div className={styles.footer__link}>
            <a href=" " className={styles.lianjie}>
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
            <a href=" " className={styles.lianjie}>
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
