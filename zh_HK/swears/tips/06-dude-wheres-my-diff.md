---
tags: tip
title: 吓，我行咗個 diff 但係 git 乜都冇做？
id: dude-wheres-my-diff
order: 6
---

如果你編輯過啲檔案但係 `diff` 係空嘅話，你大概要加你啲檔案去 staging 跟住再用個特別嘅 flag。

```git
git diff --staged
```

檔案喺 &macr;\\\_(ツ)\_/&macr; （冇錯，我知呢個係個功能，唔係個 bug，但係第一次見到嘅話就真係令人無厘頭架！）
