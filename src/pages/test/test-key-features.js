import React from "react";

import styles from "../about-css-modules.module.css";
import KeyFeatures_q from "../../components/keyfeatures_q";
import KeyFeatures from "../../components/keyfeatures";


export default () => {
    let _features = [
        {
            title: "Segmentation",
            desc: "Create live segments and target the right people for messages based on their behaviors",
            image: require("../../images/87.png")
        },
        {
            title: "Outbound messaging",
            desc: "Send one-off and automated email, push, and in-app messages to people",
            image: require("../../images/88.png")
        },

        {
            title: "Measurement and Optimization",
            desc: "See the performance of messages and test variants to improve results",
            image: "https://marketing.intercomassets.com/assets/messages/measurement-b13614c1ef0feae4aa3509d1fe5ee4b10fc8a489f10fa8ee9a02ca3a1ca93545.png"
        },

        {
            title: "Integrations",
            desc: "Connect Intercom with other tools like Salesforce, Segment, and more",
            image: "https://marketing.intercomassets.com/assets/messages/integrations-c420a951ff2bb5ce602e9149567455760bea13a8f8246701593b577238096f75.png"
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
        
            <div style={{height:`72px`}}></div>
            <div className={styles.container__narrower}>
                <div className={styles.g__row}>
                    <h1>test key features</h1>
                    <KeyFeatures rtl="true" features={_features}>
                    </KeyFeatures>
                </div>  
            </div>
        </div>
    )

}
