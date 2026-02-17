---
tags: tip
title: Thôi chết mẹ, tôi lỡ tay commit lên nhầm nhánh!
id: accidental-commit-wrong-branch
order: 5
---

```git
# Hoàn tác commit cuối, nhưng vẫn chừa lại nội dung sửa đổi để còn dùng
git reset HEAD~ --soft
git stash
# Chuyển sang nhánh đúng
git checkout tên-của-cái-nhánh-đúng
git stash pop
# Thêm hết file hoặc thêm từng file một
git add .
git commit -m "Viết thông điệp của bạn vào đây";
# Giờ nội dung sửa đổi của bạn nằm trên đúng nhánh rồi đó
```

Rất nhiều người đã có kiến nghị sử dụng `cherry-pick` để giải quyết tình huống này nữa, cả hai cách đều dùng được cả, nên bạn thấy cách nào hợp lý thì bạn hãy chọn cái cách đó nhé!

```git
git checkout tên-của-cái-nhánh-đúng
# Tóm cái commit cuối trong master ra
git cherry-pick master
# Rồi xóa nó khỏi master
git checkout master
git reset HEAD~ --hard
```