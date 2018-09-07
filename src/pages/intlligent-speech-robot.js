import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";

export default () => (
    <div>
        <div className={styles.container}>
            <div className={styles.bg__light} style={{backgroundColor:"white"}}>
                
                
                <div className={styles.u__zfix}>
                    <h1 className={styles.t__h1}>
                        全面的机器人语音交互系统
                    </h1>
                    <div style={{height:"10px"}}></div>
                    <h2 className={styles.t__h3}><font>通过业内独有的流程机制解决全球业务的客服痛点，与人工智能紧密结合

                    </font>
                    </h2>


                    
                    <div className={styles.t__small}>
                        免费试用14天 易于安装
                    </div>
                    <div>
                        <div style={{height:"150px"}}></div>
                        <section className={styles.section_o__no_bottom}>
                            <div className={styles.container}>
                                <div className={styles.g__row}>

                                    <div>

                                        <div className={styles.chuangjian} style={{margin:"22px",paddingRight:"0",maxWidth:"200px"}}>
                                            
                                            <div className={styles.product__breakdown__image}>
                                                <img src={require("../images/语音转文字.png") } width="91px" /></div>
                                                <div style={{height:"10px"}}></div>
                                                <div className={styles.t__h3}>
                                                    <font>语音转文字</font>
                                                </div>
                                                <div className={styles.t__small_s}>
                                                    <font>实时语音转文字

                                                        可添加专业名词进行训练

                                                        识别准确率高达97%

                                                        快速响应客户问题</font>
                                                </div>
                                                
                                                
                                        </div>

                                        <div className={styles.chuangjian} style={{margin:"22px 50px",paddingRight:"0",maxWidth:"200px"}}>
                                            
                                            <div className={styles.product__breakdown__image}>
                                                <img src={require("../images/语音合成.png") } width="91px" /></div>
                                                <div style={{height:"10px"}}></div>
                                                <div className={styles.t__h3}>
                                                    <font>语音合成</font>
                                                </div>
                                                <div className={styles.t__small_s}>
                                                    <font>实时文字转语音

                                                        多种音色可选

                                                        支持输出男/女/人声

                                                        能调节语速、音量</font>
                                                </div>
                                                
                                                
                                        </div>
                                        

                                        <div className={styles.chuangjian} style={{margin:"22px 50px",paddingRight:"0",maxWidth:"200px"}}>
                                            
                                            <div className={styles.product__breakdown__image}>
                                                <img src={require("../images/语义处理.png") } width="91px" /></div>
                                                <div style={{height:"10px"}}></div>
                                                <div className={styles.t__h3}>
                                                    <font>语义处理</font>
                                                </div>
                                                <div className={styles.t__small_s}>
                                                    <font>深度学习和卷积神经网络算法

                                                        可基于上下文语义进行理解

                                                        可根据知识库实现多轮会话

                                                        同时具有不断地自我学习能力


                                                    </font>
                                                </div>
                                                
                                        </div>



                                        <div className={styles.chuangjian} style={{margin:"22px",paddingRight:"0",maxWidth:"200px"}}>
                                            
                                            <div className={styles.product__breakdown__image}>
                                                <img src={require("../images/语音合成.png") } width="91px" /></div>
                                                <div style={{height:"10px"}}></div>
                                                <div className={styles.t__h3}>
                                                    <font>数据分析</font>
                                                </div>
                                                <div className={styles.t__small_s}>
                                                    <font>可分析筛选出重点客户

                                                        可分析数据完善会话场景话术

                                                        可帮助企业沉淀出高质量的行业知识库</font>
                                                </div>
                                        </div>                            
                                    </div>                        
                                </div>
                            </div>
                        </section>
                    </div>
                </div>                
            </div>                     
        </div>

        <section >            
            <div className={styles.container_z} style={{textAlign:"left"}}>
                <div className={styles.g__row}>
                    <div className={styles.g__c6}>
                        <div style={{height:"100px"}}></div>
                        <h3 className={styles.t__h2}>
                            <font>
                                语音合成-确保自然
                            </font>
                        </h3>
                        <img src={require("../images/17.png") } />
                        <div style={{height:"10px"}}></div>
                        <div className={styles.max__600}>
                            <div className={styles.float}>
                                <ul className={styles.m2_ul} style={{listStyleType:"none"}}>
                                    <li className={styles.m2_li}>
                                        <img src={require("../images/34.png") } style={{marginRight:"-50px",marginTop:"-3px",marginBottom:"-30px",position:"absolute",left:"0"}} />
                                        <div style={{display:"inline-block",paddingLeft:"20px"}}>
                                            <h6 className={styles.third_h6}>
                                                强大语言分析技术
                                            </h6>
                                            <p className={styles.third_ur_li}>
                                                基于自然语言理解的语言分析技术，实现自动文本规范化、分词、词性标注、语义消歧、发音标注等，消除自然语言的不确定性，为合成自然流畅语音提供保障
                                            </p>
                                        </div>
                                    </li>
                                    
                                    <li className={styles.m2_li}>
                                        <div style={{height:"42px"}}></div>
                                        <img src={require("../images/35.png") } style={{marginRight:"-50px",marginTop:"-3px",marginBottom:"-30px",position:"absolute",left:"0"}} />
                                        <div style={{display:"inline-block",paddingLeft:"20px"}}>
                                            <h6 className={styles.third_h6}>
                                                高效音色学习
                                            </h6>
                                            <p className={styles.third_ur_li}>
                                                独创的高效音色学习算法技术，在声色训练的过程中实现不同规模语料、高相似度音色的模拟训练
                                            </p>
                                        </div>
                                    </li>

                                    <li className={styles.m2_li}>
                                        <div style={{height:"42px"}}></div>
                                        <img src={require("../images/36.png") } style={{marginRight:"-50px",marginTop:"-3px",marginBottom:"-30px",position:"absolute",left:"0"}} />
                                        <div style={{display:"inline-block",paddingLeft:"20px"}}>
                                            <h6 className={styles.third_h6}>
                                                高自然度韵律模型
                                            </h6>
                                            <p className={styles.third_ur_li}>
                                                独创的高自然度的韵律模型，让合成声音更加自然，流畅，贴近专业水平自然人发声，使智能对话形式的人机交互变成可能
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.g__c6}>
                        <div className={styles.js__gallery}>
                            <div className={styles.u__inline}>
                                <div className={styles.gallery}>
                                    <div className={styles.gallery__img}>
                                        <img width="280" src={require("../images/15.png") } width="146%" style={{marginTop:"10em"}} />
                                    </div>                    
                                </div>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>           
        </section>

        <section >            
            <div className={styles.container_z} style={{textAlign:"left"}}>
                <div className={styles.g__row}>

                    <div className={styles.g__c6}>
                        <div className={styles.js__gallery}>
                            <div className={styles.u__inline}>
                                <div className={styles.gallery}>
                                    <div className={styles.gallery__img}>
                                        <img width="280" src={require("../images/15.png") } width="146%" style={{marginTop:"10em"}} />
                                    </div>                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.g__c6}>
                        <div style={{height:"100px"}}></div>
                        <h3 className={styles.t__h2}>
                            <font>
                                语音识别-确保准确
                            </font>
                        </h3>
                        <img src={require("../images/17.png") } />
                        <div style={{height:"10px"}}></div>
                        <div className={styles.max__600}>
                            <div className={styles.float}>
                                <ul className={styles.m2_ul} style={{listStyleType:"none"}}>
                                    <li className={styles.m2_li}>
                                        <img src={require("../images/37.png") } style={{marginRight:"-50px",marginTop:"-3px",marginBottom:"-30px",position:"absolute",right:"38em"}} />
                                        <div style={{display:"inline-block",paddingLeft:"20px"}}>
                                            <h6 className={styles.third_h6}>
                                                抗噪音和远场技术
                                            </h6>
                                            <p className={styles.third_ur_li}>
                                                独创的抗噪声和远场处理技术，在识别前增强语音信号，有效分离噪音和混响，极大提高在户外、市内、车内等复杂环境下语音识别准确率
                                            </p>
                                        </div>
                                    </li>
                                    
                                    <li className={styles.m2_li}>
                                        <div style={{height:"42px"}}></div>
                                        <img src={require("../images/38.png") } style={{marginRight:"-50px",marginTop:"-3px",marginBottom:"-30px",position:"absolute",right:"38em"}} />
                                        <div style={{display:"inline-block",paddingLeft:"20px"}}>
                                            <h6 className={styles.third_h6}>
                                                话语/语音识别和同步处理技术
                                            </h6>
                                            <p className={styles.third_ur_li}>
                                                独创的说话人识别和语音识别，同步处理技术，在语音识别的过程中，实时同步区分说话人，不仅提高系统效率，更能实现实时语音分析，说话人分析等功能
                                            </p>
                                        </div>
                                    </li>

                                    <li className={styles.m2_li}>
                                        <div style={{height:"42px"}}></div>
                                        <img src={require("../images/39.png") } style={{marginRight:"-50px",marginTop:"-3px",marginBottom:"-30px",position:"absolute",right:"38em"}} />
                                        <div style={{display:"inline-block",paddingLeft:"20px"}}>
                                            <h6 className={styles.third_h6}>
                                                高识别率和识别效率
                                            </h6>
                                            <p className={styles.third_ur_li}>
                                                基于先进的深度学习算法模型，系统可在确保高准确率的实时识别下，保持高识别率，大大降低系统成本
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </section>

        
    </div>

);