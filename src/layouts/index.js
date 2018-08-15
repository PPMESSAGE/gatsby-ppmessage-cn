import React from "react";
import Link from "gatsby-link";
import styles from "../pages/about-css-modules.module.css";
import Footer from "../components/footer.js";

import AntdPopover from "../components/antdpopover";
import AntdPopover1 from "../components/antdpopover1";
import AntdPopover2 from "../components/antdpopover2";
import AntdPopover3 from "../components/antdpopover3";


export default ({ children }) =>
  <div>
<div className={styles.nav}>
<div className={styles.container}>
<a href="/" className={styles.brand__logo} ><img src="https://upload-images.jianshu.io/upload_images/12406336-2715eb7d8701e9c1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />   
</a>
<div className={styles.nav__content}>
<div className={styles.nav__link}>
<AntdPopover />
</div>
<div className={styles.nav__link}>
<AntdPopover1 />
</div>
<div className={styles.nav__link}>
<AntdPopover2 />
</div>
<div className={styles.nav__link}>
<AntdPopover3 />
</div>
<a href=" " className={styles.nav__link}><div style={{marginTop:'.2em'}}><font className={styles.zizi}>定价</font></div>
</a>
<a href=" " className={styles.nav__link}><div style={{marginTop:'.2em'}}><font className={styles.zizi}>登陆</font></div>
</a>
<div className={styles.nav__cta}>
<form className={styles.cta__form}>
<div className={styles.cta__large}>
<input type="email" placeholder="输入邮箱" className={styles.inoupbig1} />
<div className={styles.cta__btn3}>
<botton type="submit" className={styles.butttonbig1} ><font color="white">进入</font>
</botton>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
{children()}
<Footer />
</div>



