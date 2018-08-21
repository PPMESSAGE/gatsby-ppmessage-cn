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
            <input className={size} type="text" placeholder="输入手机号码" />
          </div>
          <div>
            <button type="submit" className={size}>
             开始使用
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EnterYourMobile
