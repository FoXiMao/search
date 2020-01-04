# search
一个精美的浏览器主页，搜索引擎我换成了百度，因为我发现百度更符合国人的搜索习惯，搜索建议依旧由神马搜索提供

## 2020/01/04更新
  - 优化代码结构，去除无效代码，更易阅读
  - 修复鼠标停留搜索建议状态显示错误的BUG
  - 更换了大屏的图片
  - 引入了看板娘
  - 更换导航栏ICON
  - 修复部分已知BUG

## 常见问题

 1. 背景图/看板娘加载慢？<br>
  答：因为图片放在本地，加载速度较慢，可以放入对象储存（COS/OSS）进行引用。<br>
 2. 如何设置跨域访问？<br>
 如果你使用的不是虚拟空间而是自己的 VPS 服务器，同时打算多域名使用，最简单的方法就是改回同域名，将模型放在插件的 models 文件夹内。你还可以通过修改 Nginx 的站点配置解决。<br>
 > location ^~ 你的站点路径 <br>
 > {<br>
 >    add_header Access-Control-Allow-Origin 允许访问的网站地址，包括协议;<br>
 > }<br>
------------
例如：你的看板娘模型在 www.citrons.cn/model，并只能允许 citrons.cn 访问

 > location ^~ /model<br>
 > {<br>
 >   add_header Access-Control-Allow-Origin citrons.cn;<br>
 > }<br>


## 没有演示图的源码都是流氓

![演示图](https://i.loli.net/2020/01/04/J3rUoWS7l1pX6wz.png)
![演示图](https://i.loli.net/2020/01/04/hMCd5OyPl9LJXsY.jpg)

### 感谢：
  [Live2D](https://www.live2d.com/)
  [奇趣保罗-Pio](https://docs.paul.ren/pio/#/)

