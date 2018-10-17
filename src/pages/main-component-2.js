import React from "react";
import styles from "./main2-component-2.module.css";

export default (props) =>{

    return(
        <div>
            <div className={styles.container__narrower}>
                <div className={styles.g__row}>
                    <div className={styles.g__c6}>
                        <h1>
                            {props.maincomponent2.title1}
                        </h1>
                        <div>
                            <h2 className={styles.h2}>
                                {props.maincomponent2.title2}
                            </h2>
                            <div style={{height:"10px"}}></div>
                            <h3 style={{color:'#888'}}><font className={styles.biaoti}>
                                {props.maincomponent2.title3}
                            </font>
                            </h3>
                            <div style={{height:"20px"}}></div>
                            {props.maincomponent2.enteryourmobile}
                            <div className={styles.t__small}>
                                <div style={{height:"15px"}}></div>
                                <div className={styles.list__bulletinline}>
                                    <font style={{color:'#888'}}>
                                        {props.maincomponent2.descriptionSmall}
                                    </font>        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.g__c6}>
                        <div>
                            <img src={props.maincomponent2.picture} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
