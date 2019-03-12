# 短信集成
PPMESSAGE 集成短消息的收发功能，客户发送的短消息可以通过 PPMESSAGE 的消息流程系统转发至座席。座席也可以直接在对话界面给客户回复短消息，座席也可以给离线的客户通过短消息留言。

在 PPMESSAGE 中实现短消息收发和邮件收发的方法是一样的。都是通过集成第三方服务完成，PPMESSAGE 本身并不收取任何短消息的费用。只是将短消息集成到 PPMESSAGE 的整个消息系统之中。


回到短消息使用方法上，目前 PPMESSAGE 只集成了 Twilio 和阿里云的短消息服务。这里以 Twilio 为例讲解下配置过程。

拿到 Twilio 的配置信息后，开始 PPMESSAGE 的后台设置。

设置 - 第三方服务 - 短信服务：



这里面隐去了 PPMESSAGE 真实的配置信息，那些信息都是从 Twilio 的网站后台获取的。

最后一项是接收客户短消息，如果选中了，那么这个 URL 是需要提供给 Twilio 的，这是 PPMESSAGE 为您专门准备的 WEB 服务，这样 Twilio 收到短消息的时候就会同时发送一个请求给这个 URL，这样 PPMESSAGE 就能够收到客户的短消息了。

还有最后一步，就是流程，PPMESSAGE 本身是一个流程驱动的系统，当客户短消息来临，相当于触发了 PPMESSAGE 的一个事件，这个事件导致一个流程的执行，而这个流程是可以定制的，根据您的具体要求可以在消息来临后决定执行什么操作。

下面是 PPMESSAGE 自己的内置流程，仅供参考。

设置 - 流程管理 - 短消息流程：

![](https://upload-images.jianshu.io/upload_images/12406336-aaf066c8831f61b2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


这是一个极为简单的短消息流程，它接收到消息后，会根判断消息的发送者是否是新客户，如果是新客户则会创建客户，并且分配给全体座席，如果是老客户，则选择最近一次的座席接收这个客户消息；·消息转化·节点是一个非常关键的操作，这个节点能够将外界消息转化为 PPMESSAGE 消息，这个节点几乎用于所有的第三方服务的渠道，如微信、邮件、电话等，把微信消息转化为 PPMESSAGE 消息，把电话消息转化为 PPMESSAGE 消息，告诉座席有客户电话来，挂机时候能够把录音和录音识别的文本转化发送给座席。
