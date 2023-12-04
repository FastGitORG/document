(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{396:function(t,a,s){"use strict";s.r(a);var e=s(43),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用指南"}},[t._v("#")]),t._v(" 使用指南")]),t._v(" "),s("p",[t._v("請在同意我們的服務條款和隱私協議後，再進行下一步。如若進行，我們將默認視為同意並遵守我們的服務條款和隱私協議。")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("由於不可抗逆的因素，我們已經將我們的樞紐鏈接從 hub.fastgit.org 更新到 hub.fgit.cf。")])]),t._v(" "),s("p",[t._v("關於 FastGit 的使用，本質上與 "),s("code",[t._v("git")]),t._v(" 有關。正常的面向 GitHub 的 "),s("code",[t._v("clone")]),t._v(" 命令可能如下：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/author/repo\n")])])]),s("p",[t._v("對於使用 FastGit 的情況，我們使用如下命令：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://hub.fgit.cf/author/repo\n")])])]),s("p",[t._v("正如您所見， FastGit 僅僅是 GitHub 的代理，所以我們僅需要替代遠程地址即可。")]),t._v(" "),s("p",[t._v("您還可以直接更改git的配置，用FastGit完全替換GitHub的鏈接：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global url."),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://hub.fgit.cf/"')]),t._v(".insteadOf "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config protocol.https.allow always\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("解決網絡錯誤時，不要忘記檢查 FastGit 是否不可用,即使我們提供高達 0% 的 SLA 保證。")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("我們暫時不支持超過 2GiB 的倉庫的 "),s("code",[t._v("clone")]),t._v("，請參閱 "),s("a",{attrs:{href:"https://github.com/FastGitORG/nginx-conf/issues/14",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/FastGitORG/nginx-conf/issues/14"),s("OutboundLink")],1),t._v(" 与 "),s("a",{attrs:{href:"https://github.com/FastGitORG/nginx-conf/commit/61a41bc0bbb012fc9a6e54b198a10874eeaf9309",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/FastGitORG/nginx-conf/commit/61a41bc0bbb012fc9a6e54b198a10874eeaf9309"),s("OutboundLink")],1),t._v(">。")])]),t._v(" "),s("p",[t._v("我們並不反對對 git 配置的修改以方便您的工作。")]),t._v(" "),s("p",[t._v("隨著 FastGit 的成長，我們會擁有更多資源用於加速，請參閱 "),s("RouterLink",{attrs:{to:"/zh-tw/node.html"}},[t._v("節點")]),t._v(" 章節以獲得節點列表等相關資訊。")],1),t._v(" "),s("h2",{attrs:{id:"web-的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-的使用"}},[t._v("#")]),t._v(" Web 的使用")]),t._v(" "),s("p",[t._v("對於常見的 GitHub Web 操作， FastGit 的基礎節點也提供了最基本的支援。您可以直接訪問包含有 Web 支援的節點。出於安全考慮，我們會禁用包括 "),s("code",[t._v("Cookie")]),t._v(" 以及 "),s("code",[t._v("Session")]),t._v(" 等敏感權限。這意味著您不能登錄進行操作。")]),t._v(" "),s("h2",{attrs:{id:"和源碼存檔的下載"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#和源碼存檔的下載"}},[t._v("#")]),t._v(" 和源碼存檔的下載")]),t._v(" "),s("p",[t._v("對於正常的 "),s("code",[t._v("clone")]),t._v(" 、 "),s("code",[t._v("push")]),t._v(" 操作，FastGit 已經提供了相當完善的操作。對於 Release 和源碼存檔的下載，我們可以使用如下方法進行操作。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假設下載連結為 https://github.com/A/A/releases/download/1.0/1.0.tar.gz")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://hub.fgit.cf/A/A/releases/download/1.0/1.0.tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Codeload")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假設下載連結為 https://hub.fgit.cf/A/A/archive/master.zip")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者 https://codeload.github.com/A/A/zip/master")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://hub.fgit.cf/A/A/archive/master.zip\n")])])]),s("h2",{attrs:{id:"ssh-操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh-操作"}},[t._v("#")]),t._v(" SSH 操作")]),t._v(" "),s("p",[t._v("由於不可抗力因素，我們暫不支持 SSH 克隆。")]),t._v(" "),s("h2",{attrs:{id:"對於-raw-的代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#對於-raw-的代理"}},[t._v("#")]),t._v(" 對於 raw 的代理")]),t._v(" "),s("p",[t._v("我們同樣對 "),s("a",{attrs:{href:"https://raw.githubusercontent.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://raw.githubusercontent.com/"),s("OutboundLink")],1),t._v(" 進行了代理，地址為 "),s("a",{attrs:{href:"https://raw.fgit.cf/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://raw.fgit.cf/"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"當遇到-fastgit-存在問題時的處理方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#當遇到-fastgit-存在問題時的處理方法"}},[t._v("#")]),t._v(" 當遇到 FastGit 存在問題時的處理方法")]),t._v(" "),s("ol",[s("li",[t._v("請確認你的網路以及 DNS 工作正常")]),t._v(" "),s("li",[t._v("請查閱 "),s("a",{attrs:{href:"https://status.fastgit.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://status.fastgit.org"),s("OutboundLink")],1),t._v(" 以及 "),s("a",{attrs:{href:"https://github.com/FastGitORG/uptime",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/FastGitORG/uptime"),s("OutboundLink")],1),t._v(" 以確認 FastGit 是否正面臨潛在的服務不可用可能性")]),t._v(" "),s("li",[t._v("更換阿里公共 DNS 避免潛在的 DNS 污染問題")]),t._v(" "),s("li",[t._v("通過 Tcpping 嘗試與 FastGit IP 進行通信")])]),t._v(" "),s("p",[t._v("當您確認 FastGit 正在或可能面臨不可用場景，請與我們取得聯繫。\n你可以通過發送郵箱至 "),s("a",{attrs:{href:"mailto%EF%BC%9Aadmin@fastgit.org"}},[t._v("admin@fastgit.org")]),t._v("，前往我們的討論區域 "),s("a",{attrs:{href:"https://github.com/FastGitORG/discussion",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/FastGitORG/discussion"),s("OutboundLink")],1),t._v(" 發送問題，或者通過 Telegram即時通訊群組 "),s("a",{attrs:{href:"https://t.me/fastgit",target:"_blank",rel:"noopener noreferrer"}},[t._v("@FastGit"),s("OutboundLink")],1),t._v(" 與我們取得聯繫。")]),t._v(" "),s("p",[t._v("::: tip小貼士\n需要注意一點，PING 並不能判斷服務器是否不可用。我們推薦使用 Tcpping 檢測 443 埠。\n:::")])])}),[],!1,null,null,null);a.default=r.exports}}]);