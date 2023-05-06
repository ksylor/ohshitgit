---
tags: tip
title: 糟糕，我不小心 commit 到錯誤的分支了！
id: commit到錯的分支
order: 5
---

```git
# 取消最新的 commit，但是保留所作更動
git reset HEAD~ --soft
git stash
# 切換到正確的分支
git checkout name-of-the-correct-branch
git stash pop
git add . # 或是添加指定檔案
git commit -m "your message here";
# 現在，你的更新就在正確的分支上了！
```

很多人建議我在這種情況下也可以使用 `cherry-pick`，你可以挑一個你喜歡的方法！

```git
git checkout name-of-the-correct-branch
# 擷取 master 上最新的 commit
git cherry-pick master
# 在 master 上刪除它
git checkout master
git reset HEAD~ --hard
```