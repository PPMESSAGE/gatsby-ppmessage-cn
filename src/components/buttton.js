import React from "react";


class Button_q extends React.Component{
    constructor(props) {
        super(props);
    }
    clickButton(){
        console.log("yes");
       
        if (window.PP.isOpen()) {
            window.PP.close()
        } else {
            window.PP.show()
        }
    }
    render() {
        return (
                <div onClick={this.clickButton}> 
                    <font>
                        联系客服
                    </font>
                </div>
        )
    }
}
export default Button_q;
