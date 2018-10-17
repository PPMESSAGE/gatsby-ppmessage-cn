import React from "react";
//import Main from "../main-component-1";
import Xain from "../main-component-2";
import EnterYourMobile from "../../components/enteryourmobile"
export default() =>{
    let _maincomponent1={
        title1:"工单系统",
        title2:"新一代全渠道工单系统",
        title3:"打通售前售后环节，根据网页、邮件、电话和社交媒体等各种渠道的客户咨询消息创建工单，工单可自动分配、转派、变更、提醒和归档，业务流程和SLA随心定制",
        descriptionSmall:"免费试用 · 易于安装",
        picture:require("../../images/100.png"),
        enteryourmobile:<EnterYourMobile />
    }
    
    let _maincomponent = {
        title:"单一页面管理所有客户互动，提高跨渠道的无缝客户体验",
        description:"网页、电话、邮件、社交媒体的客户对话集中到一个工作台界面处理，精准把握客户特征",
        rtl:"false",
        features: [
            {
                title: "全渠道",
                desc: "网页、电话、邮件、社交媒体的各种客户对话消息集中接入",
                image: require("../../images/94.jpeg") 
            },
            {
                title: "单一工作台界面",
                desc: "单一工作台界面统一处理，各种渠道交互无缝切换",
                image: require("../../images/75.png")
            },

            {
                title: "可定制化工单系统",
                desc: "打通售前售后环节，工单分配、转派、变更、提醒、业务流和SLA随心定制",
                image: require("../../images/86.png")
            },
            {
                title: "强大统计报表，完善数据分析",
                desc: "跨渠道通用报表机制，支持销售转化率，客户满意度、客户工作量、会话来源等多种报表类型，各项业务数据完美呈现",
                image: require("../../images/50.png")
            },      
        ]
    }
    

    return(
        <div>
            {/* <Xain maincomponent2={_maincomponent1} />

                <Main maincomponent={_maincomponent} /> */}
        </div>
        
    )
}
