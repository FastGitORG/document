# 使用指南

请在同意我们服务条款后，再进行下一步。如若进行，我们将默认视为同意并遵守我们的服务条款。

关于 FastGit 的使用，本质上与 `git` 有关。正常的面向 GitHub 的 `clone` 命令可能如下：

```bash
git clone https://github.com/author/repo
```

对于使用 FastGit 的情况，我们使用如下命令：

```bash
git clone https://git.fastgit.org/author/repo
```

正如你所见， FastGit 仅仅是 GitHub 的代理，所以我们仅仅需要替代远程地址即可。

我们并不反对对 git 配置的修改以方便你的工作。

随着 FastGit 的成长，我们会拥有更多资源用于加速，对于节点列表，请参阅 [节点](../zh-cn/node.html) 章节。

## Web的使用

对于常见的 GitHub Web 操作， FastGit 的基础节点也提供了最基础的支持。你可以直接访问包含有 Web 支持的节点。处于安全考虑，我们会禁用包括 `Cookie` 以及 `Session` 等敏感权限。这意味着您不能登录进行操作。

## Release 的下载

对于正常的 `clone` ， `push` 操作，FastGit 已经提供了相当完善的操作。对于 Release 的下载，我们可以使用如下方法进行操作。

```bash
# 假设下载链接为https://github.com/A/A/releases/download/1.0/1.0.tar.gz
wget https://release.fastgit.org/A/A/releases/download/1.0/1.0.tar.gz
```

### FAQ

Q: 为什么我们不能使用 git.fastgit.org 进行下载?  
A: 因为我们的git并不启用缓存，对于正常的 release ，不启用缓存显得有些奢侈，并且因为 release 包含了 301 等情况，目前也没有办法靠纯 NGINX 配置进行规避。  
（PS: 如果你有办法，请通过issue的方法告诉我们）。

Q: 为什么我们不能用 release.fastgit.org 进行克隆？  
A: 因为有缓存，当然，正常请随意。但是因为git我们添加了 `keep-alive` 所以速度要比 release 进行克隆要快。

## 对于 raw 的代理

我们同样对 <https://raw.githubusercontent.com/> 进行了代理，地址为 <https://raw.fastgit.org/>。
