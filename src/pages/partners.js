import React from "react";
import styles from "./about-us.module.css";
import {Helmet} from "react-helmet";
import Layout from "./layout";
export default () => (
	<Layout>
        <Helmet>
            <title>合作伙伴</title>
            <meta name="description" content="partners 合作伙伴" />
        </Helmet>
        <div className={styles.heiti}>        
            <div className={styles.banner}>            
            </div>
            <div className={styles.menu}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <a href="/about-us" className={styles.a}>关于我们
                        </a>
                    </li>
                    <li className={styles.li}><a href="#" className={styles.a}>
                        联系我们</a>
                    </li>
                    <li className={styles.li}>
                        <a href="/join-us" className={styles.a}>加入我们</a>
                    </li>
                    <li className={styles.active}><a href="" className={styles.a}>合作伙伴</a>
                    </li>
                </ul>
            </div>
            <div className={styles.news_nr_pa}>
                <ul className={styles.news_nr_pa_case_n2}>

                    <li className={styles.news_nr_pa_case_n}>
                        <div className={styles.news_nr_pa_ca}>
                            <a><img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1234395725,3592627001&fm=58&s=2C93E516C4A4EF011DEDA94C0100D0B3&bpow=121&bpoh=75" /></a>
                        </div>
                        <div className={styles.case_right}>
                            <div>亚马逊
                            </div>
                            <div className={styles.zw_right}>亚马逊公司（Amazon，简称亚马逊；NASDAQ：AMZN），是美国最大的一家网络电子商务公司，位于华盛顿州的西雅图。是网络上最早开始经营电子商务的公司之一，亚马逊成立于1995年，一开始只经营网络的书籍销售业务，现在则扩及了范围相当广的其他产品，已成为全球商品品种最多的网上零售商和全球第二大互联网企业，在公司名下，也包括了AlexaInternet、a9、lab126、和互联网电影数据库（Internet Movie Database，IMDB）等子公司。
                            </div>
                        </div>
                    </li>
                    
                    <li className={styles.news_nr_pa_case_n}>
                        <div className={styles.news_nr_pa_ca}>
                            <a><img src="http://www.slodon.com/templates/default/images/partner/1.jpeg" /></a>
                        </div>
                        <div className={styles.case_right}>
                            <div>阿里巴巴
                            </div>
                            <div className={styles.zw_right}>阿里巴巴集团经营多元化的互联网业务，致力为全球所有人创造便捷的交易渠道。自成立以来，阿里巴巴集团建立了领先的消费者电子商务、网上支付、B2B网上交易市场及云计算业务，近几年更积极开拓无线应用、手机操作系统和互联网电视等领域。集团以促进一个开放、协同、繁荣的电子商务生态系统为目标，旨在对消费者、商家以及经济发展做出贡献。
                            </div>
                        </div>
                    </li>

                    <li className={styles.news_nr_pa_case_n}>
                        <div className={styles.news_nr_pa_ca}>
                            <a><img src="http://www.slodon.com/templates/default/images/partner/2.jpeg" /></a>
                        </div>
                        <div className={styles.case_right}>
                            <div>阿里云
                            </div>
                            <div className={styles.zw_right}>阿里云创立于2009年，是中国最大的云计算平台，为全球200多个国家和地区的创新创业企业、政府机构等提供服务。
                            </div>
                        </div>
                    </li>


                    <li className={styles.news_nr_pa_case_n}>
                        <div className={styles.news_nr_pa_ca}>
                            <a><img src="http://www.slodon.com/templates/default/images/partner/3.jpeg" /></a>
                        </div>
                        <div className={styles.case_right}>
                            <div>华为云
                            </div>
                            <div className={styles.zw_right}>无锡华云数据技术服务有限公司,总部位于江苏无锡，目前在中国北京、上 海、厦门、深圳等地拥有分公司。华云数据以多样化的云化产品组合和领先的云化支撑运营能力，立志于成为中国云计算市场最大的独立服务提供商和平台合作伙伴的最佳选择,先后获得多轮融资，2013.12月份获得intel 1亿美金投资。华云数据凭借领先的技术和产品，对行业的深刻理解，先进的服务理念和能力，通过开放、灵活的产业合作，秉承领先驱动云
                            </div>
                        </div>
                    </li>

                    <li className={styles.news_nr_pa_case_n}>
                        <div className={styles.news_nr_pa_ca}>
                            <a><img src="http://www.slodon.com/templates/default/images/partner/4.jpeg" /></a>
                        </div>
                        <div className={styles.case_right}>
                            <div>支付宝
                            </div>
                            <div className={styles.zw_right}>支付宝是全球领先的第三方支付平台，主要提供支付及理财服务，包括网购担保交易、网络支付、转账、信用卡还款、手机充值、水电煤缴费、个人理财等多个领域。致力于为用户提供“简单、安全、快速”的支付解决方案。自2014年第二季度开始成为当前全球最大的移动支付厂商。
                            </div>
                        </div>
                    </li>

                    <li className={styles.news_nr_pa_case_n}>
                        <div className={styles.news_nr_pa_ca}>
                            <a><img src="http://www.slodon.com/templates/default/images/partner/5.jpeg" /></a>
                        </div>
                        <div className={styles.case_right}>
                            <div>天猫
                            </div>
                            <div className={styles.zw_right}>中国线上购物的地标网站，亚洲最大的综合性购物平台，2000品类，70000个品牌，100%正品保障，全新一站式购物体验。涵盖服饰鞋包，美妆护肤，家电数码，时尚大牌，母婴玩具，家具建材等品类。
                            </div>
                        </div>
                    </li>

                    <li className={styles.news_nr_pa_case_n}>
                        <div className={styles.news_nr_pa_ca}>
                            <a><img src="http://www.slodon.com/templates/default/images/partner/8.jpeg" /></a>
                        </div>
                        <div className={styles.case_right}>
                            <div>财付通
                            </div>
                            <div className={styles.zw_right}>财付通是腾讯公司推出的专业在线支付平台，其核心业务是帮助在互联网上进行交易的双方完成支付和收款。致力于为互联网用户和企业提供安全、便捷、专业的在线支付服务。
                            </div>
                        </div>
                    </li>

                    <li className={styles.news_nr_pa_case_n}>
                        <div className={styles.news_nr_pa_ca}>
                            <a><img src="http://www.slodon.com/templates/default/images/partner/9.jpeg" /></a>
                        </div>
                        <div className={styles.case_right}>
                            <div>PayPal
                            </div>
                            <div className={styles.zw_right}>PayPal是一个总部在美国加利福尼亚州圣荷西市的因特网服务商，允许在使用电子邮件来标识身份的用户之间转移资金，避免了传统的邮寄支票或者汇款的方法，是针对具有国际收付款需求用户设计的账户类型。它是目前全球使用最为广泛的网上交易工具。
                            </div>
                        </div>
                    </li>


                    <li className={styles.news_nr_pa_case_n}>
                        <div className={styles.news_nr_pa_ca}>
                            <a><img src="http://www.slodon.com/templates/default/images/partner/10.jpeg" /></a>
                        </div>
                        <div className={styles.case_right}>
                            <div>淘宝网
                            </div>
                            <div className={styles.zw_right}>淘宝网是亚太地区较大的网络零售商圈，由阿里巴巴集团在2003年5月10日投资创立。淘宝网现在业务跨越C2C（个人对个人）、B2C（商家对个人）两大部分。
                            </div>
                        </div>
                    </li>
                </ul>
            </div>        
        </div>
	</Layout>
);
