---
tags: tip
title: Thôi xong rồi, tôi gây ra chuyện kinh khủng quá rồi, git ơi quay ngược lại thời gian được không làm ơn đi mà!?!

id: magic-time-machine
order: 1
---

```git
git reflog
# Lệnh này sẽ liệt kê hết tất cả những gì mà bạn đã làm
# trong git ra cho bạn xem, xuyên suốt mọi nhánh luôn!
# Mỗi cái đều sẽ mang một index có dạng HEAD@{số index}
# Tìm cái commit trước khi bị toang, chép cái số index của nó,
# rồi chạy lệnh:
git reset HEAD@{số index của commit mà bạn vừa tìm thấy}
# Thấy ghê chưa, khác gì cỗ máy thời gian đâu
```

Bạn có thể dùng phương pháp này để lấy lại những thứ mình lỡ tay xóa mất, loại bỏ những điều bạn có thử mà làm hỏng mất repo, hay để khôi phục lại sau khi merge sai, hay chỉ đơn giản là quay trở lại thời điểm khi mọi thứ vẫn còn chạy tốt. Tôi xài `reflog` nhiều ghê lắm. Xin ngả mũ đội ơn cực cực cực kì nhiều người đã mách cho tôi phương pháp này!