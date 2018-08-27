import React from "react";

import styles from "../about-css-modules.module.css";
import StackGallery from "../../components/stackgallery"


export default () => {
    let _images = [
        {
            src: "https://marketing.intercomassets.com/assets/messages/segmentation-53f2b095305527a75a4082d62ae823fc29e4a09a3c34e1facc147b2046d1ec49.png"
        },
        {
            src: "https://marketing.intercomassets.com/assets/messages/outbound-dbf7ecfa4c3664f7174deb855194d0061d0f2112ddf8cc0243c6438c6880cb7c.png"
        },

        {
            src: "https://marketing.intercomassets.com/assets/messages/measurement-b13614c1ef0feae4aa3509d1fe5ee4b10fc8a489f10fa8ee9a02ca3a1ca93545.png"
        },

        {
            src: "https://marketing.intercomassets.com/assets/messages/integrations-c420a951ff2bb5ce602e9149567455760bea13a8f8246701593b577238096f75.png"
        },
        

    ]

    return (
        <div>
            <div style={{height:`172px`}}></div>
            <div className={styles.container__narrower}>
                <div className={styles.g__row}>
                    <h1>test stack gallery</h1>
                    <StackGallery images={_images}>
                    </StackGallery>
                </div>  
            </div>
        </div>
    )

}