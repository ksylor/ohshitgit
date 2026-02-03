---
tags: tip
title: 噢，糟了，我把這個 commit 提交錯分支了！
id: accidental-commit-wrong-branch
order: 5
---

```git
# 撤回這次提交，但保留改動的內容
git reset HEAD~ --soft
git stash
# 現在切到正確的那個分支去
git checkout name-of-the-correct-branch
git stash pop
git add . # 或者你可以添加指定的文件
git commit -m "your message here";
# 現在你的改動就在正確的分支上啦
```

很多人建議使用 `cherry-pick` 來解決這個問題，其實兩者都可以，你只要選擇自己喜歡的方式就行了。

```git
git checkout name-of-the-correct-branch
# 抓取 master 分支上最新的那個 commit
git cherry-pick master
# 然後刪掉 master 上的那個 commit
git checkout master
git reset HEAD~ --hard
```