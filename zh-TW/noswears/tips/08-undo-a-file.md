---
tags: tip
title: 噢，糟了，我想撤回某一個文件的改動！
id: undo-a-file
order: 8
---

```git
# 找到文件改動前的那個 commit
git log
# 如果在第一屏沒找到你需要的那個 commit，可以用上下
# 箭頭來滾動顯示的內容，找到了以後記下 commit 的 
# hash 值
git checkout [剛才記下的那個 hash 值] -- path/to/file
# 改動前的文件會保存到你的暫存區
git commit -m "這樣就不需要通過複製貼上來撤回改動啦"
```

我花了好長好長時間才搞明白要這麼做。說真的，用 `checkout --` 來撤回一個文件的改動，這真是太奇葩了?! :向 Linus Torvalds 擺出抗議姿勢: