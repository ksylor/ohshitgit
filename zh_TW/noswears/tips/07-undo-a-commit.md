---
tags: tip
title: 噢，糟了，我想撤回一個很早以前的 commit！
id: undo-a-commit
order: 7
---

```git
# 先找到你想撤銷的那個 commit
git log
# 如果在第一屏沒找到你需要的那個 commit，可以用上下
# 箭頭來滾動顯示的內容，找到了以後記下 commit 的
# hash 值
git revert [剛才記下的那個 hash 值]
# git 會自動修改文件來抵消那次 commit 的改動，並創
# 建一個新的 commit，你可以根據提示修改這個新 commit
# 的信息，或者直接保存就完事了
```

這樣你就不需要用回溯老版本然後再覆製粘貼的方式了，那樣做太費事了！如果你提交的某個 commit 導致了 bug，你直接用 `revert` 命令來撤回那次提交就行啦。

你甚至可以恢復單個文件而不是一整個 commit！但那是另一套 git 命令咯……
