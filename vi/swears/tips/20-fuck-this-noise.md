---
tags: tip
title: Tiên sư bố chúng mày, tao bỏ cuộc.
id: fuck-this-noise
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r thư-mục-git-repo-chết-băm
git clone https://cái-gì-đó.github.url/thư-mục-git-repo-chết-băm.git
cd thư-mục-git-repo-chết-băm
```

Xin cảm ơn Eric V. đã đề xuất cái này. Nếu có khúc mắc gì về cái chỗ `sudo` thì cứ đè cậu ấy ra mà hỏi nha.

Thôi không giỡn nữa, đàng hoàng đây, nếu cái nhánh của bạn nó nátttt lắmmmm rồi, đến độ bạn cần phải reset trạng thái repo của mình về cho "đúng" và "phải lệ" với cái remote repo, hãy thử cách dưới này xem, nhưng mà mấy thao tác dưới đây đều mang tính phá hủy và không thể đảo ngược cho nên hãy coi chừng đó!

```git
# Lấy trạng thái mới nhất từ origin
git fetch origin
git checkout master
git reset --hard origin/master
# Xóa hết mấy file và thư mục chưa được track đi
git clean -d --force
# Lặp lại quá trình checkout/reset/clean cho mỗi nhánh bị hư hỏng
```