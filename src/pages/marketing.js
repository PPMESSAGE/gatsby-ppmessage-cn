import React from "react";
import styles from "./about-css-modules.module.css"


export default () => (
  <div>
    <div style={{height:"72px"}}></div>
    <div style={{height:`72px`}}></div>
    <div className={styles.container__narrower}>
      <div className={styles.g__row}>
        <div className={styles.g__c6}>
          <h1>营销自动化</h1>
          <div className={styles.sp__5}>
            <h2 style={{margin:'5rem 0rem 0rem 0rem'}}>在合适的时间通过合适的渠道向目标客群发送有针对性的消息
            </h2>
            <div style={{height:"10px"}}>
            </div>
            <h3 style={{color:'#888'}}><font className={styles.biaoti}>通过向访客或者注册用户发送基于行为和时间的有针对性的电子邮件、短信、移动应用内消息推送和智能语音呼叫，提高访客转化率，刺激客户消费
            </font>
            </h3>
            <div style={{height:"20px"}}>            
            </div>
            <form>
              <div className={styles.cta__large}>
                <input type="email" placeholder="输入邮箱" className={styles.inoupbig} />
                <div className={styles.cta__btn}>
                  <botton type="submit" className={styles.butttonbig} ><font color="white">进入</font>
                  </botton>
                </div>
              </div>
            </form>
            <div>
            </div>
            <div className={styles.t__small}>
              <div className={styles.list__bulletinline}>
                <font style={{color:'#888'}}>免费试用 · 易于安装 · 随时取消
                </font>        
              </div>
            </div>
          </div>
        </div>
        <div className={styles.g__c6}>
          <div>
            <img src="https://upload-images.jianshu.io/upload_images/12406336-f98ec2e24df43eb4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
          </div>
        </div>
      </div>  
    </div>


    <section style={{margin:"0em 0em 0em 15em"}}>
      <div className={styles.container}>
        <div className={styles.g__row}>
          <div className={styles.g__c3}>
            <div className={styles.chuangjian}>
              <a href="#xifen" className={styles.lianjie}>
                <div>                
                </div>
                <div style={{height:'5em'}}></div>                           
                <div className={styles.f__light}>
                  <font className={styles.smallerbiaoti}>客户细分
                  </font>
                </div>
                <div style={{height:'5px'}}></div>
                <div className={styles.max__305}>
                  <font className={styles.smallerbiaoti}>根据客户行为和时间发送有针对性的消息
                  </font>                  
                </div>
                <div className={styles.product__learn_more}>
                  <div style={{height:'2em'}}></div>
                  <span>
                    <font className={styles.smallerbiaoti}>了解更多</font>
                  </span>                  
                </div>
                
              </a>
            </div>

            <div className={styles.chuangjian} >
              <a href="#fasong" className={styles.lianjie}>
                <div>                
                </div>
                <div style={{height:'5em'}}></div>                           
                <div className={styles.f__light}>
                  <font className={styles.smallerbiaoti}>消息发送
                  </font>
                </div>
                <div style={{height:'5px'}}></div>
                <div className={styles.max__300}>
                  <font className={styles.smallerbiaoti}>发送手动或事件触发的自动消息
                  </font>
                </div>

                <div className={styles.product__learn_more}>
                  <div style={{height:'2em'}}></div>
                  <span>
                    <font className={styles.smallerbiaoti}>了解更多</font>
                  </span>                  
                </div>                
              </a>
            </div>
            <div className={styles.chuangjian} >
              <a href="#youhua" className={styles.lianjie}>
                <div>                
                </div>
                <div style={{height:'5em'}}></div>                           
                <div className={styles.f__light}>
                  <font className={styles.smallerbiaoti}>评估及优化
                  </font>
                </div>
                <div style={{height:'5px'}}></div>
                <div className={styles.max__301}>
                  <font className={styles.smallerbiaoti}>改善消息性能
                  </font>
                </div>
                <div className={styles.product__learn_more}>
                  <div style={{height:'2em'}}></div>
                  <span>
                    <font className={styles.smallerbiaoti}>了解更多</font>
                  </span>                  
                </div>
              </a>
            </div>           
          </div>          
        </div>
      </div>
    </section>

    <section   className={styles.section}>
      <a name="xifen">
        <div className={styles.container__narrower}>
          <hr style={{height:"1px"}} />
        </div>
      </a>
    </section>

    <section>      
      <div className={styles.container__narrower}>
        <div className={styles.g__row}>

          <div className={styles.g__c3}>
            <h3><font className={styles.huise}>细分</font></h3>
            <div className={styles.huisesmaller}>
              <font>根据客户行为和时间发送有针对性的消息</font>
            </div>
          </div>
          <div className={styles.g__c8}>
            <div className={styles.g__row}>

              <div className={styles.g__c6}>
                <div className={styles.features__block}>
                  <embed src="https://marketing.intercomassets.com/assets/_svg/icons/facebook-d127d681b8da22c0bd10c193318904e25ec29271f1e7649fc0b0e5e9b7c890cd.svg"  height="30" />
                  <div style={{height:'10px'}}></div>
                  <div className={styles.sp__right-6}>
                    <div className={styles.t__small}>

                      <font className={styles.t__smallfont}>事件追踪</font>
                      
                    </div>
                    <div className={styles.t__small}>
                      <font className={styles.huise3}>跟踪访客在网页上的行为，并上报给PPMessage
                      </font>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.g__c6}>
                <div className={styles.features__block}>
                  <embed src="https://marketing.intercomassets.com/assets/_svg/icons/facebook-d127d681b8da22c0bd10c193318904e25ec29271f1e7649fc0b0e5e9b7c890cd.svg"  height="30" />
                  <div style={{height:'10px'}}></div>
                  <div className={styles.sp__right-6}>
                    <div className={styles.t__small}>
                      <font className={styles.t__smallfont}>锁定客群</font>
                    </div>
                    <div className={styles.t__small}>
                      <font className={styles.huise3}>根据商机或用户的行为及属性锁定目标客群</font>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.g__c6}>
                <div className={styles.features__block}>
                  <embed src="https://marketing.intercomassets.com/assets/_svg/icons/facebook-d127d681b8da22c0bd10c193318904e25ec29271f1e7649fc0b0e5e9b7c890cd.svg"  height="30" />
                  <div style={{height:'10px'}}></div>
                  <div className={styles.sp__right-6}>
                    <div className={styles.t__small}>
                      <font className={styles.t__smallfont}>客户细分</font>
                    </div>
                    <div className={styles.t__small}>
                      <font className={styles.huise3}>根据客户的行为实时生成客户分组
                      </font>
                    </div>
                  </div>
                </div>
              </div>

              {/*此处添加新卡片*/}              


            </div>            
          </div>         
        </div>        
      </div>              
    </section>


    <section   className={styles.section}>
      <a name="fasong">
        <div className={styles.container__narrower}>
          <hr style={{height:"1px"}} />
        </div>
      </a>
    </section>

    <section>      
      <div className={styles.container__narrower}>
        <div className={styles.g__row}>

          <div className={styles.g__c3}>
            <h3><font className={styles.huise}>消息发送</font></h3>
            <div className={styles.huisesmaller}>
              <font>发送一次性或事件触发的自动消息，包括应用内语音，短信，邮件或智能语音</font>
            </div>
          </div>
          <div className={styles.g__c8}>
            <div className={styles.g__row}>

              <div className={styles.g__c6}>
                <div className={styles.features__block}>
                  <embed src="https://marketing.intercomassets.com/assets/_svg/icons/facebook-d127d681b8da22c0bd10c193318904e25ec29271f1e7649fc0b0e5e9b7c890cd.svg"  height="30" />
                  <div style={{height:'10px'}}></div>
                  <div className={styles.sp__right-6}>
                    <div className={styles.t__small}>

                      <font className={styles.t__smallfont}>自动消息</font>
                      
                    </div>
                    <div className={styles.t__small}>
                      <font className={styles.huise3}>根据用户或潜在客户的行为向                            他们发送自动消息</font>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.g__c6}>
                <div className={styles.features__block}>
                  <embed src="https://marketing.intercomassets.com/assets/_svg/icons/facebook-d127d681b8da22c0bd10c193318904e25ec29271f1e7649fc0b0e5e9b7c890cd.svg"  height="30" />
                  <div style={{height:'10px'}}></div>
                  <div className={styles.sp__right-6}>
                    <div className={styles.t__small}>
                      <font className={styles.t__smallfont}>手动消息</font>
                    </div>
                    <div className={styles.t__small}>
                      <font className={styles.huise3}>向用户或潜在客户发送一次性消息</font>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.g__c6}>
                <div className={styles.features__block}>
                  <embed src="https://marketing.intercomassets.com/assets/_svg/icons/facebook-d127d681b8da22c0bd10c193318904e25ec29271f1e7649fc0b0e5e9b7c890cd.svg"  height="30" />
                  <div style={{height:'10px'}}></div>
                  <div className={styles.sp__right-6}>
                    <div className={styles.t__small}>
                      <font className={styles.t__smallfont}>应用内消息</font>
                    </div>
                    <div className={styles.t__small}>
                      <font className={styles.huise3}>在网页或移动应用内发送与上下文相关的自动或手动消息

                      </font>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.g__c6}>
                <div className={styles.features__block}>
                  <embed src="https://marketing.intercomassets.com/assets/_svg/icons/facebook-d127d681b8da22c0bd10c193318904e25ec29271f1e7649fc0b0e5e9b7c890cd.svg"  height="30" />
                  <div style={{height:'10px'}}></div>
                  <div className={styles.sp__right-6}>
                    <div className={styles.t__small}>
                      <font className={styles.t__smallfont}>访客自动消息</font>
                    </div>
                    <div className={styles.t__small}>
                      <font className={styles.huise3}>根据访客在网页上的行为主动                        发送消息</font>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.g__c6}>
                <div className={styles.features__block}>
                  <embed src="https://marketing.intercomassets.com/assets/_svg/icons/facebook-d127d681b8da22c0bd10c193318904e25ec29271f1e7649fc0b0e5e9b7c890cd.svg"  height="30" />
                  <div style={{height:'10px'}}></div>
                  <div className={styles.sp__right-6}>
                    <div className={styles.t__small}>
                      <font className={styles.t__smallfont}>智能语音</font>
                    </div>
                    <div className={styles.t__small}>
                      <font className={styles.huise3}>根据客户行为或属性在特定时                            间向客户进行智能语音呼叫</font>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.g__c6}>
                <div className={styles.features__block}>
                  <embed src="https://marketing.intercomassets.com/assets/_svg/icons/facebook-d127d681b8da22c0bd10c193318904e25ec29271f1e7649fc0b0e5e9b7c890cd.svg"  height="30" />
                  <div style={{height:'10px'}}></div>
                  <div className={styles.sp__right-6}>
                    <div className={styles.t__small}>
                      <font className={styles.t__smallfont}>智能营销活动</font>
                    </div>
                    <div className={styles.t__small}>
                      <font className={styles.huise3}>基于客户行为和时间向客户发                         送一系列定制化消息以达到特定营销目</font>
                    </div>
                  </div>
                </div>
              </div>
              {/*此处添加新卡片*/}              
            </div>            
          </div>         
        </div>        
      </div>              
    </section>
    
    <section   className={styles.section}>
      <a name="youhua">
        <div className={styles.container__narrower}>
          <hr style={{height:"1px"}} />
        </div>
      </a>
    </section>

    <section>      
      <div className={styles.container__narrower}>
        <div className={styles.g__row}>

          <div className={styles.g__c3}>
            <h3><font className={styles.huise}>评估及优化</font></h3>
            <div className={styles.huisesmaller}>
              <font>分析消息达到的效果，改善消息性能</font>
            </div>
          </div>
          <div className={styles.g__c8}>
            <div className={styles.g__row}>

              <div className={styles.g__c6}>
                <div className={styles.features__block}>
                  <embed src="https://marketing.intercomassets.com/assets/_svg/icons/facebook-d127d681b8da22c0bd10c193318904e25ec29271f1e7649fc0b0e5e9b7c890cd.svg"  height="30" />
                  <div style={{height:'10px'}}></div>
                  <div className={styles.sp__right-6}>
                    <div className={styles.t__small}>

                      <font className={styles.t__smallfont}>消息统计</font>
                      
                    </div>
                    <div className={styles.t__small}>
                      <font className={styles.huise3}>统计发送的消息打开、点击和                         回复的数量和比率</font>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.g__c6}>
                <div className={styles.features__block}>
                  <embed src="https://marketing.intercomassets.com/assets/_svg/icons/facebook-d127d681b8da22c0bd10c193318904e25ec29271f1e7649fc0b0e5e9b7c890cd.svg"  height="30" />
                  <div style={{height:'10px'}}></div>
                  <div className={styles.sp__right-6}>
                    <div className={styles.t__small}>
                      <font className={styles.t__smallfont}>A/B测试</font>
                    </div>
                    <div className={styles.t__small}>
                      <font className={styles.huise3}>通过变量测试优化消息性能</font>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.g__c6}>
                <div className={styles.features__block}>
                  <embed src="https://marketing.intercomassets.com/assets/_svg/icons/facebook-d127d681b8da22c0bd10c193318904e25ec29271f1e7649fc0b0e5e9b7c890cd.svg"  height="30" />
                  <div style={{height:'10px'}}></div>
                  <div className={styles.sp__right-6}>
                    <div className={styles.t__small}>
                      <font className={styles.t__smallfont}>消息目标</font>
                    </div>
                    <div className={styles.t__small}>
                      <font className={styles.huise3}>跟踪和衡量产品内行为，以了                             解消息的真实性能</font>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.g__c6}>
                <div className={styles.features__block}>
                  <embed src="https://marketing.intercomassets.com/assets/_svg/icons/facebook-d127d681b8da22c0bd10c193318904e25ec29271f1e7649fc0b0e5e9b7c890cd.svg"  height="30" />
                  <div style={{height:'10px'}}></div>
                  <div className={styles.sp__right-6}>
                    <div className={styles.t__small}>
                      <font className={styles.t__smallfont}>洞察</font>
                    </div>
                    <div className={styles.t__small}>
                      <font className={styles.huise3}>查看消息的执行情况，以及消                           息是否按预期发</font>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.g__c6}>
                <div className={styles.features__block}>
                  <embed src="https://marketing.intercomassets.com/assets/_svg/icons/facebook-d127d681b8da22c0bd10c193318904e25ec29271f1e7649fc0b0e5e9b7c890cd.svg"  height="30" />
                  <div style={{height:'10px'}}></div>
                  <div className={styles.sp__right-6}>
                    <div className={styles.t__small}>
                      <font className={styles.t__smallfont}>销售转化率</font>
                    </div>
                    <div className={styles.t__small}>
                      <font className={styles.huise3}>可定制行业销售转化模型，提                        高销售转化效率</font>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.g__c6}>
                <div className={styles.features__block}>
                  <embed src="https://marketing.intercomassets.com/assets/_svg/icons/facebook-d127d681b8da22c0bd10c193318904e25ec29271f1e7649fc0b0e5e9b7c890cd.svg"  height="30" />
                  <div style={{height:'10px'}}></div>
                  <div className={styles.sp__right-6}>
                    <div className={styles.t__small}>
                      <font className={styles.t__smallfont}>CSV导出</font>
                    </div>
                    <div className={styles.t__small}>
                      <font className={styles.huise3}>将您在给定时间段内发送的消                            息的性能数据导出到CSV文件</font>
                    </div>
                  </div>
                </div>
              </div>
              {/*此处添加新卡片*/}              
            </div>            
          </div>         
        </div>        
      </div>              
    </section>

    <div style={{height:'300px'}}></div>
         
    <section className={styles.section}>
      <div className={styles.container}>
        <img src="https://marketing.intercomassets.com/assets/homepage/v2/visual-3-7ec9bf9d3ed4d4b9b01bb24343a9a31472b42251efc3ef95b24462bc45028c63.png" className={styles.homepage__customers__swiggle__bottom__right} />
        <div className={styles.g__c6}>
          <img src="https://marketing.intercomassets.com/assets/homepage/v2/visual-1-6c228c8e18d784836347395a1afc424cd617ee8c9e02540cfe124a41acca998f.png"width="374" className={styles.homepage__custom__swiggle__top__left} />
          <img src="https://marketing.intercomassets.com/assets/homepage/v2/visual-2-8b19526e56c6b81485f309ad0656821963047f3eeda17b11c2427f508ee2849a.png"   className={styles.homepage__customers__swiggle__top__right} width="156" />
          <div className={styles.device__grey}>
            <div className={styles.t__h2}>
              <font>" PPMESSAGE 是一个无价的工具，可以帮助我们通过渠道的每一步推动销售和支持。"
              </font>
              
              <div style={{height:'20px'}}></div>
              <img src="https://marketing.intercomassets.com/assets/homepage/v2/expensify-6ea3e0b82939a6c4f31fe1d8af8802bf6cbf2184c57393cb93cf499c5b0f5f45.svg" />
            </div>
          </div>
        </div>
        <div className={styles.g__c5}>
          <div className={styles.g__row}>
            <div className={styles.g__c6}>
              <img src="https://marketing.intercomassets.com/assets/homepage/v2/new-relic-17b7a72db9c90c9b2b05c98e6dbaa24c2866deb9b5de4e562fb2c7dbeb9ed68d.svg" />
              <div style={{height:'1px'}}></div>
              <div className={styles.t__small}>
                <font color="#888">消息参与度提升2.5倍
                </font>
              </div>
            </div>
            <div className={styles.g__c6}>
              <img src="https://marketing.intercomassets.com/assets/homepage/v2/new-relic-17b7a72db9c90c9b2b05c98e6dbaa24c2866deb9b5de4e562fb2c7dbeb9ed68d.svg" />
              <div style={{height:'1px'}}></div>
              <div className={styles.t__small}>
                <font color="#888">对讲机驱动了40％的预订销售演示
                </font>
              </div>
            </div>
            <div className={styles.g__c6}>
              <img src="https://marketing.intercomassets.com/assets/homepage/v2/new-relic-17b7a72db9c90c9b2b05c98e6dbaa24c2866deb9b5de4e562fb2c7dbeb9ed68d.svg" />
              <div style={{height:'1px'}}></div>
              <div className={styles.t__small}>
                <font color="#888">推动合格销售机会增加32％，并将销售周期缩短18天
                </font>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    


    <div style={{height:"200px"}}></div>
    
    <div className={styles.container}>
      <div className={styles.cta__footer}>        
        <div className={styles.g__row}>
          <h2 className={styles.t__h2}>开始你的免费试用</h2>

          <div className={styles.weiba}>
            <form>
              <div className={styles.cta__large}>
                <input type="email" placeholder="输入邮箱" className={styles.inoupbig} />
                <div className={styles.cta__btn}>
                  <botton type="submit" className={styles.butttonbig} ><font color="white">进入</font>
                  </botton>
                </div>
              </div>
            </form>
            <div>
            </div>
            <div className={styles.t__small}>
              <div className={styles.list__bulletinline}>
                <font style={{color:'#888'}}>易于安装·随时取消·已是客户？<a href="" className={styles.link__arrow}>登陆</a>
                </font>        
              </div>
            </div>
          </div>


          
        </div>
        <div className={styles.g__row}>
          <div className={styles.max__470}>
            <font>早期公司？符合条件的申请人每月仅需49美元即可获得我们的所有产品 <a href="" className={styles.link__arrow}>了解更多信息 →</a></font>
          </div>          
          <div className={styles.g__c6}>
            <div>
            </div>
          </div>          
        </div>        
      </div>
    </div>
    <div style={{height:"5em"}}></div>
    

    
  </div>
);
