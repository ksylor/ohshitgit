---
tags: tip
title: Chết tiệt, tôi lỡ commit nhầm nhánh!
id: accidental-commit-wrong-branch
order: 5
---

```git
# xoá commit cuối nhưng giữ lại phần thay đổi
git reset HEAD~ --soft
git stash
# dời phần thay đổi tới đúng nhánh
git checkout name-of-the-correct-branch
git stash pop
git add . # or add individual files
git commit -m "your message here";
# giờ thì các thay đổi của bạn đã ở đúng nhánh
```

Nhiều người gợi ý dùng `cherry-pick` trong trường hợp này, vậy nên lấy bất kỳ thứ gì cần thiết với bạn!

```git
git checkout name-of-the-correct-branch
# lấy commit cuối từ nhánh master
git cherry-pick master
# xoá nó khỏi nhánh master
git checkout master
git reset HEAD~ --hard
```
