---
tags: tip
title: Git 氣呀，我做咗件好大齋嘅事，你千祈唔好同我講 git 冇個時光機呀！
id: magic-time-machine
order: 1
---

```git
git reflog
# 你會見到一個 list 包含哂你喺所有分支做過嘅事。
# 每一件事都會有個　index HEAD@{index}。
# 搵個出事之前嘅 index 啦。
git reset HEAD@{index}
# 魔法時光機
```

噉，你就可以還原返你唔小心剷過嘅嘢呀，或者齋去刪除啲整爛咗個 repo 嘅嘢呀，或者修復一個壞 merge，或者去返一個冇問題嘅時間。我用過 `reflog` 好多次喇。好多好多人叫我加呢個架！
