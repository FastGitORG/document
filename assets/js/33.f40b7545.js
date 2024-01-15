(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{391:function(t,s,a){"use strict";a.r(s);var e=a(43),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用指南"}},[t._v("#")]),t._v(" 使用指南")]),t._v(" "),a("p",[t._v("请在同意我们服务条款和隐私协议后，再进行下一步。如若进行，我们将默认视为同意并遵守我们的服务条款和隐私协议。")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("由于不可抗逆的因素，我们已经将我们的枢纽链接从 hub.fastgit.org 更新到 hub.fgit.cf。")])]),t._v(" "),a("p",[t._v("关于 FastGit 的使用，本质上与 "),a("code",[t._v("git")]),t._v(" 有关。常规的面向 GitHub 的 "),a("code",[t._v("clone")]),t._v(" 命令可能如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/author/repo\n")])])]),a("p",[t._v("使用 FastGit 时，可使用如下命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://hub.fgit.cf/author/repo\n")])])]),a("p",[t._v("正如您所见， FastGit 仅仅是 GitHub 的代理，所以我们仅需要替换远程地址。")]),t._v(" "),a("p",[t._v("当然，您也可以直接修改 "),a("code",[t._v("git")]),t._v(" 的配置，使用 FastGit 替换所有指向 GitHub 的链接：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global url."),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://hub.fgit.cf/"')]),t._v(".insteadOf "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config protocol.https.allow always\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("当您排查网络错误时别忘了看看 FastGit 是否宕机了，尽管我们提供高达 0% 可用性的 SLA 保障。")])]),t._v(" "),a("p",[t._v("我们并不反对对 git 配置的修改以方便您的工作。")]),t._v(" "),a("p",[t._v("随着 FastGit 的成长，我们会拥有更多资源用于加速，对于节点列表，请参阅 "),a("RouterLink",{attrs:{to:"/zh-cn/node.html"}},[t._v("节点")]),t._v(" 章节。")],1),t._v(" "),a("h2",{attrs:{id:"web-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-的使用"}},[t._v("#")]),t._v(" Web 的使用")]),t._v(" "),a("p",[t._v("对于常见的 GitHub Web 操作， FastGit 的基础节点也提供了最基本的支持。您可以直接访问包含有 Web 支持的节点。目前我们已经支持登录操作（因未对 api.github.com 进行代理，USB Key 2FA 等部分功能不可用）。Github 对一些功能（例如搜索）有速率限制，如果遇到 429 错误，可以尝试登录后继续使用。")]),t._v(" "),a("h2",{attrs:{id:"release-和源码存档的下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-和源码存档的下载"}},[t._v("#")]),t._v(" Release 和源码存档的下载")]),t._v(" "),a("p",[t._v("对于正常的 "),a("code",[t._v("clone")]),t._v(" ， "),a("code",[t._v("push")]),t._v(" 操作，FastGit 已经提供了相当完善的操作。对于 Release 和源码存档的下载，我们可以使用如下方法进行操作。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Release")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假设下载链接为 https://github.com/A/A/releases/download/1.0/1.0.tar.gz")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://hub.fgit.cf/A/A/releases/download/1.0/1.0.tar.gz\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Codeload")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假设下载链接为 https://hub.fgit.cf/A/A/archive/master.zip")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者 https://codeload.github.com/A/A/zip/master")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://hub.fgit.cf/A/A/archive/master.zip\n")])])]),a("h2",{attrs:{id:"ssh-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-操作"}},[t._v("#")]),t._v(" SSH 操作")]),t._v(" "),a("p",[t._v("由于不可抗逆因素，我们暂不支持 SSH 克隆。")]),t._v(" "),a("h2",{attrs:{id:"对于-raw-的代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对于-raw-的代理"}},[t._v("#")]),t._v(" 对于 raw 的代理")]),t._v(" "),a("p",[t._v("我们同样对 "),a("a",{attrs:{href:"https://raw.githubusercontent.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://raw.githubusercontent.com/"),a("OutboundLink")],1),t._v(" 进行了代理，地址为 "),a("a",{attrs:{href:"https://raw.fgit.cf/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://raw.fgit.cf/"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("由于某些仓库的用量较大，我们对 raw 启用了有效期为 5 分钟的缓存。")])]),t._v(" "),a("h2",{attrs:{id:"当遇到-fastgit-存在问题时的处理方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当遇到-fastgit-存在问题时的处理方法"}},[t._v("#")]),t._v(" 当遇到 FastGit 存在问题时的处理方法")]),t._v(" "),a("ol",[a("li",[t._v("请确认你的网络以及 DNS 工作正常")]),t._v(" "),a("li",[t._v("请查阅 "),a("a",{attrs:{href:"https://status.fastgit.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://status.fastgit.org"),a("OutboundLink")],1),t._v(" 以及 "),a("a",{attrs:{href:"https://github.com/FastGitORG/uptime",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/FastGitORG/uptime"),a("OutboundLink")],1),t._v(" 以确认 FastGit 是否正面临潜在的服务不可用可能性")]),t._v(" "),a("li",[t._v("更换阿里公共 DNS 避免潜在的 DNS 污染问题")]),t._v(" "),a("li",[t._v("通过 Tcpping 尝试与 FastGit IP 进行通信")])]),t._v(" "),a("p",[t._v("当您确认 FastGit 正在或者即将面临不可用情景，请联系我们。\n你可以通过发送邮箱至 "),a("a",{attrs:{href:"mailto:admin@fastgit.org"}},[t._v("admin@fastgit.org")]),t._v("，前往我们的讨论区域 "),a("a",{attrs:{href:"https://github.com/FastGitORG/discussion",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/FastGitORG/discussion"),a("OutboundLink")],1),t._v(" 发送 issue，或者通过 Telegram 即时通讯群组 "),a("a",{attrs:{href:"https://t.me/fastgit",target:"_blank",rel:"noopener noreferrer"}},[t._v("@FastGit"),a("OutboundLink")],1),t._v(" 与我们取得联系。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("小贴士")]),t._v(" "),a("p",[t._v("需要注意一点，PING 并不能判断服务器是否不可用。我们推荐使用 Tcpping 检测 443 端口。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);