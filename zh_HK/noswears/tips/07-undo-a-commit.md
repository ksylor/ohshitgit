---
tags: tip
title: 撞邪，我要還原五個 commit 前嘅 commit 呀！
id: undo-a-commit
order: 7
---

```git
# 揾返個 commit
git log
# 用箭咀掣嚟滾動個頁面
# 揾到就記低個 hash
git revert [個 hash]
# git 會裝個新 commit 嚟還原佢
# 跟住指示嚟改個 commit 訊息 
# 或者直接儲存同 commit
```

原來你唔使揾返同 copy and paste 啲舊檔內容架！你用返 `revert` 就得架喇！

你都可以還原齋一個檔案而唔係成個 commit 嘅！但係喺 git 嘅邏輯下，呢個要完全唔同嘅指令……
