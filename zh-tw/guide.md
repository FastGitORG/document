# 使用指南

請在同意我們服務條款後，再進行下一步。如若進行，我們將默認視為同意並遵守我們的服務條款。

關於 FastGit 的使用，本質上與 `git` 有關。正常的面向 GitHub 的 `clone` 命令可能如下：

```bash
git clone https://github.com/author/repo
```

對於使用 FastGit 的情況，我們使用如下命令：

```bash
git clone https://hub.fastgit.org/author/repo
```

正如你所見， FastGit 僅僅是 GitHub 的代理，所以我們僅僅需要替代遠程地址即可。

我們並不反對對 git 配置的修改以方便你的工作。

隨著 FastGit 的成長，我們會擁有更多資源用於加速，對於節點列表，請參閱 [節點](../zh-tw/node.html) 章節。

## Web 的使用

對於常見的 GitHub Web 操作， FastGit 的基礎節點也提供了最基礎的支持。你可以直接訪問包含有 Web 支持的節點。處於安全考慮，我們會禁用包括 `Cookie` 以及 `Session` 等敏感權限。這意味著您不能登錄進行操作。

## Release 的下載

對於正常的 `clone` ， `push` 操作，FastGit 已經提供了相當完善的操作。對於 Release 的下載，我們可以使用如下方法進行操作。

```bash
# 假設下載鏈接為https://github.com/A/A/releases/download/1.0/1.0.tar.gz
wget https://release.fastgit.org/A/A/releases/download/1.0/1.0.tar.gz
```

## SSH 克隆

我們同樣支持 SSH 克隆，你只需要把地址更換為 fastgit.org 即可。

### FAQ

**Q:** 為什麼我們不能使用 hub.fastgit.org 進行下載?  
**A:** 因為我們的 hub.fastgit.org 並不啟用緩存，對於正常的 release 下載需求，不啟用緩存顯得有些奢侈。並且因為 release 下載包含了 301 等情況，目前也沒有辦法靠純 NGINX 配置進行規避。
（PS: 如果你有辦法，請通過issue的方法告訴我們）。

**Q:** 為什麼我們不能用 release.fastgit.org 進行克隆？  
**A:** 因為 release.fastgit.org 存在緩存，可能和原始repo存在分割體驗。與此同時，我們為 hub.fastgit.org 添加了 `keep-alive` ，所以速度要比 release 進行克隆要快。

## 對於 raw 的代理

我們同樣對 <https://raw.githubusercontent.com/> 進行了代理，地址為 <https://raw.fastgit.org/>。
