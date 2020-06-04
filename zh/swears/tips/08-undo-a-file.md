---
tags: tip
title: 哎呦我去，我想撤回某一个文件的改动！
id: undo-a-file
order: 8
---

```git
# 找到文件改动前的那个 commit
git log
# 如果在第一屏没找到你需要的那个 commit，可以用上下
# 箭头来滚动显示的内容，找到了以后记下 commit 的 
# hash 值
git checkout [刚才记下的那个 hash 值] -- path/to/file
# 老版本的文件会保存到你的暂存区
git commit -m "这样就不需要通过复制粘贴来撤回改动啦"
```

我花了好长好长，真他妈长的时间才搞明白要这么做。说真的，用 `checkout --` 来撤回一个文件的改动，这到底算什么鬼方式啊?! :向 Linus Torvalds 摆出抗议姿势:
