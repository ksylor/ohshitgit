---
tags: tip
title: Chết tiệt, tôi cần hoàn nguyên thay đổi ở một tập tin!
id: undo-a-file
order: 8
---

```git
# tìm hash cho commit trước khi tập tin được thay đổi
git log
# dùng phím mũi tên để di chuyển lên xuống trong lịch sử
# một khi bạn đã tìm ra commit đấy, lưu hash của nó lại
git checkout [saved hash] -- đường/dẫn/tới/tập/tin
# phiên bản cũ của tập tin sẽ nằm trong chỉ mục của bạn
git commit -m "Ồ, bạn không cần phải sao chép-dán để hoàn nguyên nữa"
```

Cuối cùng khi tôi tìm ra điều này. Nó thật là TO LỚN. VĨ ĐẠI. V-Ĩ-Đ-Ạ-I. Nhưng nghiêm túc mà nói thì cái quái gì khiến `checkout --` có ý nghĩa hơn là cách tốt nhất để hoàn nguyên thay đổi ở một tập tin? :shakes-fist-at-linus-torvalds:
