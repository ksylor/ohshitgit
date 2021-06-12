---
tags: tip
title: 你好嘢呀 Git，我哋後會有期！
id: fuck-this-noise
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r fucking-git-repo-dir
git clone https://some.github.url/fucking-git-repo-dir.git
cd fucking-git-repo-dir
```

多謝哂 Eric V 畀我呢個。喺呢個笑話度算 `sudo` 帳嘅麻煩去揾返佢。


講真吖，如果你嘅分支炒哂嘅而你又想 reset 你嘅 repo 返返去 remote repo 嘅話，你可以試下呢個嘅，但係記住你冇得還原架！

```git
# 囉返 origin 嘅最新版
git fetch origin
git checkout master
git reset --hard origin/master
# 剷咗冇 track 到嘅快勞同 folder
git clean -d --force
# 為咗每個冇希望嘅 branch 重覆 checkout/reset/clean
```
