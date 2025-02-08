---
tags: tip
title: 噢，糟了，我想用 diff 命令看下改動內容，但啥都沒看到？！
id: dude-wheres-my-diff
order: 6
---

如果對文件做了改動，但是通過 `diff` 命令卻看不到，那很可能是你執行過 `add` 命令將文件改動添加到了 `暫存區` 了。你需要添加下面這個參數。

```git
git diff --staged
```

這些文件在這裡&macr;\\\_(ツ)\_/&macr; (是的，我知道這是一個 feature 而不是 bug，但它第一次發生在作為初學者的你身上時，真的很讓人困惑！)
