---
tags: tip
title: 噢，糟了，我把这个 commit 提交错分支了！
id: accidental-commit-wrong-branch
order: 5
---

```git
# 撤回这次提交，但保留改动的内容
git reset HEAD~ --soft
git stash
# 现在切到正确的那个分支去
git checkout name-of-the-correct-branch
git stash pop
git add . # 或者你可以添加指定的文件
git commit -m "your message here";
# 现在你的改动就在正确的分支上啦
```

很多人建议使用 `cherry-pick` 来解决这个问题，其实两者都可以，你只要选择自己喜欢的方式就行了。

```git
git checkout name-of-the-correct-branch
# 抓取 master 分支上最新的那个 commit
git cherry-pick master
# 然后删掉 master 上的那个 commit
git checkout master
git reset HEAD~ --hard
```