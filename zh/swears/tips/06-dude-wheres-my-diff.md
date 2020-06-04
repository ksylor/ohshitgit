---
tags: tip
title: 哎呦我去，我想用 diff 命令看下改动内容，但啥都没看到?!
id: dude-wheres-my-diff
order: 6
---

如果对文件做了改动，但是通过 `diff` 命令缺看不到，那很可能是你执行过 `add` 命令将文件改动添加到 `暂存区` 了。你需要添加下面这个参数。

```git
git diff --staged
```

这些文件在这里 &macr;\\\_(ツ)\_/&macr; (是的，我知道这是一个 feature 而不是 bug，但它第一次发生在作为初学者的你身上时，真的很让人困惑！)
