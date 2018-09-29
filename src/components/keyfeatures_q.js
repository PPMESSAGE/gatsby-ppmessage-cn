import React from 'react'

import Slider from 'react-slick'

import "./keyfeatures_q.css"

// {abstract: {icon:, title:, desc:}}
// children is modal detail

class KeyFeatures_q extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            highlight_item: 0,
            is_mobile: false
        }

        this.clickFeature = this.clickFeature.bind(this);
        this.resize = this.resize.bind(this);
    }

    resize() {
        if (window.innerWidth < 960) {
            this.setState({is_mobile: true});
            console.log("set true");
        } else {
            this.setState({is_mobile: false});
            console.log("set false");
        }
    }
    
    componentWillUnmount() {       
        window.removeEventListener('resize', this.resize);
    }

    componentDidMount() {
        this.resize();
        window.addEventListener('resize', this.resize);
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


        if (this.state.is_mobile) {
            const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                swipeToSlide: true,
                slidesToShow: 1,
                slidesToScroll: 1
            };

            let _feature_mobile_list = this.props.features.map((feature, i)=> {
                return (
                    <div key={i} value={i}>
                        <img src={feature.image_q} />
                        <div className="feature-title_q">{feature.title_q}</div>
                        <div className="feature-desc_q">{feature.desc_q}</div>
                    </div>
                )
            });
            return (<Slider {...settings}>{_feature_mobile_list}</Slider>)
        }

        
        let feature_desc_list = this.props.features.map((feature, i)=> {
            let _class = "feature-item_q";
            let _title_class = "feature-title_q"
            let _desc_class = "feature-desc_q"

            if (this.state.highlight_item == i) {
                _class = "feature-item active_q"
                _title_class = "feature-title active_q"
                _desc_class = "feature-desc active_q"
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
                    <img src={feature.image}  />
                </div>
            )
        })

        if (!this.props.rtl || this.props.rtl == "false") {
            return (
                <div className="key-features_q">
                    <div className="key-features-left_q">
                        <div>
                            {feature_desc_list}
                        </div>
                    </div>
                    <div className="key-features-right_q">
                        {feature_image_list}
                    </div>
                </div>
            )
        }

        let _pc_features = (
            <div className="key-features_q">
                <div className="key-features-right_q">
                    {feature_image_list}
                </div>
                <div className="key-features-left_q">
                    <div>
                        {feature_desc_list}
                    </div>
                </div>
            </div>
        );
        
        return _pc_features;
    }
}

export default KeyFeatures_q
