# User Guide

Please read and accept our Term of Service then go to the next step. Once you done so, it means that you agree with our Term of Service.

The usage of FastGit is basically relate on `git` . For common GitHub operations, you can use the subcommand `clone` such as:

```bash
git clone https://github.com/author/repo
```

For using FastGit, you change it into:

```bash
git clone https://hub.fastgit.org/author/repo
```

Just like what you see, FastGit is physically  a proxy of GitHub, and you need only to replace the URL.

You can also edit `git` configurations to take a easier way to use our service.

While the growth of FastGit, we will deploy more resources on our speed-up service. You can find the list of our nodes in the chapter [Nodes](../en-us/node.html).

## The Usage of Web

FastGit also supplies basic supports for the common GitHub Web operations. You can directly access nodes with Web supports.

Due to the safety concerns, we banned sensitive operations like `Cookie` and `Session` . That means you are not able to do sensitive operations such as signing in GitHub via FastGit.

## Download Releases

For common `clone` and `push` operations, FastGit already have perfect suppports. We can use the command below to download releases.

```bash
# If your downalod link is: https://github.com/A/A/releases/download/1.0/1.0.tar.gz , then you use:
wget https://release.fastgit.org/A/A/releases/download/1.0/1.0.tar.gz
```

### FAQ

**Q:** Why can't I directly download files from `hub.fastgit.org`?

**A:** Because are not yet having a method to solve the special situations such as HTTP 301 returns during caching releases, using only NGINX configurations. (PS: If you have an idea, please tell us via `issue` ) Also, we didn't enable cache for `hub.github.com` . If you need to download a release, just use `release.fastgit.org` .

**Q:** Why can't I clone using `release.fastgit.org` ?

**A:** Because we have cache for `release.github.org` , and there could be a difference between the copy you get from FastGit comparing to the original repo. Anyway, we wouldn't stop you from doing that way. You should notice that we've added `keep-alive` for `git.github.org` and you can clone over there with usually a faster speed than the release one.

## For the Raw Proxy

We also have proxy for <https://raw.githubusercontent.com/> .  
The URL is: <https://raw.fastgit.org/> .
