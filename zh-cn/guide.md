# 使用指南

请在同意我们服务条款和隐私协议后，再进行下一步。如若进行，我们将默认视为同意并遵守我们的服务条款和隐私协议。

::: danger
由于不可抗逆的因素，我们已经将我们的枢纽链接从 hub.fastgit.org 更新到 hub.fastgit.xyz。
:::

关于 FastGit 的使用，本质上与 `git` 有关。常规的面向 GitHub 的 `clone` 命令可能如下：

```bash
git clone https://github.com/author/repo
```

使用 FastGit 时，可使用如下命令：

```bash
git clone https://hub.fastgit.xyz/author/repo
```

正如您所见， FastGit 仅仅是 GitHub 的代理，所以我们仅需要替换远程地址。

当然，您也可以直接修改 `git` 的配置，使用 FastGit 替换所有指向 GitHub 的链接：

```bash
git config --global url."https://hub.fastgit.xyz/".insteadOf "https://github.com/"
git config protocol.https.allow always
```

:::warning 注意
当您排查网络错误时别忘了看看 FastGit 是否宕机了，尽管我们提供高达 0% 可用性的 SLA 保障。
:::

:::warning 注意
我们暂时不支持超过 2GiB 的仓库的 `clone`，请参阅 <https://github.com/FastGitORG/nginx-conf/issues/14> 与 <https://github.com/FastGitORG/nginx-conf/commit/61a41bc0bbb012fc9a6e54b198a10874eeaf9309>。
:::

我们并不反对对 git 配置的修改以方便您的工作。

随着 FastGit 的成长，我们会拥有更多资源用于加速，对于节点列表，请参阅 [节点](../zh-cn/node.html) 章节。

## Web 的使用

对于常见的 GitHub Web 操作， FastGit 的基础节点也提供了最基本的支持。您可以直接访问包含有 Web 支持的节点。出于安全考虑，我们会禁用包括 `Cookie` 以及 `Session` 等敏感权限。这意味着您不能登录进行操作。

## Release 和源码存档的下载

对于正常的 `clone` ， `push` 操作，FastGit 已经提供了相当完善的操作。对于 Release 和源码存档的下载，我们可以使用如下方法进行操作。

```bash
# Release
# 假设下载链接为 https://github.com/A/A/releases/download/1.0/1.0.tar.gz
wget https://download.fastgit.org/A/A/releases/download/1.0/1.0.tar.gz

# Codeload
# 假设下载链接为 https://hub.fastgit.xyz/A/A/archive/master.zip
# 或者 https://codeload.github.com/A/A/zip/master
wget https://download.fastgit.org/A/A/archive/master.zip
```

## SSH 操作

~~我们同样支持 SSH 克隆，您只需要把地址更换为 fastgit.org 即可。~~

~~由于不可抗逆因素，我们暂不支持 SSH 克隆。~~

26/06/2021 更新：由于 2FA 问题持续存在，所以我们很难以通过 HTTPS 的方法完成很多事。鉴于目前情况，我们继续开放了 SSH 操作入口。

与之前不同，我们拆分了 SSH 服务所在的域名，换句话说并不能通过替换地址为 FastGit.org 完成操作。

目前我们的 SSH 克隆地址为 **ssh.fastgit.org**。只需要修正地址即可完成加速。

## 对于 raw 的代理

我们同样对 <https://raw.githubusercontent.com/> 进行了代理，地址为 <https://raw.fastgit.org/>。

## 当遇到 FastGit 存在问题时的处理方法

1. 请确认你的网络以及 DNS 工作正常
2. 请查阅 <https://status.fastgit.org> 以及 <https://github.com/FastGitORG/uptime> 以确认 FastGit 是否正面临潜在的服务不可用可能性
3. 更换阿里公共 DNS 避免潜在的 DNS 污染问题
4. 通过 Tcpping 尝试与 FastGit IP 进行通信

当您确认 FastGit 正在或者即将面临不可用情景，请联系我们。
你可以通过发送邮箱至 [admin@fastgit.org](mailto:admin@fastgit.org)，前往我们的讨论区域 <https://github.com/FastGitORG/discussion> 发送 issue，或者通过 Telegram 即时通讯群组 [@FastGit](https://t.me/fastgit) 与我们取得联系。

:::tip 小贴士
需要注意一点，PING 并不能判断服务器是否不可用。我们推荐使用 Tcpping 检测 443 端口。
:::
