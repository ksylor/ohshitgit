---
tags: tip
title: Tầm phào. Tôi bỏ cuộc.
id: fuck-this-noise
note: đây nên luôn là thứ cuối cùng trong danh sách nên tôi để thứ tự số 20 để không phải đổi tên hay đổi số thứ tự cho nó
order: 20
---

```git
cd ..
sudo rm -r fucking-git-repo-dir
git clone https://some.github.url/fucking-git-repo-dir.git
cd fucking-git-repo-dir
```

Cảm ơn Eric V. vì điều này. Tất cả những phàn nàn về việc sử dụng `sudo` trong trò đùa này đều hướng về anh ấy.


Mặc dù vậy, trên thực tế, nếu nhánh của bạn bị hỏng đến mức bạn cần phải khôi phục lại trạng thái của repo của mình giống với repo từ xa theo cách "được git phê duyệt", hãy thử cách này, nhưng cẩn thận đây là những hành động phá hoại và không thể khôi phục!

```git
# lấy trạng thái mới nhất của origin
git fetch origin
git checkout master
git reset --hard origin/master
# xóa những tập tin và thư mục không được theo dõi
git clean -d --force
# lặp lại checkout/reset/clean cho mỗi nhánh bị hỏng
```
