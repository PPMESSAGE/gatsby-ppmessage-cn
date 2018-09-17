import React from 'react'

import "./hamburger.css"

// size -> small middle large

class Hamburger extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open:false
        }
    }
    
    render() {

        let _class = "hamburger"
        
        if (this.state.open) {
            _class = "hamburger active"
        }
        
        return (
            <div className={_class}>
                
                <div className="hamburger-button"
                     onClick={(e)=>{this.setState((prev)=>{
                             console.log(prev);
                             return {open:!prev.open}
                     })}}>
                    <span className="hamburger-title"></span>
                </div>
                <div className="dropdown">
                <div className="dropdown-content">
                    {this.props.children}
                </div>
                </div>
            </div>
        )
    }
}

export default Hamburger
