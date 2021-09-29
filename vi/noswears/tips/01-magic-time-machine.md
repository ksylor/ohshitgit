---
tags: tip
title: Chết tiệt, tôi đã làm sai rồi, làm ơn cho tôi biết git có cỗ máy thời gian kỳ diệu không!?!
id: magic-time-machine
order: 1
---

```git
git reflog
# Bạn sẽ nhìn thấy một danh sách mọi thứ bạn đã
# thao tác trên git, trên tất cả các nhánh!
# mỗi thứ có một chỉ mục HEAD@{index}
# tìm chỉ mục trước vị trí bạn mắc lỗi
git reset HEAD@{index}
# cỗ máy thời gian kỳ diệu
```

Bạn có thế dùng nó để lấy lại những thứ bạn vô tình xoá hoặc chỉ xoá một vài thứ mà bạn thấy chúng làm hỏng repo hoặc khôi phục sau khi sáp nhập tệ hoặc chỉ quay về thời điểm mọi thứ vẫn còn hoạt động tốt. Tôi dùng `reflog` RẤT NHIỀU. Vô cùng cảm ơn rất rất rất rất rất nhiều người đã đề nghị thêm nó vào!
