# User Guide

Please read and accept our Term of Service and Privacy Statement then go to the next step. Once you done so, it means that you agree with our Term of Service and Privacy Statement.

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
git config protocol.https.allow always
```

:::warning Note
Don't forget to check if FastGit is down when you are troubleshooting network errors, even though we offer SLA guarantees of up to 0% availability.
:::

:::warning Note
You will fail to push or to do other operations which need your authorisation after you turn FA2 on. (Whatever you use access token as your password) This is caused by the standardisation of GitHub.
:::

With the growth of FastGit, we will deploy more resources to support our speed-up service. You can find the list of our nodes in the chapter [Nodes](../en-gb/node.html).

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

## SSH Operation

~~We also support SSH clone. Just replace github.com to fastgit.org to enjoy.~~

~~Due to some unresistible factors, we are no longer to provide SSH clone service.~~

26/06/2021 Update: As the 2FA issue persists, it is difficult to get much done via HTTPS. In view of the current situation, we have continued the SSH operation service.

Unlike before, we have split the domain where the SSH service is located, in other words it is not possible to work by replacing the address with FastGit.org.

Our SSH operation address is **ssh.fastgit.org**, and we can speed things up by simply replacing the address.

## For the Raw Proxy

We also have proxy for <https://raw.githubusercontent.com/>.  
The URL is: <https://raw.fastgit.org/>.

## What to do if you have problems with FastGit

1. Make sure your network and DNS are working properly
2. Please check <https://status.fastgit.org> and <https://github.com/FastGitORG/uptime> to confirm if FastGit is facing potential service unavailability
3. Change your DNS to AliPublic public DNS to avoid potential DNS pollution issues
4. Try to communicate with the FastGit IP via Tcpping

When you have confirm that FastGit is or is potentially unavailable, please contact us.
You can communicate us by sending an email to [admin@fastgit.org](mailto:admin@fastgit.org), opening an issue to our discussion <https://github.com/FastGitORG/discussion>, or via the Telegram instant messaging group [@FastGit](https://t.me/fastgit).

:::tip Tip
It is important to note that PING does not determine if a server is unavailable. We recommend using Tcpping to detect port 443.
:::
