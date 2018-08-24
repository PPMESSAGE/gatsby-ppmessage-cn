import React from "react";

import styles from "../about-css-modules.module.css";
import FeatherModal from "../../components/feathermodal"

export default () => (
    <div>
        <div style={{height:`72px`}}></div>
        <div className={styles.container__narrower}>
            <div className={styles.g__row}>
                <div className={styles.g__c6}>
                    <h1>test feather modal</h1>

                    <FeatherModal abstract={{title: "hello world", icon: "https://marketing.intercomassets.com/assets/_svg/icons/smart-campaigns-9b8fd8bfaae4a87872e1af63f8cd201467cd5e5ffbdb70cb2a7fa9f71f870754.svg", desc: "desc"}}>
                        <div>
                            <div className={styles.g__row}>
                                <div className="g__c3 g__c12--md">
                                    <h2 className="t__h3 f__center--md u__reset">Send</h2>
                                    <div className="sp__1"></div>
                                    <div>
                                        <div className="c__black f__bold f__center--md">Smart campaigns</div>
                                        <div className="sp__05"></div>
                                        <div className="t__small f__center--sm f__center--md">Drive leads towards a common goal by sending a personalized series of messages based on time and behavior</div>
                                        <div className="sp__3--md sp__3--sm"></div>
                                    </div>
                                </div>
                                <div className="g__c9 g__c12--md f__center u__static">
                                    <div className="browser device__shadow">
                                        <img height="auto" width="650" data-large="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-medium="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" data-large2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-medium2x="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-2x-f253684e86a5d6bd87c47b97895347b6ca557c481eb15e934789ede91b0bf34d.png" data-lazy-load="true" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png"/><noscript><img height="auto" width="650" alt="" src="https://marketing.intercomassets.com/assets/messages-features/light-box/smart-campaigns-6b555d9c492811f6a1bafd80506ba6407ee82d2022239b3e290b0cf121fca2b2.png" /></noscript>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FeatherModal>
                </div>
            </div>  
        </div>
    </div>
);
