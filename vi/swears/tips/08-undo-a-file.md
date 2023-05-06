---
tags: tip
title: Thôi chết mẹ, tôi cần hoàn tác thay đổi của tôi trong một file!
id: undo-a-file
order: 8
---

```git
# Tìm cái chuỗi hash của cái commit trước khi file đấy bị thay đổi 
git log
# Sử dụng các phím mũi tên để cuộn lên với xuống trong lịch sử,
# một khi bạn đã tìm ra commit mình cần, ghi nhớ lại chuỗi hash của nó
git checkout [chuỗi hash mà bạn đã ghi nhớ] -- đường/dẫn/tới/file
# Phiên bản cũ của file đấy sẽ nằm trong staging của bạn
git commit -m "Chu choa, không cóp-dán mà vẫn hoàn tác được nè"
```

Khi tôi mãi mới tìm ra được cách này thì nó VĨ ĐẠI, VĨ ĐẠII, VĨ ĐẠIII LẮMMMM. Nhưng mà nói thiệt chứ, thế đéo nào trên đời này cái lệnh `checkout --` lại có thể dùng để hoàn tác file hả, ông nội nào nghĩ ra cái trò này vậy hả? `:dứ-nắm-đấm-về-phía-linus-torvalds:`
