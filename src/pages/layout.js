import React from "react";
import Footer from "../components/footer.js";
import NavHeader from "../components/navheader"

export default ({ children }) => (    
    <div style={"background":"white !important"}>
        <NavHeader />
        {children}
        <Footer />
    </div>
)


