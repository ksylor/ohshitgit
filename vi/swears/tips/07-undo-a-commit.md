---
tags: tip
title: Thôi chết mẹ, tôi cần hoàn tác một commit từ mấy lượt commit trước đây lận!
id: undo-a-commit
order: 7
---

```git
# Tìm cái commit mà bạn cần hoàn tác
git log
# Sử dụng các phím mũi tên để cuộn lên với xuống trong lịch sử,
# một khi bạn đã tìm ra commit mình cần, ghi nhớ lại chuỗi hash của nó
git revert [chuỗi hash mà bạn đã ghi nhớ]
# Git sẽ tạo ra một commit mới để hoàn tác cái commit kia,
# làm theo chỉ dẫn để sửa thông điệp commit cho nó
# hoặc cứ lưu lại như mặc định rồi commit thôi.
```

Hóa ra bạn chả cần phải tự lần mò rồi cóp-dán nội dung file cũ vào file hiện tại để hoàn tác thay đổi chi cho mệt người! Nếu bạn có lỡ commit một con bug, bạn có thể hoàn tác commit đấy nhanh gọn lẹ bằng mỗi lệnh `revert` là xong.

Thậm chí bạn còn có thể hoàn lại một file đơn thay vì hoàn cả một commit luôn! Nhưng mà tất nhiên là theo đúng với cái cách làm trời đánh của git, đó là phải dùng một bộ các câu lệnh hoàn toàn khác biệt với cái này...