---
tags: tip
title: 哎呦我去，我想撤回一个很早以前的 commit！
id: undo-a-commit
order: 7
---

```git
# 先找到你想撤销的那个 commit
git log
# 如果在第一屏没找到你需要的那个 commit，可以用上下
# 箭头来滚动显示的内容，找到了以后记下 commit 的 
# hash 值
git revert [刚才记下的那个 hash 值]
# git 会自动修改文件来抵消那次 commit 的改动，并创
# 建一个新的 commit，你可以根据提示修改这个新 commit
# 的信息，或者直接保存就完事了
```

这样你就不需要用回溯老版本然后复制粘贴的方式来恢复文件内容，那样做太费事了！如果你提交的某个 commit 导致了 bug，你直接用 `revert` 命令来撤回那次提交就行啦。

你甚至可以恢复单个文件而不是一整个 commit！但那是另一套 git 命令了...
