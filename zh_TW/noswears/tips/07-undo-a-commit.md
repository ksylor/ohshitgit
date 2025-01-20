---
tags: tip
title: 糟糕，我想要取消大約五個以前的 commit！
id: 取消commit
order: 7
---

```git
# 找到你想要取消的 commit
git log
# 利用鍵盤上下鍵來查閱歷史紀錄
# 一旦你找到了該 commit，記下它的 hash 值
git revert [剛剛記下的 hash 值]
# git 會新增一個 commit 來復原該 commit
# 根據提示來修改你的 commit 訊息
# 或是直接儲存然後 commit
```

其實你不需要找出舊的檔案然後靠複製貼上來還原更動！如果你的 commit 造成 bug，你可以方便地利用 `revert` 來復原。

除了回復整個 commit 之外，你也可以回復單一檔案！當然，這又是另外的一些指令...
