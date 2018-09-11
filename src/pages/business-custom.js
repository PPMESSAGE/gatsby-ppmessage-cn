import React from "react";
import EnterYourMobile from "../components/enteryourmobile";
import styles from "./about-css-modules.module.css";


export default () => (
    <div className={styles.heiti}>

        <div style={{height:`72px`}}></div>
        <div className={styles.container__narrower}>
            <div className={styles.g__row}>
                <div className={styles.g__c6}>
                    <h1>业务定制</h1>
                    <div className={styles.sp__5}>
                        <h2 style={{margin:'5rem 0rem 0rem 0rem'}}>独有的流程和APP Store,实现业务快速定制
                        </h2>
                        <div style={{height:"10px"}}>
                        </div>
                        <h3 style={{color:'#888'}}><font className={styles.biaoti}>PPMessage流程生成器、工具丰富的APP商店、自定义字段和视图和功能强大的API接口，可按客户要求快速生成符合客户业务特点的定制化解决方案</font>
                        </h3>
                        <div style={{height:"20px"}}>            
                        </div>
                        <div>
                            <div className={styles.f__center}>
                                <a href="#" >
                                    <botton className={styles.btn_s}> 
                                        <font>了解更多信息
                                        </font>
                                    </botton>
                                </a>
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




