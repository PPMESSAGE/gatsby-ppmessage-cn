
# README FOR CONTRIBUTOR OF PPMESSAGE WEB SITE


## 如何更改网站内容，提交代码

由于使用了 GatsbyJS，所以改网页就是改代码。更改了代码后要提交到 Git，然后和 远端的 Git 服务器同步。

```
git add src/

git commit -m "Something you want to note"

git push
```

分别表示增加改变，提交改变，同步到服务器。


## 如何改变网站

确保已经改变的内容得到了提交和同步后

执行 ssh-update-ppmessage-cn-web-site.sh 这个脚本

这个脚本自动登录到 ppmessage cn 的服务器，并且在服务器上执行 下载最新代码，编译，并且把编译好的 html 文件 复制到 web 服务器下面。


如果执行出错 可以手动执行，值得注意的是，除了 ssh root@ppmessage.cn 这个命令外，其他都是在 ppmessage cn 的服务器上执行：

```
ssh root@ppmessage.cn


cd /opt/gatsby-ppmessage-cn

git pull

gatsby build

cp -r public/* /usr/local/nginx/html/


```

> 这里面还假设你的 mac 电脑已经具备了 github 和 ppmessage cn 信任的证书，在李越超 和 孙铁成的 mac 电脑上都已经预制了.

