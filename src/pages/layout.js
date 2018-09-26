import React from "react";
import styles from "./about-css-modules.module.css";
import Footer from "../components/footer.js";
import NavHeader from "../components/navheader"
import HomeBanner from "../components/homebanner"

export default ({ children }) => (    
    <div>
        <HomeBanner />
        <NavHeader />
        {children}
        <Footer />
    </div>
)


