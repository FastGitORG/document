# 使用指南

請在同意我們的服務條款後，再進行下一步。如若進行，我們將默認視為同意並遵守我們的服務條款。

關於 FastGit 的使用，本質上與 `git` 有關。正常的面向 GitHub 的 `clone` 命令可能如下：

```bash
git clone https://github.com/author/repo
```

對於使用 FastGit 的情況，我們使用如下命令：

```bash
git clone https://hub.fastgit.org/author/repo
```

正如您所見， FastGit 僅僅是 GitHub 的代理，所以我們僅僅需要替代遠程地址即可。

:::warning 注意
當開啟 2FA 功能後， push 等需要您身份驗證的操作會被拒絕。 （無論您使用連接令牌與否）這是源於 GitHub 自身的規範。
:::

我們並不反對對 git 配置的修改以方便您的工作。

隨著 FastGit 的成長，我們會擁有更多資源用於加速，請參閱 [節點](../zh-tw/node.html) 章節以獲得節點列表等相關資訊。

## Web 的使用

對於常見的 GitHub Web 操作， FastGit 的基礎節點也提供了最基本的支援。您可以直接訪問包含有 Web 支援的節點。出於安全考慮，我們會禁用包括 `Cookie` 以及 `Session` 等敏感權限。這意味著您不能登錄進行操作。

## 和源碼存檔的下載

對於正常的 `clone` 、 `push` 操作，FastGit 已經提供了相當完善的操作。對於 Release 和源碼存檔的下載，我們可以使用如下方法進行操作。

```bash
# 假設下載連結為 https://github.com/A/A/releases/download/1.0/1.0.tar.gz
wget https://download.fastgit.org/A/A/releases/download/1.0/1.0.tar.gz

# Codeload
# 假設下載連結為 https://hub.fastgit.org/A/A/archive/master.zip
# 或者 https://codeload.github.com/A/A/zip/master
wget https://download.fastgit.org/A/A/archive/master.zip
```

## SSH 克隆

~~我們同樣支持 SSH 克隆，您只需要把地址更換為 fastgit.org 即可。~~

由於不可抗力因素，我們暫不支持 SSH 克隆。

## 對於 raw 的代理

我們同樣對 <https://raw.githubusercontent.com/> 進行了代理，地址為 <https://raw.fastgit.org/>。
