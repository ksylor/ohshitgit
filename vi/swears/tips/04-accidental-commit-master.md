---
tags: tip
title: Thôi chết mẹ, cái này phải lên nhánh mới mới đúng nhưng tôi lỡ tay commit lên master mất rồi!
id: accidental-commit-master
order: 4
---

```git
# Tạo một nhánh mới từ trạng thái hiện hành của nhánh master
git branch tên-của-nhánh-mới-nào-đó
# Gỡ bỏ commit cuối ra khỏi nhánh master
git reset HEAD~ --hard
git checkout tên-của-nhánh-mới-nào-đó
# Giờ commit của bạn nằm trên cái nhánh mới này rồi đó :)
```

**Chú ý:** Nếu như bạn đã đẩy commit đấy lên nhánh công cộng rồi thì phương pháp này không áp dụng được đâu, và nếu như bạn có thử vọc vạch gì đó trước rồi, thì có lẽ bạn cần phải chạy lệnh `git reset HEAD@{số-index-của-cái-commit-sai-nhánh}` thay cho `HEAD~`. Khốn khổ khốn nạn lắm thay. Ngoài ra, cực kì nhiều người đã chỉ bảo tôi cái cách vô cùng tài tình để làm cho cái quá trình này ngắn gọn hơn mà bản thân tôi chẳng hề biết tới luôn. Cảm tạ mọi người ạ!