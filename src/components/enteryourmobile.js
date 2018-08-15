import React from 'react'

import "./enteryourmobile.css"

// size -> small middle large

const EnterYourMobile = ({ size }) => {
    
    let layoutClass = "input-row"
    
    if (size == "large") {
        layoutClass = "input-column"
    }
    
    return (        
        <div>
            <form>
                <div className={layoutClass}>
                    <div>
                        <input className={size} type="text" placeholder="Enter your mobile" />
                    </div>
                    <div>
                        <button type="submit" className={size}>
                            Get Started
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EnterYourMobile
