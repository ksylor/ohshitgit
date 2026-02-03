---
tags: tip
title: 噢，糟了，我不小心把本應在新分支上提交的東西提交到了 master!
id: accidental-commit-master
order: 4
---

```git
# 基於當前 master 新建一個分支
git branch some-new-branch-name
# 在 master 上刪除最近的那次 commit
git reset HEAD~ --hard
git checkout some-new-branch-name
# 只有在這個新分支上才有你最近的那次 commit 哦
```

注意：如果你已將這個 commit 推送到了公共分支，那這波操作就不起作用了。如果你在此之前做了些其他的操作，那你可能需要使用 `HEAD@{number-of-commits-back}` 來替代 `HEAD~`。另外，感謝很多人提出了這個我自己都不知道的超棒的解決方法，謝謝大家！