---
tags: tip
title: 妖！我 commit 咗跟住即刻發覺我要改啲嘢呀！
id: change-last-commit
order: 2
---

```git
# 改咗你啲嘢先
git add . # 或者檔案一個一個噉加
git commit --amend --no-edit
# 而家你上一個 commit 有齊哂你啲更改喇！
# 警告：千祈唔好 amend 啲公開咗嘅 commit。
```

通常我 commit 咗，跟住行啲測試／linters……先發覺我唔記得係個等號之後加個空格。呢個就可以派上用埸喇。你可以整個新 commit 再行 `rebase -i` 嚟合拼佢哋，但係上面嗰個方案快好多。

*警告：千祈唔好 amend 啲 push 咗而公開咗或者分享咗嘅 commits！淨係好加落去你自己 local 嘅吓，噉做頂多係搵自己笨啫！*
