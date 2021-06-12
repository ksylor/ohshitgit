---
tags: tip
title: 死喇，commit 咗先至記得起我要 commit 去個新嘅 branch 添！
id: accidental-commit-master
order: 4
---

```git
# 根據而家 master 嘅情況嚟整個新嘅 branch
git branch some-new-branch-name
# 喺 master 度剷走頭先啲 commit
git reset HEAD~ --hard
git checkout some-new-branch-name
# 你嘅 commit 而家喺呢個 branch 度lyu~ :)
```

註：如果你 push 咗去個公開／分享咗嘅 branch 度，或者你又試過其他嘢嘅話，你可能要行 `git reset HEAD@{幾多個 commit 前嘅數量}}` 而唔係 `HEAD~`。失望無限。仲有，勁多勁多人建議咗一個我早排唔知而短好多、正好多嘅方案。唔該哂！
