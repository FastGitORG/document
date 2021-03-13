(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{372:function(t,s,a){"use strict";a.r(s);var e=a(43),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用指南"}},[t._v("#")]),t._v(" 使用指南")]),t._v(" "),a("p",[t._v("请在同意我们服务条款和隐私协议后，再进行下一步。如若进行，我们将默认视为同意并遵守我们的服务条款和隐私协议。")]),t._v(" "),a("p",[t._v("关于 FastGit 的使用，本质上与 "),a("code",[t._v("git")]),t._v(" 有关。正常的面向 GitHub 的 "),a("code",[t._v("clone")]),t._v(" 命令可能如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/author/repo\n")])])]),a("p",[t._v("对于使用 FastGit 的情况，我们使用如下命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://hub.fastgit.org/author/repo\n")])])]),a("p",[t._v("正如您所见， FastGit 仅仅是 GitHub 的代理，所以我们仅需要替代远程地址。")]),t._v(" "),a("p",[t._v("当然，您也可以直接修改 "),a("code",[t._v("git")]),t._v(" 的配置，完全使用 FastGit 替换指向 GitHub 的链接：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global url."),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://hub.fastgit.org/"')]),t._v(".insteadOf "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" protocol.http.allow always\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("当您排查网络错误时别忘了看看 FastGit 是否宕机了，尽管我们提供高达 0% 可用性的 SLA 保障。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("当开启 2FA 功能后， push 等需要您身份验证的操作会被拒绝。（无论您使用连接令牌与否）这是源于 GitHub 自身的规范。")])]),t._v(" "),a("p",[t._v("我们并不反对对 git 配置的修改以方便您的工作。")]),t._v(" "),a("p",[t._v("随着 FastGit 的成长，我们会拥有更多资源用于加速，对于节点列表，请参阅 "),a("RouterLink",{attrs:{to:"/zh-cn/node.html"}},[t._v("节点")]),t._v(" 章节。")],1),t._v(" "),a("h2",{attrs:{id:"web-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-的使用"}},[t._v("#")]),t._v(" Web 的使用")]),t._v(" "),a("p",[t._v("对于常见的 GitHub Web 操作， FastGit 的基础节点也提供了最基础的支持。您可以直接访问包含有 Web 支持的节点。出于安全考虑，我们会禁用包括 "),a("code",[t._v("Cookie")]),t._v(" 以及 "),a("code",[t._v("Session")]),t._v(" 等敏感权限。这意味着您不能登录进行操作。")]),t._v(" "),a("h2",{attrs:{id:"release-和源码存档的下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-和源码存档的下载"}},[t._v("#")]),t._v(" Release 和源码存档的下载")]),t._v(" "),a("p",[t._v("对于正常的 "),a("code",[t._v("clone")]),t._v(" ， "),a("code",[t._v("push")]),t._v(" 操作，FastGit 已经提供了相当完善的操作。对于 Release 和源码存档的下载，我们可以使用如下方法进行操作。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Release")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假设下载链接为https://github.com/A/A/releases/download/1.0/1.0.tar.gz")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://download.fastgit.org/A/A/releases/download/1.0/1.0.tar.gz\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Codeload")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假设下载链接为 https://hub.fastgit.org/A/A/archive/master.zip")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者 https://codeload.github.com/A/A/zip/master")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://download.fastgit.org/A/A/archive/master.zip\n")])])]),a("h2",{attrs:{id:"ssh-克隆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-克隆"}},[t._v("#")]),t._v(" SSH 克隆")]),t._v(" "),a("p",[a("s",[t._v("我们同样支持 SSH 克隆，您只需要把地址更换为 fastgit.org 即可。")])]),t._v(" "),a("p",[t._v("由于不可抗逆因素，我们暂不支持 SSH 克隆。")]),t._v(" "),a("h2",{attrs:{id:"对于-raw-的代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对于-raw-的代理"}},[t._v("#")]),t._v(" 对于 raw 的代理")]),t._v(" "),a("p",[t._v("我们同样对 "),a("a",{attrs:{href:"https://raw.githubusercontent.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://raw.githubusercontent.com/"),a("OutboundLink")],1),t._v(" 进行了代理，地址为 "),a("a",{attrs:{href:"https://raw.fastgit.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://raw.fastgit.org/"),a("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);s.default=r.exports}}]);