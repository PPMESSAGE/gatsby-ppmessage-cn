import React from "react";

import styles from "../about-css-modules.module.css";
import KeyFeatures from "../../components/keyfeatures"


export default () => {

    let _companies = [
        {
            cat: "电子商务",
            url: "",
            name: "唯品会",
            logo: ""
        },

        {
            cat: "电子商务",
            url: "",
            logo: "",
            name: "国美在线"
        },

        {
            cat: "电子商务",
            url: "",
            logo: "",
            name: "易趣"
        },

        
        {
            cat: "电子商务",
            url: "",
            logo: "",
            name: "走秀网"
        },

        {
            cat: "电子商务",
            url: "",
            logo: "",
            name: "飞牛网"
        },


        {
            cat: "电子商务",
            url: "",
            logo: "",
            name: "嗨淘网"
        },


        {
            cat: "电子商务",
            url: "",
            logo: "",
            name: "麦乐购"
        },

        

        {
            cat: "电子商务",
            url: "",
            logo: "",
            name: "沃尔玛"
        },

        {
            cat: "电子商务",
            url: "",
            logo: "",
            name: "麦德龙"
        },

        {
            cat: "电子商务",
            url: "",
            logo: "",
            name: "天虹商城"
        },

	    
        {
            cat: "电子商务",
            url: "",
            logo: "",
            name: "欧尚中国"
        },

        {
            cat: "电子商务",
            url: "",
            logo: "",
            name: "贝贝网"
        },


        {
            cat: "信息服务",
            url: "",
            logo: "",
            name: "智联招聘"
        },


        {
            cat: "信息服务",
            url: "",
            logo: "",
            name: "和讯"
        },

        {
            cat: "信息服务",
            url: "",
            logo: "",
            name: "汽车之家"
        },
        
        {
            cat: "信息服务",
            url: "",
            logo: "",
            name: "世纪佳缘"
        },

        {
            cat: "信息服务",
            url: "",
            logo: "",
            name: "途牛网"           
        },

        
        {
            cat: "信息服务",
            url: "",
            logo: "",
            name: "21CN"
        },
        
        {
            cat: "信息服务",
            url: "",
            logo: "",
            name: "新浪"

        },

        {
            cat: "信息服务",
            url: "",
            logo: "",
            name: "360"

        },


        {
            cat: "科技软件",
            url: "",
            logo: "",
            name: "华为"

        },


        {
            cat: "科技软件",
            url: "",
            logo: "",
            name: "锤子科技"

        },

        {
            cat: "科技软件",
            url: "",
            logo: "",
            name: "金蝶软件"

        },
        
        {
            cat: "科技软件",
            url: "",
            logo: "",
            name: "中兴手机"
        },

        
        {
            cat: "移动电信",
            url: "",
            logo: "",
            name: "四川移动"
        },


        {
            cat: "移动电信",
            url: "",
            logo: "",
            name: "上海移动"
        },


        {
            cat: "移动电信",
            url: "",
            logo: "",
            name: "内蒙移动"
        },


        {
            cat: "移动电信",
            url: "",
            logo: "",
            name: "山西移动"
        },


        {
            cat: "移动电信",
            url: "",
            logo: "",
            name: "广东联通"
        },

        {
            cat: "移动电信",
            url: "",
            logo: "",
            name: "四川电信"
        },

        {
            cat: "移动电信",
            url: "",
            logo: "",
            name: "深圳电信"
        },

        {
            cat: "移动电信",
            url: "",
            logo: "",
            name: "云南电信"
        },


        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "支付宝"
        },


	    {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "宁波银行"
        },


	    {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "易宝支付"
        },


        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "昆仑国际"
        },

        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "天天基金"
        },

        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "易方达基金"
        },

        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "易贷网"
        },


        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "国信证券"
        },


        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "泰达宏利基金"
        },


        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "广发基金"
        },


	    {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "招商基金"
        },


	    {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "景顺长城基金"
        },


	    {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "金道"
        },

        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "恒信贵金属"
        },



        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "太阳金业"
        },
        

        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "国信证券"
        },
        

        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "中国人寿"
        },

        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "新华人寿"
        },

        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "信诚人寿"
        },

        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "美联保险"
        },
        
        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "安盛天平车险"
        },

        
        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "英大长安保险"
        },

        
        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "合众人寿"
        },

        
        {
            cat: "金融行业",
            url: "",
            logo: "",
            name: "中英人寿"
        },
        

        {
            cat: "游戏彩票",
            url: "",
            logo: "",
            name: "搜狐畅游"
        },

        {
            cat: "游戏彩票",
            url: "",
            logo: "",
            name: "人人游戏"
        },
        
        {
            cat: "游戏彩票",
            url: "",
            logo: "",
            name: "金山游戏"
        },
        
        {
            cat: "游戏彩票",
            url: "",
            logo: "",
            name: "波克城市"
        },
        
        {
            cat: "游戏彩票",
            url: "",
            logo: "",
            name: "500万"
        },

        
        {
            cat: "游戏彩票",
            url: "",
            logo: "",
            name: "360彩票"
        },

        
        {
            cat: "游戏彩票",
            url: "",
            logo: "",
            name: "新浪爱彩网"
        },

        
        {
            cat: "游戏彩票",
            url: "",
            logo: "",
            name: "搜狗彩票网"
        },
        
        {
            cat: "汽车制造",
            url: "",
            logo: "",
            name: "吉利汽车"
        },

        {
            cat: "汽车制造",
            url: "",
            logo: "",
            name: "奇瑞汽车"
        },
        
        {
            cat: "汽车制造",
            url: "",
            logo: "",
            name: "东风悦达起亚"
        },

        
        {
            cat: "航空服务",
            url: "",
            logo: "",
            name: "厦门航空"
        },

        {
            cat: "航空服务",
            url: "",
            logo: "",
            name: "四川航空"
        },

        {
            cat: "航空服务",
            url: "",
            logo: "",
            name: "河北航空"
        },

        {
            cat: "航空服务",
            url: "",
            logo: "",
            name: "JAL航空"
        },

        {
            cat: "教育培训",
            url: "",
            logo: "",
            name: "启德教育"
        },

        {
            cat: "教育培训",
            url: "",
            logo: "",
            name: "英孚教育"
        },

        {
            cat: "教育培训",
            url: "",
            logo: "",
            name: "华尔街英语"
        },

        {
            cat: "教育培训",
            url: "",
            logo: "",
            name: "韦博国际英语"
        },

        {
            cat: "教育培训",
            url: "",
            logo: "",
            name: "101教育网"
        },

        {
            cat: "教育培训",
            url: "",
            logo: "",
            name: "威久留学"
        },
        
        {
            cat: "教育培训",
            url: "",
            logo: "",
            name: "朗阁"
        },
        
        {
            cat: "教育培训",
            url: "",
            logo: "",
            name: "ATA"
        },

        
        {
            cat: "电子电器",
            url: "",
            logo: "",
            name: "格力"
        },

        {
            cat: "电子电器",
            url: "",
            logo: "",
            name: "美的"

        },
        {
            cat: "电子电器",
            url: "",
            logo: "",
            name: "	    联想"
        },
        {
            cat: "电子电器",
            url: "",
            logo: "",
            name: "	    康佳"
        },

        {
            cat: "电子电器",
            url: "",
            logo: "",
            name: "方太"
        },

        {
            cat: "电子电器",
            url: "",
            logo: "",
            name: "欧派"
        },

        {
            cat: "电子电器",
            url: "",
            logo: "",
            name: "老板电器"
        },
        
        {
            cat: "电子电器",
            url: "",
            logo: "",
            name: "科沃斯"
        },

        {
            cat: "美容保健",
            url: "",
            logo: "",
            name: "贝玲妃"
        },


        {
            cat: "美容保健",
            url: "",
            logo: "",
            name: "强生"
        },

        {
            cat: "美容保健",
            url: "",
            logo: "",
            name: "DHC"
        },
        
        {
            cat: "美容保健",
            url: "",
            logo: "",
            name: "佰草集"
        },
        
        {
            cat: "美容保健",
            url: "",
            logo: "",
            name: "安利"
        },

        
        {
            cat: "美容保健",
            url: "",
            logo: "",
            name: "无限极"
        },

        
        {
            cat: "美容保健",
            url: "",
            logo: "",
            name: "新时代健康集团"
        },

        
        {
            cat: "美容保健",
            url: "",
            logo: "",
            name: "益丰大药房"
        },

        
        {
            cat: "服装鞋类",
            url: "",
            logo: "",
            name: "COACH蔻驰"
        },


        {
            cat: "服装鞋类",
            url: "",
            logo: "",
            name: "Hugo Boss"
        },

        
        {
            cat: "服装鞋类",
            url: "",
            logo: "",
            name: "GAP"
        },
        
        {
            cat: "服装鞋类",
            url: "",
            logo: "",
            name: "马克华菲"
        },

        
        {
            cat: "服装鞋类",
            url: "",
            logo: "",
            name: "艾格"
        },
        
        {
            cat: "服装鞋类",
            url: "",
            logo: "",
            name: "达芙妮"
        },

        
        {
            cat: "服装鞋类",
            url: "",
            logo: "",
            name: "匡威"
        },


        {
            cat: "超市百货",
            url: "",
            logo: "",
            name: ""
        },

        
        {
            cat: "海外客户",
            url: "",
            logo: "",
            name: ""
        }
        
	]

	
	

    return (
        <div>
            <div style={{height:`172px`}}></div>
            <div className={styles.container__narrower}>
                <div className={styles.g__row}>
                    <h1>test company category</h1>
                    <CompanyCat companies={_companies}>
                    </CompanyCat>
                </div>  
            </div>
        </div>
    )

}
