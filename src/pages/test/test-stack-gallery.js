import React from "react";
import WorthCompany from "../../components/worthcompany"
import styles from "../about-css-modules.module.css";
import StackGallery from "../../components/stackgallery";
import Index from "../index"
import TabsControl from "../../components/tabscontrol";
import KeyFeatures_q from "../../components/keyfeatures_q"



export default () => {

    let _features = [
        {
            title: "完整归档，强力支撑企业决策",
            desc: "工单从最开始创建到已解决已关闭，期间发生的所有操作、变更、转派、提醒事件全纪录方便查询和追责，了解客户服务处理全进展，保证企业业务稳定",
            image: "http://www.udesk.cn/images/workorder/order-history.png"
        },
    ]

    return (
        <div>

            <div style={{height:`72px`}}></div>
            <div className={styles.container__narrower}>
                <div className={styles.g__row}>
                    <h1>test key features_q</h1>
                    <KeyFeatures_q rtl="true" features={_features}>
                    </KeyFeatures_q>
                </div>  
            </div>
            


            1
            <TabsControl>
                <div name = "价格">
                    <div style={{width:"539px"}}></div>
                    <table className={styles.pricing__table}>
                        <thead>
                            <tr>
                                <th><font>积极的人</font>
                                </th>
                                <th><font>必要</font>
                                </th>
                                <th><font>临</font>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><font>最多200人</font>
                                </td>
                                <td><font>$ 49 /月</font>
                                </td>
                                <td><font>$ 75 /月</font>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div name = "查看功能">
                    第二帧
                </div>
                
            </TabsControl>

            

            
        </div>
    )

}
