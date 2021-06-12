---
tags: tip
title: 哎呦我去，我剛提交 commit 就發現還有一個小改動需要添加！
id: change-last-commit
order: 2
---

```git
# 繼續改動你的文件
git add . # 或者你可以添加指定的文件
git commit --amend --no-edit
# 你這次的改動會被添加進最近一次的 commit 中
# 警告：千萬別對公共的 commit 做這種操作
```

這經常發生在我提交了 commit 以後立馬發現，媽蛋，我忘了在某個等號後面加空格了。當然，你也可以提交一個新的 commit 然後利用 `rebase -i` 命令來合併它們，但我覺得我的這種方式比你快 100 萬倍。

*警告：千萬不要在已推送的公共分支上做這個 amend 的操作！只能在你本地 commit 上做這種修改，否則你會把事情搞砸的！*
