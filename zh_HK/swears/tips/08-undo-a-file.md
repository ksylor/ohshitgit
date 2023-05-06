---
tags: tip
title: 屌你老尾，我要還原一個檔案嘅更改！
id: undo-a-file
order: 8
---

```git
# 揾返個未有個更改嘅 commit 嘅 hash
git log
# 用箭咀掣嚟上下郁
# 揾到就儲起佢
git checkout [saved hash] -- path/to/file
# 舊版嘅檔案依家就係你嘅 index 度
git commit -m "Wow, you don't have to copy-paste to undo"
```

當我終於揾到點做嗰陣，我已經用咗好耐。勁耐。超耐。但係講真，點解 `checkout --` 先係最正嘅還原指令？真係令人百思不得其解。 :同-linus-torvalds-抗議:
