---
tags: tip
title: 糟糕，我提交（commit）之後馬上發現我還想要做一個小改動！
id: 更改最新的commit
order: 2
---

```git
# 修改你想改動的地方
git add . # 或是添加指定檔案
git commit --amend --no-edit
# 這樣一來，你最後一次的 commit 就會包含到你的改動！
# 警告： 千萬不要對公開的 commits 做修改
```

這通常發生在我已經 commit 完，執行測試/linters 來檢查程式品質的時候...哦，我忘記在等號後面加上空格了。你當然也可以將改動提交到新的 commit，再利用 `rebase -i` 來合併它們，但這個方法可以快一百萬倍。

*警告：千萬不要修改已經被 push 到公開分支的 commits！只可以修改本機上的的 commits，否則你會搞砸事情的。 