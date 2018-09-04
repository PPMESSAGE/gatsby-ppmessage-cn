import React from 'react'

import "./enteryourmobile.css"

// size -> small middle large

class EnterYourMobile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {size: props.size}
    this.submitMobile = this.submitMobile.bind(this)
  }
  

  submitMobile() {
      let signup_url = "https://ppmessage.cn/ppkefu/#!/app/signup"
      if (this.refs.mobile.value && this.refs.mobile.value.length) {
          signup_url=signup_url+"?as='" + this.refs.mobile.value +"'"
      }
      window.open(signup_url, "_blank")
  }

  render() {
  
    let layoutClass = "input-row"
  
    if (this.state.size == "large") {
      layoutClass = "input-column"
    }

  
  return (        
    <div>
        <div className={layoutClass}>
          <div>
            <input className={this.state.size} type="text" placeholder="输入手机号码" ref="mobile" />
          </div>
          <div>
            <button type="button" className={this.state.size} onClick={this.submitMobile}>
             开始使用
            </button>
          </div>
        </div>
    </div>
  )
}

}

export default EnterYourMobile
