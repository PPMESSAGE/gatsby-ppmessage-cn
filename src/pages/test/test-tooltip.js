import React from "react";

import styles from "../about-css-modules.module.css";

import ReactTooltip from 'react-tooltip';

import Media from "react-media";

export default () => {

    return (
        <div>
            <div style={{height:`172px`}}></div>
            <div className={styles.container__narrower}>
                <div className={styles.g__row}>
                    <h1>test tooltip</h1>
                    <a data-tip data-for='happyFace'> d(`･∀･)b </a>
                    <ReactTooltip id='happyFace' type='error'>
                        <span>Show happy face</span>
                    </ReactTooltip>
                    <a data-tip data-for='sadFace'> இдஇ </a>
                    <ReactTooltip id='sadFace' type='warning' effect='solid'>
                        <span>Show sad face</span>
                    </ReactTooltip>
                </div>  
            </div>


            
        </div>
    )

}
