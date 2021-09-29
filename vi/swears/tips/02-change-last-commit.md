---
tags: tip
title: Chết tiệt, tôi commit và lập tức nhận ra mình cần một thay đổi nhỏ!
id: change-last-commit
order: 2
---

```git
# make your change
git add . # hoặc thêm các file cá nhân
git commit --amend --no-edit
# giờ thì commit cuối cùng của bạn sẽ bao gồm sự thay đổi kia!
# CHÚ Ý: đừng bao giờ gộp các commit công khai
```

Điều này thường xuyên xảy ra khi tôi commit, sau đó là chạy tests/linters... và FML. Tôi không hề đặt dấu cách sau dấu bằng. Bạn cũng có thể thực hiện thay đổi dưới dạng commit mới và sau đó dùng `rebase -i` để gộp chúng với nhau nhưng cách này nhanh hơn hàng triệu lần.

*Cảnh báo: Bạn đừng nên gộp các commit được đẩy lên một nhánh công khai/chung! Chỉ gộp các commit tồn tại trong bảo sao cục bộ nếu không thì bạn sẽ có một khoảng thời gian tồi tệ.*
