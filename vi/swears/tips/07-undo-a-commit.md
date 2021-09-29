---
tags: tip
title: Chết tiệt, tôi cần hoàn nguyên một commit trước đó 5 commit!
id: undo-a-commit
order: 7
---

```git
# tìm commit bạn muốn hoàn nguyên
git log
# dùng các phím mũi tên để di chuyển lên xuống trong lịch sử
# một khi bạn đã tìm ra commit đấy, lưu hash của nó lại
git revert [saved hash]
# git sẽ tạo một commit mới để hoàn nguyên commit đó
# làm theo hướng dẫn để sửa nội dung tin nhắn commit
# hoặc chỉ lưu và commit
```

Hoá ra là bạn không cần phải theo dõi và sao chép-dán nội dung của tập tin cũ vào trong tập tin đang có để hoàn nguyên thay đổi! Nếu bạn đã commit một lỗi, bạn có thể xoá hoàn toàn commit đó với `revert`.

Bạn còn có thể khôi phục một tập tin thay vì toàn bộ commit! Nhưng tất nhiên, theo phong cách của git, đây là một chuỗi các câu lệnh hoàn toàn khác...
