import React from 'react'

import "./feathermodal.css"

// {abstract: {icon:, title:, desc}}
// children is modal detail

class FeatherModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            is_clicked: false
        }

        this.clickDetail = this.clickDetail.bind(this);
        this.clickContent = this.clickContent.bind(this);
    }

    clickDetail(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({is_clicked:false});
    }

    clickContent(e) {
        e.preventDefault();
        e.stopPropagation();        
    }
    
    render() {

        let _class = ["feather-modal"]
        
        if (this.state.is_clicked) {
            _class = ["feather-modal", "active"];
        } else {
            _class = ["feather-modal"]
        }
        
        _class = _class.join(" ")
        
        return (
            <div className={_class}
                 onClick={(e)=>{this.setState({is_clicked:true})}}>
                
                <div className="feather-modal-abstract">
                    <div>
                        <img width="30px" src={this.props.abstract.icon} />
                    </div>
                    <div>
                        <div>{this.props.abstract.title}</div>
                        <div>{this.props.abstract.desc}</div>
                    </div>
                    
                </div>
                
                <div className="feather-modal-detail" onClick={this.clickDetail}>
                    <div className="feather-modal-detail-content feather-modal-detail-content__wide" onClick={this.clickContent}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default FeatherModal