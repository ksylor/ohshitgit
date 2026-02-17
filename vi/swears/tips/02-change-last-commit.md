---
tags: tip
title: Thôi chết mẹ, tôi commit rồi nhưng liền nhận ra tôi cần phải thay đổi thêm một chút nữa!
id: change-last-commit
order: 2
---

```git
# Bạn cứ thêm sửa đổi của mình vào
# hoặc cứ sửa tiếp mấy file mà mình cần sửa
git add .
# Sau đó bạn dùng lệnh này
git commit --amend --no-edit
# Giờ thì sửa đổi bên trên đã nằm trong commit cuối của bạn luôn rồi đó!
# CẢNH BÁO: đừng bao giờ amend vào commit công cộng nhé
```

Chuyện này hay xảy ra với tôi kiểu là tôi commit rồi nhé, sau đó chạy lệnh test/lint... rồi thôi CĐCMM, hóa ra tôi lại quên đặt khoảng trắng đằng sau một dấu bằng. Đương nhiên ta cũng có thể commit sửa đổi mới lên rồi chạy lệnh `rebase -i` để ép dẹp chúng nó lại với nhau, nhưng mà làm theo cách tôi ghi bên trên thì lẹ hơn nhiều, hơn cả triệu lần là ít.

****Chú ý:*** Bạn đừng có bao giờ amend vào mấy commit đã được đẩy lên nhánh công cộng/chia sẻ nhé! Chỉ nên amend vào mấy commit ở repo cục bộ của bạn thôi, kẻo rách việc đấy.*