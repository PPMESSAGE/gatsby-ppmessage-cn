import React from "react";
import styles from "./about-us.module.css";

export default () => (
    <div className={styles.heiti}>               
        <div className={styles.m1_s}>
            <div style={{height:"80px"}}></div>
            <div className={styles.h1}>
                <font>电商行业解决方案</font>                                
            </div>
            <div className={styles.small}>
                <font>随着获客成本越来越高，如何获取有效的新客户，做好老客户的服务工作？如何深入挖掘客户价值，提升业务收入？成为很多电商企业共同思考的命题。PPMessage 提供从商机获取、客户互动和客户支持的客户全生命周期解决方案，助力您的业务发展。

                </font>
            </div>
            <div className={styles.t__h2}>
                <font>商机获取
                </font>
            </div>
            <div className={styles.small}>
                <font>
                    <font style={{fontWeight:"bold"}}>访问统计分析。</font>PPMessage提供业界最全面的用户浏览信息的统计及分析数据，可以跟踪从市场投放关键词到用户发起会话询问的全流程数据，让您实时评估销售转化率和ROI。
                </font>
            </div>
            <div style={{display:"flex"}}>
                <div className={styles.small_s}>
                    <font>
                        <font style={{fontWeight:"bold"}}>浏览轨迹分析。</font>企业只需要在站点加入PPMessage的统计代码，PPMessage后台就可以抓取到用户的全部浏览轨迹，这些浏览轨迹在客服接待时，自动展示给相应的客服，从而让客服提供更有针对性的个性化服务。
                    </font>
                </div>
                <div className={styles.small_s1}>
                    <img src={require("../images/40.png")}  />
                </div>
            </div>
            <div className={styles.small}>
                <font>
                    <font style={{fontWeight:"bold"}}>自动获取和评估商机。</font>
                    PPMessage销售机器人可以主动与网站访客联系，获取销售团队将潜在客户转化为付费用户所需的详细信息，并评估其是否满足成为合格商机的条件。从而7X24小时为您源源不断的获取合格商机。
                </font>
            </div>

            <div className={styles.small}>
                <font>
                    <font style={{fontWeight:"bold"}}>客服主动邀请。</font>
                    用户在浏览企业的站点时，客服人员可以实时看到用户的访问情况，并且根据用户的浏览情况和行为主动发起会话邀请、主动推荐。通过增加客服主动与用户接触的机会，大大提高营销的转化率。
                </font>
            </div>

            <div className={styles.small}>
                <font>
                    <font style={{fontWeight:"bold"}}>一键发送商品链接。</font>
                    如果用户针对某件商品对客服进行咨询，当通过具体的商品页进入客服咨询时，用户只需点击确认键的一步简单操作，客服就可以在工作台看到这件商品的具体信息，包括商品页的链接、图片、价格、商品介绍等，快速解决客户问题。
                </font>
            </div>

            <div className={styles.small}>
                <font>
                    <font style={{fontWeight:"bold"}}>客服组件内一键下单。</font>
                    如果用户对某件商品感到满意，客服可以直接向用户推送订单基本信息，客户可以在客服组件内一键完成购买。

                </font>
            </div>
            <div className={styles.t__h2}>
                <font>客户互动
                </font>
            </div>
            <div className={styles.small}>
                <font>
                    通过PPMessage营销自动化产品，您可以在合适的时间，通过正确的渠道轻松与高质量的潜在客户互动，提高客户粘性，增加客户购买频次。以下是一些应用场景示例：
                </font>
            </div>
            <div className={styles.t__h2}>
                <font>向特定客群发放促销优惠。
                </font>
            </div>
            <div className={styles.small}>
                <font>
                    试用您的产品的访客可能会成为长期客户。如果您要在特定网站（例如ProductHunt）上为人们提供试用新功能的折扣，则可以向通过该链接到达网站的访客发送促销优惠消息。 PPMessage相关配置示例如下：

                </font>
            </div>
            <div>
                <img src={require("../images/41.png")} />
            </div>

            <div className={styles.t__h2}>
                <font>主动联系对产品表现出兴趣的潜在客户。
                </font>
            </div>
            <div className={styles.small}>
                <font>
                    如果访客多次返回同一产品页面，说明他们对该产品有兴趣和购买的迹象。可以根据客户的行为特征与他们主动联系，从而提高转化率。例如您可以设置当访客第三次访问某产品页面并在该页面停留时间超过10秒向他发送消息。规则设置如下：
                </font>
            </div>
            <div>
                <img src={require("../images/42.png")} />
            </div>

            <div className={styles.t__h2}>
                <font>
                    联系高价值潜在客户。
                </font>
            </div>
            <div className={styles.small}>
                <font>
                    您可以根据您的CRM数据库的信息，主动联系高价值潜在客户。例如，根据CRM系统信息，您可以向在超过100名员工，3年内成立的公司工作的访客发送新产品推广信息。PPMessage设置示例如下：

                </font>
            </div>
            <div>
                <img src={require("../images/43.png")} />
            </div>

            <div className={styles.t__h2}>
                <font>
                    客户支持。
                </font>
            </div>
            <div className={styles.small}>
                <font>
                    针对电商企业的用户，地域分散，业务多样的特点，PPMessage提供跨地域、多时区、多语言的全渠道智能客服解决方案，将呼叫中心与其他客服通道无缝集成，同时提供灵活的工单系统和智能客服机器人系统，快速解决客户问题，提高客户满意度。
                </font>
            </div>

            <div className={styles.t__h2}>
                <font>
                    全渠道客服。
                </font>
            </div>
            <div className={styles.small}>
                <font>
                    支持跨时区，跨地域分布式全渠道组网，电话、在线聊天，邮件，社交软件信息统一接入单一界面，方便客服和客户沟通；自定义业务流程和可选的APP组件，对接企业内部系统，同步客户数据；客户进入会话，可通过流程生成器生成的流程与企业内部系统交互并提供灵活的客服分配策略；客服智能问答建议，问题自动匹配，智能推荐问题答案供客服选择。

                </font>
            </div>

            <div className={styles.t__h2}>
                <font>
                    工单系统。
                </font>
            </div>
            <div className={styles.small}>
                <font>
                    工单的使用场景不再局限于客服内部，可以一键将工单高效流转到其他部门。企业内其他业务部门也能通过发起工单来进行跨部门的协作沟通。可根据您的企业业务特性快速生成定制化工单流程，支持多种自定义字段和无限层级工单分类，自动将工单分配给指定的部门或员工，让合适的人做合适的事。工单从最开始创建到已解决已关闭，期间发生的所有操作、变更、转派、提醒事件全纪录方便查询和追责，了解客户服务处理全进展，保证企业业务稳定。SLA服务目标为您特定的客户群体或者特定情形的工单设定服务目标，保障重要的事情优先得到处理，提高企业运营质量，极大程度的提高客户满意度。可以能够按照工单标题、工单发起人、工单受理人、工单创建时间等多维度的搜索条件查询工单。支持工单无限层级分类，快速形成知识库。支持数据导出服务，以达到信息价值最大化利用。

                </font>
            </div>

            <div className={styles.t__h2}>
                <font>
                    智能客服机器人。
                </font>
            </div>
            <div className={styles.small}>
                <font>
                    PPMessage的智能机器人客服可以提供24小时无间断服务，让企业不会轻易流失一个客户咨询。通过全新优化的语义分析算法，PPMessage的机器人能更准确地理解用户问题，回答准确率最高可达97%。PPMessage支持采用自然语言方式添加知识库，让知识的添加和维护更加简单便捷。
                </font>
            </div>

            
        </div>
        
    </div>

);
