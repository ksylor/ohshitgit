---
tags: tip
title: 哎吖，唔小心 commit 咗去錯嘅 branch 度添！
id: accidental-commit-wrong-branch
order: 5
---

```git
# undo 返上一個 commit，但係保持改咗嘅嘢
git reset HEAD~ --soft
git stash
# 去返啱嘅 branch
git checkout name-of-the-correct-branch
git stash pop
git add . # 或者逐個快撈噉加
git commit -m "你嘅訊息";
# 而家你改咗嘅嘢喺返啱嘅 branch
```

好多用建議用 `cherry-pick`，所以揀返你鐘意嘅方法啦！

```git
git checkout name-of-the-correct-branch
# 攞返上個 commit 畀 master
git cherry-pick master
# 喺 master 度剷咗佢
git checkout master
git reset HEAD~ --hard
```
