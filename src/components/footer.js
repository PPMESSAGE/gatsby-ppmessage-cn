import React from 'react';
import styles from '../pages/footer-modules.module.css';
import EnterYourMobile from "./enteryourmobile";
import Free from "./free_trial";

import "./footer.css"

class Footer extends React.Component {

    /* constructor(props) {
     *     super(props);
     * } */

    componentDidMount () {
        
        /* window.ppSettings = {app_uuid:'a600998e-efff-11e5-9d9f-02287b8c0ebf'};(function(){var d=document;function l(){var a=d.createElement('script');a.type='text/javascript';a.async=!0;a.charset='utf-8';a.src='https://ppmessage.cn/ppcom/assets/pp-library.min.js';var b=d.getElementsByTagName('script')[0];b.parentNode.insertBefore(a,b)}l();})(); */

        window.ppSettings = {
            app_uuid:'a600998e-efff-11e5-9d9f-02287b8c0ebf',
            server_url: 'https://ppmessage.cn'
        };
        
        (function(){
            var d=document;
            function l(j){
                var a=d.createElement('script');
                a.type='text/javascript';a.async=!0;a.charset='utf-8';
                a.src=j;
                var b=d.getElementsByTagName('script')[0];
                b.parentNode.insertBefore(a,b)
            }
            function m(j){
                var a=d.createElement('link');
                a.rel='stylesheet';a.async=!0;a.charset='utf-8';
                a.href=j;
                var b=d.getElementsByTagName('link')[0];
                b.parentNode.insertBefore(a,b)
            }
            l('https://ppmessage.cn/ppcom/assets/build/static/js/runtime~main.9eb600ee.js');
            l('https://ppmessage.cn/ppcom/assets/build/static/js/2.e49945de.chunk.js');
            l('https://ppmessage.cn/ppcom/assets/build/static/js/main.2f32f516.chunk.js');
            m('https://ppmessage.cn/ppcom/assets/build/static/css/main.e88b17f4.chunk.css');
        })();
        
    }

    render() {
        return (
            <footer className="footer">
                <div className={styles.heiti}>
                    <div style={{height:"72px"}}></div>
                    <div className="footer-container">
                        <div className="footer-container-container">        
                            <div className="footer-container">
                                <div className="start-use">

                                    <div className="intro">
                                        <h2 className={styles.t__h2}><font>开始免费使用</font></h2>
                                        
                                    </div>

                                    <div className="enter-mobile">
                                        <div className="enter-mobile-enter">
                                            <EnterYourMobile size="middle"/>
                                        </div>
                                        <div className={styles.u__inline}>
                                            <div style={{height:'10px'}}></div>
                                            <Free />
                                            
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
                                        <a href="/cloud-call-center" className={styles.lianjie}>
                                            <font>云呼叫中心</font>
                                        </a>
                                    </div>
                                    
                                    <div className={styles.footer__link}>
                                        <a href="/intelligent-customer-service-robot" className={styles.lianjie}>
                                            <font>智能客服机器人</font>
                                        </a>
                                    </div>
                                    
                                    <div className={styles.footer__link}>
                                        <a href="/intelligent-speech-robot" className={styles.lianjie}>
                                            <font>智能语音机器人</font>
                                        </a>
                                    </div>
                                    
                                    <div className={styles.footer__link}>
                                        <a href="/business-custom" className={styles.lianjie}>
                                            <font>业务定制</font>
                                        </a>
                                    </div>          
                                </div>
                                
                                
                                <div className={styles.footer__links}>
                                    <h4 className={styles.footer__heading}>
                                        <font color="#888">应用场景</font>
                                    </h4>
                                    <div className={styles.footer__link}>
                                        <a href="/transform-customs" className={styles.lianjie}>
                                            <font>获取和转化商机</font>
                                        </a>
                                    </div>
                                    
                                    <div className={styles.footer__link}>
                                        <a href="/guide-attract-customers" className={styles.lianjie}>
                                            <font>引导和吸引用户</font>
                                        </a>
                                    </div>
                                    
                                    <div className={styles.footer__link}>
                                        <a href="/conversion-business" className={styles.lianjie}>
                                            <font>客户支持并提高满意度</font>
                                        </a>
                                    </div>
                                    
                                </div>
                                
                                <div className={styles.footer__links}>
                                    <h4 className={styles.footer__heading}>
                                        <font color="#888">产品资源</font>
                                    </h4>
                                    
                                    {/* <div className={styles.footer__link}>
                                        <a href="/tutorial/" className={styles.lianjie}>
                                        <font>帮助中心</font>
                                        </a>
                                        </div> */}
                                    <div className={styles.footer__link}>
                                        <a href="/doc/" className={styles.lianjie}>
                                            <font>开发者文档</font>
                                        </a>
                                    </div>

                                    <div className={styles.footer__link}>
                                        <a href="http://qiniu.ppmessage.cn/desktop/macos/PPMESSAGE-2.2.1.dmg" className={styles.lianjie}>
                                            <font>客户端下载（macOS）</font>
                                        </a>
                                    </div>
                                    <div className={styles.footer__link}>
                                        <a href="http://qiniu.ppmessage.cn/desktop/windows/PPMESSAGE-SETUP-2.2.1.exe" className={styles.lianjie}>
                                            <font>客户端下载（Windows）</font>
                                        </a>
                                    </div>

                                </div>
                                
                                
                                <div className={styles.footer__links}>
                                    <h4 className={styles.footer__heading}>
                                        <font color="#888">公司介绍</font>
                                    </h4>
                                    <div className={styles.footer__link}>
                                        <a href="/about-us" className={styles.lianjie}>
                                            <font>关于我们</font>
                                        </a>
                                    </div>
                                   
                                </div>        
                            </div>      
                        </div>
                    </div>
                </div>
                <p style={{
                    "textAlign": "center",
                    "fontSize": "13px",
                    "color": "#888",
                    "marginBottom": "5px"
                }}>
                    <span style={{"marginRight": "20px"}}>© 北京优锐科技有限公司</span>
                    <span>京ICP备13021343号-2</span>
                </p>
                <p style={{
                    "textAlign": "center",
                    "fontSize": "13px",
                    "color": "#888",
                    "marginBottom": "5px"
                }}>
                PPMESSAGE为您提供安全、稳定、易用的
                <a href="https://ppmessage.cn/product" title="在线客服系统">在线客服系统</a>，
                <a href="https://ppmessage.cn/product" title="网站客服系统">网站客服系统</a>，
                <a href="https://ppmessage.cn/marketing/" title="营销自动化">营销自动化</a>，
                <a href="https://ppmessage.cn/cloud-call-center/" title="云呼叫中心">云呼叫中心</a>，
                <a href="https://ppmessage.cn/intelligent-customer-service-robot/" title="客服机器人">客服机器人</a>，
                <a href="https://ppmessage.cn/ppkefu/" title="免费试用">免费试用</a>
                </p>
            </footer>
        )

    }

}

export default Footer;
