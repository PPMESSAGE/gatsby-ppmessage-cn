module.exports = {
  siteMetadata: {
      title: 'PPMESSAGE - 在线客服系统',
      titleTemplate: "%s · PPMESSAGE 在线客服系统",
      keywords: "在线客服系统,客服软件,在线客服软件,智能客服系统,全渠道客服系统,呼叫中心,客服解决方案，线800,在线客服,网站客服系统,网页客服,网站客服,客服系统,免费客服系统,专业客服,网页咨询,网络客服,在线交流,在线营销",
      description:
      "PPMESSAGE - 网站实时交流系统，为企业发展带来更多的潜在客户，是企业进行在线咨询、在线营销、在线客服的有力工具。PPMESSAGE是全球领先的企业级客服系统平台、客服机器人、呼叫中心、工单系统、大数据分析平台、智能知识库、CRM为一体的完整的全渠道客服中心解决方案",
      url: "https://www.ppmessage.cn", // No trailing slash allowed!
      image: "/images/ppmessage-logo-black.jpg", // Path to your image you placed in the 'static' folder
      twitterUsername: "@ppmessage",
  },
    plugins: [`gatsby-plugin-polyfill-io`,`gatsby-plugin-react-helmet`,  {
      resolve: `gatsby-plugin-typography`,
      options: {
        
      },
    },
  ],
}
