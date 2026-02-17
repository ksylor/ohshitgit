---
tags: tip
title: 糟糕，我忘記切換新分支，直接 commit 到 master 了！
id: commit到master了
order: 4
---

```git
# 在被你更新過的 master 開啟一個新的分支
git branch some-new-branch-name
# 在 master 分支上移除你最新的 commit，然後切換到新的分支
git reset HEAD~ --hard
git checkout some-new-branch-name
# 現在你的 commit 只會出現在新分支上 :)
```

注意：如果你已經將你的 commit 上傳到遠端公開分支，這個方法就沒有用了。另外，如果你已經提交過其他的 commit，你可能需要使用 `git reset HEAD@{number-of-commits-back}` 來取代 `HEAD~`。非常感謝大家推薦這個連我都不知道的超棒簡短指令，謝謝各位！