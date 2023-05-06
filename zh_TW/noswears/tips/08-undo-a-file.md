---
tags: tip
title: 糟糕，我想要回復一個檔案！
id: 回復檔案
order: 8
---

```git
# 找到該檔案更動前的 commit
git log
# 利用鍵盤上下鍵來查閱歷史紀錄
# 一旦你找到了該 commit，記下它的 hash 值
git checkout [剛剛記下的 hash 值] -- path/to/file
# 舊的版本會被存放到暫存區
git commit -m "Wow, you don't have to copy-paste to undo"
```

我花了超多時間才知道這個方法。超·級·多。說真的，到底為什麼 `checkout --` 是用來回復檔案的方法？（Linus Torvalds 你到底在幹嘛）