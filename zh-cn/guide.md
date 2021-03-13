# 使用指南

请在同意我们服务条款后，再进行下一步。如若进行，我们将默认视为同意并遵守我们的服务条款。

关于 FastGit 的使用，本质上与 `git` 有关。正常的面向 GitHub 的 `clone` 命令可能如下：

```bash
git clone https://github.com/author/repo
```

对于使用 FastGit 的情况，我们使用如下命令：

```bash
git clone https://hub.fastgit.org/author/repo
```

正如您所见， FastGit 仅仅是 GitHub 的代理，所以我们仅需要替代远程地址。

当然，您也可以直接修改 `git` 的配置，完全使用 FastGit 替换指向 GitHub 的链接：

```bash
git config --global url."https://hub.fastgit.org/".insteadOf "https://github.com/"
git protocol.http.allow always
```

:::warning 注意
当您排查网络错误时别忘了看看 FastGit 是否宕机了，尽管我们提供高达 0% 可用性的 SLA 保障。
:::

:::warning 注意
当开启 2FA 功能后， push 等需要您身份验证的操作会被拒绝。（无论您使用连接令牌与否）这是源于 GitHub 自身的规范。
:::

我们并不反对对 git 配置的修改以方便您的工作。

随着 FastGit 的成长，我们会拥有更多资源用于加速，对于节点列表，请参阅 [节点](../zh-cn/node.html) 章节。

## Web 的使用

对于常见的 GitHub Web 操作， FastGit 的基础节点也提供了最基础的支持。您可以直接访问包含有 Web 支持的节点。出于安全考虑，我们会禁用包括 `Cookie` 以及 `Session` 等敏感权限。这意味着您不能登录进行操作。

## Release 和源码存档的下载

对于正常的 `clone` ， `push` 操作，FastGit 已经提供了相当完善的操作。对于 Release 和源码存档的下载，我们可以使用如下方法进行操作。

```bash
# Release
# 假设下载链接为https://github.com/A/A/releases/download/1.0/1.0.tar.gz
wget https://download.fastgit.org/A/A/releases/download/1.0/1.0.tar.gz

# Codeload
# 假设下载链接为 https://hub.fastgit.org/A/A/archive/master.zip
# 或者 https://codeload.github.com/A/A/zip/master
wget https://download.fastgit.org/A/A/archive/master.zip
```

## SSH 克隆

~~我们同样支持 SSH 克隆，您只需要把地址更换为 fastgit.org 即可。~~

由于不可抗逆因素，我们暂不支持 SSH 克隆。

## 对于 raw 的代理

我们同样对 <https://raw.githubusercontent.com/> 进行了代理，地址为 <https://raw.fastgit.org/>。
