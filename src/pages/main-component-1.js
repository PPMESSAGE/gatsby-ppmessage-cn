import React from "react";
import styles from "./about-css-modules.module.css";
import KeyFeatures from "../components/keyfeatures";

export default() => {
    return <div> Hello World </div>
}

/* export default (props) => {  
 *   return(
 *         <div className={styles.container__narrower}>
 *             <h3 className={styles.f__center}>
 *                 {props.maincomponent.title}
 *             </h3>
 *             
 *             <h5 className={styles.f__center1}>
 *                 {props.maincomponent.description}
 *             </h5>
 * 
 *             <div className={styles.tupian}>
 *                 <KeyFeatures rtl={props.maincomponent.rtl} features={props.maincomponent.features}>
 *                 </KeyFeatures>
 *             </div>  
 *         </div>
 *     )
 * } */
