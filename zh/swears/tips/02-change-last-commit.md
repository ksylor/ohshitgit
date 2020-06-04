---
tags: tip
title: 哎呦我去，我刚提交 commit 就发现还有一个小改动需要添加！
id: change-last-commit
order: 2
---

```git
# 继续你的文件改动
git add . # 或者你可以添加指定的文件
git commit --amend --no-edit
# 你这次的改动也被添加进最后一次的 commit 中啦
# 警告: 千万别对公共的 commit 做这种操作
```

这经常发生在我提交了 commit 以后立马发现，妈蛋，我忘了在某个等号后面加空格了。当然，你也可以提交一个新的 commit 然后利用 `rebase -i` 命令来合并它们，但我觉得我的这种方式比你快 100 万倍。

*警告: 你千万不要在已推送的公共分支上做这个 amend 的操作! 只能在你本地 commit 上做这种修改，否则你会把事情搞砸的！*