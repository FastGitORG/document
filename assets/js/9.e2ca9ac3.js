(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{364:function(t,e,s){"use strict";s.r(e);var a=s(43),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"user-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-guide"}},[t._v("#")]),t._v(" User Guide")]),t._v(" "),s("p",[t._v("Please read and accept our Term of Service and Privacy Statement then go to the next step. Once you done so, it means that you agree with our Term of Service and Privacy Statement.")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Due to irreversible factors, we have updated our hub link from hub.fastgit.org to hub.fastgit.xyz.")])]),t._v(" "),s("p",[t._v("The usage of FastGit is basically relied on "),s("code",[t._v("git")]),t._v(" . For common GitHub operations, you can use the command "),s("code",[t._v("clone")]),t._v(" like:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/author/repo\n")])])]),s("p",[t._v("To use FastGit, you need to change it into:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://hub.fastgit.xyz/author/repo\n")])])]),s("p",[t._v("Just like what you see, FastGit is physically a proxy of GitHub, and what you need to do is just replacing the URL.")]),t._v(" "),s("p",[t._v("You can also edit "),s("code",[t._v("git")]),t._v(" configurations to take an easier way to use our service.")]),t._v(" "),s("p",[t._v("You can also change the configuration of "),s("code",[t._v("git")]),t._v(" directly, replacing the link of GitHub entirely with FastGit:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global url."),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://hub.fastgit.xyz/"')]),t._v(".insteadOf "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config protocol.https.allow always\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Don't forget to check if FastGit is down when you are troubleshooting network errors, even though we offer SLA guarantees of up to 0% availability.")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("We do NOT support that clone repositories which are over 2GiB. Read more "),s("a",{attrs:{href:"https://github.com/FastGitORG/nginx-conf/issues/14",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/FastGitORG/nginx-conf/issues/14"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/FastGitORG/nginx-conf/commit/61a41bc0bbb012fc9a6e54b198a10874eeaf9309",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/FastGitORG/nginx-conf/commit/61a41bc0bbb012fc9a6e54b198a10874eeaf9309"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[t._v("With the growth of FastGit, we will deploy more resources to support our speed-up service. You can find the list of our nodes in the chapter "),s("RouterLink",{attrs:{to:"/en-gb/node.html"}},[t._v("Nodes")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"the-usage-of-web"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-usage-of-web"}},[t._v("#")]),t._v(" The Usage of Web")]),t._v(" "),s("p",[t._v("FastGit also supplies basic supports for the common GitHub Web operations. You can directly access nodes with Web supports.")]),t._v(" "),s("p",[t._v("Due to the safety concerns, we banned sensitive things, like "),s("code",[t._v("Cookie")]),t._v(" and "),s("code",[t._v("Session")]),t._v(" . That means you are not able to do sensitive operations such as signing in GitHub via FastGit.")]),t._v(" "),s("h2",{attrs:{id:"download-releases-or-source-code-archives"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-releases-or-source-code-archives"}},[t._v("#")]),t._v(" Download Releases or Source Code Archives")]),t._v(" "),s("p",[t._v("For common "),s("code",[t._v("clone")]),t._v(" and "),s("code",[t._v("push")]),t._v(" operations, FastGit already has provided perfect support. We can use the command below to download releases & source code archives.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Release")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If your downalod link is: https://github.com/A/A/releases/download/1.0/1.0.tar.gz , then you use:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://download.fastgit.org/A/A/releases/download/1.0/1.0.tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Codeload")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If your download link is: https://hub.fastgit.xyz/A/A/archive/master.zip")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or https://codeload.github.com/A/A/zip/master")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://download.fastgit.org/A/A/archive/master.zip\n")])])]),s("h2",{attrs:{id:"ssh-operation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh-operation"}},[t._v("#")]),t._v(" SSH Operation")]),t._v(" "),s("p",[s("s",[t._v("We also support SSH clone. Just replace github.com to fastgit.org to enjoy.")])]),t._v(" "),s("p",[s("s",[t._v("Due to some unresistible factors, we are no longer to provide SSH clone service.")])]),t._v(" "),s("p",[t._v("26/06/2021 Update: As the 2FA issue persists, it is difficult to get much done via HTTPS. In view of the current situation, we have continued the SSH operation service.")]),t._v(" "),s("p",[t._v("Unlike before, we have split the domain where the SSH service is located, in other words it is not possible to work by replacing the address with FastGit.org.")]),t._v(" "),s("p",[t._v("Our SSH operation address is "),s("strong",[t._v("ssh.fastgit.org")]),t._v(", and we can speed things up by simply replacing the address.")]),t._v(" "),s("h2",{attrs:{id:"for-the-raw-proxy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-the-raw-proxy"}},[t._v("#")]),t._v(" For the Raw Proxy")]),t._v(" "),s("p",[t._v("We also have proxy for "),s("a",{attrs:{href:"https://raw.githubusercontent.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://raw.githubusercontent.com/"),s("OutboundLink")],1),t._v("."),s("br"),t._v("\nThe URL is: "),s("a",{attrs:{href:"https://raw.fastgit.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://raw.fastgit.org/"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"what-to-do-if-you-have-problems-with-fastgit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-to-do-if-you-have-problems-with-fastgit"}},[t._v("#")]),t._v(" What to do if you have problems with FastGit")]),t._v(" "),s("ol",[s("li",[t._v("Make sure your network and DNS are working properly")]),t._v(" "),s("li",[t._v("Please check "),s("a",{attrs:{href:"https://status.fastgit.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://status.fastgit.org"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/FastGitORG/uptime",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/FastGitORG/uptime"),s("OutboundLink")],1),t._v(" to confirm if FastGit is facing potential service unavailability")]),t._v(" "),s("li",[t._v("Change your DNS to AliPublic public DNS to avoid potential DNS pollution issues")]),t._v(" "),s("li",[t._v("Try to communicate with the FastGit IP via Tcpping")])]),t._v(" "),s("p",[t._v("When you have confirm that FastGit is or is potentially unavailable, please contact us.\nYou can communicate us by sending an email to "),s("a",{attrs:{href:"mailto:admin@fastgit.org"}},[t._v("admin@fastgit.org")]),t._v(", opening an issue to our discussion "),s("a",{attrs:{href:"https://github.com/FastGitORG/discussion",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/FastGitORG/discussion"),s("OutboundLink")],1),t._v(", or via the Telegram instant messaging group "),s("a",{attrs:{href:"https://t.me/fastgit",target:"_blank",rel:"noopener noreferrer"}},[t._v("@FastGit"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Tip")]),t._v(" "),s("p",[t._v("It is important to note that PING does not determine if a server is unavailable. We recommend using Tcpping to detect port 443.")])])])}),[],!1,null,null,null);e.default=o.exports}}]);