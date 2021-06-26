# 使用指南

請在同意我們的服務條款和隱私協議後，再進行下一步。如若進行，我們將默認視為同意並遵守我們的服務條款和隱私協議。

關於 FastGit 的使用，本質上與 `git` 有關。正常的面向 GitHub 的 `clone` 命令可能如下：

```bash
git clone https://github.com/author/repo
```

對於使用 FastGit 的情況，我們使用如下命令：

```bash
git clone https://hub.fastgit.org/author/repo
```

正如您所見， FastGit 僅僅是 GitHub 的代理，所以我們僅需要替代遠程地址即可。

您還可以直接更改git的配置，用FastGit完全替換GitHub的鏈接：

```bash
git config --global url."https://hub.fastgit.org/".insteadOf "https://github.com/"
git config protocol.https.allow always
```

:::warning 注意
解決網絡錯誤時，不要忘記檢查 FastGit 是否不可用,即使我們提供高達 0% 的 SLA 保證。
:::

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

## SSH 操作

~~我們同樣支持 SSH 克隆，您只需要把地址更換為 fastgit.org 即可。~~

~~由於不可抗力因素，我們暫不支持 SSH 克隆。~~

26/06/2021 更新：由於 2FA 問題持續存在，所以我們很難以通過 HTTPS 的方法完成很多事。鑑於目前情況，我們繼續開放了 SSH 操作入口。

與之前不同，我們拆分了 SSH 服務所在的域名，換句話說並不能通過替換地址為 FastGit.org 完成操作。

目前我們的 SSH 克隆地址為 **ssh.fastgit.org**。只需要修正地址即可完成加速。

## 對於 raw 的代理

我們同樣對 <https://raw.githubusercontent.com/> 進行了代理，地址為 <https://raw.fastgit.org/>。

## 當遇到 FastGit 存在問題時的處理方法

1. 請確認你的網路以及 DNS 工作正常
2. 請查閱 <https://status.fastgit.org> 以及 <https://github.com/FastGitORG/uptime> 以確認 FastGit 是否正面臨潛在的服務不可用可能性
3. 更換阿里公共 DNS 避免潛在的 DNS 污染問題
4. 通過 Tcpping 嘗試與 FastGit IP 進行通信

當您確認 FastGit 正在或可能面臨不可用場景，請與我們取得聯繫。
你可以通過發送郵箱至 [admin@fastgit.org](mailto：admin@fastgit.org)，前往我們的討論區域 <https://github.com/FastGitORG/discussion> 發送問題，或者通過 Telegram即時通訊群組 [@FastGit](https://t.me/fastgit) 與我們取得聯繫。

::: tip小貼士
需要注意一點，PING 並不能判斷服務器是否不可用。我們推薦使用 Tcpping 檢測 443 埠。
:::
