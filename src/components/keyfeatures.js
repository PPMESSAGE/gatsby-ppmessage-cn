import React from 'react'

import "./keyfeatures.css"

// {abstract: {icon:, title:, desc:}}
// children is modal detail

class KeyFeatures extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            highlight_item: 0
        }

        this.clickFeature = this.clickFeature.bind(this);
    }

    clickFeature(feature, e) {
        console.log("clickFeature", feature);
        this.setState({highlight_item: feature.feature_id});
    }

    
    render() {

        this.props.features.map((feature, i) => {
            feature.feature_id = i;
            return feature;
        });
        
        let feature_desc_list = this.props.features.map((feature, i)=> {
            let _class = "feature-item";
            let _title_class = "feature-title"
            let _desc_class = "feature-desc"

            if (this.state.highlight_item == i) {
                _class = "feature-item active"
                _title_class = "feature-title active"
                _desc_class = "feature-desc active"
            }

            return (
                <div onClick={this.clickFeature.bind(this, feature)} className={_class} key={i} value={i}>
                    <div className={_title_class}>{feature.title}</div>
                    <div className={_desc_class}>{feature.desc}</div>
                </div>
            )
        })

        let feature_image_list = this.props.features.map((feature, i)=> {
            let _class = "feature-image";
            if (this.state.highlight_item == i) {
                _class = "feature-image active";
            }

            return (
                <div className={_class} key={i}>
                    <img src={feature.image} />
                </div>
            )
        })

        if (!this.props.rtl || this.props.rtl == "false") {
            return (
                <div className="key-features">
                    <div className="key-features-left">
                        <div>
                            {feature_desc_list}
                        </div>
                    </div>
                    <div className="key-features-right">
                        {feature_image_list}
                    </div>
                </div>
            )
        }
        return (
            <div className="key-features">
                <div className="key-features-right">
                    {feature_image_list}
                </div>
                <div className="key-features-left">
                    <div>
                        {feature_desc_list}
                    </div>
                </div>
            </div>
        )
    }
}

export default KeyFeatures
