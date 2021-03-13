# User Guide

Please read and accept our Term of Service then go to the next step. Once you done so, it means that you agree with our Term of Service.

The usage of FastGit is basically relied on `git` . For common GitHub operations, you can use the command `clone` like:

```bash
git clone https://github.com/author/repo
```

To use FastGit, you need to change it into:

```bash
git clone https://hub.fastgit.org/author/repo
```

Just like what you see, FastGit is physically a proxy of GitHub, and what you need to do is just replacing the URL.

You can also edit `git` configurations to take an easier way to use our service.

You can also change the configuration of `git` directly, replacing the link of GitHub entirely with FastGit:

```bash
git config --global url."https://hub.fastgit.org/".insteadOf "https://github.com/"
git protocol.http.allow always
```

:::warning Note
Don't forget to check if FastGit is down when you are troubleshooting network errors, even though we offer SLA guarantees of up to 0% availability.
:::

:::warning Note
You will fail to push or to do other operations which need your authorization after you turn FA2 on. (Whatever you use access token as your password) This is caused by the standardization of GitHub.
:::

With the growth of FastGit, we will deploy more resources to support our speed-up service. You can find the list of our nodes in the chapter [Nodes](../en-us/node.html).

## The Usage of Web

FastGit also supplies basic supports for the common GitHub Web operations. You can directly access nodes with Web supports.

Due to the safety concerns, we banned sensitive things, like `Cookie` and `Session` . That means you are not able to do sensitive operations such as signing in GitHub via FastGit.

## Download Releases or Source Code Archives

For common `clone` and `push` operations, FastGit already has provided perfect support. We can use the command below to download releases & source code archives.

```bash
# Release
# If your downalod link is: https://github.com/A/A/releases/download/1.0/1.0.tar.gz , then you use:
wget https://download.fastgit.org/A/A/releases/download/1.0/1.0.tar.gz

# Codeload
# If your download link is: https://hub.fastgit.org/A/A/archive/master.zip
# or https://codeload.github.com/A/A/zip/master
wget https://download.fastgit.org/A/A/archive/master.zip
```

## SSH Clone

~~We also support SSH clone. Just replace github.com to fastgit.org to enjoy.~~

Due to some unresistible factors, we are no longer to provide SSH clone service.

## For the Raw Proxy

We also have proxy for <https://raw.githubusercontent.com/>.  
The URL is: <https://raw.fastgit.org/>.
