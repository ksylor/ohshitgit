---
tags: tip
title: Chết tiệt, tôi lỡ commit lên master thứ mà tôi nên để ở một branch mới!
id: accidental-commit-master
order: 4
---

```git
# tạo một branch mới từ trạng thái của nhánh master hiện tại
git branch some-new-branch-name
# xoá commit cuối cùng từ nhánh master
git reset HEAD~ --hard
git checkout some-new-branch-name
# commit của bạn đang ở nhánh mới rồi :)
```

Lưu ý: điều này không hoạt động nếu bạn đã đẩy commit lên nhánh công khai hoặc nhánh dùng chung và nếu bạn đã thử những thứ khác trước rồi thì bạn cần `git reset HEAD@{number-of-commits-back}` thay vì `HEAD~`. Nỗi buồn vô tận. Ngoài ra, rất rất rất nhiều người gợi ý một cách làm tuyệt vời khác ngắn hơn mà tôi không biết. Cảm ơn tất cả các bạn!
